'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function CtaLink({ href, children, variant = 'primary' }: CtaLinkProps) {
  const styles =
    variant === 'primary'
      ? 'border-amber-200/60 bg-gradient-to-b from-[#ffd783] to-[#eeb24c] text-zinc-950 shadow-[0_12px_40px_rgba(238,178,76,.13)]'
      : 'border-white/20 bg-white/[0.025] text-zinc-100 hover:border-amber-200/40';

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex min-w-44 items-center justify-center gap-3 rounded-full border px-6 py-3.5 text-sm font-semibold transition-colors ${styles}`}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  );
}
