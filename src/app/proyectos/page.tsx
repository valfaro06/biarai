"use client";
import { useState } from "react";

export default function CasosPage() {
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

  const projects = [
    {
      name: "Expansión Retail México",
      category: "Nuevos Mercados",
      description: "Acompañamiento integral para cadena europea de moda especializada en apertura del mercado mexicano.",
      backgroundSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
      details: {
        challenge: ["Entrada regulada al mercado mexicano", "Competencia local establecida", "Diferencias culturales de consumo", "Estructura legal y fiscal compleja"],
        solution: ["Market research de 3 meses", "Estrategia de entrada por fases", "Constitución de filial mexicana", "Plan de apertura de 12 tiendas"],
        results: ["8 tiendas abiertas en 18 meses", "30% market share en segmento", "$15M USD facturación año 1", "95% satisfacción del cliente"],
        metrics: {
          timeline: "18 meses",
          investment: "$25M USD",
          roi: "120% ROI año 2",
          stores: "8 tiendas"
        }
      }
    },
    {
      name: "Adquisición Tecnológica",
      category: "Deal Advisory",
      description: "Due diligence y estructuración de adquisición de startup fintech mexicana por fondo de inversión internacional.",
      backgroundSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      details: {
        challenge: ["Valuación compleja de startup", "Due diligence tecnológico especializado", "Marco regulatorio fintech", "Integración post-adquisición"],
        solution: ["Modelo de valuación DCF + múltiplos", "Tech DD con expertos externos", "Análisis regulatorio CNBV", "Plan de integración 100 días"],
        results: ["Adquisición cerrada exitosamente", "Valuación optimizada 15%", "0 contingencias post-closing", "Integración completada Q1"],
        metrics: {
          timeline: "6 meses",
          investment: "$45M USD",
          roi: "Exit 3.2x múltiplo",
          team: "15 especialistas"
        }
      }
    },
    {
      name: "Transformación Digital",
      category: "Operaciones y TI",
      description: "Modernización tecnológica integral para manufacturer tradicional con 40 años de operación en México.",
      backgroundSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center",
      details: {
        challenge: ["Sistemas legacy desactualizados", "Procesos manuales ineficientes", "Competencia digitalizada", "Resistencia al cambio organizacional"],
        solution: ["Diagnóstico tecnológico 360°", "Roadmap de digitalización por fases", "Implementación ERP + CRM", "Capacitación y change management"],
        results: ["15% reducción costos operativos", "40% mejora en productividad", "Real-time visibility total", "100% equipo capacitado"],
        metrics: {
          timeline: "12 meses",
          investment: "$8M USD",
          roi: "240% ROI año 3",
          efficiency: "40% mejora"
        }
      }
    },
    {
      name: "Reestructura Financiera",
      category: "Deal Advisory",
      description: "Turnaround y reestructuración de deuda para empresa familiar en crisis durante pandemia COVID-19.",
      backgroundSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",
      details: {
        challenge: ["Liquidez crítica post-COVID", "Deuda insostenible con bancos", "Pérdida de contratos principales", "Familia dividida en decisiones"],
        solution: ["Plan de reestructura integral", "Negociación con acreedores", "Interim CFO por 6 meses", "Governance familiar mejorada"],
        results: ["60% reducción de deuda", "Cash flow positivo en Q2", "3 contratos nuevos cerrados", "Familia alineada en estrategia"],
        metrics: {
          timeline: "9 meses",
          investment: "Fee + equity",
          roi: "Empresa salvada",
          debt: "60% reducción"
        }
      }
    },
    {
      name: "Joint Venture Energético",
      category: "Nuevos Mercados",
      description: "Estructuración de JV entre empresa mexicana y corporativo alemán para desarrollo de energías renovables.",
      backgroundSrc: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop&crop=center",
      details: {
        challenge: ["Marcos regulatorios diferentes", "Culturas corporativas distintas", "Estructura de JV compleja", "Permisos CNH y CRE"],
        solution: ["Análisis legal comparativo", "Estructura de JV 50/50", "Due diligence regulatorio", "Plan de permisos y licencias"],
        results: ["JV constituido exitosamente", "Permisos CNH obtenidos", "Financiamiento €50M cerrado", "Construcción iniciada Q4"],
        metrics: {
          timeline: "15 meses",
          investment: "€75M total",
          roi: "IRR 18% proyectado",
          capacity: "100MW solar"
        }
      }
    },
    {
      name: "Optimización Supply Chain",
      category: "Operaciones y TI",
      description: "Rediseño completo de cadena de suministro para empresa automotriz con operaciones IMMEX.",
      backgroundSrc: "https://images.unsplash.com/photo-1586953135302-9d76692bf004?w=800&h=600&fit=crop&crop=center",
      details: {
        challenge: ["Ineficiencias en logistics", "Costos de inventario altos", "Proveedores no integrados", "Compliance IMMEX complejo"],
        solution: ["Mapeo de supply chain actual", "Implementación de S&OP", "Integración digital proveedores", "Automatización de compliance"],
        results: ["25% reducción costos logistics", "50% mejora en lead times", "Inventario optimizado 30%", "100% compliance IMMEX"],
        metrics: {
          timeline: "10 meses",
          investment: "$4M USD",
          roi: "350% ROI año 2",
          savings: "$12M anuales"
        }
      }
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-20 sm:pb-24 lg:pb-32">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] sm:leading-tight mb-4 sm:mb-6 w-full break-words">
          <span className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">Proyectos</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-5 sm:leading-relaxed max-w-3xl mx-auto opacity-90">
          Resultados reales y medibles en proyectos de transformación empresarial
        </p>
      </div>
      <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const isFlipped = flippedCards.has(project.name);
          return (
            <div 
              key={project.name} 
              className="relative min-h-[450px] sm:min-h-[500px] md:min-h-[550px] cursor-pointer perspective-1000"
              onClick={() => toggleCard(project.name)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full group">
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.backgroundSrc}
                        alt={`${project.name} project background`}
                        className="w-full h-full object-cover object-center opacity-15 group-hover:opacity-25 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-end">
                      <div className="text-center space-y-3 sm:space-y-4">
                        <div>
                          <div className="text-xs sm:text-sm text-brand-dark font-semibold mb-2">{project.category}</div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            {project.name}
                          </h3>
                          <div className="w-16 h-1 bg-gradient-to-tl from-brand-dark to-brand-medium mx-auto mb-4 rounded-full"></div>
                          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-sm mx-auto">
                            {project.description}
                          </p>
                          <div className="mt-4 text-xs text-brand-medium font-semibold">
                            Haz clic para ver detalles del caso
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light rounded-2xl border border-gray-200 overflow-hidden h-full text-white">
                    <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
                      <div className="text-center mb-4">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                          {project.name}
                        </h3>
                        <div className="w-12 h-1 bg-white mx-auto rounded-full"></div>
                      </div>
                      
                      <div className="flex-1 space-y-3 text-xs sm:text-sm overflow-y-auto">
                        <div>
                          <h4 className="font-bold mb-1">Reto:</h4>
                          <ul className="space-y-0.5">
                            {project.details.challenge.slice(0, 2).map((item, idx) => (
                              <li key={idx} className="text-white/90">• {item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-1">Solución:</h4>
                          <ul className="space-y-0.5">
                            {project.details.solution.slice(0, 2).map((item, idx) => (
                              <li key={idx} className="text-white/90">• {item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-1">Resultados:</h4>
                          <ul className="space-y-0.5">
                            {project.details.results.slice(0, 2).map((item, idx) => (
                              <li key={idx} className="text-white/90">• {item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-1">Métricas:</h4>
                          <div className="grid grid-cols-2 gap-1 text-xs">
                            <div className="bg-white/20 px-2 py-1 rounded">
                              <span className="font-semibold">Timeline:</span><br/>{project.details.metrics.timeline}
                            </div>
                            <div className="bg-white/20 px-2 py-1 rounded">
                              <span className="font-semibold">ROI:</span><br/>{project.details.metrics.roi}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mt-3 text-xs font-semibold">
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


