"use client";
import { useState } from "react";

export default function IndustriasPage() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleCard = (cardName: string) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(cardName)) {
      newFlipped.delete(cardName);
    } else {
      newFlipped.add(cardName);
    }
    setFlippedCards(newFlipped);
  };

  const industries = [
    {
      name: "Salud y Bienestar",
      category: "Healthcare",
      description: "Experiencia en hospitales, clínicas, farmacias y dispositivos médicos con conocimiento regulatorio especializado.",
      backgroundSrc: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
      details: {
        services: ["Due diligence en M&A hospitalario", "Auditorías de compliance COFEPRIS", "Expansión de redes de clínicas", "Optimización de procesos médicos"],
        experience: ["3 hospitales privados adquiridos", "2 cadenas farmacéuticas expandidas", "5 dispositivos médicos importados", "Compliance con normas NOM-030"],
        regulations: ["COFEPRIS", "CONAMED", "NOM-030-SSA2", "Ley General de Salud"]
      }
    },
    {
      name: "Energía y Recursos",
      category: "Energy",
      description: "Petróleo, gas, energías renovables y minería con experiencia en marcos regulatorios complejos.",
      backgroundSrc: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&crop=center",
      details: {
        services: ["Estructuración de joint ventures", "Due diligence técnico y ambiental", "Obtención de permisos CNH/CRE", "Proyectos de energía solar"],
        experience: ["2 proyectos eólicos estructurados", "1 refinería en due diligence", "4 proyectos solares financiados", "Permisos mineros tramitados"],
        regulations: ["CNH", "CRE", "ASEA", "SEMARNAT"]
      }
    },
    {
      name: "Tecnología",
      category: "Technology",
      description: "Software, hardware, telecomunicaciones y transformación digital con enfoque en escalabilidad.",
      backgroundSrc: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
      details: {
        services: ["Valuación de empresas tech", "Expansión de software a México", "Due diligence tecnológico", "Estrategias de escalamiento"],
        experience: ["5 startups valuadas", "3 expansiones exitosas", "2 exits tecnológicos", "Implementación en Fortune 500"],
        regulations: ["LFPDPPP", "IFT", "Comercio electrónico", "Propiedad intelectual"]
      }
    },
    {
      name: "Manufactura",
      category: "Manufacturing",
      description: "Procesos industriales, automatización y cadenas de suministro en sectores tradicionales y avanzados.",
      backgroundSrc: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop&crop=center",
      details: {
        services: ["Optimización de cadena de suministro", "Implementación de Industry 4.0", "Relocación de plantas", "Integración post-M&A"],
        experience: ["4 plantas relocalizadas", "15% reducción de costos promedio", "2 automatizaciones completas", "Supply chain redesign"],
        regulations: ["IMMEX", "PROSEC", "T-MEC", "Normas de seguridad industrial"]
      }
    },
    {
      name: "Servicios Financieros",
      category: "Financial",
      description: "Banca, seguros, fintech y servicios de inversión con deep knowledge en regulación financiera mexicana.",
      backgroundSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=center",
      details: {
        services: ["Licencias bancarias y fintech", "Due diligence regulatorio", "Compliance y PLD", "Estructuras de inversión"],
        experience: ["2 licencias fintech obtenidas", "5 bancos en due diligence", "Compliance PLD implementado", "$500M USD estructurados"],
        regulations: ["CNBV", "CONDUSEF", "CNBV", "Ley PLD"]
      }
    },
    {
      name: "Retail y Consumo",
      category: "Retail",
      description: "Comercio tradicional, e-commerce, bienes de consumo y canales de distribución omnicanal.",
      backgroundSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
      details: {
        services: ["Expansión de retail físico", "Estrategias omnicanal", "Due diligence comercial", "Optimización de inventarios"],
        experience: ["50+ tiendas abiertas", "3 marcas internacionales", "E-commerce implementado", "Canales digitales integrados"],
        regulations: ["PROFECO", "Comercio electrónico", "Etiquetado", "Publicidad"]
      }
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-20 sm:pb-24 lg:pb-32">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] sm:leading-tight mb-4 sm:mb-6 w-full break-words">
          <span className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">Industrias</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-5 sm:leading-relaxed max-w-3xl mx-auto opacity-90">
          Experiencia especializada en sectores clave de la economía mexicana
        </p>
      </div>
      <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => {
          const isFlipped = flippedCards.has(industry.name);
          return (
            <div 
              key={industry.name} 
              className="relative min-h-[450px] sm:min-h-[500px] md:min-h-[550px] cursor-pointer perspective-1000"
              onClick={() => toggleCard(industry.name)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full group">
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={industry.backgroundSrc}
                        alt={`${industry.name} industry background`}
                        className="w-full h-full object-cover object-center opacity-15 group-hover:opacity-25 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-end">
                      <div className="text-center space-y-3 sm:space-y-4">
                        <div>
                          <div className="text-xs sm:text-sm text-brand-dark font-semibold mb-2">{industry.category}</div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            {industry.name}
                          </h3>
                          <div className="w-16 h-1 bg-gradient-to-tl from-brand-dark to-brand-medium mx-auto mb-4 rounded-full"></div>
                          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-sm mx-auto">
                            {industry.description}
                          </p>
                          <div className="mt-4 text-xs text-brand-medium font-semibold">
                            Haz clic para ver más detalles
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light rounded-2xl border border-gray-200 overflow-hidden h-full text-white">
                    <div className="p-6 sm:p-8 md:p-10 h-full flex flex-col">
                      <div className="text-center mb-6">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                          {industry.name}
                        </h3>
                        <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
                      </div>
                      
                      <div className="flex-1 space-y-4 text-sm sm:text-base">
                        <div>
                          <h4 className="font-bold mb-2">Servicios:</h4>
                          <ul className="space-y-1">
                            {industry.details.services.map((service, idx) => (
                              <li key={idx} className="text-white/90">• {service}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-2">Experiencia:</h4>
                          <ul className="space-y-1">
                            {industry.details.experience.map((exp, idx) => (
                              <li key={idx} className="text-white/90">• {exp}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-2">Marco regulatorio:</h4>
                          <div className="flex flex-wrap gap-1">
                            {industry.details.regulations.map((reg, idx) => (
                              <span key={idx} className="bg-white/20 px-2 py-1 rounded text-xs">
                                {reg}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mt-4 text-xs font-semibold">
                        Haz clic para volver
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


