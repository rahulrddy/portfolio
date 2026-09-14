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
    <section id="about" className="relative z-10 mx-auto grid min-h-[calc(100svh-6rem)] w-full max-w-[1440px] items-center gap-6 px-6 pb-12 md:px-10 lg:grid-cols-[48%_52%] lg:px-14">
      <motion.div
        initial={{ opacity: 0, x: -28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative order-2 h-[52svh] min-h-[430px] lg:order-1 lg:h-[76svh] lg:min-h-[620px]"
      >
        <div className="absolute left-[14%] top-[17%] aspect-square w-[62%] rounded-full border border-amber-200/[0.10] bg-[radial-gradient(circle_at_60%_35%,rgba(244,190,91,.08),transparent_55%)]" />
        <Image
          src="/images/rahul-origanti.png"
          alt="Rahul Origanti"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 48vw"
          className="object-contain object-bottom drop-shadow-[0_28px_34px_rgba(0,0,0,.28)]"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.09, delayChildren: 0.15 }}
        className="order-1 max-w-2xl pt-12 lg:order-2 lg:pt-0"
      >
        <motion.p variants={reveal} className="mb-4 text-xs font-medium tracking-[0.32em] text-zinc-500">
          HELLO, I&apos;M
        </motion.p>
        <motion.h1 variants={reveal} className="whitespace-nowrap text-[clamp(3.3rem,5vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-white">
          Rahul <span className="text-amber-200">Origanti</span>
        </motion.h1>
        <motion.p variants={reveal} className="mt-7 max-w-[42rem] text-lg leading-relaxed text-zinc-300 sm:text-xl lg:text-[1.55rem]">
          {siteConfig.role} {siteConfig.description.charAt(0).toLowerCase() + siteConfig.description.slice(1)}
        </motion.p>
        <motion.p variants={reveal} className="mt-5 flex items-center gap-2.5 text-sm text-zinc-500 sm:text-base">
          <span className="size-1.5 rounded-full bg-amber-300" />
          Based in {siteConfig.location}
        </motion.p>
        <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-3.5">
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
