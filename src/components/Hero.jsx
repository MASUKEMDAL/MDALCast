import React from 'react';
import { Play, Download, Share2, Headphones } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with MDAL logo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/public/image.png" 
            alt="MDAL Background" 
            className="w-full h-full object-cover filter brightness-0 invert opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          {/* Main Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/public/image.png" 
                alt="MDAL CAST" 
                className="h-32 w-32 md:h-40 md:w-40 object-contain filter brightness-0 invert animate-pulse"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-white opacity-30 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            MDAL <span className="text-gray-400">CAST</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light max-w-3xl mx-auto">
            O podcast oficial do <span className="font-bold text-white">UNIVERSO MDAL</span>
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Conversas profundas sobre empreendedorismo, fitness, cultura pop e muito mais
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('episodes')}
              className="group flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-white/20 hover:scale-105"
            >
              <Play size={24} className="group-hover:scale-110 transition-transform duration-200" />
              <span>Ouvir Agora</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('universo')}
              className="group flex items-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-bold text-lg hover:scale-105"
            >
              <Headphones size={24} className="group-hover:scale-110 transition-transform duration-200" />
              <span>Explorar Universo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">50+</div>
              <div className="text-gray-400 font-medium">Episódios</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">100K+</div>
              <div className="text-gray-400 font-medium">Ouvintes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">5</div>
              <div className="text-gray-400 font-medium">Negócios MDAL</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">2025</div>
              <div className="text-gray-400 font-medium">Desde</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;