export default function IndustriasPage() {
  const industries = [
    "Energía y Utilities (E&P, Midstream, Retail, Generación, Suministro)",
    "Industria Manufacturera (Automotriz, Bienes de equipo, Dispositivos médicos, Metals & Mining)",
    "Salud (Hospitales, Clínicas, Centros de salud, Insumos médicos)",
    "Marca Blanca (Consultoría, Tecnología, Cursos y formación)",
    "Educación (Universidades, Incubadoras, Consejos de Ciencia y Tecnología)",
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Industrias</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {industries.map((i) => (
          <div key={i} className="rounded-lg border border-border p-5 text-foreground/80 bg-muted">
            {i}
          </div>
        ))}
      </div>
    </section>
  );
}


