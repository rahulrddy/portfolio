'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import type { MouseEvent } from 'react';

export function AmbientBackground() {
  const rawX = useMotionValue(50);
  const rawY = useMotionValue(38);
  const x = useSpring(rawX, { stiffness: 45, damping: 18, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 45, damping: 18, mass: 0.8 });
  const background = useMotionTemplate`radial-gradient(560px circle at ${x}% ${y}%, rgba(241, 184, 79, .09), transparent 64%)`;

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set(((event.clientX - rect.left) / rect.width) * 100);
    rawY.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <div className="pointer-events-auto absolute inset-0 overflow-hidden" onMouseMove={onMouseMove} aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:linear-gradient(to_right,transparent,black_24%,black_78%,transparent)]" />
      <motion.div className="absolute inset-0" style={{ background }} />
      <motion.div
        className="absolute -left-24 top-[18%] size-80 rounded-full bg-amber-300/[0.045] blur-[110px]"
        animate={{ x: [0, 26, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[4%] right-[5%] size-96 rounded-full bg-slate-500/[0.04] blur-[120px]"
        animate={{ x: [0, -20, 0], y: [0, 16, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
