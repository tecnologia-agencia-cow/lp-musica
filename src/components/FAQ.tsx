'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "É realmente livre de direitos autorais?",
    answer: "Sim. Todas as obras do nosso acervo são de titularidade própria, o que nos permite licenciar diretamente para o uso comercial sem a necessidade de pagamento de taxas a entidades coletoras."
  },
  {
    question: "Como funciona a documentação?",
    answer: "Ao contratar, você recebe um certificado de licença de uso comercial nominal, detalhando os PDVs ou eventos cobertos, garantindo total respaldo jurídico."
  },
  {
    question: "Atendem PDVs individuais?",
    answer: "Nosso modelo é focado em escala. Atendemos operações a partir de 20 PDVs ativos, oferecendo um modelo consultivo e econômico para redes e operadores."
  },
  {
    question: "O acervo funciona fora do Brasil?",
    answer: "Sim! Temos licenciamento válido tanto para o mercado nacional quanto internacional, atendendo operações em diversos países."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-[#F5F5F7]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-[#0a0026] text-center mb-16">
          Perguntas Frequentes
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-[#0a0026]">{faq.question}</span>
                {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
