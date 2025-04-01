import React from 'react';
import { Check } from 'lucide-react';

const ServiceBenefits = () => {
  return (
    <div className="bg-plain-light p-6 rounded-lg">
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
  );
};

export default ServiceBenefits;
