import React from 'react';
import { ShoppingBag, Utensils, BookOpen, Dumbbell, Users, ExternalLink, ArrowRight } from 'lucide-react';

const UniversoMDAL = () => {
  const businesses = [
    {
      icon: <ShoppingBag size={32} />,
      title: "MDAL LOJA",
      description: "Moda streetwear e lifestyle com a identidade única MDAL",
      features: ["Roupas exclusivas", "Acessórios premium", "Edições limitadas"],
      color: "from-gray-600 to-gray-800",
      link: "#"
    },
    {
      icon: <Utensils size={32} />,
      title: "MDAL HAMBURGUERIA",
      description: "Experiência gastronômica única com sabores autorais",
      features: ["Hambúrguers artesanais", "Ambiente diferenciado", "Delivery premium"],
      color: "from-gray-700 to-gray-900",
      link: "#"
    },
    {
      icon: <BookOpen size={32} />,
      title: "MDAL MANGA",
      description: "Plataforma digital para mangás e cultura japonesa",
      features: ["Mangás exclusivos", "Comunidade ativa", "Conteúdo original"],
      color: "from-gray-500 to-gray-700",
      link: "#"
    },
    {
      icon: <Dumbbell size={32} />,
      title: "MDAL FITNESS",
      description: "App completo para transformação física e mental",
      features: ["Treinos personalizados", "Acompanhamento nutricional", "Comunidade fitness"],
      color: "from-gray-800 to-black",
      link: "#"
    },
    {
      icon: <Users size={32} />,
      title: "MDAL CONSULTORIA",
      description: "Consultoria empresarial e desenvolvimento pessoal",
      features: ["Estratégia de negócios", "Mentoria executiva", "Crescimento pessoal"],
      color: "from-gray-600 to-gray-900",
      link: "#"
    }
  ];

  return (
    <section id="universo" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            UNIVERSO <span className="text-gray-400">MDAL</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Conheça todos os negócios que fazem parte do ecossistema MDAL. 
            Cada empresa representa nossa visão de inovação e excelência.
          </p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Businesses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${business.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {business.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {business.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {business.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {business.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href={business.link}
                  className="inline-flex items-center text-white font-semibold group-hover:text-gray-200 transition-colors duration-300"
                >
                  <span>Explorar</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Faça Parte do Universo MDAL
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Acompanhe todas as novidades, lançamentos e conteúdos exclusivos do ecossistema MDAL. 
            Seja o primeiro a saber de tudo que está acontecendo.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-2xl">
            Inscrever-se nas Novidades
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniversoMDAL;