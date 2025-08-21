import LeaderSpotlight from "@/components/LeaderSpotlight";
export const metadata = {
  title: "Deal Advisory e Inversiones | Biarai",
  description:
    "Asesoría en transacciones: estrategia, valuación (DFC, múltiplos), due diligence y cierre. Experiencia en manufactura, energía y tecnología.",
};

export default function DealAdvisoryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-20 sm:pb-24 lg:pb-32">
      <div className="space-y-8 sm:space-y-12">
        <div className="text-center">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] sm:leading-tight mb-4 sm:mb-6 w-full break-words">
            Inversiones · <span className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">Deal Advisory</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-5 sm:leading-relaxed max-w-3xl mx-auto opacity-90">
            Acompañamos todo el ciclo del deal: del planteamiento y screening hasta la ejecución y cierre, con due diligence integral y estructuración financiera.
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
                <span>Estrategia de inversiones, diseño de portafolio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-brand-medium rounded-full mt-2 flex-shrink-0"></span>
                <span>Screening, teaser y cuaderno de venta</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-brand-medium rounded-full mt-2 flex-shrink-0"></span>
                <span>Valuación (DFC, múltiplos X EBITDA), planes de negocio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-brand-medium rounded-full mt-2 flex-shrink-0"></span>
                <span>Estructuración financiera de operaciones, equity y deuda</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-brand-medium rounded-full mt-2 flex-shrink-0"></span>
                <span>Due diligence: mercado, contable, legal, regulatoria</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-brand-medium rounded-full mt-2 flex-shrink-0"></span>
                <span>Documentación: NDA, LoI, MoU, contratos de compraventa</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-tl from-white via-brand-pale to-brand-light rounded-xl border border-gray-200 p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-medium rounded-full"></span>
              Experiencia
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Participación en decenas de proyectos que suman <span className="font-semibold text-gray-900">~2,000M USD</span> en manufactura, O&G / Power y tecnología.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-dark">50+</div>
                <div className="text-xs text-gray-500">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-medium">2B+</div>
                <div className="text-xs text-gray-500">USD</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-light">3</div>
                <div className="text-xs text-gray-500">Sectores</div>
              </div>
            </div>
          </div>
        </div>
        
        <LeaderSpotlight
          name="Guillermo Bilbao"
          role="Deal Advisory"
          bio="+15 años en consultoría en México liderando M&A, project finance y análisis financiero."
          youtubeId="dQw4w9WgXcQ"
          thumbnailSrc="/leader-placeholder.svg"
        />
      </div>
    </section>
  );
}


