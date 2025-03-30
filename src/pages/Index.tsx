import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import DIYSection from '../components/DIYSection';
import ServiceSection from '../components/ServiceSection';
import FAQSection from '../components/FAQSection';
import MethodsSection from '../components/MethodsSection';
import GallerySection from '../components/GallerySection';
import FliseArealSection from '../components/FliseArealSection';
import EnvironmentalSection from '../components/EnvironmentalSection';
import TileTypesSection from '../components/TileTypesSection';
import DIYvsProSection from '../components/DIYvsProSection';
import SeasonalSection from '../components/SeasonalSection';
import LocalRulesSection from '../components/LocalRulesSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Add meta description and title
    document.title = "Algerens Fliser 2025 | Din ultimative guide til rene fliser!";
  }, []);

  return (
    <>
      <Helmet>
        <title>Algerens Fliser 2025 | Din ultimative guide til rene fliser!</title>
        <meta name="description" content="Beskyt dine fliser mod alger og skab smukke, holdbare udearealer. Få gratis tilbud på professionel rens, se gør-det-selv tips og sammenlign produkter. Klik her – du vil ikke fortryde det!" />
        <meta name="keywords" content="algerens fliser, rense alger fra fliser, fliserens, algefjerner, fliser uden alger" />
        <link rel="canonical" href="https://algerensfliser.dk/" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Algerens Fliser 2025 | Din ultimative guide til rene fliser!" />
        <meta property="og:description" content="Beskyt dine fliser mod alger og skab smukke, holdbare udearealer. Få gratis tilbud på professionel rens, se gør-det-selv tips og sammenlign produkter." />
        <meta property="og:url" content="https://algerensfliser.dk/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb" />
        <meta property="og:locale" content="da_DK" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <HeroSection />
          <ServiceSection />
          <DIYSection />
          <MethodsSection />
          <GallerySection />
          <FliseArealSection />
          <EnvironmentalSection />
          <TileTypesSection />
          <DIYvsProSection />
          <SeasonalSection />
          <LocalRulesSection />
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
