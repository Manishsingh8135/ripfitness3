"use client";

import { motion } from "framer-motion";

interface NavbarEffectProps {
  isScrolled: boolean;
}

export function NavbarEffect({ isScrolled }: NavbarEffectProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-dot-white/[0.05]" />

      {/* Gradient background transition on scroll */}
      <div
        className={[
          "absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/60",
          "transition-opacity duration-500",
          isScrolled ? "opacity-95" : "opacity-60"
        ].join(" ")}
      />

      {/* Ambient Light Effect */}
      <div
        className={[
          "absolute -inset-[100%]",
          "bg-gradient-to-r from-transparent via-[var(--gold-primary)/5] to-transparent",
          "animate-[float_5s_infinite_alternate]"
        ].join(" ")}
      />

      {/* Top Border Glow */}
      <div
        className={[
          "absolute top-0 inset-x-0 h-px",
          "bg-gradient-to-r from-transparent via-[var(--gold-primary)/50] to-transparent",
          "transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        ].join(" ")}
      />

      {/* Glowing Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 0.5 : 0.2 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <div
          className={[
            "absolute -left-20 top-10 w-40 h-40 rounded-full",
            "bg-[var(--gold-primary)] opacity-20 blur-[100px]",
            "transition-transform duration-1000",
            isScrolled ? "-translate-y-10" : "translate-y-0"
          ].join(" ")}
        />
        <div
          className={[
            "absolute -right-20 top-20 w-40 h-40 rounded-full",
            "bg-[var(--gold-dark)] opacity-20 blur-[100px]",
            "transition-transform duration-1000",
            isScrolled ? "-translate-y-10" : "translate-y-0"
          ].join(" ")}
        />
      </motion.div>

      {/* Grain Effect */}
      <div
        className={[
          "absolute inset-0 bg-[url('/grain.png')] opacity-20 transition-opacity duration-500",
          isScrolled ? "opacity-10" : "opacity-20"
        ].join(" ")}
      />
    </div>
  );
}
