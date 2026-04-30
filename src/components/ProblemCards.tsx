'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Gavel, PiggyBank } from 'lucide-react';

const problems = [
  {
    title: 'A margem que escapa todo mês',
    desc: 'Cada PDV novo que você ativa traz um custo recorrente de direitos autorais que come o seu spread. Em 20, 50, 200 lojas, isso vira diferença real no fechamento mensal. Você precisa de um catálogo que escale sem corroer margem.',
    icon: TrendingUp,
  },
  {
    title: 'O cliente quer simplicidade. Você precisa entregar.',
    desc: 'O lojista contratou seu serviço pra ouvir "está tudo certo, sem cobrança a mais". Mas a maioria dos catálogos não entrega isso de verdade — e a pressão volta pra você na renovação.',
    icon: Gavel,
  },
  {
    title: 'Em escala, qualquer brecha vira passivo',
    desc: 'Em 20+ PDVs, documentação musical incompleta gera autuações que se multiplicam. A responsabilidade reflete em quem opera o serviço — e quem licencia o acervo precisa entregar respaldo formal de ponta a ponta.',
    icon: PiggyBank,
  },
];

export function ProblemCards() {
  return (
    <section id="solucoes" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1136px]">
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#6B21E0] px-8 md:px-10 pt-10 md:pt-12 pb-14 md:pb-16 rounded-[24px] text-white shadow-xl flex flex-col min-h-[410px]"
            >
              <div className="mb-6">
                <problem.icon size={32} className="text-white/90" />
              </div>
              <h3 className="text-2xl font-bold mb-4 leading-tight">
                {problem.title}
              </h3>
              <p 
                className="text-[16px] leading-[26px] text-white/80 font-normal"
                style={{ fontFamily: 'var(--font-roboto)' }}
              >
                {problem.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
