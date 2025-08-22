"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  category: string;
  description: string;
  details: string;
  content: () => React.ReactElement;
}

const industries: IndustryCardProps[] = [
  {
    title: "Energía y Utilities",
    category: "Sector Energético",
    description: "E&P, Midstream, Retail, Generación, Suministro",
    details: "Experiencia integral en toda la cadena de valor energética, desde exploración y producción hasta comercialización final.",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Brindamos servicios especializados en toda la cadena de valor del sector energético, 
          desde upstream hasta downstream, incluyendo análisis regulatorio, estructuración 
          financiera y optimización operacional.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2 flex-shrink-0"></span>
            <span>Exploración y Producción (E&P)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2 flex-shrink-0"></span>
            <span>Transporte y almacenamiento (Midstream)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2 flex-shrink-0"></span>
            <span>Generación y suministro eléctrico</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Industria Manufacturera",
    category: "Manufacturing",
    description: "Automotriz, Bienes de equipo, Dispositivos médicos, Metals & Mining",
    details: "Soluciones integrales para optimización de procesos manufactureros y cadenas de suministro globales.",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Acompañamos empresas manufactureras en procesos de mejora operacional, 
          automatización, lean manufacturing y transformación digital de la producción.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2 flex-shrink-0"></span>
            <span>Sector automotriz y autopartes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2 flex-shrink-0"></span>
            <span>Bienes de capital y maquinaria</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2 flex-shrink-0"></span>
            <span>Dispositivos médicos y Metals & Mining</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Salud",
    category: "Healthcare",
    description: "Hospitales, Clínicas, Centros de salud, Insumos médicos",
    details: "Consultoría especializada en gestión hospitalaria, optimización operacional y cumplimiento regulatorio.",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Servicios especializados para el sector salud incluyendo gestión hospitalaria, 
          procesos clínicos, compliance regulatorio y optimización de costos operacionales.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2 flex-shrink-0"></span>
            <span>Hospitales públicos y privados</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2 flex-shrink-0"></span>
            <span>Clínicas especializadas</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2 flex-shrink-0"></span>
            <span>Distribuidores de insumos médicos</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Marca Blanca",
    category: "White Label",
    description: "Consultoría, Tecnología, Cursos y formación",
    details: "Servicios de consultoría externa y formación especializada para otras consultoras y empresas de tecnología.",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Ofrecemos servicios de marca blanca para consultoras, empresas de tecnología 
          y centros de formación que requieren expertise especializado.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2 flex-shrink-0"></span>
            <span>Servicios de consultoría externa</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2 flex-shrink-0"></span>
            <span>Desarrollo de cursos especializados</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2 flex-shrink-0"></span>
            <span>Formación ejecutiva y técnica</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Educación",
    category: "Education",
    description: "Universidades, Incubadoras, Consejos de Ciencia y Tecnología",
    details: "Acompañamiento a instituciones educativas en gestión, innovación y vinculación con el sector productivo.",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Servicios especializados para instituciones educativas, centros de investigación 
          e incubadoras de empresas en gestión, innovación y transferencia tecnológica.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2 flex-shrink-0"></span>
            <span>Universidades públicas y privadas</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2 flex-shrink-0"></span>
            <span>Incubadoras y aceleradoras</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-brand-dark rounded-full mt-2 flex-shrink-0"></span>
            <span>Consejos de Ciencia y Tecnología</span>
          </li>
        </ul>
      </div>
    ),
  },
];

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export function IndustryExpandableCards() {
  const [active, setActive] = useState<(typeof industries)[number] | boolean | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white sm:rounded-3xl overflow-hidden"
            >
              <div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-[#255465] text-base"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`category-${active.category}-${id}`}
                        className="text-brand-dark text-sm font-semibold"
                      >
                        {active.category}
                      </motion.p>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-gray-700 text-sm mt-2"
                      >
                        {active.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 relative px-6">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-700 text-xs md:text-sm lg:text-base pb-10 flex flex-col items-start gap-4 overflow-auto"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      
      {/* Grid with flip cards */}
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-4 sm:gap-6">
        {industries.map((industry) => (
          <motion.div
            layoutId={`card-${industry.title}-${id}`}
            key={`card-${industry.title}-${id}`}
            className="group cursor-pointer min-h-[280px] sm:min-h-[320px] md:min-h-[360px]"
            onMouseEnter={() => setHoveredCard(industry.title)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative w-full h-full [perspective:1000px]">
              {/* Front side - Image placeholder */}
              <div 
                className={`absolute inset-0 w-full h-full transition-all duration-700 [backface-visibility:hidden] ${
                  hoveredCard === industry.title ? '[transform:rotateY(180deg)]' : ''
                } bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:shadow-lg`}
              >
                <div className="text-center text-gray-400 px-4">
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-4">📷</div>
                  <motion.h3
                    layoutId={`title-${industry.title}-${id}`}
                    className="font-medium text-[#255465] text-base md:text-lg px-2"
                  >
                    {industry.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`category-${industry.category}-${id}`}
                    className="text-brand-dark text-sm font-semibold mt-1"
                  >
                    {industry.category}
                  </motion.p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">Imagen próximamente</p>
                </div>
              </div>
              
              {/* Back side - Preview content */}
              <div 
                className={`absolute inset-0 w-full h-full transition-all duration-700 [backface-visibility:hidden] [transform:rotateY(180deg)] ${
                  hoveredCard === industry.title ? '[transform:rotateY(0deg)]' : ''
                } bg-white border border-gray-200 rounded-xl p-4 sm:p-6 flex flex-col justify-center hover:shadow-lg`}
              >
                <div className="space-y-3 text-center">
                  <motion.h3
                    layoutId={`title-${industry.title}-${id}`}
                    className="font-medium text-[#255465] text-base md:text-lg"
                  >
                    {industry.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`category-${industry.category}-${id}`}
                    className="text-blue-600 text-sm font-semibold"
                  >
                    {industry.category}
                  </motion.p>
                  <motion.p
                    layoutId={`description-${industry.description}-${id}`}
                    className="text-gray-700 text-sm"
                  >
                    {industry.description}
                  </motion.p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-3">
                    {industry.details}
                  </p>
                  <button
                    onClick={() => setActive(industry)}
                    className="mt-4 px-4 py-2 bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light text-white rounded-full text-sm font-semibold hover:from-brand-dark-hover hover:via-brand-medium-hover hover:to-brand-light transition-all duration-300"
                  >
                    Ver más detalles
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}