"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { navBrand } from "@/data/static/navigation/navbar.data";

export function NavbarBrand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={[
          "relative w-12 h-12 overflow-hidden rounded-full",
          "p-0.5",
          "bg-gradient-to-tr from-[var(--gold-primary)] via-[var(--gold-warm)] to-[var(--gold-dark)]"
        ].join(" ")}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
          <Image
            src={navBrand.logo.src}
            alt={navBrand.logo.alt}
            width={navBrand.logo.width}
            height={navBrand.logo.height}
            className="object-cover"
          />

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={[
            "text-xl font-bold",
            "text-gradient-gold", // Gradient text
            "text-glow" // Glow effect around text
          ].join(" ")}
        >
          {navBrand.name}
        </motion.span>
        
        {navBrand.tagline && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-white/60 transition-all duration-300"
          >
            {navBrand.tagline}
          </motion.span>
        )}
      </div>
    </Link>
  );
}
