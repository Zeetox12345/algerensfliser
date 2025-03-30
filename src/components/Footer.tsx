import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-site-gray-500 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AlgerensFliser.dk</h3>
            <p className="mb-4">
              Din guide til rene fliser uden alger. Vi hjælper dig med at finde de bedste løsninger til dine fliser.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hurtige Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-site-green-300 transition-colors">Forside</Link></li>
              <li><a href="#diy" className="hover:text-site-green-300 transition-colors">Sådan gør du</a></li>
              <li><a href="#services" className="hover:text-site-green-300 transition-colors">Professionel Hjælp</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600 mb-6" />
        
        {/* Legal & Disclaimers */}
        <div className="text-sm text-gray-300">
          <p className="mb-2">
            © {currentYear} AlgerensFliser.dk - Alle rettigheder forbeholdes
          </p>
          <p className="mb-4">
            <strong>Affiliate Disclosure:</strong> Nogle links her på siden er affiliate-links, hvilket betyder at vi kan modtage kommission, hvis du klikker på dem og foretager et køb. Dette påvirker ikke vores anbefalinger, som er baseret på grundig research og ekspertise.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
