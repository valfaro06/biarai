"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-bold text-xl text-gray-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-colors"
          aria-label="Biarai - Inicio"
        >
          {siteConfig.name}
        </Link>
        
        <nav 
          className="hidden md:flex gap-8 text-sm" 
          role="navigation" 
          aria-label="Navegación principal"
        >
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 transition-colors ${
                  active ? "text-blue-600 font-semibold" : "text-gray-600"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        
        <Link
          href="/contacto"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          aria-describedby="cta-nav-description"
        >
          Hablemos
        </Link>
        <div id="cta-nav-description" className="sr-only">Ir a la página de contacto para solicitar una consulta</div>
      </div>
    </header>
  );
}


