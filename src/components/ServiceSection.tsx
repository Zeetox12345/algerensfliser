
import React from 'react';
import { Star, Check, Clock, ExternalLink } from 'lucide-react';

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      name: "TOTAL algeservice",
      logo: "/lovable-uploads/aebee434-079a-430f-a932-17e3f95447cb.png",
      rating: 4.9,
      reviews: 142,
      description: "Specialister i algebekæmpelse på alle typer fliser og belægninger. De tilbyder 100% tilfredshedsgaranti og ansvarlig behandling af dine fliser.",
      price: "2750 kr. op til 35 m², efterfølgende 48,40 kr/m²",
      features: [
        "100% tilfredshedsgaranti",
        "Høj kundetilfredshed",
        "Ansvarlig behandling",
        "Professionelt udstyr",
        "Landsdækkende service"
      ],
      cta: "Få gratis tilbud",
      link: "https://totalalgeservice.dk",
      highlight: true
    },
    {
      id: 2,
      name: "JYDSK TAGTEKNIK A/S",
      logo: "/lovable-uploads/aebee434-079a-430f-a932-17e3f95447cb.png",
      rating: 4.7,
      reviews: 98,
      description: "Med over 25 års erfaring tilbyder JYDSK TAGTEKNIK A/S også professionel algerens af fliser til en fordelagtig pris, især ved samtidig algebehandling af tag.",
      price: "Fra 1795 kr. op til 500 m² ved algebehandling af tag",
      features: [
        "Prisgaranti",
        "Over 25 års erfaring",
        "Høj kundetilfredshed",
        "Specialudviklet renseudstyr",
        "Landsdækkende service"
      ],
      cta: "Få gratis tilbud",
      link: "https://jydsktagteknik.dk",
      highlight: false
    },
    {
      id: 3,
      name: "Dansk Fliserens",
      logo: "/lovable-uploads/aebee434-079a-430f-a932-17e3f95447cb.png",
      rating: 4.6,
      reviews: 87,
      description: "Dansk Fliserens tilbyder professionel rensning af fliser med 15 års garanti og gratis prøverens. De matcher også prisen fra andre leverandører.",
      price: "Fra 30 kr/m² uden imprægnering – 46,5 kr/m² med imprægnering",
      features: [
        "15 års garanti",
        "Gratis prøverens",
        "Prismatch",
        "Miljøvenlige produkter",
        "Erfarne fagfolk"
      ],
      cta: "Få gratis tilbud",
      link: "https://danskfliserens.dk",
      highlight: false
    },
    {
      id: 4,
      name: "NUL-ALGER.dk",
      logo: "/lovable-uploads/aebee434-079a-430f-a932-17e3f95447cb.png",
      rating: 4.5,
      reviews: 76,
      description: "NUL-ALGER.dk er specialister i at fjerne alger fra fliser og terrasser med op til 20 års garanti på behandlingen. De tilbyder gratis prøverens så du kan se resultatet.",
      price: "Fra 39 kr/m² uden imprægnering – 63 kr/m² med imprægnering",
      features: [
        "100% virkningsgaranti",
        "Gratis prøverens",
        "Op til 20 års garanti",
        "Miljøcertificeret",
        "Dækker hele Danmark"
      ],
      cta: "Få gratis tilbud",
      link: "https://nul-alger.dk",
      highlight: false
    }
  ];

  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={16} 
          className={i < Math.floor(rating) 
            ? "fill-yellow-400 text-yellow-400" 
            : i < rating 
              ? "fill-yellow-400 text-yellow-400 opacity-50" 
              : "text-gray-300"} 
        />
      );
    }
    return stars;
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Professionel Algerens af Fliser</h2>
          <p className="text-lg">
            Sammenlign de bedste professionelle tjenester til algerens af fliser. Vi har nøje udvalgt de bedste firmaer baseret på kvalitet, pris og kundetilfredshed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02] ${
                service.highlight 
                  ? 'border-2 border-site-green-400 relative' 
                  : 'border border-gray-200'
              }`}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 bg-site-green-400 text-white text-xs font-bold px-3 py-1 rounded-bl">
                  ANBEFALET
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {service.logo && (
                    <img 
                      src={service.logo} 
                      alt={`${service.name} logo`} 
                      className="h-14 mr-4 object-contain" 
                    />
                  )}
                  <h3 className="text-xl font-bold">{service.name}</h3>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderRatingStars(service.rating)}
                  </div>
                  <span className="text-site-gray-300 text-sm">
                    {service.rating} ({service.reviews} anmeldelser)
                  </span>
                </div>
                
                <p className="mb-4">{service.description}</p>
                
                <div className="bg-site-gray-100 p-3 rounded-md mb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Pris:</span>
                    <span className="text-site-green-400 font-bold">{service.price}</span>
                  </div>
                </div>

                <h4 className="font-bold mb-3">Inkluderer:</h4>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={16} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-site-gray-300">
                    <Clock size={14} className="mr-1" />
                    <span>Svar inden for 24 timer</span>
                  </div>
                  <a 
                    href={service.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-site-green-400 hover:underline text-sm flex items-center"
                  >
                    Besøg hjemmeside <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href={service.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 px-4 rounded-md font-semibold transition-colors ${
                      service.highlight 
                        ? 'bg-site-green-400 hover:bg-site-green-500 text-white' 
                        : 'bg-[#0096ff] hover:bg-[#0080e0] text-white'
                    }`}
                  >
                    {service.cta} →
                  </a>
                  <a 
                    href={service.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 px-4 rounded-md font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Læs mere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-site-green-100 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md mb-4">Hvorfor vælge en profesionel service?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={20} />
                  <span>Professionelt udstyr og specialiserede rengøringsmidler giver bedre resultater</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={20} />
                  <span>Effektiv fjernelse af selv genstridige alger uden at beskadige fliserne</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={20} />
                  <span>Langtidsholdbare resultater med professionel efterbehandling og imprægnering</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={20} />
                  <span>Spar tid og besvær - professionelle kan rense store arealer hurtigere og mere effektivt</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-site-green-400 mr-2 shrink-0 mt-1" size={20} />
                  <span>De fleste firmaer tilbyder garanti på deres arbejde</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/d59a99e1-7056-4016-9a76-2ffa1c99eaac.png" 
                    alt="Professionel algerens af fliser - efter" 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-site-green-400 bg-opacity-90 text-white p-2 text-sm text-center">
                    Efter professionel algerens
                  </div>
                </div>
              </div>
              <p className="text-sm text-site-gray-300 mt-2 text-center">Professionel rensning giver markant bedre resultater</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
