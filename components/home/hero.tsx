'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CtaLink } from '@/components/ui/cta-link';
import { HeroStats } from '@/components/home/hero-stats';
import { siteConfig } from '@/lib/site';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto grid w-full max-w-[1600px] items-center gap-8 px-4 pb-10 pt-4 sm:px-6 sm:pb-12 sm:pt-8 md:px-10 lg:min-h-[calc(100svh-6rem)] lg:grid-cols-[48%_52%] lg:gap-10 lg:px-14 lg:pb-14 lg:pt-0 2xl:px-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative order-2 mx-auto h-[48svh] min-h-[360px] w-full max-w-[680px] sm:h-[56svh] sm:min-h-[440px] md:min-h-[500px] lg:order-1 lg:h-[76svh] lg:min-h-[620px] lg:max-w-none xl:min-h-[680px] 2xl:h-[78svh] 2xl:min-h-[740px]"
      >
        <div className="absolute left-[14%] top-[17%] aspect-square w-[62%] rounded-full border border-amber-200/[0.10] bg-[radial-gradient(circle_at_60%_35%,rgba(244,190,91,.08),transparent_55%)]" />
        <Image
          src="/images/rahul-origanti.webp"
          alt="Rahul Origanti"
          fill
          priority
          quality={90}
          sizes="(max-width: 640px) 94vw, (max-width: 1024px) 78vw, (max-width: 1536px) 48vw, 720px"
          className="object-contain object-bottom drop-shadow-[0_28px_34px_rgba(0,0,0,.28)]"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.09, delayChildren: 0.15 }}
        className="order-1 mx-auto w-full max-w-2xl lg:order-2 lg:mx-0"
      >
        <motion.p variants={reveal} className="mb-4 text-xs font-medium tracking-[0.32em] text-zinc-500 sm:text-sm">
          HELLO, I&apos;M
        </motion.p>
        <motion.h1
          variants={reveal}
          className="text-[clamp(2.7rem,10vw,4rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-[clamp(3.5rem,8vw,4.8rem)] lg:whitespace-nowrap lg:text-[clamp(3.6rem,5vw,5.5rem)] 2xl:text-[5.75rem]"
        >
          Rahul <span className="text-amber-200">Origanti</span>
        </motion.h1>
        <motion.p variants={reveal} className="mt-6 max-w-[42rem] text-base leading-relaxed text-zinc-300 sm:mt-7 sm:text-xl lg:text-[1.45rem] xl:text-[1.55rem]">
          {siteConfig.role} {siteConfig.description.charAt(0).toLowerCase() + siteConfig.description.slice(1)}
        </motion.p>
        <motion.p variants={reveal} className="mt-5 flex items-center gap-2.5 text-sm text-zinc-500 sm:text-base">
          <span className="size-1.5 shrink-0 rounded-full bg-amber-300" />
          Based in {siteConfig.location}
        </motion.p>
        <motion.div variants={reveal} className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
          <CtaLink href="#work">View My Work</CtaLink>
          <CtaLink href={siteConfig.links.email} variant="secondary">Get in Touch</CtaLink>
        </motion.div>
        <motion.div variants={reveal}>
          <HeroStats />
        </motion.div>
      </motion.div>
    </section>
  );
}
