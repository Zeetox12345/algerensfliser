
import React from 'react';
import ServiceBenefits from './service/ServiceBenefits';

const ServiceSection = () => {
  return (
    <section className="section bg-white py-12">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Fordele ved professionel algerens af fliser</h2>
          <p className="text-lg">
            Professionel algerens af fliser giver ikke kun et flottere resultat, men forlænger også 
            levetiden på dine fliser markant. Nedenfor kan du se de vigtigste fordele ved at vælge 
            en professionel service.
          </p>
        </div>

        <ServiceBenefits />
      </div>
    </section>
  );
};

export default ServiceSection;
