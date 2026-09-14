'use client';

import { useEffect, useRef, useState } from 'react';
import { expertiseScenes } from '@/lib/expertise';

export function ExpertiseScroll() {
  const rootRef = useRef<HTMLElement>(null);
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cleanup = () => {};

    void (async () => {
      const gsapModule = await import('gsap');
      const triggerModule = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.gsap;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const sceneElements = Array.from(root.querySelectorAll<HTMLElement>('[data-expertise-scene]'));
      const context = gsap.context(() => {
        sceneElements.forEach((scene, index) => {
          gsap.fromTo(
            scene,
            { opacity: index === 0 ? 1 : 0.16, y: index === 0 ? 0 : 28 },
            {
              opacity: 1,
              y: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: scene,
                start: 'top 62%',
                end: 'center 48%',
                scrub: true,
                onEnter: () => setActiveScene(index),
                onEnterBack: () => setActiveScene(index),
              },
            },
          );
        });
      }, root);

      cleanup = () => context.revert();
    })();

    return () => cleanup();
  }, []);

  return (
    <section ref={rootRef} id="expertise" className="relative z-10 border-t border-white/[0.06] bg-[#090c10]">
      <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-4 py-20 sm:px-6 md:px-10 lg:grid-cols-[38%_62%] lg:px-14 lg:py-0 2xl:px-16">
        <aside className="hidden lg:block">
          <div className="sticky top-0 flex h-svh items-center">
            <div className="relative w-full pr-12">
              <p className="mb-7 text-xs font-medium tracking-[0.32em] text-amber-200/70">ENGINEERING STORY</p>
              <div className="relative aspect-square max-w-[430px] rounded-full border border-white/[0.07] bg-[radial-gradient(circle_at_50%_45%,rgba(245,185,76,.10),rgba(255,255,255,.015)_44%,transparent_70%)]">
                <div className="absolute inset-[15%] rounded-full border border-amber-200/[0.10]" />
                <div className="absolute inset-[30%] rounded-full border border-white/[0.08]" />
                <div className="absolute inset-0 grid place-items-center text-center">
                  <div>
                    <span className="block text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-none tracking-[-0.07em] text-white">
                      {String(activeScene + 1).padStart(2, '0')}
                    </span>
                    <span className="mt-3 block text-xs tracking-[0.26em] text-zinc-500">OF 05</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex gap-2" aria-hidden="true">
                {expertiseScenes.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${index === activeScene ? 'w-12 bg-amber-300' : 'w-5 bg-white/10'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div>
          {expertiseScenes.map((scene, index) => (
            <article
              key={scene.eyebrow}
              data-expertise-scene
              className="flex min-h-[72svh] items-center border-b border-white/[0.06] py-16 last:border-b-0 lg:min-h-svh lg:py-24"
            >
              <div className="max-w-3xl">
                <div className="mb-7 flex items-center gap-4">
                  <span className="text-xs font-medium tracking-[0.28em] text-amber-200/75">{scene.eyebrow}</span>
                  <span className="h-px w-12 bg-amber-300/40" />
                </div>
                <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white">
                  {scene.title}
                </h2>
                <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8 lg:text-xl">
                  {scene.description}
                </p>
                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4">
                  {scene.technologies.map((technology) => (
                    <span key={technology} className="border-b border-white/10 pb-1 text-sm font-medium text-zinc-300 sm:text-base">
                      {technology}
                    </span>
                  ))}
                </div>
                <span className="mt-10 block text-xs tracking-[0.24em] text-zinc-600 lg:hidden">
                  {String(index + 1).padStart(2, '0')} / 05
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
