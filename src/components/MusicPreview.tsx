'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Dumbbell, 
  ShoppingCart, 
  Shirt, 
  Store, 
  Briefcase, 
  UtensilsCrossed, 
  PlayCircle,
  PauseCircle,
  Music2,
  X,
  Volume2
} from 'lucide-react';

interface Track {
  id: string;
  name: string;
  url: string;
}

interface Playlist {
  title: string;
  genres: string;
  icon: any;
  tracks: Track[];
}

const playlists: Playlist[] = [
  {
    title: 'Ideal para Academias',
    genres: 'Pop e Pop Rock',
    icon: Dumbbell,
    tracks: [
      { id: '1', name: 'Academia Mix 01', url: '/audio/academia_01.mp3' },
      { id: '2', name: 'Academia Mix 02', url: '/audio/academia_02.mp3' },
      { id: '3', name: 'Academia Mix 03', url: '/audio/academia_03.mp3' },
      { id: '4', name: 'Academia Mix 04', url: '/audio/academia_04.mp3' },
      { id: '5', name: 'Academia Mix 05', url: '/audio/academia_05.mp3' },
    ],
  },
  {
    title: 'Ideal para Supermercados',
    genres: 'Pop Nacional e MPB',
    icon: ShoppingCart,
    tracks: [
      { id: '1', name: 'Supermercado Mix 01', url: '/audio/supermercado_01.mp3' },
      { id: '2', name: 'Supermercado Mix 02', url: '/audio/supermercado_02.mp3' },
      { id: '3', name: 'Supermercado Mix 03', url: '/audio/supermercado_03.mp3' },
      { id: '4', name: 'Supermercado Mix 04', url: '/audio/supermercado_04.mp3' },
      { id: '5', name: 'Supermercado Mix 05', url: '/audio/supermercado_05.mp3' },
    ],
  },
  {
    title: 'Ideal para Lojas Fashion',
    genres: 'Pop e Lounge',
    icon: Shirt,
    tracks: [
      { id: '1', name: 'Fashion Mix 01', url: '/audio/fashion_01.mp3' },
      { id: '2', name: 'Fashion Mix 02', url: '/audio/fashion_02.mp3' },
      { id: '3', name: 'Fashion Mix 03', url: '/audio/fashion_03.mp3' },
      { id: '4', name: 'Fashion Mix 04', url: '/audio/fashion_04.mp3' },
      { id: '5', name: 'Fashion Mix 05', url: '/audio/fashion_05.mp3' },
    ],
  },
  {
    title: 'Ideal para Loja Popular',
    genres: 'Pop Nacional e Sertanejo',
    icon: Store,
    tracks: [
      { id: '1', name: 'Popular Mix 01', url: '/audio/popular_01.mp3' },
      { id: '2', name: 'Popular Mix 02', url: '/audio/popular_02.mp3' },
      { id: '3', name: 'Popular Mix 03', url: '/audio/popular_03.mp3' },
      { id: '4', name: 'Popular Mix 04', url: '/audio/popular_04.mp3' },
      { id: '5', name: 'Popular Mix 05', url: '/audio/popular_05.mp3' },
    ],
  },
  {
    title: 'Ideal para Corporativo e Escritórios',
    genres: 'Lounge e Bossa Nova Lounge',
    icon: Briefcase,
    tracks: [
      { id: '1', name: 'Office Mix 01', url: '/audio/corporativo_01.mp3' },
      { id: '2', name: 'Office Mix 02', url: '/audio/corporativo_02.mp3' },
      { id: '3', name: 'Office Mix 03', url: '/audio/corporativo_03.mp3' },
      { id: '4', name: 'Office Mix 04', url: '/audio/corporativo_04.mp3' },
      { id: '5', name: 'Office Mix 05', url: '/audio/corporativo_05.mp3' },
    ],
  },
  {
    title: 'Ideal para Restaurantes e Hotelaria',
    genres: 'Bossa Nova e Bossa Nova Lounge',
    icon: UtensilsCrossed,
    tracks: [
      { id: '1', name: 'Dining Mix 01', url: '/audio/restaurante_01.mp3' },
      { id: '2', name: 'Dining Mix 02', url: '/audio/restaurante_02.mp3' },
      { id: '3', name: 'Dining Mix 03', url: '/audio/restaurante_03.mp3' },
      { id: '4', name: 'Dining Mix 04', url: '/audio/restaurante_04.mp3' },
      { id: '5', name: 'Dining Mix 05', url: '/audio/restaurante_05.mp3' },
    ],
  },
];

