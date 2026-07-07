const items = [
  "Next.js",
  "FastAPI",
  "AI Automation",
  "Angular",
  "Flutter",
  "LLM Integrations",
  "E-commerce",
  "SaaS Platforms",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="border-y border-line py-5 overflow-hidden select-none">
      <div
        className="flex w-max items-center whitespace-nowrap will-change-transform"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            <span className="px-8">{item}</span>
            <span className="text-accent" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
