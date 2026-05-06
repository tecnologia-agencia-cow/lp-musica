'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export function QuoteForm() {
  const router = useRouter();
  const [tab, setTab] = useState<'recorrente' | 'pontual'>('recorrente');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    empresa: '',
    pdvs: '',
    perfil: '',
    origem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Novo Interesse - Música para Eventos*
---
*Modalidade:* ${tab === 'recorrente' ? 'Operação Recorrente' : 'Evento Pontual'}
*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*E-mail:* ${formData.email}
*WhatsApp:* ${formData.whatsapp}
*PDVs:* ${formData.pdvs}
*Perfil:* ${formData.perfil}
*Como conheceu:* ${formData.origem}
---
Olá, gostaria de receber um orçamento para minha operação.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5551980151245?text=${encodedMessage}`;
    
    // Push to GTM dataLayer
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        'event': 'form_submit',
        'form_id': 'lp-musica-quote',
        'lead_email': formData.email.toLowerCase().trim(),
        'form_origin': 'landing_page',
        'page_path': window.location.pathname
      });
    }

    router.push('/sucesso');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">Seu Nome</label>
            <input 
              type="text" 
              name="nome"
              required
              value={formData.nome}
              onChange={handleChange}
              placeholder="Nome completo"
              className="w-full bg-white border border-gray-200 rounded-[12px] px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">E-mail Corporativo</label>
            <input 
              type="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="exemplo@email.com.br"
              className="w-full bg-white border border-gray-200 rounded-[12px] px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">WhatsApp</label>
            <input 
              type="text" 
              name="whatsapp"
              required
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className="w-full bg-white border border-gray-200 rounded-[12px] px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">Nome da Empresa</label>
            <input 
              type="text" 
              name="empresa"
              required
              value={formData.empresa}
              onChange={handleChange}
              placeholder="Empresa Ltda"
              className="w-full bg-white border border-gray-200 rounded-[12px] px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">Quantos PDVs sua operação atende hoje?</label>
            <select 
              name="pdvs"
              required
              value={formData.pdvs}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-[12px] px-5 py-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all appearance-none"
            >
              <option value="">Escolha uma opção...</option>
              <option value="1 a 20 PDVs">1 a 20 PDVs</option>
              <option value="21 a 50 PDVs">21 a 50 PDVs</option>
              <option value="51 a 100 PDVs">51 a 100 PDVs</option>
              <option value="Mais de 100 PDVs">Mais de 100 PDVs</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">Você é:</label>
            <select 
              name="perfil"
              required
              value={formData.perfil}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-[12px] px-5 py-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all appearance-none"
            >
              <option value="">Escolha uma opção...</option>
              <option value="Operador de rádio/mídia">Operador de rádio/mídia</option>
              <option value="Dono/Gestor de estabelecimento">Dono/Gestor de estabelecimento</option>
              <option value="Produtor de eventos">Produtor de eventos</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">Como conheceu?</label>
            <select 
              name="origem"
              required
              value={formData.origem}
              onChange={handleChange}
              className="w-full bg-white border border-gray-200 rounded-[12px] px-5 py-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9] transition-all appearance-none"
            >
              <option value="">Escolha uma opção...</option>
              <option value="Instagram / Facebook">Instagram / Facebook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Google / Pesquisa">Google / Pesquisa</option>
              <option value="Indicação">Indicação</option>
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
