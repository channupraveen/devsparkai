"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const line = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-8"
        >
          Web &amp; AI studio — Hyderabad, working worldwide
        </motion.p>

        <h1 className="font-serif font-light text-[13vw] md:text-[7.5vw] leading-[0.98] tracking-tight">
          <span className="block overflow-hidden">
            <motion.span custom={0} variants={line} initial="hidden" animate="show" className="block">
              We build websites
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span custom={1} variants={line} initial="hidden" animate="show" className="block">
              and AI products that
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span custom={2} variants={line} initial="hidden" animate="show" className="block">
              feel <em className="text-accent">handmade.</em>
            </motion.span>
          </span>
        </h1>

        <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4"
          >
            <p className="text-muted leading-relaxed">
              A small studio doing careful work — custom web platforms, automation,
              and AI features that actually ship. No templates, no bloat, no
              hand-waving.
            </p>
            <a
              href="#work"
              className="link-underline inline-block mt-6 text-sm uppercase tracking-widest"
            >
              See the work ↓
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-8 relative aspect-[16/9] overflow-hidden rounded-sm"
          >
            <Image
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop"
              alt="Designer's desk with sketches and laptop"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
