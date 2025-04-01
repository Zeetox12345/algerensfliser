import React from 'react';
import { ArrowRight } from 'lucide-react';
import ServiceCard from './service/ServiceCard';
import { services } from '../data/servicesData';

const HeroSection = () => {
  return (
    <section className="relative bg-plain-light">
      
      <div className="container section pt-2 pb-0 lg:pt-8 lg:pb-0">
        {/* Service cards - highlight section - MOVED TO TOP */}
        <div id="services" className="py-0.5">
          <div className="text-center max-w-3xl mx-auto mb-1">
            <h2 className="heading-md mb-0.5">Få De Bedste Tilbud På Algerens Af Fliser</h2>
            <p className="mb-0.5 text-base">
              Vi har nøje udvalgt de bedste firmaer baseret på kvalitet, 
              kundetilfredshed og pris. Indhent minimum 3 tilbud.
            </p>
            <p className="text-site-gray-300 text-xs mb-1">
              Alle firmaer er vurderet ud fra over 400 kundeanmeldelser og tilbyder gratis prisoverslag
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} service={service} compactView={true} />
            ))}
          </div>
          
          <div className="mt-1 text-center">
            <p className="text-xs text-site-gray-300 italic">
              * Priserne er vejledende og kan variere afhængigt af fliseområdets tilstand og størrelse
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
          {/* Hero content */}
          <div className="z-10">
            <h1 className="heading-xl mb-6 text-site-gray-500">
              <span className="text-site-green-400">Algerens Fliser:</span> Få Smukke og Rene Fliser Hele Året
            </h1>
            <p className="text-lg mb-8">
              Er dine fliser plaget af grønne alger? Vi hjælper dig med at fjerne algerne effektivt og forebygge, at de kommer tilbage. Få professionel vejledning eller gør det selv med vores guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
              <div className="relative bg-gray-200 rounded overflow-hidden">
                <div className="grid grid-cols-2 gap-1">
                  <div>
                    <img 
                      src="/lovable-uploads/cf7db069-ac45-4706-83aa-768e8c5c3fbe.png" 
                      alt="Fliser med alger (før)" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/d59a99e1-7056-4016-9a76-2ffa1c99eaac.png" 
                      alt="Rene fliser uden alger (efter)" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
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

        {/* New SEO optimized content section */}
        <div className="mt-4 bg-white p-8 rounded-lg shadow-md">
          <h2 className="heading-md mb-4">Hvorfor algerens af fliser er afgørende for din bolig</h2>
          <p className="mb-4">
            Har dine fliser udviklet grimme, glatte og klæbrige algebelægninger? Dette er ikke blot et æstetisk problem. Professionel <strong>algerens af fliser</strong> er afgørende for at bevare dit fliseareal i god stand og forhindre kostbare skader.
          </p>
          <p className="mb-4">
            Når alger får lov til at etablere sig på dine <strong>fliser</strong>, holder de på fugt og skaber et ideelt miljø for mos og ukrudt. Rødderne trænger ned mellem fliserne og giver adgang for fugt til gruslaget nedenunder. Dette kan føre til at fliserne bliver ustabile, begynder at vippe eller endda revner ved frostsprængninger om vinteren.
          </p>
          <p className="mb-4">
            Regelmæssig <strong>algerens af fliser</strong> er derfor ikke kun for udseendets skyld – det er en nødvendig vedligeholdelse der forlænger levetiden på dine flisebelægninger betydeligt og sparer dig for dyre reparationer eller udskiftninger.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-plain-light p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Fordele ved professionel algerens af fliser</h3>
              <ul className="space-y-2">
                <li>✓ Effektiv fjernelse af selv genstridige alger</li>
                <li>✓ Specialudstyr og professionelle rensemidler</li>
                <li>✓ Imprægnering forlænger effekten markant</li>
                <li>✓ Forebygger skader på flisebelægningen</li>
                <li>✓ Spar tid og besvær med DIY-løsninger</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Find det bedste tilbud på algerens af fliser</h3>
              <p>
                Vi anbefaler altid at indhente mindst 3 forskellige tilbud på <strong>algerens af fliser</strong>. Dette giver dig et bedre overblik over prisniveauet og de forskellige metoder, firmaerne anvender.
              </p>
              <p className="mt-2">
                Se vores anbefalede firmaer ovenfor – de er nøje udvalgt baseret på kundeanmeldelser, effektivitet og prisniveau. Husk altid at bede om imprægnering efter rensningen for at forlænge effekten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
