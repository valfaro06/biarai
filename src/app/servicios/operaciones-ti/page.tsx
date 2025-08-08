import LeaderSpotlight from "@/components/LeaderSpotlight";
export default function OperacionesTiPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Mejoras de Operaciones y TI</h1>
      <p className="text-foreground/70 mb-6">
        Excelencia operativa y tecnología que habilitan crecimiento rentable: compliance, PMO, sistemas e implantaciones con foco en resultados.
      </p>
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-2">Servicios</h2>
          <ul className="list-disc pl-5 text-foreground/80 space-y-1">
            <li>Excelencia operativa, rediseño operativo y modelos de control</li>
            <li>Compliance, marcos documentales y continuidad de negocio</li>
            <li>Plan de sistemas, integraciones, implantaciones (ERP/BI) y cloud</li>
            <li>PMO, change management y adopción</li>
            <li>Interim management, recruiting, outsourcing y gestoría</li>
          </ul>
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


