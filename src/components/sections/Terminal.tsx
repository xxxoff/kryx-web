"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SCAN_LOG, type LogKind } from "@/data/terminal-log";

const COLOR: Record<LogKind, string> = {
  sys: "text-accent-2",
  tool: "text-accent",
  info: "text-muted",
  found: "text-text",
  ok: "text-accent",
  rejected: "text-danger",
  stage: "text-text",
};

const PREFIX: Record<LogKind, string> = {
  sys: "kryx ›",
  tool: "$",
  info: " ",
  found: "!",
  ok: "✓",
  rejected: "✕",
  stage: "▌",
};

export default function Terminal() {
  const [count, setCount] = useState(0); // how many lines revealed
  const [started, setStarted] = useState(false);
  const [reduced, setReduced] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  // start when scrolled into view
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(reduce);
    if (reduce) {
      setCount(SCAN_LOG.length);
      return;
    }
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // reveal lines on a paced timer
  useEffect(() => {
    if (!started || reduced) return;
    if (count >= SCAN_LOG.length) return;
    const line = SCAN_LOG[count];
    const base = line.kind === "stage" ? 420 : 260;
    const delay = base * (line.pause ?? 1);
    const id = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(id);
  }, [started, count, reduced]);

  // keep scrolled to newest line
  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [count]);

  const lines = SCAN_LOG.slice(0, count);
  const done = count >= SCAN_LOG.length;

  // stage progress derived from how many stage-headers have appeared
  const stagesSeen = lines.filter((l) => l.kind === "stage").length;
  const progress = Math.round((stagesSeen / 5) * 100);

  return (
    <section
      id="terminal"
      ref={sectionRef}
      className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"
    >
      <SectionHeading
        eyebrow="Live Scan"
        title={
          <>
            Watch the swarm{" "}
            <span className="text-accent-2">hunt in real time.</span>
          </>
        }
        intro="A WebSocket stream from the engine — every tool invocation, every finding, every false positive culled. This is a demonstration capture; data is illustrative."
        className="mb-12"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass scanlines relative overflow-hidden rounded-2xl shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]"
      >
        {/* title bar */}
        <div className="flex items-center gap-3 border-b border-line px-5 py-3.5">
          <span className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-danger/70" />
            <span className="h-3 w-3 rounded-full bg-accent/60" />
            <span className="h-3 w-3 rounded-full bg-accent-2/60" />
          </span>
          <span className="ml-2 font-mono text-xs text-muted">
            kryx://scan — demo.acme-corp.example
          </span>
          <span className="ml-auto flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted">
            <span
              className={`h-1.5 w-1.5 rounded-full ${done ? "bg-muted" : "animate-pulse bg-danger"}`}
            />
            {done ? "complete" : "live"}
          </span>
        </div>

        {/* progress bar */}
        <div className="flex items-center gap-3 border-b border-line px-5 py-2.5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            pipeline
          </span>
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-bg-2">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent-2 to-accent"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.6 }}
            />
          </div>
          <span className="w-10 text-right font-mono text-[10px] text-muted">
            {progress}%
          </span>
        </div>

        {/* log body */}
        <div
          ref={logRef}
          className="h-[420px] overflow-y-auto px-5 py-4 font-mono text-[12.5px] leading-relaxed sm:text-sm"
        >
          {lines.map((l, i) => (
            <div
              key={i}
              className={`flex gap-2.5 whitespace-pre-wrap ${
                l.kind === "stage" ? "mt-3 border-l-2 border-accent/50 pl-2.5" : ""
              }`}
            >
              <span className={`select-none ${COLOR[l.kind]} opacity-70`}>
                {PREFIX[l.kind]}
              </span>
              <span className={COLOR[l.kind]}>{l.text}</span>
            </div>
          ))}
          {!done && (
            <span className="inline-block h-4 w-2 animate-pulse bg-accent align-middle" />
          )}
        </div>
      </motion.div>
    </section>
  );
}
