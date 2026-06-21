"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import WaitlistForm from "@/components/ui/WaitlistForm";
import { PLANS } from "@/data/pricing";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"
    >
      <SectionHeading
        eyebrow="Pricing"
        title={
          <>
            From a single target to{" "}
            <span className="text-accent">your whole estate.</span>
          </>
        }
        intro="Plans from $99 to $9,999 / month. Kryx is in private beta — request access and we'll match you to the right tier."
        align="center"
        className="mb-16 text-center"
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.08}>
            <GlassCard
              glow={plan.featured}
              className={`group flex h-full flex-col p-8 ${
                plan.featured
                  ? "border-accent/40 shadow-[0_30px_90px_-40px_color-mix(in_srgb,var(--color-accent)_40%,transparent)]"
                  : ""
              }`}
            >
              {plan.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-bg-0">
                  Most capable
                </span>
              )}
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  {plan.price}
                </span>
                <span className="font-mono text-sm text-muted">
                  {plan.cadence}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {plan.blurb}
              </p>

              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[9px] ${
                        plan.featured
                          ? "bg-accent text-bg-0"
                          : "bg-bg-2 text-accent"
                      }`}
                    >
                      ✓
                    </span>
                    <span className="text-text/90">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                data-cursor
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-medium transition-colors ${
                  plan.featured
                    ? "bg-accent text-bg-0 hover:bg-[color-mix(in_srgb,var(--color-accent)_85%,white)]"
                    : "border border-line text-text hover:border-accent/50 hover:text-accent"
                }`}
              >
                Request Access
              </a>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {/* waitlist */}
      <div
        id="waitlist"
        className="mt-16 flex flex-col items-center gap-5 text-center"
      >
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Join the private beta
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex justify-center">
            <WaitlistForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
