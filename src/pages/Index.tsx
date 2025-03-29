
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import DIYSection from '../components/DIYSection';
import ServiceSection from '../components/ServiceSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Add meta description and title
    document.title = "AlgerensFliser.dk – Din Guide til Rene Fliser Uden Alger";
  }, []);

  return (
    <>
      <Helmet>
        <title>AlgerensFliser.dk – Din Guide til Rene Fliser Uden Alger</title>
        <meta name="description" content="Lær alt om algerens af fliser, DIY-metoder, og find de bedste firmaer. Få smukke, algefri fliser nemt og billigt!" />
        <meta name="keywords" content="algerens fliser, rense alger fra fliser, fliserens, algefjerner, fliser uden alger" />
        <link rel="canonical" href="https://algerensfliser.dk/" />

        {/* Open Graph tags */}
        <meta property="og:title" content="AlgerensFliser.dk – Din Guide til Rene Fliser Uden Alger" />
        <meta property="og:description" content="Lær alt om algerens af fliser, DIY-metoder, og find de bedste firmaer der kan hjælpe dig." />
        <meta property="og:url" content="https://algerensfliser.dk/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb" />
        <meta property="og:locale" content="da_DK" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <HeroSection />
          <DIYSection />
          <ServiceSection />
          <TestimonialsSection />
          <FAQSection />
        </main>
        
        <Footer />

        {/* Schema markup for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AlgerensFliser.dk",
            "url": "https://algerensfliser.dk/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://algerensfliser.dk/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Algerens af Fliser",
            "serviceType": "Rengøring",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "DKK",
              "priceRange": "$$"
            },
            "areaServed": "Danmark"
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Hvor ofte bør jeg rense mine fliser for alger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Det anbefales at rense fliser for alger mindst én gang om året, men det kan variere afhængigt af forskellige faktorer som placering, skygge, fugtighed og vejrforhold."
                }
              },
              {
                "@type": "Question",
                "name": "Er algerens af fliser miljøvenligt?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Det afhænger af de produkter, der bruges. Traditionelle algerensemidler indeholder ofte kemikalier, der kan være skadelige for miljøet. Vi anbefaler at vælge miljøvenlige alternativer."
                }
              }
            ]
          })}
        </script>
      </div>
    </>
  );
};

export default Index;
