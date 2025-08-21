'use client';

import { World, GlobeConfig } from '@/components/ui/globe';
import { useState } from 'react';
import { trackGlobeInteraction } from '@/lib/analytics';

export default function Globe() {

  const globeConfig: GlobeConfig = {
    pointSize: 4,
    globeColor: "#255465", // Azul petróleo oscuro
    showAtmosphere: true,
    atmosphereColor: "#68AEC8", // Azul cielo medio
    atmosphereAltitude: 0.15,
    emissive: "#255465", // Azul petróleo oscuro
    emissiveIntensity: 0.2,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.9)",
    ambientLight: "#68AEC8", // Azul cielo medio
    directionalLeftLight: "#B3D7E3", // Azul claro pastel
    directionalTopLight: "#E1EFF4", // Azul muy pálido
    pointLight: "#255465", // Azul petróleo oscuro
    arcTime: 800,
    arcLength: 0.8,
    rings: 3,
    maxRings: 5,
    initialPosition: { lat: 30.0, lng: -30.0 }, // Centrado en el Atlántico Norte
    autoRotate: true,
    autoRotateSpeed: 0.3,
  };

  // Morado espacial para los targets y conexiones
  const spaceColors = ["#8B5CF6", "#A855F7", "#9333EA", "#7C3AED"]; // Morados espaciales
  
  // Un target principal por país
  const MADRID = { lat: 40.4168, lng: -3.7038 };     // España
  const MEXICO_CITY = { lat: 19.4326, lng: -99.1332 }; // México  
  const NEW_YORK = { lat: 40.7128, lng: -74.0060 };    // USA
  
  // Conexiones que cruzan todo el globo con altitudes altas
  const targetCountriesArcs = [
    // España ↔ México (cruzando el Atlántico)
    {
      order: 1,
      startLat: MADRID.lat,
      startLng: MADRID.lng,
      endLat: MEXICO_CITY.lat,
      endLng: MEXICO_CITY.lng,
      arcAlt: 0.6, // Muy alto para cruzar el globo
      color: "#ffffff", // Blanco puro
    },
    // México ↔ USA (conexión continental)
    {
      order: 2,
      startLat: MEXICO_CITY.lat,
      startLng: MEXICO_CITY.lng,
      endLat: NEW_YORK.lat,
      endLng: NEW_YORK.lng,
      arcAlt: 0.4, // Moderado
      color: "#ffffff", // Blanco puro
    },
    // España ↔ USA (cruzando todo el Atlántico)
    {
      order: 3,
      startLat: MADRID.lat,
      startLng: MADRID.lng,
      endLat: NEW_YORK.lat,
      endLng: NEW_YORK.lng,
      arcAlt: 0.8, // Muy alto para cruzar todo el globo
      color: "#ffffff", // Blanco puro
    },
  ];

  return (
    <>
      {/* Desktop Globe */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1000px] xl:w-[1200px] h-[1000px] xl:h-[1200px] translate-x-1/4 xl:translate-x-1/3 overflow-hidden opacity-80">
        <div className="w-full h-full relative">
          <div className="absolute w-full h-full">
            <World 
              data={targetCountriesArcs} 
              globeConfig={globeConfig}
            />
          </div>
          
          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-white text-xs space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <span>Ciudades objetivo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-1 bg-white rounded"></div>
                <span>Conexiones estratégicas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Globe */}
      <div className="hidden md:block lg:hidden absolute -right-32 top-1/2 -translate-y-1/2 w-[800px] h-[800px] overflow-hidden opacity-60">
        <div className="w-full h-full relative">
          <div className="absolute w-full h-full">
            <World 
              data={targetCountriesArcs} 
              globeConfig={globeConfig}
            />
          </div>
        </div>
      </div>

      {/* Mobile - No Globe, just background gradient */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-br from-brand-light/30 via-brand-pale/30 to-brand-medium/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,84,101,0.1),transparent_70%)]" />
      </div>
    </>
  );
}