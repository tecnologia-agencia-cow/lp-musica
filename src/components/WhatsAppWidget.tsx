'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-5">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden w-[380px] border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#6B21E0] p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                    <Image 
                      src="/images/whatsapp-avatar.jpg" 
                      alt="Suporte" 
                      width={48} 
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#6B21E0] rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-base">Suporte MLD</h4>
                  <p className="text-xs text-white/70">Online agora</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-2 rounded-lg transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-8 bg-[#F0F2F5]">
              <div className="bg-white p-5 rounded-xl rounded-tl-none shadow-sm text-[15px] leading-relaxed text-gray-700 max-w-[90%] relative">
                <div className="absolute top-0 left-[-8px] w-0 h-0 border-t-[8px] border-t-white border-l-[8px] border-l-transparent" />
                Olá! Como podemos ajudar na sua operação hoje?
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 bg-white">
              <a 
                href="https://wa.me/5551980151245?text=Olá! Gostaria de saber mais sobre as músicas para minha operação (Vindo do site MLD)"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl font-bold text-base hover:bg-[#20bd5b] transition-all shadow-md shadow-[#25D366]/20"
              >
                <MessageCircle size={22} />
                Iniciar conversa no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] text-white p-5 rounded-full shadow-xl hover:shadow-2xl transition-all relative group cursor-pointer"
      >
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </div>
        <MessageCircle size={32} className={isOpen ? 'hidden' : 'block'} />
        <X size={32} className={isOpen ? 'block' : 'hidden'} />
      </motion.button>
    </div>
  );
}
