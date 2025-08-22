import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/servicios", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/servicios/deal-advisory", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/servicios/mercados", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/servicios/operaciones-ti", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/industrias", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/proyectos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/insights", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/liderazgo", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/carreras", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/nosotros", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contacto", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/privacidad", priority: 0.3, changeFrequency: "yearly" as const },
  ].map(
    (route) => ({ 
      url: `${siteConfig.url}${route.path}`, 
      changeFrequency: route.changeFrequency, 
      priority: route.priority,
      lastModified: new Date()
    })
  );
  return routes;
}


