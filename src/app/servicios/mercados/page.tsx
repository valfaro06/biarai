import LeaderSpotlight from "@/components/LeaderSpotlight";
export default function MercadosPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Desarrollo de Nuevos Mercados</h1>
      <p className="text-foreground/70 mb-6">
        De la estrategia a la implementación en México: estudios, regulación, plan de negocio y creación de filiales con acompañamiento end-to-end.
      </p>
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-2">Servicios</h2>
          <ul className="list-disc pl-5 text-foreground/80 space-y-1">
            <li>Estudios de mercado: precios, competidores, proveedores</li>
            <li>Análisis y acompañamiento regulatorio (SAT, IMSS, PLD, CRE, CNH, Cofepris, ASEA)</li>
            <li>Plan de negocio (orgánico/inorgánico), alianzas estratégicas</li>
            <li>Creación de filiales: acta constitutiva, registro mercantil, altas en SAT/IMSS</li>
            <li>Servicios fiscales y contables integrales; gestión laboral y legal</li>
          </ul>
        </div>
        <LeaderSpotlight
          name="Alejandro Araiza"
          role="Nuevos Mercados"
          bio="CPC con +20 años en Auditoría y Fiscal; socio en RSM México, amplio track en administración tercerizada e inicio de compañías."
          youtubeId="dQw4w9WgXcQ"
          thumbnailSrc="/leader-placeholder.svg"
        />
      </div>
    </section>
  );
}


