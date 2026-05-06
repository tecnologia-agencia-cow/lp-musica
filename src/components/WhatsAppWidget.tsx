'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden w-[320px] border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#6B21E0] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                    <Image 
                      src="/images/whatsapp-avatar.jpg" 
                      alt="Suporte" 
                      width={40} 
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#6B21E0] rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Suporte MLD</h4>
                  <p className="text-[10px] text-white/70">Online agora</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 bg-[#F0F2F5]">
              <div className="bg-white p-4 rounded-xl rounded-tl-none shadow-sm text-sm text-gray-700 max-w-[85%] relative">
                <div className="absolute top-0 left-[-8px] w-0 h-0 border-t-[8px] border-t-white border-l-[8px] border-l-transparent" />
                Olá! Como podemos ajudar na sua operação hoje?
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white">
              <a 
                href="https://wa.me/5551980151245?text=Olá! Gostaria de saber mais sobre as músicas para minha operação (Vindo do site MLD)"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#20bd5b] transition-all"
              >
                <MessageCircle size={18} />
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
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all relative group"
      >
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full" />
        <MessageCircle size={28} className={isOpen ? 'hidden' : 'block'} />
        <X size={28} className={isOpen ? 'block' : 'hidden'} />
      </motion.button>
    </div>
  );
}
