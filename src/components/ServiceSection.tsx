
import React from 'react';
import ServiceCard from './service/ServiceCard';
import ServiceBenefits from './service/ServiceBenefits';
import { services } from '../data/servicesData';

const ServiceSection = () => {
  return (
    <section id="services" className="section bg-white py-12">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Find professionel algerens af fliser tilbud</h2>
          <p className="text-lg">
            Vi har nøje udvalgt de bedste firmaer til algerens af fliser baseret på kvalitet, 
            kundetilfredshed og pris. Vi anbefaler at indhente minimum 3 tilbud for at sikre 
            den bedste pris og kvalitet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <ServiceBenefits />
      </div>
    </section>
  );
};

export default ServiceSection;
