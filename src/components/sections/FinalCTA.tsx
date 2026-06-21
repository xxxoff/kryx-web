"use client";

import { motion } from "motion/react";
import EchoCanvas from "@/components/three/EchoCanvas";
import WaitlistForm from "@/components/ui/WaitlistForm";
import Badge from "@/components/ui/Badge";
import { SITE } from "@/data/site";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-44">
      {/* 3D echo backdrop */}
      <div className="absolute inset-0 z-0 opacity-70">
        <EchoCanvas />
      </div>
      <div className="grid-lines pointer-events-none absolute inset-0 z-[1] opacity-25" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_20%,var(--color-bg-0)_85%)]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge pulse>
            {SITE.domain} — {SITE.status}
          </Badge>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-8 font-display text-[clamp(2.4rem,7vw,5rem)] font-semibold leading-[0.98] tracking-tight"
        >
          Find it first.
          <br />
          <span className="text-accent glow-accent">Before they do.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg"
        >
          Put an autonomous swarm of operators on your attack surface today.
          Request access to the Kryx private beta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex w-full justify-center"
        >
          <WaitlistForm compact />
        </motion.div>
      </div>
    </section>
  );
}