export function MusicPreview() {
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);
  const [currentTrackIdx, setCurrentTrackIdx] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const openPlaylist = (playlist: Playlist) => {
    setSelectedPlaylist(playlist);
    setCurrentTrackIdx(null);
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const closePlaylist = () => {
    setSelectedPlaylist(null);
    setCurrentTrackIdx(null);
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const togglePlayTrack = (idx: number) => {
    if (currentTrackIdx === idx) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentTrackIdx(idx);
      setIsPlaying(true);
      if (audioRef.current && selectedPlaylist) {
        audioRef.current.src = selectedPlaylist.tracks[idx].url;
        audioRef.current.play();
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      
      audio.onended = () => {
        if (selectedPlaylist && currentTrackIdx !== null && currentTrackIdx < selectedPlaylist.tracks.length - 1) {
          togglePlayTrack(currentTrackIdx + 1);
        } else {
          setIsPlaying(false);
          setCurrentTrackIdx(null);
          setCurrentTime(0);
        }
      };

      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
      };
    }
  }, [selectedPlaylist, currentTrackIdx]);

  return (
    <section id="playlists" className="relative pt-[96px] pb-[96px] bg-[#1E0F5C] text-white overflow-hidden">
      <audio ref={audioRef} />
      
      {/* Background Glow Effects */}
      <div 
        className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ 
          backgroundColor: '#6B21E0',
          filter: 'blur(150px)',
          backdropFilter: 'blur(150px)'
        }} 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ouça antes de licenciar
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg leading-relaxed mb-8"
          >
            Playlists royalty-free organizadas por segmento. Estas faixas são produções originais com licença para uso 
            comercial — elimine cobranças recorrentes de direitos autorais na sua operação.
          </motion.p>
          
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
              Royalty-Free
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {playlists.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => openPlaylist(item)}
              className="group relative bg-[#2A177A] border border-white/5 p-6 rounded-[16px] min-h-[174px] hover:bg-[#341d96] transition-all cursor-pointer flex flex-col justify-between hover:border-[#7C3AED]/50 shadow-xl"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-[#6B21E0] rounded-xl group-hover:bg-[#7C3AED] transition-colors">
                  <item.icon size={24} className="text-white" />
                </div>
                <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors">
                  <span className="text-xs font-bold uppercase tracking-widest">{item.tracks.length} {item.tracks.length > 1 ? 'FAIXAS' : 'FAIXA'}</span>
                  <PlayCircle size={28} className="transform group-hover:scale-110 transition-transform" />
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-white/50 text-sm">{item.genres}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Playlist Modal */}
      <AnimatePresence>
        {selectedPlaylist && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePlaylist}
              className="absolute inset-0 bg-[#0a0026]/90 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-[#1E0F5C] border border-white/10 rounded-[24px] shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-white/5 flex items-start justify-between bg-gradient-to-br from-white/5 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-[#7C3AED] rounded-2xl shadow-lg">
                    <selectedPlaylist.icon size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedPlaylist.title}</h3>
                    <p className="text-white/50">{selectedPlaylist.genres}</p>
                  </div>
                </div>
                <button 
                  onClick={closePlaylist}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Tracks List */}
              <div className="p-4 max-h-[50vh] overflow-y-auto custom-scrollbar">
                <div className="space-y-2">
                  {selectedPlaylist.tracks.map((track, idx) => (
                    <div 
                      key={track.id}
                      onClick={() => togglePlayTrack(idx)}
                      className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all ${
                        currentTrackIdx === idx 
                          ? 'bg-[#7C3AED] text-white' 
                          : 'hover:bg-white/5 text-white/80 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-sm font-bold w-4 ${currentTrackIdx === idx ? 'text-white' : 'text-white/20'}`}>
                          {idx + 1}
                        </span>
                        <div>
                          <p className="font-bold leading-tight">{track.name}</p>
                          <p className={`text-xs ${currentTrackIdx === idx ? 'text-white/70' : 'text-white/40'}`}>
                            Amostra de Acervo MLD
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {currentTrackIdx === idx && isPlaying ? (
                          <div className="flex gap-1 items-end h-4">
                            {[1, 2, 3].map((i) => (
                              <motion.div
                                key={i}
                                animate={{ height: [4, 12, 6, 12, 4] }}
                                transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                                className="w-1 bg-white rounded-full"
                              />
                            ))}
                          </div>
                        ) : (
                          currentTrackIdx === idx ? <PauseCircle size={24} /> : <PlayCircle size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Player Controls */}
              {currentTrackIdx !== null && (
                <div className="p-6 bg-[#7C3AED]/20 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Music2 size={20} className="text-[#25D366] animate-pulse" />
                      <div>
                        <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Tocando agora</p>
                        <p className="text-sm font-bold text-white">{selectedPlaylist.tracks[currentTrackIdx].name}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="bg-white text-[#7C3AED] p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
                    >
                      {isPlaying ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
                    </button>
                  </div>

                  {/* Seek Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-white/40 font-bold uppercase tracking-tighter">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                    <input 
                      type="range"
                      min={0}
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#25D366] hover:accent-white transition-all"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
}
