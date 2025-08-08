import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Biarai - Consultoría Estratégica para Pymes en México",
    template: "%s | Biarai"
  },
  description: "Consultoría estratégica que aplica el rigor de grandes consultoras a la realidad de Pymes mexicanas. Deal Advisory, Nuevos Mercados, Operaciones y TI.",
  keywords: [
    "consultoría estratégica",
    "pymes méxico",
    "deal advisory",
    "nuevos mercados",
    "operaciones",
    "transformación digital",
    "due diligence",
    "valuación empresas",
    "expansión empresarial"
  ],
  authors: [{ name: "Biarai" }],
  creator: "Biarai",
  publisher: "Biarai",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.biarai.com",
    title: "Biarai - Consultoría Estratégica para Pymes en México",
    description: "Consultoría estratégica que aplica el rigor de grandes consultoras a la realidad de Pymes mexicanas.",
    siteName: "Biarai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biarai - Consultoría Estratégica para Pymes en México",
    description: "Consultoría estratégica que aplica el rigor de grandes consultoras a la realidad de Pymes mexicanas.",
  },
  verification: {
    google: "google-site-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
