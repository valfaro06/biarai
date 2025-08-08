export default function CasosPage() {
  const cases = [
    {
      title: "Retail: IA para previsión de demanda",
      result: "-15% stock-out, +8% margen",
    },
    { title: "Banca: copiloto comercial", result: "+22% productividad" },
    { title: "Energía: control de riesgos", result: "Tiempo de respuesta -40%" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Casos</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <div key={c.title} className="rounded-xl border border-border p-6 bg-muted">
            <h2 className="text-lg font-medium mb-2">{c.title}</h2>
            <p className="text-foreground/70 text-sm">{c.result}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


