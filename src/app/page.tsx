'use client';

import Link from "next/link";
import GlobeWrapper from "@/components/GlobeWrapper";
import ScrollingLogos from "@/components/ScrollingLogos";
import StructuredData from "@/components/StructuredData";
import { ExpandableCards } from "@/components/ExpandableCards";
import { trackNavigation, trackContactEvent } from "@/lib/analytics";
import { useEffect } from 'react';

// Metadata moved to layout.tsx since this is now a client component

export default function Home() {
  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <main>
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-tl from-white via-brand-pale to-brand-light" aria-labelledby="hero-heading">
          {/* Globe Background */}
          <div className="absolute inset-0 z-0">
            <GlobeWrapper />
          </div>
          
          {/* Content */}
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
            <article className="text-left w-full max-w-full sm:max-w-3xl space-y-4 sm:space-y-6 lg:space-y-8">
              <header>
                <h1 id="hero-heading" className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] sm:leading-tight mb-4 sm:mb-6 w-full break-words" lang="es">
                  De <span
                    className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent"
                  >
                    ideas
                  </span> a resultados reales para Pymes en México
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-5 sm:leading-relaxed max-w-full opacity-90">
                  Aplicamos el rigor de grandes consultoras a la realidad de Pymes: estrategia, ejecución y control. 
                  Confianza, criterio y eficiencia para convertir planes en impacto medible.
                </p>
              </header>
          
              <div className="flex flex-col gap-3 w-full" role="group" aria-label="Acciones principales">
                <Link 
                  href="/contacto" 
                  className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light text-white px-6 py-4 rounded-lg font-semibold hover:from-brand-dark-hover hover:via-brand-medium-hover hover:to-brand-medium text-center text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-medium focus:ring-offset-2 shadow-lg hover:shadow-xl min-h-[52px] w-full block"
                  aria-describedby="cta-description"
                  onClick={() => trackContactEvent('click_schedule', 'hero_button')}
                >
                  Agenda una reunión
                </Link>
                <Link 
                  href="/servicios" 
                  className="relative bg-gradient-to-tl from-white via-brand-pale to-brand-light text-gray-700 px-6 py-4 rounded-lg font-semibold hover:from-brand-pale hover:via-brand-light hover:to-brand-medium text-center text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-medium focus:ring-offset-2 shadow-lg hover:shadow-xl border-2 border-brand-light hover:border-brand-medium min-h-[52px] w-full block"
                  onClick={() => trackNavigation('/servicios', 'hero')}
                >
                  Ver servicios
                </Link>
              </div>
              <p id="cta-description" className="sr-only">Contacta con nosotros para una consulta gratuita sobre tu proyecto empresarial</p>
              
              {/* Expandable Services Cards */}
              <div className="w-full" aria-label="Servicios principales">
                <ExpandableCards />
              </div>
              
              {/* Logos integrados debajo de los servicios */}
              <ScrollingLogos />
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
