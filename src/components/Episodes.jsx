import React, { useState } from 'react';
import { Play, Pause, Clock, Calendar, Headphones, Filter, Search } from 'lucide-react';

const Episodes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [playingEpisode, setPlayingEpisode] = useState(null);

  const categories = [
    { id: 'all', name: 'Todos', count: 50 },
    { id: 'business', name: 'Negócios', count: 15 },
    { id: 'fitness', name: 'Fitness', count: 12 },
    { id: 'lifestyle', name: 'Lifestyle', count: 10 },
    { id: 'tech', name: 'Tecnologia', count: 8 },
    { id: 'culture', name: 'Cultura', count: 5 }
  ];

  const episodes = [
    {
      id: 1,
      title: "O Futuro do Empreendedorismo Digital",
      description: "Discussão profunda sobre as tendências que vão moldar os negócios digitais nos próximos anos",
      duration: "1h 23min",
      date: "2025-01-15",
      category: "business",
      guests: ["João Silva", "Maria Santos"],
      plays: "15.2K",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Transformação Física: Mente e Corpo",
      description: "Como a mentalidade correta pode acelerar seus resultados na academia e na vida",
      duration: "58min",
      date: "2025-01-12",
      category: "fitness",
      guests: ["Dr. Carlos Fitness", "Ana Atleta"],
      plays: "22.1K",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Cultura Pop e Mangás no Brasil",
      description: "O crescimento da cultura japonesa no país e o mercado de mangás digitais",
      duration: "1h 15min",
      date: "2025-01-10",
      category: "culture",
      guests: ["Otaku Master", "Editora Nipponica"],
      plays: "18.7K",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Inovação na Gastronomia",
      description: "Como criar experiências únicas na hamburgueria e no food service",
      duration: "1h 05min",
      date: "2025-01-08",
      category: "business",
      guests: ["Chef Gourmet", "Empresário Food"],
      plays: "12.3K",
      image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Tecnologia e Lifestyle",
      description: "Como a tecnologia está mudando nosso estilo de vida e relacionamentos",
      duration: "1h 32min",
      date: "2025-01-05",
      category: "tech",
      guests: ["Tech Guru", "Influencer Digital"],
      plays: "25.8K",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      title: "Construindo uma Marca Pessoal",
      description: "Estratégias para desenvolver e monetizar sua marca pessoal nas redes sociais",
      duration: "1h 18min",
      date: "2025-01-03",
      category: "lifestyle",
      guests: ["Brand Expert", "Social Media Pro"],
      plays: "19.4K",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const filteredEpisodes = episodes.filter(episode => {
    const matchesCategory = selectedCategory === 'all' || episode.category === selectedCategory;
    const matchesSearch = episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         episode.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePlayPause = (episodeId) => {
    setPlayingEpisode(playingEpisode === episodeId ? null : episodeId);
  };

  return (
    <section id="episodes" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            EPISÓDIOS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Conteúdo exclusivo sobre empreendedorismo, fitness, tecnologia e muito mais. 
            Conversas que transformam perspectivas.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="relative mb-8 max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar episódios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors duration-200"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-white text-black shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Episodes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEpisodes.map((episode, index) => (
            <div
              key={episode.id}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10"
            >
              {/* Episode Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handlePlayPause(episode.id)}
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 hover:scale-110 transform"
                  >
                    {playingEpisode === episode.id ? (
                      <Pause size={24} className="text-black" />
                    ) : (
                      <Play size={24} className="text-black ml-1" />
                    )}
                  </button>
                </div>

                {/* Episode Number */}
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                  #{episode.id.toString().padStart(2, '0')}
                </div>
              </div>

              {/* Episode Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(episode.date).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {episode.duration}
                    </span>
                    <span className="flex items-center">
                      <Headphones size={14} className="mr-1" />
                      {episode.plays}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                  {episode.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {episode.description}
                </p>

                {/* Guests */}
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Convidados:</p>
                  <div className="flex flex-wrap gap-2">
                    {episode.guests.map((guest, guestIndex) => (
                      <span
                        key={guestIndex}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {guest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handlePlayPause(episode.id)}
                    className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                  >
                    {playingEpisode === episode.id ? (
                      <>
                        <Pause size={18} />
                        <span>Pausar</span>
                      </>
                    ) : (
                      <>
                        <Play size={18} />
                        <span>Reproduzir</span>
                      </>
                    )}
                  </button>

                  <div className="text-sm text-gray-500">
                    Episódio {episode.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700">
            Carregar Mais Episódios
          </button>
        </div>
      </div>
    </section>
  );
};

export default Episodes;