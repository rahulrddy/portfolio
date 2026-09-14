import { heroStats } from '@/lib/site';

export function HeroStats() {
  return (
    <dl className="mt-12 grid border-t border-white/[0.09] pt-7 sm:grid-cols-3">
      {heroStats.map((stat, index) => (
        <div
          key={stat.label}
          className={`py-4 sm:px-6 sm:py-0 ${index > 0 ? 'border-t border-white/[0.08] sm:border-l sm:border-t-0' : 'sm:pl-0'}`}
        >
          <dt className="text-xs leading-5 text-zinc-500 sm:text-sm">{stat.label}</dt>
          <dd className="mt-1 text-xl font-semibold tracking-tight text-amber-200 sm:text-2xl">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
