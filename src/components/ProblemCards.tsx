'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Gavel, PiggyBank } from 'lucide-react';

const problems = [
  {
    title: 'O custo da música ambiente cresce todo ano.',
    description: 'Seus clientes estão questionando — e você precisa de uma resposta.',
    icon: TrendingUp,
  },
  {
    title: 'Estabelecimentos sem documentação musical correta estão sujeitos a autuações.',
    description: 'A responsabilidade recai sobre quem fornece o serviço.',
    icon: Gavel,
  },
  {
    title: 'Eventos e empresas perdem dinheiro',
    description: 'com taxas de direitos autorais que poderiam ser evitadas legalmente.',
    icon: PiggyBank,
  },
];

export function ProblemCards() {
  return (
    <section id="solucoes" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#6D28D9] p-8 rounded-[16px] flex flex-col items-start gap-4 min-h-[295px] isolate shadow-xl"
            >
              <div className="text-white/90 mb-2">
                <prob.icon size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-[22px] font-bold text-white leading-tight">
                {prob.title}
              </h3>
              <p className="text-white/80 leading-relaxed text-[16px]">
                {prob.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
