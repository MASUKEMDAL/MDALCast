import React, { useState, useEffect } from 'react';
import { Menu, X, Mic, Play, Users, Mail, Info } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <img 
                src="/public/image.png" 
                alt="MDAL CAST" 
                className="h-12 w-12 object-contain filter brightness-0 invert"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-white opacity-20 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">MDAL CAST</h1>
              <p className="text-xs text-gray-400 font-medium">UNIVERSO MDAL</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              <Play size={16} />
              <span>Início</span>
            </button>
            <button 
              onClick={() => scrollToSection('universo')}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              <Users size={16} />
              <span>Universo MDAL</span>
            </button>
            <button 
              onClick={() => scrollToSection('episodes')}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              <Mic size={16} />
              <span>Episódios</span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              <Info size={16} />
              <span>Sobre</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-200 font-semibold"
            >
              <Mail size={16} />
              <span>Contato</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
            <nav className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-3 w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2"
              >
                <Play size={20} />
                <span className="font-medium">Início</span>
              </button>
              <button 
                onClick={() => scrollToSection('universo')}
                className="flex items-center space-x-3 w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2"
              >
                <Users size={20} />
                <span className="font-medium">Universo MDAL</span>
              </button>
              <button 
                onClick={() => scrollToSection('episodes')}
                className="flex items-center space-x-3 w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2"
              >
                <Mic size={20} />
                <span className="font-medium">Episódios</span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-3 w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2"
              >
                <Info size={20} />
                <span className="font-medium">Sobre</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-3 w-full text-left bg-white text-black px-4 py-3 rounded-lg hover:bg-gray-200 transition-all duration-200 font-semibold mt-4"
              >
                <Mail size={20} />
                <span>Contato</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;