import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const firstHalf = siteConfig.nav.slice(0, 4);
  const secondHalf = siteConfig.nav.slice(4);

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-brand-pale to-white border-t border-brand-light/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-8 lg:gap-12 grid-cols-1 lg:grid-cols-5 text-sm lg:text-base">
          <div className="space-y-4 lg:space-y-6 lg:col-span-1">
            <div className="font-bold text-xl lg:text-2xl bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">{siteConfig.name}</div>
            <p className="text-gray-700 lg:text-lg leading-relaxed">
              Estrategia, datos e IA para acelerar crecimiento, eficiencia y resiliencia en Pymes.
            </p>
            <div className="flex gap-2 lg:gap-3 flex-wrap">
              <span className="px-3 py-1 lg:px-4 lg:py-2 bg-gradient-to-r from-brand-light to-brand-medium text-white text-xs lg:text-sm rounded-full font-medium">Estrategia</span>
              <span className="px-3 py-1 lg:px-4 lg:py-2 bg-gradient-to-r from-brand-medium to-brand-dark text-white text-xs lg:text-sm rounded-full font-medium">Datos</span>
              <span className="px-3 py-1 lg:px-4 lg:py-2 bg-gradient-to-r from-brand-dark to-brand-medium text-white text-xs lg:text-sm rounded-full font-medium">IA</span>
            </div>
          </div>
          
          {/* Links compactos en mobile, solo para desktop */}
          <div className="hidden lg:block">
            <div className="font-semibold mb-4 lg:mb-6 text-brand-dark text-base lg:text-lg">Servicios</div>
            <ul className="space-y-3 lg:space-y-4">
              {firstHalf.map((item) => (
                <li key={item.href}>
                  <Link className="text-gray-600 hover:text-brand-medium transition-colors font-medium lg:text-lg" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="hidden lg:block">
            <div className="font-semibold mb-4 lg:mb-6 text-brand-dark text-base lg:text-lg">Empresa</div>
            <ul className="space-y-3 lg:space-y-4">
              {secondHalf.map((item) => (
                <li key={item.href}>
                  <Link className="text-gray-600 hover:text-brand-medium transition-colors font-medium lg:text-lg" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="hidden lg:block">
            <div className="font-semibold mb-4 lg:mb-6 text-brand-dark text-base lg:text-lg">Contacto</div>
            <ul className="space-y-3 lg:space-y-4">
              <li>
                <a className="text-gray-600 hover:text-brand-medium transition-colors font-medium lg:text-lg" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-brand-medium transition-colors font-medium lg:text-lg" href={`tel:${siteConfig.phone}`}>
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="hidden lg:block">
            <div className="font-semibold mb-4 lg:mb-6 text-brand-dark text-base lg:text-lg">Redes</div>
            <ul className="space-y-3 lg:space-y-4">
              <li>
                <a className="text-gray-600 hover:text-brand-medium transition-colors font-medium lg:text-lg" href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-brand-medium transition-colors font-medium lg:text-lg" href={siteConfig.socials.x} target="_blank" rel="noopener noreferrer">
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>
          
          {/* Sección compacta solo para mobile */}
          <div className="lg:hidden">
            <div className="space-y-6">
              {/* Contacto directo en mobile */}
              <div>
                <div className="font-semibold mb-3 text-brand-dark text-base">Contacto</div>
                <div className="space-y-2">
                  <a className="block text-gray-600 hover:text-brand-medium transition-colors font-medium" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                  <a className="block text-gray-600 hover:text-brand-medium transition-colors font-medium" href={`tel:${siteConfig.phone}`}>
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              
              {/* Redes sociales */}
              <div>
                <div className="font-semibold mb-3 text-brand-dark text-base">Síguenos</div>
                <div className="flex gap-4">
                  <a className="text-gray-600 hover:text-brand-medium transition-colors font-medium" href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a className="text-gray-600 hover:text-brand-medium transition-colors font-medium" href={siteConfig.socials.x} target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-brand-light/30">
          <div className="text-center text-gray-600 text-sm lg:text-base">
            © {new Date().getFullYear()} <span className="font-semibold bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">{siteConfig.name}</span>. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}


