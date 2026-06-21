"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { NAV, SITE } from "@/data/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "border-b border-line bg-bg-0/70 backdrop-blur-xl" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#main" className="group flex items-center gap-2.5" data-cursor>
          <span className="relative grid h-7 w-7 place-items-center">
            <span className="absolute h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_16px_3px_var(--color-accent)]" />
            <span className="absolute h-7 w-7 rounded-full border border-accent/40" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            {SITE.name}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                data-cursor
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-text"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={SITE.appUrl}
          data-cursor
          className="rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-accent/60 hover:text-accent"
        >
          Launch App
        </a>
      </nav>
    </motion.header>
  );
}
