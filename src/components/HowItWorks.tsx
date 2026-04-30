'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Você entra em contato',
    desc: 'Conversa rápida para entender sua operação e estruturar o modelo de licença ideal — recorrente ou pontual.',
  },
  {
    number: '02',
    title: 'Recebe o acervo',
    desc: 'Acesso ao acervo musical com licença formal emitida diretamente pelo titular — por loja, por m² ou por evento.',
  },
  {
    number: '03',
    title: 'Usa e escala',
    desc: 'Entregue ao seu cliente uma solução documentada e legal. A renovação mensal é automática para operações recorrentes.',
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a0026] text-center mb-24">
          Como funciona
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex-1 flex flex-col items-center text-center relative"
            >
              {/* Connecting Line (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-[50px] left-[50%] w-full h-0 border-t-[5px] border-dashed border-[#6D28D9] -z-0" />
              )}

              <div className="bg-white px-10 relative z-10">
                <div className="text-[100px] font-black text-[#6D28D9] leading-none mb-8 select-none">
                  {step.number}
                </div>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-[#0a0026] mb-4">
                  {step.title}
                </h4>
                <p className="text-gray-500 leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
