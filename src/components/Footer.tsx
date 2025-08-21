import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4 text-sm">
          <div className="space-y-4">
            <div className="font-bold text-xl text-gray-900">{siteConfig.name}</div>
            <p className="text-gray-600">
              Estrategia, datos e IA para acelerar crecimiento, eficiencia y resiliencia en Pymes.
            </p>
            <div className="flex gap-3">
              <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full font-medium">Estrategia</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">Datos</span>
              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium">IA</span>
            </div>
          </div>
          
          <div>
            <div className="font-semibold mb-4 text-gray-900">Navegación</div>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link className="text-gray-600 hover:text-blue-600 font-medium" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="font-semibold mb-4 text-gray-900">Contacto</div>
            <ul className="space-y-3">
              <li>
                <a className="text-gray-600 hover:text-blue-600 font-medium" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-600 font-medium" href={`tel:${siteConfig.phone}`}>
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <div className="font-semibold mb-4 text-gray-900">Redes</div>
            <ul className="space-y-3">
              <li>
                <a className="text-gray-600 hover:text-blue-600 font-medium" href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-900 font-medium" href={siteConfig.socials.x} target="_blank" rel="noopener noreferrer">
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">{siteConfig.name}</span>. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}


