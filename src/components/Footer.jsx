import React from 'react';
import { Instagram, Youtube, Spotify, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, url: '#', name: 'Instagram' },
    { icon: <Youtube size={20} />, url: '#', name: 'YouTube' },
    { icon: <Spotify size={20} />, url: '#', name: 'Spotify' },
    { icon: <Twitter size={20} />, url: '#', name: 'Twitter' }
  ];

  const quickLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Universo MDAL', href: '#universo' },
    { name: 'Episódios', href: '#episodes' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' }
  ];

  const mdalBusinesses = [
    { name: 'MDAL Loja', href: '#' },
    { name: 'MDAL Hamburgueria', href: '#' },
    { name: 'MDAL Manga', href: '#' },
    { name: 'MDAL Fitness', href: '#' },
    { name: 'MDAL Consultoria', href: '#' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/public/image.png" 
                alt="MDAL CAST" 
                className="h-12 w-12 object-contain filter brightness-0 invert"
              />
              <div>
                <h3 className="text-2xl font-black text-white">MDAL CAST</h3>
                <p className="text-xs text-gray-400 font-medium">UNIVERSO MDAL</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              O podcast oficial do universo MDAL. Conversas que transformam perspectivas 
              sobre empreendedorismo, fitness, tecnologia e cultura.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* MDAL Businesses */}
          <div>
            <h4 className="text-white font-bold mb-6">Universo MDAL</h4>
            <ul className="space-y-3">
              {mdalBusinesses.map((business, index) => (
                <li key={index}>
                  <a
                    href={business.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {business.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-400">contato@mdalcast.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-400">+55 (11) 99999-9999</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-3">Newsletter</h5>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gray-500"
                />
                <button className="bg-white text-black px-4 py-2 rounded font-semibold text-sm hover:bg-gray-200 transition-colors duration-200">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} MDAL CAST. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;