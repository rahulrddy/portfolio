'use client';

import { Download, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site';

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.32 7.41A2.06 2.06 0 1 1 5.32 3.3a2.06 2.06 0 0 1 0 4.11Zm1.78 13.04H3.54V8.98H7.1v11.47Z" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-30 mx-auto flex w-full max-w-[1600px] flex-col gap-4 px-4 pb-2 pt-4 sm:px-6 md:px-10 lg:grid lg:h-24 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-0 lg:px-14 lg:py-0 2xl:px-16">
      <nav
        className="order-2 mx-auto flex rounded-full border border-white/10 bg-white/[0.035] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,.04)] backdrop-blur-xl lg:order-none lg:col-start-2"
        aria-label="Primary navigation"
      >
        <a href="#about" className="relative rounded-full px-5 py-2.5 text-sm font-medium text-white sm:px-6">
          <motion.span
            layoutId="active-navigation"
            className="absolute inset-0 rounded-full border border-amber-300/25 bg-gradient-to-b from-amber-300/10 to-white/[0.035] shadow-[0_8px_28px_rgba(245,185,76,.07)]"
          />
          <span className="relative">About</span>
        </a>
        <a href="#work" className="rounded-full px-5 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white sm:px-6">
          Work
        </a>
      </nav>

      <div className="order-1 flex min-h-9 items-center justify-center gap-4 sm:justify-end md:gap-5 lg:order-none lg:col-start-3 lg:justify-self-end">
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Rahul Origanti on LinkedIn"
          className="text-[#0A66C2] transition-transform hover:-translate-y-0.5"
        >
          <LinkedInIcon />
        </a>
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Rahul Origanti on GitHub"
          className="text-zinc-100 transition-transform hover:-translate-y-0.5"
        >
          <Github className="size-5" />
        </a>
        <span className="h-7 w-px bg-white/10" aria-hidden="true" />
        <a
          href={siteConfig.links.resume}
          download
          className="group inline-flex items-center gap-2 border-b border-amber-300/60 py-1.5 text-sm text-zinc-200 transition-colors hover:border-amber-200 hover:text-amber-200"
        >
          Resume
          <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}
