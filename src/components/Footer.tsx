"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer className="px-5 md:px-8 pt-24 md:pt-36 pb-10 border-t border-line">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-6">
            Have something in mind?
          </p>
          <a
            href="#contact"
            className="font-serif font-light text-[11vw] md:text-[6.5vw] leading-none tracking-tight inline-block hover:text-accent transition-colors duration-300"
          >
            Let&apos;s build it <em>together.</em>
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-8 border-t border-line pt-8 text-sm text-muted">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src="/logo.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
                <p className="text-ink font-medium font-serif text-base">
                  DevSpark<em className="text-accent"> AI</em>
                </p>
              </div>
              <p>Hyderabad, India</p>
              <p>Working worldwide</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-2">Contact</p>
              <a href="mailto:hello@devsparkai.com" className="link-underline block w-fit">
                hello@devsparkai.com
              </a>
            </div>
            <div className="flex md:justify-end items-end">
              <p className="font-mono text-xs">
                © {new Date().getFullYear()} DevSpark AI
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
