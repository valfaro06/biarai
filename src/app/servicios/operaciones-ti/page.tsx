import LeaderSpotlight from "@/components/LeaderSpotlight";

export const metadata = {
  title: "Operaciones y TI | Biarai",
  description:
    "Excelencia operativa y tecnología que habilitan crecimiento rentable: compliance, PMO, sistemas e implantaciones con foco en resultados.",
};

export default function OperacionesTiPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-20 sm:pb-24 lg:pb-32">
      <div className="space-y-8 sm:space-y-12">
        <div className="text-center">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] sm:leading-tight mb-4 sm:mb-6 w-full break-words">
            Operaciones · <span className="bg-gradient-to-r from-[#68AEC8] to-[#255465] bg-clip-text text-transparent drop-shadow-lg">Mejoras y TI</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-5 sm:leading-relaxed max-w-3xl mx-auto opacity-90">
            Excelencia operativa y tecnología que habilitan crecimiento rentable: compliance, PMO, sistemas e implantaciones con foco en resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-medium rounded-full"></span>
              Servicios
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-brand-medium rounded-full mt-2 flex-shrink-0"></span>
                <span>Excelencia operativa, rediseño operativo y modelos de control</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-brand-medium rounded-full mt-2 flex-shrink-0"></span>
                <span>Compliance, marcos documentales y continuidad de negocio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-brand-medium rounded-full mt-2 flex-shrink-0"></span>
                <span>Plan de sistemas, integraciones, implantaciones (ERP/BI) y cloud</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-brand-medium rounded-full mt-2 flex-shrink-0"></span>
                <span>PMO, change management y adopción</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-brand-medium rounded-full mt-2 flex-shrink-0"></span>
                <span>Interim management, recruiting, outsourcing y gestoría</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-tl from-white via-brand-pale to-brand-light rounded-xl border border-gray-200 p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-medium rounded-full"></span>
              Especialización
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-900">+15 años</span> liderando TI y transformación de negocios en Europa, Asia, EE. UU. y LatAm con empresas Fortune 500.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-dark">100+</div>
                <div className="text-xs text-gray-500">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-medium">15+</div>
                <div className="text-xs text-gray-500">Años</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-light">4</div>
                <div className="text-xs text-gray-500">Continentes</div>
              </div>
            </div>
          </div>
        </div>
        
        <LeaderSpotlight
          name="Peter Kroll"
          role="Operaciones y TI"
          bio="+15 años liderando TI y transformación de negocios en Europa, Asia, EE. UU. y LatAm; experiencia con empresas Fortune 500."
          youtubeId="dQw4w9WgXcQ"
          thumbnailSrc="/leader-placeholder.svg"
        />
      </div>
    </section>
  );
}


