'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function QuoteForm() {
  const [tab, setTab] = useState<'recorrente' | 'pontual'>('recorrente');

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[800px]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a0026] text-center mb-12">
          Solicite um orçamento agora mesmo!
        </h2>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 p-1.5 rounded-[12px] flex items-center w-full max-w-[440px]">
            <button
              onClick={() => setTab('recorrente')}
              className={`flex-1 py-3 text-sm font-bold rounded-[10px] transition-all cursor-pointer ${
                tab === 'recorrente' 
                  ? 'bg-white text-[#6D28D9] shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Operação recorrente
            </button>
            <button
              onClick={() => setTab('pontual')}
              className={`flex-1 py-3 text-sm font-bold rounded-[10px] transition-all cursor-pointer ${
                tab === 'pontual' 
                  ? 'bg-white text-[#6D28D9] shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Evento pontual
            </button>
          </div>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">Seu Nome</label>
            <input 
              type="text" 
              placeholder="Nome completo"
              className="w-full bg-white border border-gray-200 rounded-[12px] px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">E-mail Corporativo</label>
            <input 
              type="email" 
              placeholder="exemplo@email.com.br"
              className="w-full bg-white border border-gray-200 rounded-[12px] px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">WhatsApp</label>
            <input 
              type="text" 
              placeholder="(00) 00000-0000"
              className="w-full bg-white border border-gray-200 rounded-[12px] px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">Nome da Empresa</label>
            <input 
              type="text" 
              placeholder="Empresa Ltda"
              className="w-full bg-white border border-gray-200 rounded-[12px] px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">Quantos PDVs sua operação atende hoje?</label>
            <select className="w-full bg-white border border-gray-200 rounded-[12px] px-5 py-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all appearance-none">
              <option>Escolha uma opção...</option>
              <option>1 a 20 PDVs</option>
              <option>21 a 50 PDVs</option>
              <option>51 a 100 PDVs</option>
              <option>Mais de 100 PDVs</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">Você é:</label>
            <select className="w-full bg-white border border-gray-200 rounded-[12px] px-5 py-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all appearance-none">
              <option>Escolha uma opção...</option>
              <option>Operador de rádio/mídia</option>
              <option>Dono/Gestor de estabelecimento</option>
              <option>Produtor de eventos</option>
              <option>Outro</option>
            </select>
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">Como conheceu?</label>
            <select className="w-full bg-white border border-gray-200 rounded-[12px] px-5 py-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all appearance-none">
              <option>Escolha uma opção...</option>
              <option>Instagram / Facebook</option>
              <option>LinkedIn</option>
              <option>Google / Pesquisa</option>
              <option>Indicação</option>
            </select>
          </div>

          <div className="md:col-span-2 mt-4">
            <button 
              type="submit"
              className="w-full bg-[#6332CE] text-white py-5 rounded-[12px] font-bold text-lg hover:bg-[#5225b3] transition-all active:scale-[0.98] cursor-pointer"
            >
              Enviar Interesse
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
