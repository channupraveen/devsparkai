"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

const projectTypes = ["a website", "an AI product", "a mobile app", "a SaaS platform", "something else"];
const budgets = ["< $2k", "$2k – $5k", "$5k – $15k", "$15k+", "not sure yet"];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const canSend = name.trim() && email.trim() && type;

  const handleSend = () => {
    if (!canSend) return;
    // TODO: wire up email integration (Resend / EmailJS / API route) here.
    // Payload: { name, email, type, budget, message }
    setSent(true);
  };

  const inputCls =
    "inline-block bg-transparent border-b-2 border-line focus:border-accent outline-none px-2 mx-1 min-w-[180px] text-ink placeholder:text-muted/50 transition-colors duration-300";

  return (
    <section id="contact" className="px-5 md:px-8 py-20 md:py-32 border-t border-line overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-baseline justify-between mb-14 md:mb-20">
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight">
              Start a <em className="text-accent">project</em>
            </h2>
            <span className="font-mono text-xs text-muted hidden md:block">(contact)</span>
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.div
              key="form"
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Reveal delay={0.1}>
                <p className="font-serif font-light text-2xl md:text-4xl leading-[1.7] md:leading-[1.8]">
                  Hi DevSpark, my name is
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="your name"
                    className={inputCls}
                    aria-label="Your name"
                  />
                  and I want to build
                  <span className="inline-flex flex-wrap gap-2 mx-2 align-middle">
                    {projectTypes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setType(t)}
                        className={`text-base md:text-lg font-sans border rounded-full px-4 py-1.5 transition-all duration-300 ${
                          type === t
                            ? "bg-accent border-accent text-paper"
                            : "border-line text-muted hover:border-ink hover:text-ink"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </span>
                  . My budget is around
                  <span className="inline-flex flex-wrap gap-2 mx-2 align-middle">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`text-base md:text-lg font-sans border rounded-full px-4 py-1.5 transition-all duration-300 ${
                          budget === b
                            ? "bg-ink border-ink text-paper"
                            : "border-line text-muted hover:border-ink hover:text-ink"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </span>
                  . You can reach me at
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className={`${inputCls} min-w-[240px]`}
                    aria-label="Your email"
                  />
                  .
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <textarea
                  data-lenis-prevent
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Anything else we should know? (optional)"
                  rows={3}
                  className="mt-10 w-full bg-transparent border border-line rounded-sm p-4 text-ink placeholder:text-muted/50 outline-none focus:border-accent transition-colors duration-300 resize-none"
                />
              </Reveal>

              <Reveal delay={0.3}>
                <motion.button
                  type="button"
                  onClick={handleSend}
                  disabled={!canSend}
                  whileHover={canSend ? { scale: 1.03 } : {}}
                  whileTap={canSend ? { scale: 0.97 } : {}}
                  className={`mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm uppercase tracking-widest transition-colors duration-300 ${
                    canSend
                      ? "bg-ink text-paper hover:bg-accent cursor-pointer"
                      : "bg-line/60 text-muted cursor-not-allowed"
                  }`}
                >
                  Send it over <span aria-hidden>→</span>
                </motion.button>
              </Reveal>
            </motion.div>
          ) : (
            <motion.div
              key="sent"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="py-10"
            >
              <p className="font-serif font-light text-3xl md:text-5xl leading-snug">
                Thanks, <em className="text-accent">{name.split(" ")[0]}</em>. <br />
                We&apos;ll get back to you within 24 hours.
              </p>
              <p className="text-muted mt-6">
                Meanwhile, feel free to reach us directly at{" "}
                <a href="mailto:devsparkai.studio@gmail.com" className="link-underline text-ink">
                  devsparkai.studio@gmail.com
                </a>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
