"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { TOOLS } from "@/data/tools";

// duplicate the list so the marquee loops seamlessly
const MARQUEE = [...TOOLS, ...TOOLS];

export default function Engine() {
  return (
    <section
      id="engine"
      className="relative overflow-hidden py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Engine"
          title={
            <>
              Real tools.{" "}
              <span className="text-accent-2">Under the hood.</span>
            </>
          }
          intro="Kryx is not an LLM wrapper. The swarm orchestrates the same battle-tested tooling a human operator reaches for — and reasons over the raw output."
          className="mb-14"
        />
      </div>

      {/* marquee */}
      <div
        className="relative flex select-none gap-4 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
        aria-hidden
      >
        <div className="flex shrink-0 animate-[marquee_38s_linear_infinite] gap-4 motion-reduce:animate-none">
          {MARQUEE.map((t, i) => (
            <ToolPill key={`a-${i}`} name={t.name} role={t.role} />
          ))}
        </div>
      </div>

      {/* accessible static grid */}
      <div className="mx-auto mt-14 max-w-7xl px-6 lg:px-10">
        <Reveal>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {TOOLS.map((t) => (
              <li
                key={t.name}
                className="group flex flex-col gap-1 bg-bg-1 px-5 py-5 transition-colors hover:bg-bg-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-text">{t.name}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted opacity-0 transition-opacity group-hover:opacity-100">
                    {t.stage}
                  </span>
                </div>
                <span className="text-xs text-muted">{t.role}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

function ToolPill({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-full border border-line bg-bg-1/60 px-5 py-3">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      <span className="font-mono text-sm text-text">{name}</span>
      <span className="font-mono text-xs text-muted">{role}</span>
    </div>
  );
}
