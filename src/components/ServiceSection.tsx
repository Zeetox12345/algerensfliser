
import React from 'react';
import { Star, Check, Clock, ExternalLink } from 'lucide-react';

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      name: "AlgerensProffen",
      rating: 4.9,
      reviews: 142,
      description: "Specialister i algebekæmpelse på alle typer fliser og belægninger. Vi anvender miljøvenlige produkter og giver 2 års garanti på behandlingen.",
      price: "Fra 55 kr/m²",
      features: [
        "Gratis besigtigelse og tilbud",
        "Miljøvenlige rensemidler",
        "2 års garanti på behandlingen",
        "Hurtig service - ofte inden for 48 timer",
        "Landsdækkende service"
      ],
      cta: "Få tilbud nu",
      link: "https://algerensprofferne.dk",
      highlight: true
    },
    {
      id: 2,
      name: "FliseRens ApS",
      rating: 4.7,
      reviews: 98,
      description: "Professionel rensning af fliser, terrasser og indkørsler. Vi er eksperter i at fjerne genstridige alger og mos med specialudviklet udstyr.",
      price: "Fra 60 kr/m²",
      features: [
        "Online booking",
        "Specialudviklet renseudstyr",
        "1 års garanti",
        "Weekend-service uden pristillæg",
        "Hele Sjælland og Fyn"
      ],
      cta: "Book vurdering",
      link: "https://fliserens.dk",
      highlight: false
    },
    {
      id: 3,
      name: "GrønneFliserVæk",
      rating: 4.5,
      reviews: 76,
      description: "Familievirksomhed med fokus på grundig og skånsom algerens. Vi efterbehandler altid med imprægnering for langvarig beskyttelse.",
      price: "Fra 65 kr/m²",
      features: [
        "Både rens og imprægnering",
        "Miljøcertificeret",
        "Gratis efterkontrol",
        "Betalingsordninger tilbydes",
        "Dækker Jylland og Fyn"
      ],
      cta: "Få pristilbud",
      link: "https://gronnefliservaek.dk",
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
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
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                
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

                <a 
                  href={service.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-6 rounded-md font-semibold transition-colors ${
                    service.highlight 
                      ? 'bg-site-green-400 hover:bg-site-green-500 text-white' 
                      : 'bg-white hover:bg-gray-100 text-site-green-400 border border-site-green-400'
                  }`}
                >
                  {service.cta}
                </a>
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
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                alt="Professionel algerens af fliser" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-sm text-site-gray-300 mt-2 text-center">Professionel rensning giver markant bedre resultater</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
