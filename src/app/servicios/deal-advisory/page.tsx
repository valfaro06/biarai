import LeaderSpotlight from "@/components/LeaderSpotlight";
export const metadata = {
  title: "Deal Advisory e Inversiones | Biarai",
  description:
    "Asesoría en transacciones: estrategia, valuación (DFC, múltiplos), due diligence y cierre. Experiencia en manufactura, energía y tecnología.",
};

export default function DealAdvisoryPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Inversiones · Deal Advisory</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Acompañamos todo el ciclo del deal: del planteamiento y screening hasta la ejecución y cierre, con due diligence integral y estructuración financiera.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Servicios
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Estrategia de inversiones, diseño de portafolio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Screening, teaser y cuaderno de venta</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Valuación (DFC, múltiplos X EBITDA), planes de negocio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Estructuración financiera de operaciones, equity y deuda</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Due diligence: mercado, contable, legal, regulatoria</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Documentación: NDA, LoI, MoU, contratos de compraventa</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
              Experiencia
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Participación en decenas de proyectos que suman <span className="font-semibold text-slate-900">~2,000M USD</span> en manufactura, O&G / Power y tecnología.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-xs text-slate-500">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">2B+</div>
                <div className="text-xs text-slate-500">USD</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-600">3</div>
                <div className="text-xs text-slate-500">Sectores</div>
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


