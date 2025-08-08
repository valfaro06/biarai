import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/servicios",
    "/servicios/deal-advisory",
    "/servicios/mercados",
    "/servicios/operaciones-ti",
    "/industrias",
    "/casos",
    "/insights",
    "/liderazgo",
    "/nosotros",
    "/proposito",
    "/talento",
    "/diagnostico",
    "/contacto",
    "/privacidad",
  ].map(
    (path) => ({ url: `${siteConfig.url}${path}`, changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.7 })
  );
  return routes;
}


