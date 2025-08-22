import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GlobeWrapper from "@/components/GlobeWrapper";

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
  alternates: {
    canonical: 'https://www.biarai.com',
    languages: {
      'es-MX': 'https://www.biarai.com',
    },
  },
  category: 'business',
  classification: 'Consultoría Estratégica',
  other: {
    'business:contact_data:street_address': 'Ciudad de México',
    'business:contact_data:locality': 'Ciudad de México',
    'business:contact_data:region': 'CDMX',
    'business:contact_data:country_name': 'México',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Biarai" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Biarai" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-gradient-to-tl from-white via-brand-pale to-brand-light">
        <GoogleAnalytics />
        {/* Globe Background */}
        <div className="fixed inset-0 z-0">
          <GlobeWrapper />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
