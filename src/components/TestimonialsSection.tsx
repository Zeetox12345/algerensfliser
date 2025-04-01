import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Lars Pedersen",
      location: "Roskilde",
      rating: 5,
      comment: "Vi har brugt AlgerensProffen til at rense vores terrasse og indkørsel. Resultatet var utroligt! Fliserne ser ud som nye, og processen var hurtig og nem.",
      service: "AlgerensProffen",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      id: 2,
      name: "Mette Hansen",
      location: "Odense",
      rating: 5,
      comment: "Efter at have prøvet at rense mine fliser selv i årevis, besluttede jeg at hyre professionelle. Jeg kan kun anbefale det! Resultatet er helt fantastisk, og det holder meget længere end mine egne forsøg.",
      service: "FliseRens ApS",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    },
    {
      id: 3,
      name: "Anders Nielsen",
      location: "Aarhus",
      rating: 4,
      comment: "God service og grundig rensning. Vores fliser trængte virkelig til en kærlig hånd, og nu ser terrassen indbydende ud igen. Det var pengene værd.",
      service: "GrønneFliserVæk",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    }
  ];

  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={16} 
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
        />
      );
    }
    return stars;
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Hvad vores kunder siger</h2>
          <p className="text-lg">
            Læs anmeldelser fra tilfredse kunder, der har fået renset deres fliser for alger gennem vores anbefalede tjenester.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name}'s rene fliser`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 relative">
                <Quote className="absolute top-2 right-2 text-site-green-200 opacity-50" size={40} />
                
                <div className="flex mb-4">
                  {renderRatingStars(testimonial.rating)}
                </div>
                
                <p className="italic mb-4">{testimonial.comment}</p>
                
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-site-gray-300">{testimonial.location}</p>
                    <p className="text-sm text-site-green-400">via {testimonial.service}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 font-semibold text-lg">
            Vil du også have professionelt rensede fliser?
          </p>
          <a href="#services" className="btn-primary inline-block">
            Få Tilbud Nu
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
