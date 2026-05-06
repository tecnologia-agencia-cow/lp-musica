'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MessageCircle, Clock, Music, Shield, Globe, Users, Briefcase, Building2, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    text: "“Antes, sempre existia o risco de bloqueio ou cobrança inesperada. Hoje, temos segurança total para operar nossos eventos.”",
    author: "Produtora de Eventos Corporativos"
  },
  {
    text: "“Facilitou muito nossa operação. A gente simplesmente usa — sem se preocupar com direitos autorais.”",
    author: "Agência de Live Marketing"
  },
  {
    text: "“A qualidade das músicas surpreende. Não parece acervo ‘genérico’, realmente agrega na experiência do evento.”",
    author: "Organização de Feiras e Congressos"
  },
  {
    text: "“Foi o que faltava para escalar nossos eventos com mais tranquilidade e margem.”",
    author: "Produtora de Eventos"
  }
];

export function SucessoContent() {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Redirect to WhatsApp Specialist
      window.location.href = 'https://wa.me/5551980151245?text=Olá, acabei de solicitar a amostra no site MLD e gostaria de falar com um especialista.';
    }
  }, [countdown]);

  return (
    <main className="min-h-screen bg-[#0a0026] text-white selection:bg-[#7C3AED] selection:text-white pb-20">
      {/* Header / Success Banner */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/20 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12, stiffness: 200 }}
            className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(37,211,102,0.4)]"
          >
            <CheckCircle2 size={48} className="text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight"
          >
            Recebemos seu pedido de amostra
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/80 font-medium mb-4"
          >
            Sua solicitação foi enviada com sucesso.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg text-white/60 mb-12 max-w-2xl mx-auto"
          >
            Agora, o próximo passo é simples: Nosso time vai analisar o seu perfil e preparar uma seleção de músicas ideal para o seu tipo de evento.
          </motion.p>

          {/* Counter Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-16"
          >
            <Clock className="text-[#7C3AED] animate-pulse" />
            <span className="text-lg md:text-xl font-semibold">
              Você será transferido para um atendente em <span className="text-[#7C3AED] text-2xl font-bold">{countdown}s</span>
            </span>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Next Steps & Collection Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {/* O que acontece agora? */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users size={80} />
            </div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              O que acontece agora?
            </h2>
            <ul className="space-y-6 relative z-10">
              {[
                { text: "Em breve você vai receber um contato no seu WhatsApp", icon: "✔" },
                { text: "Vamos entender melhor o tipo de evento que você produz", icon: "✔" },
                { text: "E te enviar uma amostra personalizada do acervo", icon: "✔" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/90 text-lg">
                  <span className="text-[#25D366] font-bold text-xl">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sobre o acervo */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              🎧 Sobre o acervo
            </h2>
            <ul className="space-y-4">
              {[
                "Mais de 3.000 faixas 100% originais",
                "Licenciamento direto para eventos",
                "Sem risco de bloqueios ou taxas inesperadas",
                "Uso liberado para eventos no Brasil e exterior"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 size={18} className="text-[#25D366] mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Ideal for */}
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Ideal para quem trabalha com:
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { text: "Produtoras de eventos", icon: Briefcase },
              { text: "Feiras e exposições", icon: Building2 },
              { text: "Eventos corporativos", icon: Users },
              { text: "Congressos e ativações de marca", icon: TrendingUp }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col items-center gap-4 group hover:bg-white/10 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED] group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <span className="font-semibold text-sm md:text-base">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Logos Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              🏢 Grandes redes e operações já utilizam o acervo:
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Empresas líderes de mercado já utilizam nosso acervo musical para garantir padronização, segurança jurídica e qualidade sonora em suas operações e eventos.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-2xl font-black italic tracking-tighter">BRAND_A</div>
             <div className="text-2xl font-black italic tracking-tighter">BRAND_B</div>
             <div className="text-2xl font-black italic tracking-tighter">BRAND_C</div>
             <div className="text-2xl font-black italic tracking-tighter">BRAND_D</div>
             <div className="text-2xl font-black italic tracking-tighter">BRAND_E</div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            💬 O que dizem nossos clientes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex flex-col justify-between"
              >
                <p className="text-lg italic text-white/90 mb-6 leading-relaxed">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED]/30 flex items-center justify-center">
                    <Users size={20} className="text-[#7C3AED]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{t.author}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
