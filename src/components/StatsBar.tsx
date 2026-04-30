'use client';

const stats = [
  {
    value: '+3.000',
    label: 'faixas no acervo',
  },
  {
    value: '+40',
    label: 'faixas novas todo mês',
  },
  {
    value: '+200',
    label: 'operadores parceiros',
  },
  {
    value: '+10 anos',
    label: 'no Brasil e no exterior',
  },
];

export function StatsBar() {
  return (
    <section className="bg-[#6B21E0] py-12">
      <div className="container mx-auto px-4 max-w-[1136px]">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 md:gap-0">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center justify-center w-full md:w-1/4">
              <div className="flex flex-col items-center text-center">
                <span className="text-white font-bold text-3xl md:text-[40px] leading-tight md:leading-[50px]">
                  {stat.value}
                </span>
                <span className="text-white/80 font-medium text-xs md:text-[14px] leading-tight md:leading-[20px]">
                  {stat.label}
                </span>
              </div>
              {idx < stats.length - 1 && (
                <div className="hidden md:block h-12 w-[1px] bg-white/20 ml-auto mr-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
