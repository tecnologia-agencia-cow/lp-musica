'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface FormErrors {
  nome?: string;
  email?: string;
  whatsapp?: string;
  empresa?: string;
  pdvs?: string;
  perfil?: string;
  origem?: string;
}

export function QuoteForm() {
  const router = useRouter();
  const [tab, setTab] = useState<'recorrente' | 'pontual'>('recorrente');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    empresa: '',
    pdvs: '',
    perfil: '',
    origem: ''
  });

  const validateEmail = (email: string) => {
    const commonDomains = [
      'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 
      'icloud.com', 'live.com', 'msn.com', 'aol.com', 'terra.com.br', 'uol.com.br', 'bol.com.br'
    ];
    const domain = email.split('@')[1]?.toLowerCase();
    
    if (!domain) return false;
    if (commonDomains.some(d => domain.includes(d))) return false;
    return true;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (formData.nome.trim().length < 3) {
      newErrors.nome = 'Por favor, insira seu nome completo.';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Por favor, use um e-mail corporativo.';
    }

    const phoneDigits = formData.whatsapp.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      newErrors.whatsapp = 'Por favor, insira um WhatsApp válido.';
    }

    if (formData.empresa.trim().length < 2) {
      newErrors.empresa = 'Por favor, insira o nome da sua empresa.';
    }

    if (!formData.pdvs) newErrors.pdvs = 'Campo obrigatório';
    if (!formData.perfil) newErrors.perfil = 'Campo obrigatório';
    if (!formData.origem) newErrors.origem = 'Campo obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    const message = `*Novo Interesse - LP MLD*
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

    // Redirect to WhatsApp and success page
    window.open(whatsappUrl, '_blank');
    router.push('/sucesso');
  };

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
    }
    return value.slice(0, 15);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === 'whatsapp') {
      finalValue = formatWhatsApp(value);
    }

    setFormData(prev => ({ ...prev, [name]: finalValue }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
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
              value={formData.nome}
              onChange={handleChange}
              placeholder="Nome completo"
              className={`w-full bg-white border rounded-[12px] px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 transition-all ${
                errors.nome 
                  ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                  : 'border-gray-200 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9]'
              }`}
            />
            {errors.nome && <span className="text-red-500 text-xs font-medium">{errors.nome}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">E-mail Corporativo</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="exemplo@empresa.com.br"
              className={`w-full bg-white border rounded-[12px] px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 transition-all ${
                errors.email 
                  ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                  : 'border-gray-200 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9]'
              }`}
            />
            {errors.email && <span className="text-red-500 text-xs font-medium">{errors.email}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">WhatsApp</label>
            <input 
              type="text" 
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className={`w-full bg-white border rounded-[12px] px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 transition-all ${
                errors.whatsapp 
                  ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                  : 'border-gray-200 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9]'
              }`}
            />
            {errors.whatsapp && <span className="text-red-500 text-xs font-medium">{errors.whatsapp}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">Nome da Empresa</label>
            <input 
              type="text" 
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              placeholder="Empresa Ltda"
              className={`w-full bg-white border rounded-[12px] px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 transition-all ${
                errors.empresa 
                  ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                  : 'border-gray-200 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9]'
              }`}
            />
            {errors.empresa && <span className="text-red-500 text-xs font-medium">{errors.empresa}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">Quantos PDVs sua operação atende hoje?</label>
            <div className="relative">
              <select 
                name="pdvs"
                value={formData.pdvs}
                onChange={handleChange}
                className={`w-full bg-white border rounded-[12px] px-5 py-4 text-gray-500 focus:outline-none focus:ring-2 transition-all appearance-none ${
                  errors.pdvs 
                    ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                    : 'border-gray-200 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9]'
                }`}
              >
                <option value="">Escolha uma opção...</option>
                <option value="1 a 20 PDVs">1 a 20 PDVs</option>
                <option value="21 a 50 PDVs">21 a 50 PDVs</option>
                <option value="51 a 100 PDVs">51 a 100 PDVs</option>
                <option value="Mais de 100 PDVs">Mais de 100 PDVs</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            {errors.pdvs && <span className="text-red-500 text-xs font-medium">{errors.pdvs}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">Você é:</label>
            <div className="relative">
              <select 
                name="perfil"
                value={formData.perfil}
                onChange={handleChange}
                className={`w-full bg-white border rounded-[12px] px-5 py-4 text-gray-500 focus:outline-none focus:ring-2 transition-all appearance-none ${
                  errors.perfil 
                    ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                    : 'border-gray-200 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9]'
                }`}
              >
                <option value="">Escolha uma opção...</option>
                <option value="Operador de rádio/mídia">Operador de rádio/mídia</option>
                <option value="Dono/Gestor de estabelecimento">Dono/Gestor de estabelecimento</option>
                <option value="Produtor de eventos">Produtor de eventos</option>
                <option value="Outro">Outro</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            {errors.perfil && <span className="text-red-500 text-xs font-medium">{errors.perfil}</span>}
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm font-bold text-[#374151]">Como conheceu?</label>
            <div className="relative">
              <select 
                name="origem"
                value={formData.origem}
                onChange={handleChange}
                className={`w-full bg-white border rounded-[12px] px-5 py-4 text-gray-500 focus:outline-none focus:ring-2 transition-all appearance-none ${
                  errors.origem 
                    ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                    : 'border-gray-200 focus:ring-[#6D28D9]/20 focus:border-[#6D28D9]'
                }`}
              >
                <option value="">Escolha uma opção...</option>
                <option value="Instagram / Facebook">Instagram / Facebook</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Google / Pesquisa">Google / Pesquisa</option>
                <option value="Indicação">Indicação</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            {errors.origem && <span className="text-red-500 text-xs font-medium">{errors.origem}</span>}
          </div>

          <div className="md:col-span-2 mt-4">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#6332CE] text-white py-5 rounded-[12px] font-bold text-lg hover:bg-[#5225b3] transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Interesse'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
