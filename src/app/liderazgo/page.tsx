export default function LiderazgoPage() {
  const leaders = [
    {
      name: "Guillermo Bilbao",
      role: "Deal Advisory",
      bio: "+15 años en consultoría en México liderando M&A, project finance y análisis financiero.",
    },
    {
      name: "Alejandro Araiza",
      role: "Nuevos Mercados",
      bio: "CPC con +20 años en Auditoría y Fiscal; socio en RSM México, experiencia en administración tercerizada e inicio de compañías.",
    },
    {
      name: "Peter Kroll",
      role: "Operaciones y TI",
      bio: "+15 años liderando TI y transformación de negocios en Europa, Asia, EE. UU. y LatAm; relaciones con Fortune 500.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Liderazgo</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {leaders.map((l) => (
          <div key={l.name} className="rounded-xl border border-border p-6 bg-muted">
            <div className="text-sm text-foreground/60">{l.role}</div>
            <div className="text-lg font-medium">{l.name}</div>
            <p className="text-foreground/70 text-sm mt-2">{l.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


