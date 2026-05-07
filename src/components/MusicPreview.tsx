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
  Volume2,
  ListMusic
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
  const [volume, setVolume] = useState(1);
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
        audioRef.current.volume = volume;
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

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVolume(v);
    if (audioRef.current) {
      audioRef.current.volume = v;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (selectedPlaylist) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPlaylist]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.play().catch(err => console.log('Playback error:', err));
      } else {
        audio.pause();
      }
    }
  }, [isPlaying]);

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
              className="group relative bg-[#311b92]/40 border border-white/5 p-6 rounded-[16px] min-h-[174px] hover:bg-[#311b92]/60 transition-all cursor-pointer flex flex-col justify-between hover:border-[#7C3AED]/50 shadow-xl"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-[#6B21E0] rounded-xl group-hover:bg-[#7C3AED] transition-colors">
                  <item.icon size={24} className="text-white" />
                </div>
                <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-widest hidden group-hover:inline-block animate-in fade-in slide-in-from-right-1">Ouvir amostras</span>
                  <ListMusic size={24} className="transform group-hover:scale-110 transition-transform" />
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
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-4xl bg-black border border-white/10 rounded-[12px] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              {/* Spotify-style Header */}
              <div className="p-6 md:p-8 flex flex-col md:flex-row items-center md:items-end gap-6 bg-gradient-to-b from-[#7C3AED]/60 to-[#121212]">
                <motion.div 
                  layoutId={`icon-${selectedPlaylist.title}`}
                  className="w-40 h-40 md:w-48 md:h-48 bg-[#7C3AED] rounded-lg shadow-2xl flex items-center justify-center border border-white/5"
                >
                  <selectedPlaylist.icon size={80} className="text-white/80" />
                </motion.div>
                
                <div className="flex-1 text-center md:text-left space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Playlist</p>
                  <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                    {selectedPlaylist.title.split('para ')[1] || selectedPlaylist.title}
                  </h3>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-medium text-white/60">
                    <span className="text-white font-bold">Música Livre de Direitos</span>
                    <span className="w-1 h-1 bg-white/30 rounded-full" />
                    <span>{selectedPlaylist.tracks.length} músicas</span>
                  </div>
                </div>

                <button 
                  onClick={closePlaylist}
                  className="absolute top-4 right-4 p-2 hover:bg-black/20 rounded-full transition-colors text-white/40 hover:text-white cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Action Bar */}
              <div className="px-6 py-4 flex items-center gap-6 bg-[#121212]/50">
                <button 
                  onClick={() => togglePlayTrack(currentTrackIdx ?? 0)}
                  className="w-14 h-14 bg-[#7C3AED] rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#7C3AED]/20 group/play cursor-pointer"
                >
                  {isPlaying ? (
                    <PauseCircle size={32} className="text-white" />
                  ) : (
                    <PlayCircle size={32} className="text-white translate-x-0.5" />
                  )}
                </button>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              {/* Tracks List */}
              <div className="overflow-y-auto px-2 pb-32 bg-[#121212] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
                <div className="grid grid-cols-[40px_1fr_100px] px-6 py-2 text-xs font-bold uppercase tracking-widest text-white/40 border-b border-white/5 mb-2">
                  <span>#</span>
                  <span>Título</span>
                  <span className="text-right">Ação</span>
                </div>

                <div className="space-y-0.5">
                  {selectedPlaylist.tracks.map((track, idx) => (
                    <motion.div 
                      key={track.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => togglePlayTrack(idx)}
                      className={`group grid grid-cols-[40px_1fr_100px] items-center px-6 py-3 rounded-md cursor-pointer transition-colors ${
                        currentTrackIdx === idx 
                          ? 'bg-white/10' 
                          : 'hover:bg-white/5'
                      }`}
                    >
                      <div className="text-base font-medium">
                        {currentTrackIdx === idx && isPlaying ? (
                          <div className="flex gap-0.5 items-end h-4 w-5">
                            {[1, 2, 3].map((i) => (
                              <motion.div
                                key={i}
                                animate={{ height: [4, 14, 7, 14, 4] }}
                                transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }}
                                className="w-[4px] bg-[#7C3AED] rounded-full"
                              />
                            ))}
                          </div>
                        ) : (
                          <span className={`${currentTrackIdx === idx ? 'text-[#7C3AED]' : 'text-white/40 group-hover:hidden'}`}>
                            {idx + 1}
                          </span>
                        )}
                        {!isPlaying && currentTrackIdx !== idx && (
                          <PlayCircle size={18} className="hidden group-hover:block text-white" />
                        )}
                        {isPlaying && currentTrackIdx === idx && (
                          <PauseCircle size={18} className="hidden group-hover:block text-white" />
                        )}
                      </div>

                      <div>
                        <p className={`font-bold text-base md:text-lg truncate ${currentTrackIdx === idx ? 'text-[#7C3AED]' : 'text-white'}`}>
                          {track.name}
                        </p>
                        <p className="text-sm text-white/40 font-medium">Música Livre de Direitos</p>
                      </div>

                      <div className="text-right">
                        {currentTrackIdx === idx && (
                          <span className="text-[#7C3AED] text-[10px] font-bold uppercase tracking-widest">
                            {isPlaying ? 'Tocando' : 'Pausado'}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Spotify-style Player Bar */}
              <AnimatePresence>
                {currentTrackIdx !== null && (
                  <motion.div 
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="absolute bottom-0 left-0 right-0 bg-[#181818] border-t border-white/10 px-6 py-4 flex flex-col gap-2 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      {/* Song Info */}
                      <div className="flex items-center gap-3 min-w-[180px]">
                        <div className="w-12 h-12 bg-[#282828] rounded flex items-center justify-center shadow-lg">
                          <Music2 size={24} className="text-[#7C3AED]" />
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-sm font-bold text-white truncate">{selectedPlaylist.tracks[currentTrackIdx].name}</p>
                          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Original Mix</p>
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="flex flex-col items-center gap-1 flex-1 max-md:max-w-[200px] max-w-md">
                        <div className="flex items-center gap-6">
                          <button 
                            onClick={() => currentTrackIdx > 0 && togglePlayTrack(currentTrackIdx - 1)}
                            className="text-white/60 hover:text-white transition-colors cursor-pointer p-2"
                          >
                            <PlayCircle size={28} className="rotate-180" />
                          </button>
                          <button 
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-lg"
                          >
                            {isPlaying ? (
                              <PauseCircle size={32} className="text-black" />
                            ) : (
                              <PlayCircle size={32} className="text-black translate-x-0.5" />
                            )}
                          </button>
                          <button 
                            onClick={() => currentTrackIdx < selectedPlaylist.tracks.length - 1 && togglePlayTrack(currentTrackIdx + 1)}
                            className="text-white/60 hover:text-white transition-colors cursor-pointer p-2"
                          >
                            <PlayCircle size={28} />
                          </button>
                        </div>

                        {/* Seek Bar */}
                        <div className="w-full flex items-center gap-2 group">
                          <span className="text-[10px] text-white/40 font-medium min-w-[30px] text-right">
                            {formatTime(currentTime)}
                          </span>
                          <div className="relative flex-1 h-1 flex items-center">
                            <input 
                              type="range"
                              min={0}
                              max={duration || 0}
                              value={currentTime}
                              onChange={handleSeek}
                              className="absolute inset-0 w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer z-10 accent-[#7C3AED]"
                              style={{
                                background: `linear-gradient(to right, #7C3AED ${(currentTime / duration) * 100}%, #4d4d4d ${(currentTime / duration) * 100}%)`
                              }}
                            />
                          </div>
                          <span className="text-[10px] text-white/40 font-medium min-w-[30px]">
                            {formatTime(duration)}
                          </span>
                        </div>
                      </div>

                      {/* Extra Actions */}
                      <div className="hidden md:flex items-center gap-3 min-w-[180px] justify-end">
                        <Volume2 size={18} className="text-white/40" />
                        <div className="relative w-24 h-1 flex items-center group">
                          <input 
                            type="range"
                            min={0}
                            max={1}
                            step={0.01}
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
                            style={{
                              background: `linear-gradient(to right, white ${volume * 100}%, #4d4d4d ${volume * 100}%)`
                            }}
                          />
                        </div>
                        <button 
                          onClick={() => {
                            setIsPlaying(false);
                            setCurrentTrackIdx(null);
                            if (audioRef.current) {
                              audioRef.current.pause();
                              audioRef.current.currentTime = 0;
                            }
                          }}
                          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white cursor-pointer ml-2"
                          title="Fechar música"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
