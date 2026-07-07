"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "AiOpsCare",
    tag: "Hospital operations SaaS",
    year: "2025–26",
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1400&auto=format&fit=crop",
    alt: "Modern hospital corridor",
  },
  {
    title: "Jain Grocer",
    tag: "Grocery delivery platform",
    year: "2026",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1400&auto=format&fit=crop",
    alt: "Fresh produce in a grocery store",
  },
  {
    title: "SmartTask AI",
    tag: "AI productivity tool",
    year: "2025",
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1400&auto=format&fit=crop",
    alt: "Workspace with notebook and coffee",
  },
  {
    title: "Ragavendra Developers",
    tag: "Real estate web platform",
    year: "2025",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
    alt: "Modern building facade",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-5 md:px-8 py-20 md:py-32 border-t border-line">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-baseline justify-between mb-14 md:mb-20">
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight">
              Selected <em className="text-accent">work</em>
            </h2>
            <span className="font-mono text-xs text-muted hidden md:block">
              (2025 — 2026)
            </span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-24">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.06}
              className={i % 2 === 1 ? "md:mt-24" : ""}
            >
              <article className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    sizes="(min-width: 768px) 45vw, 100vw"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between border-b border-line pb-4">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-muted text-sm mt-1">{p.tag}</p>
                  </div>
                  <span className="font-mono text-xs text-muted">{p.year}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
