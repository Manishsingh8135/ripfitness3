"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { NavbarProps } from "@/types/components/navigation/navbar.types";

// Components
import { NavbarBrand } from "./NavbarBrand";
import { NavbarMenu } from "./NavbarMenu";
import { NavbarAction } from "./NavbarActions";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarEffect } from "./NavbarEffects";

export function Navbar({
  variant = "transparent",
  position = "fixed",
  className = "",
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const { scrollY } = useScroll();

  // Handle scroll events
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "auto";
  }, [isMobileOpen]);

  // Navbar background variants
  const bgClasses = variant === "glass"
    ? "bg-black/40 backdrop-blur-lg border-b border-white/10"
    : variant === "solid"
      ? "bg-black/95 border-b border-[var(--gold-primary)/20]"
      : "bg-transparent";

  const scrolledClasses = isScrolled
    ? "bg-black/95 border-b border-[var(--gold-primary)/20] shadow-[0_0_20px_rgba(218,165,32,0.2)]"
    : "";

  return (
    <>
      <motion.header
        initial="transparent"
        animate={variant}
        data-scrolled={isScrolled}
        className={[
          position === "fixed" ? "fixed" : position === "sticky" ? "sticky" : "relative",
          "top-0 left-0 right-0 w-full z-50 transition-all duration-300",
          bgClasses,
          scrolledClasses,
          className
        ].join(" ")}
      >
        {/* Navbar Background Effects */}
        <NavbarEffect isScrolled={isScrolled} />

        <div className="relative w-full h-20">
          <div className="mx-auto h-full flex items-center justify-between max-w-7xl px-4 md:px-6 lg:px-8">
            {/* Brand Section */}
            <NavbarBrand />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <NavbarMenu />
              <NavbarAction />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={[
                "lg:hidden p-2 rounded-full text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
              ].join(" ")}
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: isScrolled ? 1 : 0,
            transition: { duration: 0.4, ease: "easeInOut" }
          }}
          className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-[var(--gold-primary)] via-[var(--gold-warm)] to-[var(--gold-dark)]"
        />
      </motion.header>

      {/* Mobile Navigation */}
      <NavbarMobile isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
