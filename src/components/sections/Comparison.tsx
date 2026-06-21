"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { COMPARISON } from "@/data/comparison";

const COLS = ["", "Kryx", "Manual pentest", "Classic scanners"];

export default function Comparison() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <SectionHeading
        eyebrow="Comparison"
        title={
          <>
            Where Kryx{" "}
            <span className="text-accent">pulls ahead.</span>
          </>
        }
        intro="The speed of automation, the judgement of a human operator, and a false-positive rate that classic scanners can't touch."
        className="mb-14"
      />

      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-line">
          {/* header */}
          <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr] bg-bg-1">
            {COLS.map((c, i) => (
              <div
                key={c || i}
                className={`px-4 py-5 sm:px-6 ${
                  i === 1
                    ? "relative bg-accent/[0.06]"
                    : ""
                }`}
              >
                {i === 1 && (
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                )}
                <span
                  className={`font-display text-sm font-semibold tracking-tight sm:text-base ${
                    i === 1 ? "text-accent" : i === 0 ? "text-muted" : "text-text"
                  }`}
                >
                  {c || "Capability"}
                </span>
              </div>
            ))}
          </div>

          {/* rows */}
          {COMPARISON.map((row, r) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: r * 0.05, duration: 0.5 }}
              className="grid grid-cols-[1.3fr_1fr_1fr_1fr] border-t border-line text-sm"
            >
              <div className="px-4 py-5 font-mono text-xs text-muted sm:px-6 sm:text-sm">
                {row.label}
              </div>
              <div className="relative bg-accent/[0.04] px-4 py-5 sm:px-6">
                <span className="flex items-start gap-2 font-medium text-text">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {row.kryx}
                </span>
              </div>
              <div className="px-4 py-5 text-muted sm:px-6">{row.manual}</div>
              <div className="px-4 py-5 text-muted sm:px-6">{row.scanner}</div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
