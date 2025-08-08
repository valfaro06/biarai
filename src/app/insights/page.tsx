import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
};

const posts: Post[] = [
  {
    slug: "copilotos-para-ventas-pymes",
    title: "Copilotos de IA para ventas en Pymes: del prototipo al impacto",
    excerpt: "Cómo diseñar y desplegar copilotos comerciales con seguridad y ROI en 90 días.",
    tag: "IA aplicada",
    date: "2025-08-08",
  },
  {
    slug: "due-diligence-agil",
    title: "Due diligence ágil: priorizar riesgos que mueven el deal",
    excerpt: "Un enfoque práctico para DD en Pymes que protege valor y tiempo.",
    tag: "Deal Advisory",
    date: "2025-07-20",
  },
  {
    slug: "entrada-mexico-checklist",
    title: "Entrada a México: checklist regulatorio y operativo esencial",
    excerpt: "SAT, IMSS, PLD y más: cómo evitar tropiezos y acelerar la operación.",
    tag: "Nuevos Mercados",
    date: "2025-07-05",
  },
];

export default function InsightsIndex() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Insights</h1>
        <p className="text-foreground/70">Noticias, destacados y proyectos para atraer y educar leads. Contenido accionable y práctico.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <Link key={p.slug} href={`/insights/${p.slug}`} className="rounded-xl border border-border p-6 bg-muted hover:shadow-sm transition-shadow">
            <div className="text-xs uppercase tracking-wider text-foreground/60 mb-2">{p.tag} · {new Date(p.date).toLocaleDateString("es-MX")}</div>
            <h2 className="text-lg font-medium mb-2">{p.title}</h2>
            <p className="text-foreground/70 text-sm">{p.excerpt}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border p-6">
        <h3 className="text-lg font-medium mb-2">Suscríbete</h3>
        <p className="text-foreground/70 text-sm mb-3">Recibe nuestros insights y casos. 1-2 correos/mes. Sin spam.</p>
        <form action="/api/lead" method="post" className="flex gap-2">
          <input name="name" placeholder="Nombre" className="border rounded-md px-3 py-2 bg-transparent" />
          <input required name="email" type="email" placeholder="Email" className="border rounded-md px-3 py-2 bg-transparent w-full" />
          <button className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90">Quiero recibir</button>
          <input type="hidden" name="source" value="insights-subscribe" />
        </form>
      </div>
    </section>
  );
}


