import Link from "next/link";
import { notFound } from "next/navigation";

const posts = {
  "copilotos-para-ventas-pymes": {
    title: "Copilotos de IA para ventas en Pymes: del prototipo al impacto",
    date: "2025-08-08",
    tag: "IA aplicada",
    content: `Cómo diseñar y desplegar copilotos comerciales con seguridad y ROI en 90 días. (Contenido de ejemplo)`
  },
  "due-diligence-agil": {
    title: "Due diligence ágil: priorizar riesgos que mueven el deal",
    date: "2025-07-20",
    tag: "Deal Advisory",
    content: `Un enfoque práctico para DD en Pymes que protege valor y tiempo. (Contenido de ejemplo)`
  },
  "entrada-mexico-checklist": {
    title: "Entrada a México: checklist regulatorio y operativo esencial",
    date: "2025-07-05",
    tag: "Nuevos Mercados",
    content: `SAT, IMSS, PLD y más: cómo evitar tropiezos y acelerar la operación. (Contenido de ejemplo)`
  }
} as const;

type Params = { params: Promise<{ slug: keyof typeof posts }> };

export default async function InsightPage({ params }: Params) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-6 text-xs uppercase tracking-wider text-gray-500">{post.tag} · {new Date(post.date).toLocaleDateString("es-MX")}</div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">{post.title}</h1>
      <div className="prose prose-gray max-w-none text-gray-600">
        <p>{post.content}</p>
      </div>
      <div className="mt-12 rounded-xl border border-gray-200 p-6 bg-gradient-to-tl from-white via-brand-pale to-brand-light">
        <h3 className="text-lg font-bold mb-2 text-gray-900">¿Te ayudamos a aplicarlo en tu empresa?</h3>
        <p className="text-gray-600 text-sm mb-4">Cuéntanos tu caso y te respondemos en 48h.</p>
        <Link href="/contacto" className="inline-flex items-center rounded-lg bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light text-white px-4 py-2.5 text-sm font-semibold hover:from-brand-dark-hover hover:via-brand-medium-hover hover:to-brand-medium transform hover:scale-105 transition-all shadow-lg">Hablemos</Link>
      </div>
      <div className="mt-8">
        <Link href="/insights" className="text-sm text-gray-500 hover:text-brand-medium transition-colors">← Volver a Insights</Link>
      </div>
    </article>
  );
}










