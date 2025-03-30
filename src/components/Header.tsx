
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-raleway text-2xl font-bold text-site-green-400">
          AlgerensFliser.dk
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-site-gray-500"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Luk menu' : 'Åbn menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="font-semibold hover:text-site-green-400 transition-colors">
            Forside
          </Link>
          <a href="#diy" className="font-semibold hover:text-site-green-400 transition-colors">
            Sådan gør du
          </a>
          <a href="#services" className="font-semibold hover:text-site-green-400 transition-colors">
            Professionel Hjælp
          </a>
          <a href="#about" className="font-semibold hover:text-site-green-400 transition-colors">
            Om Os
          </a>
          <a href="#services" className="btn-primary">
            Få Tilbud Nu
          </a>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md">
            <nav className="container flex flex-col py-4 space-y-4">
              <Link to="/" className="font-semibold hover:text-site-green-400 transition-colors">
                Forside
              </Link>
              <a href="#diy" className="font-semibold hover:text-site-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Sådan gør du
              </a>
              <a href="#services" className="font-semibold hover:text-site-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Professionel Hjælp
              </a>
              <a href="#about" className="font-semibold hover:text-site-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Om Os
              </a>
              <a href="#services" className="btn-primary inline-block text-center" onClick={() => setIsMenuOpen(false)}>
                Få Tilbud Nu
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
