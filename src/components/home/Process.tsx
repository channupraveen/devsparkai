"use client";

import Reveal from "@/components/Reveal";

const steps = [
  {
    n: "①",
    title: "Listen",
    desc: "A short call to understand your business, users, and what 'done' actually looks like.",
  },
  {
    n: "②",
    title: "Design",
    desc: "Wireframes to real design in days, not weeks. You see progress constantly, not at the end.",
  },
  {
    n: "③",
    title: "Build",
    desc: "Clean code, real deploys from week one. Staging links you can click, not slide decks.",
  },
  {
    n: "④",
    title: "Ship & support",
    desc: "Launch, monitoring, and the unglamorous follow-through — store reviews, fixes, iteration.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-5 md:px-8 py-20 md:py-32 border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-baseline justify-between mb-14 md:mb-20">
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight">
              How we <em className="text-accent">work</em>
            </h2>
            <span className="font-mono text-xs opacity-50 hidden md:block">
              (process)
            </span>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/15">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="bg-ink">
              <div className="p-7 md:p-8 h-full">
                <span className="font-serif text-3xl text-accent">{s.n}</span>
                <h3 className="font-serif text-2xl mt-6 mb-3">{s.title}</h3>
                <p className="text-paper/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
