import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio - Consultoría Estratégica para Pymes",
  description: "Biarai aplica metodologías de grandes consultoras a la realidad de Pymes mexicanas. Deal Advisory, expansión a nuevos mercados y transformación operacional.",
  openGraph: {
    title: "Biarai - De Ideas a Resultados Reales para Pymes en México",
    description: "Consultoría estratégica especializada en Pymes. Deal Advisory, Nuevos Mercados, Operaciones y TI.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Biarai",
  "description": "Consultoría estratégica para Pymes en México",
  "url": "https://www.biarai.com",
  "logo": "https://www.biarai.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+52-000-000-0000",
    "contactType": "customer service",
    "availableLanguage": ["Spanish"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "MX"
  },
  "sameAs": [
    "https://www.linkedin.com/company/biarai"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <section className="max-w-7xl mx-auto px-4 py-16" aria-labelledby="hero-heading">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido principal */}
            <article className="space-y-8">
              <header>
                <h1 id="hero-heading" className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  De <span className="text-blue-600">ideas</span> a resultados reales para Pymes en México
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Aplicamos el rigor de grandes consultoras a la realidad de Pymes: estrategia, ejecución y control. 
                  Confianza, criterio y eficiencia para convertir planes en impacto medible.
                </p>
              </header>
          
              <div className="flex flex-col sm:flex-row gap-4" role="group" aria-label="Acciones principales">
                <Link 
                  href="/contacto" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 text-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-describedby="cta-description"
                >
                  Agenda una reunión
                </Link>
                <Link 
                  href="/servicios" 
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 text-center transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Ver servicios
                </Link>
              </div>
              <p id="cta-description" className="sr-only">Contacta con nosotros para una consulta gratuita sobre tu proyecto empresarial</p>
              
              <nav className="grid grid-cols-2 gap-4" aria-label="Servicios principales">
                <Link 
                  href="/servicios/deal-advisory" 
                  className="p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  aria-describedby="deal-advisory-desc"
                >
                  <div className="text-sm font-semibold text-blue-600">Inversiones</div>
                  <div className="text-gray-600">Deal Advisory</div>
                </Link>
                <div id="deal-advisory-desc" className="sr-only">Servicios de asesoría en transacciones e inversiones</div>
                
                <Link 
                  href="/servicios/mercados" 
                  className="p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
                  aria-describedby="mercados-desc"
                >
                  <div className="text-sm font-semibold text-purple-600">Expansión</div>
                  <div className="text-gray-600">Nuevos Mercados</div>
                </Link>
                <div id="mercados-desc" className="sr-only">Servicios de expansión y entrada a nuevos mercados</div>
                
                <Link 
                  href="/servicios/operaciones-ti" 
                  className="p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                  aria-describedby="operaciones-desc"
                >
                  <div className="text-sm font-semibold text-green-600">Operaciones</div>
                  <div className="text-gray-600">Mejoras y TI</div>
                </Link>
                <div id="operaciones-desc" className="sr-only">Servicios de optimización operacional y tecnológica</div>
                
                <Link 
                  href="/industrias" 
                  className="p-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
                  aria-describedby="industrias-desc"
                >
                  <div className="text-sm font-semibold text-orange-600">Sectores</div>
                  <div className="text-gray-600">Industrias</div>
                </Link>
                <div id="industrias-desc" className="sr-only">Experiencia especializada por sectores industriales</div>
              </nav>
            </article>
        
            {/* Panel lateral */}
            <aside className="relative" aria-labelledby="value-proposition">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl transform rotate-3" aria-hidden="true"></div>
              <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-xl">
                <div className="text-center space-y-6">
                  <div className="w-48 h-32 mx-auto bg-gray-100 rounded-lg flex items-center justify-center" role="img" aria-label="Ilustración conceptual de despegue y aterrizaje de ideas">
                    <span className="text-gray-500">Imagen ilustrativa</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase text-gray-500 font-semibold">De ideas a resultados</div>
                    <h2 id="value-proposition" className="text-xl font-bold text-gray-900 mt-2">
                      Ayudamos a despegar ideas brillantes… y también a aterrizarlas
                    </h2>
                    <p className="text-gray-600 mt-4">
                      No nos quedamos en la presentación: análisis a costo razonable e implicación 
                      en la ejecución para que cada proyecto despegue y aterrice con éxito.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center" role="list" aria-label="Características principales">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full" role="listitem">Estrategia acotada</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full" role="listitem">Ejecución medible</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full" role="listitem">Talento senior</span>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4" role="list" aria-label="Servicios destacados">
                  <div className="border border-gray-100 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-white" role="listitem">
                    <h3 className="text-xs uppercase text-blue-600 font-semibold">Deal Advisory</h3>
                    <div className="font-bold text-gray-900">Del teaser al closing</div>
                    <p className="text-gray-600 text-sm mt-2">Valuación, DD y documentación para proteger valor y tiempo.</p>
                  </div>
                  <div className="border border-gray-100 p-4 rounded-lg bg-gradient-to-br from-purple-50 to-white" role="listitem">
                    <h3 className="text-xs uppercase text-purple-600 font-semibold">Nuevos Mercados</h3>
                    <div className="font-bold text-gray-900">Entrada a México</div>
                    <p className="text-gray-600 text-sm mt-2">Regulación, plan de negocio y creación de filiales end-to-end.</p>
                  </div>
                  <div className="border border-gray-100 p-4 rounded-lg bg-gradient-to-br from-green-50 to-white" role="listitem">
                    <h3 className="text-xs uppercase text-green-600 font-semibold">Operaciones & TI</h3>
                    <div className="font-bold text-gray-900">Impacto operativo</div>
                    <p className="text-gray-600 text-sm mt-2">Compliance, PMO e implantaciones con foco en resultados.</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
