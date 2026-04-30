'use client';

import { motion } from 'framer-motion';
import { 
  Dumbbell, 
  ShoppingCart, 
  Shirt, 
  Store, 
  Briefcase, 
  UtensilsCrossed, 
  PlayCircle 
} from 'lucide-react';

const playlists = [
  {
    title: 'Ideal para Academias',
    genres: 'Pop e Pop Rock',
    icon: Dumbbell,
  },
  {
    title: 'Ideal para Supermercados',
    genres: 'Pop Nacional e MPB',
    icon: ShoppingCart,
  },
  {
    title: 'Ideal para Lojas Fashion',
    genres: 'Pop e Lounge',
    icon: Shirt,
  },
  {
    title: 'Ideal para Loja Popular',
    genres: 'Pop Nacional e Sertanejo',
    icon: Store,
  },
  {
    title: 'Ideal para Corporativo e Escritórios',
    genres: 'Lounge e Bossa Nova Lounge',
    icon: Briefcase,
  },
  {
    title: 'Ideal para Restaurantes e Hotelaria',
    genres: 'Bossa Nova e Bossa Nova Lounge',
    icon: UtensilsCrossed,
  },
];

export function MusicPreview() {
  return (
    <section id="playlists" className="relative pt-[96px] pb-[96px] bg-[#1E0F5C] text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div 
        className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ 
          backgroundColor: '#6B21E0',
          filter: 'blur(150px)',
          backdropFilter: 'blur(150px)'
        }} 
      />
      <div 
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ 
          backgroundColor: '#6B21E0',
          filter: 'blur(150px)',
          backdropFilter: 'blur(150px)'
        }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ouça antes de licenciar
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Playlists royalty-free organizadas por segmento. Estas faixas são produções originais com licença para uso 
            comercial — não são gravações conhecidas do grande público, e é exatamente essa originalidade que elimina 
            cobranças recorrentes de direitos autorais na sua operação.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              Royalty-Free
            </span>
            <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              Sem cobranças mensais de direitos autorais
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {playlists.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#2A177A] border border-white/5 p-6 rounded-[16px] min-h-[174px] hover:bg-[#341d96] transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-[#6B21E0] rounded-xl">
                  <item.icon size={24} className="text-white" />
                </div>
                <PlayCircle size={24} className="text-white/40 group-hover:text-white transition-colors" />
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-white/50 text-sm">{item.genres}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/10">
          <p className="text-white/60 text-lg max-w-4xl">
            Mais de 40 faixas novas chegam todo mês. O catálogo completo vai muito além das playlists em destaque — 
            nosso time consultivo desenha a programação que cabe na sua operação.
          </p>
        </div>
      </div>
    </section>
  );
}
