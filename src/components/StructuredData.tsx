import Script from 'next/script';

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'service' | 'article';
  data?: any;
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
    };

    switch (type) {
      case 'organization':
        return {
          ...baseData,
          "@type": "Organization",
          "name": "Biarai",
          "legalName": "Biarai Consultoría Estratégica",
          "description": "Consultoría estratégica especializada en Pymes mexicanas. Deal Advisory, Nuevos Mercados, Operaciones y TI.",
          "url": "https://www.biarai.com",
          "logo": "https://www.biarai.com/logo.png",
          "foundingDate": "2024",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+52-55-XXXX-XXXX",
            "contactType": "customer service",
            "availableLanguage": ["Spanish", "English"],
            "areaServed": "MX"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "MX",
            "addressRegion": "Ciudad de México",
            "addressLocality": "Ciudad de México"
          },
          "sameAs": [
            "https://www.linkedin.com/company/biarai"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 19.4326,
              "longitude": -99.1332
            },
            "geoRadius": "500000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Consultoría",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Deal Advisory",
                  "description": "Servicios de asesoría en transacciones, due diligence y valuación empresarial"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Expansión a Nuevos Mercados",
                  "description": "Estrategias de crecimiento y entrada a nuevos mercados geográficos"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Operaciones y TI",
                  "description": "Optimización operacional y transformación tecnológica"
                }
              }
            ]
          }
        };

      case 'website':
        return {
          ...baseData,
          "@type": "WebSite",
          "name": "Biarai",
          "url": "https://www.biarai.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.biarai.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Biarai"
          }
        };

      case 'service':
        return {
          ...baseData,
          "@type": "ProfessionalService",
          "name": data?.name || "Consultoría Estratégica",
          "description": data?.description || "Servicios de consultoría estratégica para Pymes",
          "provider": {
            "@type": "Organization",
            "name": "Biarai"
          },
          "areaServed": "MX",
          "serviceType": "Business Consulting",
          ...data
        };

      default:
        return { ...baseData, ...data };
    }
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
}