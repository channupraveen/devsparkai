"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const services = [
  {
    n: "01",
    title: "Web design & development",
    desc: "Custom sites and web apps built on Next.js — fast, accessible, and designed around your brand instead of a template.",
  },
  {
    n: "02",
    title: "AI features & automation",
    desc: "Chat assistants, document intelligence, and workflow automation wired into your real business processes, not bolted on.",
  },
  {
    n: "03",
    title: "SaaS product engineering",
    desc: "From multi-tenant architecture to billing and dashboards — we've built and shipped production SaaS end to end.",
  },
  {
    n: "04",
    title: "Mobile apps",
    desc: "Flutter apps taken all the way through Play Store and App Store review — compliance, submission, and post-launch fixes included.",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="px-5 md:px-8 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-baseline justify-between mb-12 md:mb-16">
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight">
              What we <em className="text-accent">do</em>
            </h2>
            <span className="font-mono text-xs text-muted hidden md:block">
              (services)
            </span>
          </div>
        </Reveal>

        <div>
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group border-t border-line last:border-b py-8 md:py-10 grid md:grid-cols-12 gap-4 items-baseline cursor-default transition-colors duration-300 hover:bg-ink/[0.025]"
              >
                <span className="md:col-span-1 font-mono text-sm text-accent">
                  {s.n}
                </span>
                <h3
                  className={`md:col-span-5 font-serif text-2xl md:text-4xl tracking-tight transition-transform duration-300 ${
                    active === i ? "md:translate-x-3" : ""
                  }`}
                >
                  {s.title}
                </h3>
                <p className="md:col-span-5 md:col-start-8 text-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
