import React from 'react';
import { Mic, Users, Target, Award, TrendingUp, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Mic size={24} />, number: "50+", label: "Episódios Publicados" },
    { icon: <Users size={24} />, number: "100K+", label: "Ouvintes Mensais" },
    { icon: <Target size={24} />, number: "5", label: "Negócios MDAL" },
    { icon: <Award size={24} />, number: "2", label: "Prêmios Recebidos" }
  ];

  const values = [
    {
      icon: <TrendingUp size={32} />,
      title: "Crescimento",
      description: "Acreditamos no desenvolvimento constante, tanto pessoal quanto profissional. Cada episódio é uma oportunidade de evolução."
    },
    {
      icon: <Heart size={32} />,
      title: "Autenticidade",
      description: "Conversas reais, sem roteiro. Nossos convidados compartilham experiências genuínas e aprendizados verdadeiros."
    },
    {
      icon: <Users size={32} />,
      title: "Comunidade",
      description: "Construímos uma comunidade engajada que cresce junto conosco, compartilhando conhecimento e experiências."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            SOBRE O <span className="text-gray-400">MDAL CAST</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais que um podcast, somos uma plataforma de transformação e conhecimento
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Nossa História</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  O MDAL CAST nasceu da visão de criar um espaço onde empreendedores, atletas, 
                  artistas e pensadores pudessem compartilhar suas jornadas de forma autêntica e inspiradora.
                </p>
                <p>
                  Desde 2025, temos sido a voz do ecossistema MDAL, conectando pessoas através de 
                  conversas profundas sobre negócios, fitness, tecnologia e cultura pop.
                </p>
                <p>
                  Cada episódio é cuidadosamente produzido para entregar valor real aos nossos ouvintes, 
                  sempre com a qualidade e autenticidade que definem a marca MDAL.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-4">Nossa Missão</h4>
              <p className="text-gray-300 leading-relaxed">
                Democratizar o acesso ao conhecimento de alta qualidade através de conversas 
                inspiradoras que transformam perspectivas e impulsionam o crescimento pessoal e profissional.
              </p>
            </div>
          </div>

          {/* Right Column - Host Image & Info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src="/public/image.png" 
                      alt="Host MDAL" 
                      className="w-20 h-20 object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Equipe MDAL</h4>
                  <p className="text-gray-400">Hosts & Produtores</p>
                </div>
                <p className="text-gray-300 text-center leading-relaxed">
                  Uma equipe apaixonada por conteúdo de qualidade, sempre em busca das melhores 
                  histórias e insights para compartilhar com nossa comunidade.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Nossos Valores</h4>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                    <div className="text-gray-400 mt-1">
                      {value.icon}
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-2">{value.title}</h5>
                      <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                <div className="text-gray-400 mb-4 flex justify-center group-hover:text-white transition-colors duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Faça Parte da Nossa Jornada
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Acompanhe nossos episódios, participe da comunidade e seja parte da transformação 
            que estamos construindo juntos no universo MDAL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all duration-300 hover:scale-105">
              Seguir no Spotify
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
              Inscrever-se no YouTube
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;