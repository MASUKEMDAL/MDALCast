import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Spotify, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    { icon: <Instagram size={24} />, name: 'Instagram', url: '#', followers: '50K' },
    { icon: <Youtube size={24} />, name: 'YouTube', url: '#', followers: '25K' },
    { icon: <Spotify size={24} />, name: 'Spotify', url: '#', followers: '100K' },
    { icon: <Twitter size={24} />, name: 'Twitter', url: '#', followers: '30K' }
  ];

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      info: 'contato@mdalcast.com',
      description: 'Para parcerias e colaborações'
    },
    {
      icon: <Phone size={24} />,
      title: 'Telefone',
      info: '+55 (11) 99999-9999',
      description: 'Atendimento comercial'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localização',
      info: 'São Paulo, SP',
      description: 'Estúdio MDAL Cast'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            CONTATO
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entre em contato conosco para parcerias, sugestões de pautas ou participações no podcast
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Envie sua Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors duration-200"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500 transition-colors duration-200"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="parceria">Parceria Comercial</option>
                  <option value="participacao">Participação no Podcast</option>
                  <option value="sugestao">Sugestão de Pauta</option>
                  <option value="feedback">Feedback</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors duration-200 resize-vertical"
                  placeholder="Escreva sua mensagem aqui..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl hover:border-gray-600 transition-colors duration-300">
                    <div className="text-gray-400 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      <p className="text-gray-300 font-medium mb-1">{info.info}</p>
                      <p className="text-gray-500 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Siga-nos nas Redes</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="group flex items-center space-x-3 p-4 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl hover:border-gray-600 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-white font-medium">{social.name}</p>
                      <p className="text-gray-500 text-sm">{social.followers}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">Newsletter MDAL</h4>
              <p className="text-gray-300 mb-4 text-sm">
                Receba novidades sobre episódios, eventos e lançamentos do universo MDAL
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors duration-200"
                />
                <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;