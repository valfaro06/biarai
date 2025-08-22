"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between w-full">
        <Link 
          href="/" 
          className="font-bold text-lg sm:text-xl text-[#255465] hover:text-brand-medium focus:outline-none focus:ring-2 focus:ring-brand-medium focus:ring-offset-2 rounded transition-colors flex-shrink-0"
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
                className={`font-medium hover:text-brand-medium focus:outline-none focus:ring-2 focus:ring-brand-medium focus:ring-offset-2 rounded px-2 py-1 transition-colors ${
                  active ? "text-brand-medium font-semibold" : "text-gray-600"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        
        {/* Desktop CTA */}
        <Link
          href="/contacto"
          className="hidden sm:block bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-brand-dark-hover hover:via-brand-medium-hover hover:to-brand-medium focus:outline-none focus:ring-2 focus:ring-brand-medium focus:ring-offset-2 transition-colors"
          aria-describedby="cta-nav-description"
        >
          Hablemos
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-brand-pale focus:outline-none focus:ring-2 focus:ring-brand-medium focus:ring-offset-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menú de navegación"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        <div id="cta-nav-description" className="sr-only">Ir a la página de contacto para solicitar una consulta</div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-4 space-y-3" role="navigation" aria-label="Navegación móvil">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    active 
                      ? "bg-brand-pale text-brand-medium font-semibold" 
                      : "text-gray-700 hover:text-brand-medium hover:bg-brand-pale"
                  }`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            
            {/* Mobile CTA */}
            <Link
              href="/contacto"
              className="block mt-4 bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light text-white px-4 py-3 rounded-lg text-center font-semibold hover:from-brand-dark-hover hover:via-brand-medium-hover hover:to-brand-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hablemos
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}


