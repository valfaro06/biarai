"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  category: string;
  result: string;
  content: () => React.ReactElement;
}

const projects: ProjectCardProps[] = [
  {
    title: "Retail: IA para previsión de demanda",
    category: "Inteligencia Artificial",
    result: "-15% stock-out, +8% margen",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Implementación de algoritmos de machine learning para optimizar la gestión 
          de inventarios en cadena retail. El proyecto incluyó análisis histórico de 
          ventas, patrones estacionales y variables externas.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900">Resultados obtenidos:</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Reducción del 15% en situaciones de stock-out</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Incremento del 8% en margen operativo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Optimización de capital de trabajo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Mejora en satisfacción del cliente</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Banca: copiloto comercial",
    category: "Transformación Digital",
    result: "+22% productividad",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Desarrollo e implementación de un asistente inteligente para equipos comerciales 
          bancarios, integrando CRM, análisis predictivo y automatización de procesos 
          para optimizar la gestión de clientes.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900">Impacto logrado:</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Aumento del 22% en productividad comercial</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Reducción de tiempo en tareas administrativas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Mejora en calidad de seguimiento a clientes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Incremento en tasa de conversión</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Energía: control de riesgos",
    category: "Gestión de Riesgos",
    result: "Tiempo de respuesta -40%",
    content: () => (
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Implementación de sistema integral de monitoreo y control de riesgos operacionales 
          para empresa del sector energético, incluyendo alertas tempranas, protocolos 
          automatizados y dashboard en tiempo real.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900">Beneficios alcanzados:</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Reducción del 40% en tiempo de respuesta a incidentes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Mejora en prevención de riesgos operacionales</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Automatización de protocolos de seguridad</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Reducción de costos por interrupciones</span>
            </li>
          </ul>
        </div>
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

export function ProjectsExpandableCards() {
  const [active, setActive] = useState<(typeof projects)[number] | boolean | null>(null);
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
                        className="font-bold text-gray-900 text-base"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`category-${active.category}-${id}`}
                        className="text-blue-600 text-sm font-semibold"
                      >
                        {active.category}
                      </motion.p>
                      <motion.p
                        layoutId={`result-${active.result}-${id}`}
                        className="text-green-600 text-sm font-semibold mt-1"
                      >
                        {active.result}
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
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-4">
        {projects.map((project, index) => (
          <motion.div
            layoutId={`card-${project.title}-${id}`}
            key={`card-${project.title}-${id}`}
            onClick={() => setActive(project)}
            className="p-4 flex flex-col hover:bg-gray-50 rounded-xl cursor-pointer border border-gray-200 bg-white/80 transition-colors min-h-[140px]"
          >
            <div className="flex gap-4 flex-col w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col">
                  <motion.h3
                    layoutId={`title-${project.title}-${id}`}
                    className="font-medium text-gray-900 text-base md:text-lg"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`category-${project.category}-${id}`}
                    className="text-blue-600 text-sm font-semibold"
                  >
                    {project.category}
                  </motion.p>
                </div>
              </div>
              <motion.p
                layoutId={`result-${project.result}-${id}`}
                className="text-green-600 text-sm font-semibold"
              >
                {project.result}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}