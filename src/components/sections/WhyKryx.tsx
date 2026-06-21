"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { DIFFERENTIATORS } from "@/data/comparison";

export default function WhyKryx() {
  return (
    <section
      id="why"
      className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"
    >
      <SectionHeading
        eyebrow="Why Kryx"
        title={
          <>
            Not a scanner. Not a chatbot.
            <br />
            <span className="text-accent">An operator.</span>
          </>
        }
        intro="Four reasons security teams trust what Kryx surfaces — and act on it the same day."
        className="mb-14"
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {DIFFERENTIATORS.map((d, i) => (
          <Reveal key={d.id} delay={i * 0.08}>
            <GlassCard
              tilt
              glow
              className="group h-full p-7 sm:p-9"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {d.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                    {d.desc}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="font-display text-4xl font-semibold leading-none text-accent glow-accent sm:text-5xl">
                    {d.metric}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted">
                    {d.metricLabel}
                  </div>
                </div>
              </div>

              {/* corner index */}
              <span className="pointer-events-none absolute bottom-5 right-6 font-mono text-xs text-line">
                0{i + 1}
              </span>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
