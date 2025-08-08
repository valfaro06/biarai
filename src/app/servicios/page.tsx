import Link from "next/link";

export default function ServiciosPage() {
  const services = [
    {
      title: "Inversiones · Deal Advisory",
      href: "/servicios/deal-advisory",
      bullets: [
        "Estrategia de inversiones, diseño de portafolio",
        "Teaser, cuaderno de venta, NDA/LoI/MoU, contratos",
        "Valuación (DFC, múltiplos), estructuración financiera, due diligence",
      ],
    },
    {
      title: "Desarrollo de Nuevos Mercados",
      href: "/servicios/mercados",
      bullets: [
        "Estudios de mercado, precios, competidores y proveedores",
        "Acompañamiento regulatorio (SAT, IMSS, PLD, CRE, CNH, Cofepris, ASEA)",
        "Plan de negocio, alianzas y creación de filiales",
      ],
    },
    {
      title: "Mejoras de Operaciones y TI",
      href: "/servicios/operaciones-ti",
      bullets: [
        "Excelencia operativa, compliance y PMO",
        "Plan de sistemas, implantaciones, integraciones y cloud",
        "Interim management, recruiting, outsourcing y gestoría",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Servicios</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <Link key={s.title} href={s.href} className="rounded-xl border border-border p-6 bg-muted hover:shadow-sm transition-shadow">
            <h2 className="text-xl font-medium mb-3">{s.title}</h2>
            <ul className="text-foreground/70 space-y-2 list-disc pl-5">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  );
}


