"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/lib/utils";

interface CardProps {
  title: string;
  category: string;
  description: string;
  src?: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactElement;
}

const services: CardProps[] = [
  {
    title: "Deal Advisory",
    category: "Inversiones",
    description: "Servicios de asesoría en transacciones e inversiones",
    ctaText: "Ver más",
    ctaLink: "/servicios/deal-advisory",
    content: () => (
      <p className="text-gray-600 leading-relaxed">
        Asesoramos en procesos de compra, venta, fusiones y adquisiciones. Análisis financiero, 
        due diligence, valoraciones y estructuración de transacciones para maximizar el valor 
        de tu inversión.
      </p>
    ),
  },
  {
    title: "Nuevos Mercados",
    category: "Expansión", 
    description: "Servicios de expansión y entrada a nuevos mercados",
    ctaText: "Ver más",
    ctaLink: "/servicios/mercados",
    content: () => (
      <p className="text-gray-600 leading-relaxed">
        Estrategias para expandir tu negocio a nuevos mercados geográficos o segmentos. 
        Investigación de mercado, análisis de viabilidad, planificación estratégica y 
        ejecución de planes de expansión.
      </p>
    ),
  },
  {
    title: "Mejoras y TI",
    category: "Operaciones",
    description: "Servicios de optimización operacional y tecnológica", 
    ctaText: "Ver más",
    ctaLink: "/servicios/operaciones-ti",
    content: () => (
      <p className="text-gray-600 leading-relaxed">
        Optimización de procesos operacionales e implementación de soluciones tecnológicas. 
        Automatización, mejora continua, sistemas de gestión y transformación digital 
        para aumentar la eficiencia.
      </p>
    ),
  },
  {
    title: "Industrias",
    category: "Sectores",
    description: "Experiencia especializada por sectores industriales",
    ctaText: "Ver más", 
    ctaLink: "/industrias",
    content: () => (
      <p className="text-gray-600 leading-relaxed">
        Conocimiento profundo de sectores específicos: manufactura, retail, servicios, 
        tecnología y más. Aplicamos mejores prácticas de la industria y benchmarking 
        sectorial para soluciones especializadas.
      </p>
    ),
  },
];

export function ExpandableCards() {
  const [active, setActive] = useState<(typeof services)[number] | boolean | null>(null);
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
            className="fixed inset-0 bg-black/20 h-full w-full z-[9999]"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[10000]">
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
              className="w-full max-w-[600px] h-full lg:h-fit lg:max-h-[90%] flex flex-col bg-white lg:rounded-3xl overflow-hidden mx-4"
            >
              <div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-[#255465] text-lg lg:text-xl"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`category-${active.category}-${id}`}
                        className="text-brand-medium text-base lg:text-lg font-semibold"
                      >
                        {active.category}
                      </motion.p>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-gray-700 text-base lg:text-lg mt-3"
                      >
                        {active.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 relative px-6 lg:px-8">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-700 text-base lg:text-lg pb-10 flex flex-col items-start gap-6 overflow-auto"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      className="px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg rounded-full font-bold bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light text-white hover:from-brand-dark-hover hover:via-brand-medium-hover hover:to-brand-medium transition-all duration-300"
                    >
                      {active.ctaText}
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full grid grid-cols-1 lg:grid-cols-2 items-start gap-6">
        {services.map((service) => (
          <motion.div
            layoutId={`card-${service.title}-${id}`}
            key={`card-${service.title}-${id}`}
            onClick={() => setActive(service)}
            className="p-6 lg:p-8 flex flex-col hover:bg-[#D9D9D9] rounded-xl cursor-pointer border border-brand-neutral bg-white/90 transition-colors min-h-[140px] lg:min-h-[160px] group will-change-transform"
          >
            <div className="flex gap-4 flex-col w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col">
                  <motion.h3
                    layoutId={`title-${service.title}-${id}`}
                    className="font-medium text-[#255465] group-hover:text-black text-lg lg:text-xl transition-colors"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`category-${service.category}-${id}`}
                    className="text-brand-medium group-hover:text-[#255465] text-base lg:text-lg font-semibold transition-colors"
                  >
                    {service.category}
                  </motion.p>
                </div>
              </div>
              <motion.p
                layoutId={`description-${service.description}-${id}`}
                className="text-gray-700 group-hover:text-gray-800 text-base lg:text-lg transition-colors"
              >
                {service.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
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