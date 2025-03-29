
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-site-green-100">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2397c73f' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="container section py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="z-10">
            <h1 className="heading-xl mb-6 text-site-gray-500">
              <span className="text-site-green-400">Algerens Fliser:</span> Få Smukke og Rene Fliser Hele Året
            </h1>
            <p className="text-lg mb-8">
              Er dine fliser plaget af grønne alger? Vi hjælper dig med at fjerne algerne effektivt og forebygge, at de kommer tilbage. Få professionel vejledning eller gør det selv med vores guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary flex items-center justify-center">
                Få Professionel Hjælp <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#diy" className="btn-secondary flex items-center justify-center">
                Gør-Det-Selv Guide
              </a>
            </div>
          </div>

          {/* Hero image - before and after comparison */}
          <div className="relative">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="relative bg-gray-200 rounded">
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
                  alt="Rene fliser uden alger" 
                  className="w-full h-auto rounded"
                />
                
                {/* Before/After label */}
                <div className="absolute bottom-0 left-0 w-full bg-site-green-400 bg-opacity-90 text-white p-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">FØR</span>
                    <span className="font-semibold">EFTER</span>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold">Bemærkelsesværdig forskel</h3>
                <p className="text-sm text-site-gray-300">Resultat efter professionel algerens af fliser</p>
              </div>
            </div>

            {/* Trust badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-full shadow-lg hidden lg:flex items-center justify-center h-24 w-24">
              <div className="text-center">
                <div className="font-bold text-site-green-400 text-xl">100%</div>
                <div className="text-xs font-semibold">TILFREDSHEDS-<br/>GARANTI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
