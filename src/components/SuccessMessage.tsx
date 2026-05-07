'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';

interface SuccessMessageProps {
  isDark?: boolean;
}

export function SuccessMessage({ isDark = false }: SuccessMessageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex flex-col items-center text-center p-8 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-100'}`}
    >
      <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(37,211,102,0.3)]">
        <CheckCircle2 size={36} className="text-white" />
      </div>
      
      <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-[#0a0026]'}`}>
        Solicitação enviada!
      </h3>
      
      <p className={`text-base mb-8 max-w-[300px] ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
        Recebemos seus dados com sucesso. Nosso time entrará em contato em breve.
      </p>

      <a 
        href="https://wa.me/5551980151245?text=Olá, acabei de solicitar a amostra no site MLD e gostaria de falar com um especialista."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-lg"
      >
        <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
        Falar com especialista agora
      </a>
      
      <p className={`mt-4 text-xs italic ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
        Resposta imediata via WhatsApp
      </p>
    </motion.div>
  );
}
