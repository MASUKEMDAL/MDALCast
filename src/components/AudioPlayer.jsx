import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize2, Minimize2 } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);

  const currentEpisode = {
    title: "O Futuro do Empreendedorismo Digital",
    guest: "João Silva & Maria Santos",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isPlaying && !isExpanded) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gray-800 transition-all duration-300 ${
      isExpanded ? 'h-96' : 'h-20'
    }`}>
      {/* Expanded Player */}
      {isExpanded && (
        <div className="p-8 h-full flex items-center justify-center">
          <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Episode Art */}
            <div className="text-center">
              <img
                src={currentEpisode.image}
                alt={currentEpisode.title}
                className="w-64 h-64 object-cover rounded-2xl mx-auto shadow-2xl"
              />
            </div>

            {/* Player Controls */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{currentEpisode.title}</h3>
                <p className="text-gray-400">{currentEpisode.guest}</p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center space-x-6">
                <button className="text-gray-400 hover:text-white transition-colors duration-200">
                  <SkipBack size={24} />
                </button>
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all duration-200 hover:scale-105"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                </button>
                <button className="text-gray-400 hover:text-white transition-colors duration-200">
                  <SkipForward size={24} />
                </button>
              </div>

              {/* Volume */}
              <div className="flex items-center space-x-3">
                <Volume2 size={20} className="text-gray-400" />
                <div className="flex-1 bg-gray-800 rounded-full h-1">
                  <div className="bg-white h-1 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mini Player */}
      <div className={`flex items-center justify-between px-4 h-20 ${isExpanded ? 'hidden' : 'flex'}`}>
        <div className="flex items-center space-x-4">
          <img
            src={currentEpisode.image}
            alt={currentEpisode.title}
            className="w-12 h-12 object-cover rounded-lg"
          />
          <div>
            <h4 className="text-white font-semibold text-sm truncate max-w-48">
              {currentEpisode.title}
            </h4>
            <p className="text-gray-400 text-xs truncate max-w-48">
              {currentEpisode.guest}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlay}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors duration-200"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
          </button>
          <button
            onClick={toggleExpanded}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Maximize2 size={20} />
          </button>
        </div>
      </div>

      {/* Minimize Button for Expanded Player */}
      {isExpanded && (
        <button
          onClick={toggleExpanded}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <Minimize2 size={24} />
        </button>
      )}
    </div>
  );
};

export default AudioPlayer;