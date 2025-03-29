
import React from 'react';
import ServiceCard from './service/ServiceCard';
import ServiceBenefits from './service/ServiceBenefits';
import { services } from '../data/servicesData';

const ServiceSection = () => {
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
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <ServiceBenefits />
      </div>
    </section>
  );
};

export default ServiceSection;
