import React, { useState } from 'react';

const FliseArealSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const openLightbox = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setLightboxOpen(true);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  // Handle key press for Escape key
  const handleKeyDown = (e: React.KeyboardEvent | KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoomLevel < 3) {
      setZoomLevel(zoomLevel + 0.5);
    }
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoomLevel > 1) {
      setZoomLevel(zoomLevel - 0.5);
      // Reset position if fully zoomed out
      if (zoomLevel - 0.5 <= 1) {
        setPosition({ x: 0, y: 0 });
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      e.stopPropagation();
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Listen for keyboard events when component mounts
  React.useEffect(() => {
    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  // Handle clicking the lightbox background to close
  const handleLightboxClick = (e: React.MouseEvent) => {
    // Only close if directly clicking the background and not dragging
    if (e.target === e.currentTarget && !isDragging) {
      closeLightbox();
    }
  };

  // Prevent propagation when clicking on zoomed image
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // If already zoomed in, don't do anything (allow dragging)
    // If not zoomed in, zoom in when clicked
    if (zoomLevel === 1) {
      setZoomLevel(2); // Zoom to 2x when clicking the image
    } else if (zoomLevel > 1) {
      // Reset zoom on second click
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <section id="fliseareal-beregning" className="section bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg mb-6 text-center">Sådan beregner du dit fliseareal før algerens</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="lead mb-6">
              For at få det mest præcise tilbud på algerens af fliser er det vigtigt at kende dit nøjagtige fliseareal. Brug vores guide til at måle dit fliseareal hurtigt og præcist med Google Earth – et gratis og brugervenligt værktøj.
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Guide til opmåling af fliser før algerens</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="rounded-lg shadow-sm border border-gray-200 mb-3 overflow-hidden relative group cursor-pointer" onClick={() => openLightbox('/flisearealguide1.png')}>
                    <img 
                      src="/flisearealguide1.png" 
                      alt="Guide til beregning af fliseareal før algerens trin 1" 
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Oversigt over funktioner til beregning af fliseareal i Google Earth. Nøjagtig opmåling sikrer præcis pris på algerens.
                  </p>
                </div>
                <div>
                  <div className="rounded-lg shadow-sm border border-gray-200 mb-3 overflow-hidden relative group cursor-pointer" onClick={() => openLightbox('/flisearealguide2.png')}>
                    <img 
                      src="/flisearealguide2.png" 
                      alt="Guide til beregning af fliseareal før algerens trin 2" 
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Sådan markerer du præcist dit fliseareal til algerensning ved at forbinde punkter langs flisernes yderkanter.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Adgang til måleværktøjet</h4>
                    <p className="text-gray-700">
                      For at beregne det præcise areal til algerens af fliser, skal du først åbne <a href="https://earth.google.com/web/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Earth Web</a>. Værktøjet virker bedst i Chrome-browseren, som sikrer optimal funktionalitet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Find din adresse</h4>
                    <p className="text-gray-700">
                      Søg efter din adresse i søgefeltet øverst til venstre. Zoom ind på dit fliseareal, indtil du tydeligt kan se alle flisernes kanter, der skal renses for alger.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Aktivér måleværktøjet</h4>
                    <p className="text-gray-700">
                      Klik på måleværktøjet i venstre side af skærmen (se billede 1). Din markør bliver nu til et kryds, klar til at afgrænse flisearealet før algerens.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Markér dit fliseareal</h4>
                    <p className="text-gray-700">
                      Klik på flisekantens startpunkt og fortsæt med at klikke langs kanten for at danne en afgrænsning. Vær præcis – nøjagtige målinger giver den mest korrekte pris på algerens. Afslut ved at klikke på dit første punkt igen for at lukke området.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">5</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Aflæs arealet</h4>
                    <p className="text-gray-700">
                      Dit fliseareal vises nu i m² i boksen til højre. Dette er det areal, der skal bruges til beregning af din pris for algerens af fliserne.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Særlige hensyn ved beregning af fliseareal til algerens</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Adskilte flisearealer:</strong> Har du flere separate fliseområder (f.eks. terrasse, indkørsel og gangsti), mål hvert område for sig og læg arealerne sammen for at få den totale pris på algerens.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Udfordringer ved måling:</strong> Vær opmærksom på at træer, skygger, carporte eller overdækkede terrasser kan gøre det vanskeligt at se flisernes præcise grænser. Zoom godt ind for bedste resultat.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Lodrette flader og trapper:</strong> Google Earth kan ikke måle lodrette fliseflader (fx. trappetrin). Mål disse manuelt med målebånd og læg arealet til dit horisontale fliseareal.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Alternativ måling:</strong> Kender du allerede dit fliseareal eller foretrækker du manuel opmåling, kan du naturligvis bruge målebånd eller tommestok i stedet.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm" 
          onClick={handleLightboxClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="relative max-w-screen-lg max-h-screen-90 p-2">
            {/* Zoom controls */}
            <div className="absolute left-4 top-4 flex flex-col space-y-2 bg-white bg-opacity-80 rounded-md overflow-hidden">
              <button 
                className="p-2 hover:bg-gray-100 transition-colors duration-200"
                onClick={handleZoomIn}
                aria-label="Zoom ind"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <button 
                className="p-2 hover:bg-gray-100 transition-colors duration-200"
                onClick={handleZoomOut}
                aria-label="Zoom ud"
                disabled={zoomLevel <= 1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                </svg>
              </button>
            </div>

            {/* Image container with zoom and drag */}
            <div 
              className={`relative overflow-hidden ${zoomLevel > 1 ? 'cursor-move' : 'cursor-zoom-in'}`}
              style={{ 
                maxWidth: '100vw',
                maxHeight: '90vh' 
              }}
            >
              <img 
                src={currentImage} 
                alt="Forstørret billede af fliseareal guide" 
                className="max-w-full max-h-[90vh] object-contain select-none"
                style={{
                  transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                  transformOrigin: 'center',
                  transition: isDragging ? 'none' : 'transform 0.2s ease',
                }}
                onClick={handleImageClick}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                draggable="false"
              />
            </div>

            <button 
              className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Luk billede"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <p className="absolute bottom-4 left-0 right-0 text-center text-white text-sm bg-black bg-opacity-50 py-1">
              {zoomLevel > 1 
                ? "Tryk ESC for at lukke. Klik på billedet for at zoome ud. Træk for at panorere." 
                : "Tryk ESC eller klik udenfor billedet for at lukke. Klik på billedet for at zoome ind."}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FliseArealSection; 