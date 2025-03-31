import React, { useState } from 'react';
import { ArrowRight, Check, Clock, Shield } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    { id: 1, src: "/lovable-uploads/forefter2.jpeg", alt: "Før og efter algerens" },
    { id: 2, src: "/lovable-uploads/forefter3.jpeg", alt: "Før og efter algerens" },
    { id: 3, src: "/lovable-uploads/forefter4.jpeg", alt: "Før og efter algerens" },
    { id: 4, src: "/lovable-uploads/forefter5.jpeg", alt: "Før og efter algerens" },
    { id: 5, src: "/lovable-uploads/forefter6.jpeg", alt: "Før og efter algerens" },
    { id: 6, src: "/lovable-uploads/forefter7.jpeg", alt: "Før og efter algerens" },
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="section bg-site-green-100 py-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Før og Efter Algerens</h2>
          <p className="text-lg mb-2">
            Se den markante forskel professionel algerens af fliser kan gøre. 
            Alle billeder viser virkelige resultater fra vores anbefalede top-udbydere.
          </p>
          <div className="flex items-center justify-center mt-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md max-w-xl relative">
              {/* Discount badge */}
              <div className="absolute -top-4 -right-4 bg-red-500 text-white font-bold py-2 px-4 rounded-full transform rotate-12 shadow-lg z-10">
                SPAR 40%
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <img 
                  src="/lovable-uploads/total_algeservice.png" 
                  alt="TOTAL algeservice logo" 
                  className="h-16 mb-3 md:mb-0 md:mr-4"
                />
                <div className="text-center md:text-left">
                  <p className="font-semibold text-site-gray-500">
                    Billederne viser arbejde udført af
                  </p>
                  <p className="text-xl font-bold text-site-green-400 mb-2">
                    TOTAL algeservice
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <div className="bg-site-green-100 text-site-green-600 px-2 py-1 rounded-md text-xs flex items-center">
                      <Shield size={12} className="mr-1" /> 20 års garanti med aftale
                    </div>
                    <div className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-xs flex items-center">
                      <Clock size={12} className="mr-1" /> Tidsbegrænset tilbud
                    </div>
                  </div>
                  <a 
                    href="https://ion.totalalgeservice.dk/t/t?a=1859537971&as=1964307871&t=2&tk=1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center text-sm"
                  >
                    Få et gratis tilbud <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              onClick={() => openLightbox(image.src)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-auto"
              />
              <div className="bg-white p-2 text-xs text-center text-site-gray-400">
                Arbejde udført af TOTAL algeservice
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-5xl max-h-full">
              <button 
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center"
                onClick={closeLightbox}
              >
                ✕
              </button>
              <img 
                src={selectedImage}
                alt="Forstørret billede" 
                className="max-w-full max-h-[90vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-3 text-white text-center">
                <p>Arbejde udført af TOTAL algeservice - <a href="https://ion.totalalgeservice.dk/t/t?a=1859537971&as=1964307871&t=2&tk=1" target="_blank" rel="noopener noreferrer" className="text-site-green-400 hover:underline">Få et gratis tilbud</a></p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
            <div className="inline-block bg-red-500 text-white font-bold py-2 px-4 rounded-md mb-4">
              SPAR 40% på fliserens
            </div>
            <h3 className="text-xl font-bold mb-4">Professionel fliserens med langvarige resultater</h3>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={18} className="text-site-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>Professionel og godkendt fliserens der fjerner selv genstridig snavs</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-site-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>Effektiv fjernelse af mos, alger og flisepest - helt uden besvær</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-site-green-400 mr-2 mt-1 flex-shrink-0" />
                <span><strong>20 års garanti</strong> med en vedligeholdelsesaftale</span>
              </li>
            </ul>
            <a 
              href="https://ion.totalalgeservice.dk/t/t?a=1859537971&as=1964307871&t=2&tk=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              Få et gratis tilbud i dag <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection; 