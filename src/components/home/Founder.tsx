"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/YOUR_HANDLE" },
  { label: "GitHub", href: "https://github.com/YOUR_HANDLE" },
  { label: "X", href: "https://x.com/YOUR_HANDLE" },
];

export default function Founder() {
  return (
    <section className="px-5 md:px-8 py-20 md:py-32 border-t border-line">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <Reveal className="md:col-span-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm max-w-sm">
            <Image
              src="/profile.jpeg"
              alt="Channu Praveen, founder of DevSpark AI"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(min-width: 768px) 30vw, 100vw"
            />
          </div>
        </Reveal>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-6">
              Who&apos;s behind this
            </p>
            <h2 className="font-serif font-light text-4xl md:text-6xl tracking-tight leading-tight">
              Hi, I&apos;m <em className="text-accent">Channu Praveen.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-muted leading-relaxed mt-8 max-w-xl">
              Founding engineer and builder. I&apos;ve shipped production SaaS
              platforms, mobile apps through Play Store review, and AI features
              that real teams use daily. When you work with DevSpark AI, you
              work directly with me — no account managers, no hand-offs.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="flex flex-wrap gap-4 mt-10">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-line rounded-full px-5 py-2 text-sm text-muted hover:border-ink hover:text-ink hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {s.label} <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
