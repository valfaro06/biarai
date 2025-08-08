export default function NosotrosPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Nosotros</h1>
      <p className="text-foreground/70 mb-6">
        Combinamos el rigor de grandes consultoras con la cercanía de un partner boutique para Pymes en México. De ideas a resultados: análisis a costo razonable e implicación en la ejecución.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border p-5 bg-muted">
          <div className="font-medium mb-2">Diferenciadores</div>
          <ul className="list-disc pl-5 text-foreground/80 space-y-1 text-sm">
            <li>Atención senior en todos los proyectos</li>
            <li>Conocimiento profundo del mercado mexicano</li>
            <li>Enfoque práctico: de la presentación a la implementación</li>
            <li>Gobernanza, calidad y gestión de riesgos</li>
          </ul>
        </div>
        <div className="rounded-lg border border-border p-5 bg-muted">
          <div className="font-medium mb-2">Resultados</div>
          <ul className="list-disc pl-5 text-foreground/80 space-y-1 text-sm">
            <li>Participación en deals por ~2,000M USD</li>
            <li>+20 empresas acompañadas en entrada a México</li>
            <li>Proyectos con grandes marcas en Ops & TI</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


