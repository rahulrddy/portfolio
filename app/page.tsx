import { AmbientBackground } from '@/components/home/ambient-background';
import { Hero } from '@/components/home/hero';
import { SiteHeader } from '@/components/layout/site-header';

export default function HomePage() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-[#090c10] text-white">
      <AmbientBackground />
      <SiteHeader />
      <Hero />
      <div id="work" className="relative z-10 h-px" aria-hidden="true" />
    </main>
  );
}
