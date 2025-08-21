export const siteConfig = {
  name: "Biarai",
  url: "https://www.biarai.com",
  email: "hola@biarai.com",
  phone: "+34 000 000 000",
  socials: {
    linkedin: "https://www.linkedin.com/company/biarai",
    x: "https://x.com/biarai",
  },
  nav: [
    { label: "Servicios", href: "/servicios" },
    { label: "Industrias", href: "/industrias" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Insights", href: "/insights" },
    { label: "Liderazgo", href: "/liderazgo" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Carreras", href: "/carreras" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;


