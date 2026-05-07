'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Gavel, PiggyBank } from 'lucide-react';

const problems = [
  {
    title: 'A margem que escapa todo mês.',
    desc: 'Cada PDV novo que você ativa traz um custo recorrente de direitos autorais que come o seu spread. Em 20, 50, 200 lojas, isso vira diferença real no fechamento mensal. Você precisa de um catálogo que escale sem corroer margem.',
    icon: TrendingUp,
  },
  {
    title: 'O cliente quer simplicidade. Você precisa entregar.',
    desc: 'O lojista contratou seu serviço pra ouvir "está tudo certo, sem cobrança a mais". Mas a maioria dos catálogos não entrega isso de verdade — e a pressão volta pra você na renovação.',
    icon: Gavel,
  },
  {
    title: 'Em escala, qualquer brecha vira passivo.',
    desc: 'Em 20+ PDVs, documentação musical incompleta gera autuações que se multiplicam. A responsabilidade reflete em quem opera o serviço — e quem licencia o acervo precisa entregar respaldo formal de ponta a ponta.',
    icon: PiggyBank,
  },
];

export function ProblemCards() {
  return (
    <section id="solucoes" className="py-32 bg-white overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-[1440px] relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.1, 
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{ y: -12 }}
              className="group relative bg-gradient-to-br from-[#6B21E0] to-[#4c1d95] p-10 md:p-12 rounded-[32px] text-white shadow-2xl shadow-[#6B21E0]/20 flex flex-col min-h-[480px] border border-white/10"
            >
              {/* Inner Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]" />
              
              <div className="mb-8 relative">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:bg-white group-hover:text-[#6B21E0] transition-all duration-300">
                  <problem.icon size={32} />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black mb-6 leading-[1.1] tracking-tight relative">
                {problem.title}
              </h3>
              
              <p 
                className="text-lg leading-relaxed text-white/80 font-medium relative flex-1"
              >
                {problem.desc}
              </p>

              {/* Decorative Accent */}
              <div className="mt-8 w-12 h-1 bg-white/20 rounded-full group-hover:w-20 group-hover:bg-white transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
