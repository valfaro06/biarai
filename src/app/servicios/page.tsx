"use client";
import { useState } from "react";
import Link from "next/link";

export default function ServiciosPage() {
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

  const services = [
    {
      name: "Deal Advisory",
      category: "Inversiones",
      description: "Servicios especializados en M&A, valuaciones, due diligence y estructuración de transacciones para maximizar el valor de tu inversión.",
      backgroundSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center",
      href: "/servicios/deal-advisory",
      details: {
        services: ["M&A y fusiones", "Valuaciones DCF", "Due diligence"],
        impact: ["$2B+ en transacciones", "15+ deals cerrados", "95% tasa de éxito"],
        clients: ["PE Funds", "Family Offices", "Corporativos"]
      }
    },
    {
      name: "Nuevos Mercados",
      category: "Expansión",
      description: "Acompañamiento integral para expansión geográfica con enfoque regulatorio especializado en el mercado mexicano.",
      backgroundSrc: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop&crop=center",
      href: "/servicios/mercados",
      details: {
        services: ["Estudios de mercado", "Setup regulatorio", "Filiales mexicanas"],
        impact: ["20+ empresas internacionales", "90 días promedio", "100% compliance"],
        clients: ["Multinacionales", "Scale-ups", "Corporativos EU/US"]
      }
    },
    {
      name: "Operaciones y TI",
      category: "Mejoras",
      description: "Optimización operacional y transformación tecnológica para mejorar eficiencia, compliance y competitividad.",
      backgroundSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
      href: "/servicios/operaciones-ti",
      details: {
        services: ["Excelencia operativa", "Transformación digital", "Interim management"],
        impact: ["15% reducción costos", "40% mejora productividad", "Fortune 500 experience"],
        clients: ["Manufacturers", "Tech Companies", "Service Providers"]
      }
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-20 sm:pb-24 lg:pb-32">
      <div className="text-center mb-12 lg:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 w-full">
          <span className="bg-gradient-to-r from-[#68AEC8] to-[#255465] bg-clip-text text-transparent drop-shadow-lg">Servicios</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto opacity-90">
          Aplicamos metodologías de grandes consultoras adaptadas a la realidad de Pymes mexicanas
        </p>
      </div>
      <div className="grid gap-8 lg:gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const isFlipped = flippedCards.has(service.name);
          return (
            <div 
              key={service.name} 
              className="relative h-[500px] lg:h-[550px] cursor-pointer perspective-1000"
              onClick={() => toggleCard(service.name)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full group flex flex-col">
                    {/* Top Image */}
                    <div className="relative w-full h-48 lg:h-56 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.backgroundSrc}
                        alt={`${service.name} service background`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 lg:p-8 xl:p-10 flex-1 flex flex-col justify-center">
                      <div className="text-center space-y-4 lg:space-y-5">
                        <div>
                          <div className="text-sm text-brand-dark font-semibold mb-3">{service.category}</div>
                          <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-[#255465] mb-4">
                            {service.name}
                          </h3>
                          <div className="w-16 h-1 bg-gradient-to-tl from-brand-dark to-brand-medium mx-auto mb-5 rounded-full"></div>
                          <p className="text-gray-700 text-base lg:text-lg leading-relaxed font-medium max-w-md mx-auto">
                            {service.description}
                          </p>
                          <div className="mt-6 space-y-2">
                            <Link 
                              href={service.href}
                              className="inline-block bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Explora el Proyecto
                            </Link>
                            <div className="text-xs text-brand-medium font-semibold">
                              Haz clic en la tarjeta para ver más detalles
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light rounded-2xl border border-gray-200 overflow-hidden h-full text-white">
                    <div className="p-6 lg:p-8 xl:p-10 h-full flex flex-col">
                      <div className="text-center mb-6">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                          {service.name}
                        </h3>
                        <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
                      </div>
                      
                      <div className="flex-1 space-y-5 text-sm lg:text-base">
                        <div>
                          <h4 className="font-bold mb-3 text-lg">Servicios clave:</h4>
                          <ul className="space-y-2">
                            {service.details.services.map((item, idx) => (
                              <li key={idx} className="text-white/90 font-medium">• {item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-3 text-lg">Resultados:</h4>
                          <ul className="space-y-2">
                            {service.details.impact.map((item, idx) => (
                              <li key={idx} className="text-white/90 font-medium">• {item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-3 text-lg">Clientes típicos:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.details.clients.map((item, idx) => (
                              <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <div onClick={(e) => e.stopPropagation()}>
                          <Link 
                            href={service.href}
                            className="inline-block bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition-colors mb-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Explora el Proyecto
                          </Link>
                        </div>
                        <div className="text-xs cursor-pointer hover:text-white/80" onClick={(e) => { e.stopPropagation(); toggleCard(service.name); }}>
                          Haz clic para volver
                        </div>
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


