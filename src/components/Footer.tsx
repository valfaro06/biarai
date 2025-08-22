import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const firstHalf = siteConfig.nav.slice(0, 4);
  const secondHalf = siteConfig.nav.slice(4);

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-brand-pale to-white border-t border-brand-light/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-5 text-sm">
          <div className="space-y-4">
            <div className="font-bold text-xl bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">{siteConfig.name}</div>
            <p className="text-gray-700">
              Estrategia, datos e IA para acelerar crecimiento, eficiencia y resiliencia en Pymes.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="px-2 py-1 bg-gradient-to-r from-brand-light to-brand-medium text-white text-xs rounded-full font-medium">Estrategia</span>
              <span className="px-2 py-1 bg-gradient-to-r from-brand-medium to-brand-dark text-white text-xs rounded-full font-medium">Datos</span>
              <span className="px-2 py-1 bg-gradient-to-r from-brand-dark to-brand-medium text-white text-xs rounded-full font-medium">IA</span>
            </div>
          </div>
          
          <div>
            <div className="font-semibold mb-4 text-brand-dark">Servicios</div>
            <ul className="space-y-3">
              {firstHalf.map((item) => (
                <li key={item.href}>
                  <Link className="text-gray-600 hover:text-brand-medium transition-colors font-medium" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="font-semibold mb-4 text-brand-dark">Empresa</div>
            <ul className="space-y-3">
              {secondHalf.map((item) => (
                <li key={item.href}>
                  <Link className="text-gray-600 hover:text-brand-medium transition-colors font-medium" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="font-semibold mb-4 text-brand-dark">Contacto</div>
            <ul className="space-y-3">
              <li>
                <a className="text-gray-600 hover:text-brand-medium transition-colors font-medium" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-brand-medium transition-colors font-medium" href={`tel:${siteConfig.phone}`}>
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <div className="font-semibold mb-4 text-brand-dark">Redes</div>
            <ul className="space-y-3">
              <li>
                <a className="text-gray-600 hover:text-brand-medium transition-colors font-medium" href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-brand-medium transition-colors font-medium" href={siteConfig.socials.x} target="_blank" rel="noopener noreferrer">
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-brand-light/30">
          <div className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} <span className="font-semibold bg-gradient-to-tl from-brand-dark via-brand-medium to-brand-light bg-clip-text text-transparent">{siteConfig.name}</span>. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}


