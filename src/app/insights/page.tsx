"use client";
import Link from "next/link";
import { useState, useMemo, useRef } from "react";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  backgroundSrc: string;
  keywords: string[];
};

const posts: Post[] = [
  {
    slug: "copilotos-para-ventas-pymes",
    title: "Copilotos de IA para ventas en Pymes: del prototipo al impacto",
    excerpt: "Cómo diseñar y desplegar copilotos comerciales con seguridad y ROI en 90 días.",
    tag: "IA aplicada",
    date: "2025-08-08",
    backgroundSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
    keywords: ["IA", "inteligencia artificial", "ventas", "pymes", "ROI", "comercial", "automatización"]
  },
  {
    slug: "due-diligence-agil",
    title: "Due diligence ágil: priorizar riesgos que mueven el deal",
    excerpt: "Un enfoque práctico para DD en Pymes que protege valor y tiempo.",
    tag: "Deal Advisory",
    date: "2025-07-20",
    backgroundSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=center",
    keywords: ["due diligence", "M&A", "riesgos", "deal", "inversiones", "valuación", "adquisición"]
  },
  {
    slug: "entrada-mexico-checklist",
    title: "Entrada a México: checklist regulatorio y operativo esencial",
    excerpt: "SAT, IMSS, PLD y más: cómo evitar tropiezos y acelerar la operación.",
    tag: "Nuevos Mercados",
    date: "2025-07-05",
    backgroundSrc: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop&crop=center",
    keywords: ["México", "regulatorio", "SAT", "IMSS", "PLD", "expansión", "mercados", "compliance"]
  },
  {
    slug: "transformacion-digital-manufactura",
    title: "Transformación digital en manufactura: de legacy a Industry 4.0",
    excerpt: "Roadmap práctico para modernizar procesos sin interrumpir la operación.",
    tag: "Operaciones y TI",
    date: "2025-06-15",
    backgroundSrc: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop&crop=center",
    keywords: ["transformación digital", "manufactura", "industry 4.0", "modernización", "procesos", "automatización"]
  },
  {
    slug: "fintech-regulacion-mexico",
    title: "Fintech en México: navegando la regulación CNBV en 2025",
    excerpt: "Guía actualizada de licencias, compliance y oportunidades en el sector fintech mexicano.",
    tag: "Deal Advisory",
    date: "2025-05-28",
    backgroundSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
    keywords: ["fintech", "CNBV", "regulación", "licencias", "México", "compliance", "servicios financieros"]
  },
  {
    slug: "supply-chain-t-mec",
    title: "Supply Chain post T-MEC: oportunidades para Pymes mexicanas",
    excerpt: "Cómo aprovechar el nuevo tratado para optimizar cadenas de suministro y reducir costos.",
    tag: "Operaciones y TI",
    date: "2025-04-10",
    backgroundSrc: "https://images.unsplash.com/photo-1586953135302-9d76692bf004?w=800&h=600&fit=crop&crop=center",
    keywords: ["supply chain", "T-MEC", "USMCA", "comercio", "logística", "cadena suministro", "México"]
  },
];

export default function InsightsIndex() {
  const [searchTerm, setSearchTerm] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) return posts;
    
    const searchLower = searchTerm.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      post.tag.toLowerCase().includes(searchLower) ||
      post.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
    );
  }, [searchTerm]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pb-20 sm:pb-24 lg:pb-32">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] sm:leading-tight mb-4 sm:mb-6 w-full break-words">
          <span className="bg-gradient-to-r from-[#68AEC8] to-[#255465] bg-clip-text text-transparent drop-shadow-lg">Insights</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-5 sm:leading-relaxed max-w-3xl mx-auto opacity-90">
          Noticias, destacados y proyectos para atraer y educar leads. Contenido accionable y práctico.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8 sm:mb-12">
        <div className="relative max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Buscar por palabra clave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-brand-medium focus:border-brand-medium text-sm"
          />
        </div>
      </div>

      {/* Articles Carousel */}
      <div className="relative mb-8 sm:mb-12">
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={scrollLeft}
            className="p-3 rounded-full bg-brand-light hover:bg-brand-medium text-brand-dark hover:text-white transition-colors duration-300 shadow-lg"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="p-3 rounded-full bg-brand-light hover:bg-brand-medium text-brand-dark hover:text-white transition-colors duration-300 shadow-lg"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/insights/${post.slug}`} 
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 h-[500px] lg:h-[550px] group block flex flex-col flex-shrink-0 w-[350px] md:w-[400px]"
            >
              {/* Top Image */}
              <div className="relative w-full h-48 lg:h-56 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.backgroundSrc}
                  alt={`${post.title} background`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6 lg:p-8 xl:p-10 flex-1 flex flex-col justify-center">
                <div className="text-center space-y-4 lg:space-y-5">
                  <div>
                    <div className="text-sm text-brand-dark font-semibold mb-3">
                      {post.tag} · {new Date(post.date).toLocaleDateString("es-MX")}
                    </div>
                    <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-[#255465] mb-4">
                      {post.title}
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-tl from-brand-dark to-brand-medium mx-auto mb-5 rounded-full"></div>
                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed font-medium max-w-md mx-auto">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 text-xs text-brand-medium font-semibold">
                      Leer artículo completo →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Hide scrollbar */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      {/* No results message */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No se encontraron artículos que coincidan con &quot;{searchTerm}&quot;</p>
        </div>
      )}

      {/* Newsletter Subscription */}
      <div className="rounded-xl border border-gray-200 p-4 sm:p-6 bg-white/80">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
          <span className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">Suscríbete</span>
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">Recibe nuestros insights y proyectos. 1-2 correos/mes. Sin spam.</p>
        <form action="/api/lead" method="post" className="flex flex-col sm:flex-row gap-3 sm:gap-2">
          <input name="name" placeholder="Nombre" className="border border-gray-300 rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-brand-medium focus:border-brand-medium outline-none" />
          <input required name="email" type="email" placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-3 bg-white w-full focus:ring-2 focus:ring-brand-medium focus:border-brand-medium outline-none" />
          <button className="bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light text-white px-6 py-3 rounded-lg font-semibold hover:from-brand-dark-hover hover:via-brand-medium-hover hover:to-brand-medium transition-all duration-300 min-h-[48px] whitespace-nowrap">Quiero recibir</button>
          <input type="hidden" name="source" value="insights-subscribe" />
        </form>
      </div>
    </section>
  );
}


