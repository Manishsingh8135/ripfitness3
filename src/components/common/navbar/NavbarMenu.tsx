"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { navItems } from "@/data/static/navigation/navbar.data";
import { ChevronDown } from "lucide-react";

export function NavbarMenu() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="flex items-center gap-2">
      {navItems.map((item) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {/* Menu Item */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href={item.href}
              className={[
                "relative flex items-center gap-2 px-4 py-2 whitespace-nowrap transition-all duration-300",
                hoveredItem === item.id ? "text-[var(--gold-primary)] text-glow" : "text-white/80 hover:text-white"
              ].join(" ")}
            >
              <span>{item.label}</span>
              {item.features && (
                <ChevronDown
                  className={[
                    "w-4 h-4 transition-transform duration-300",
                    hoveredItem === item.id && "rotate-180 text-[var(--gold-primary)]"
                  ].join(" ")}
                />
              )}

              {/* Hover Effect Line */}
              <motion.div
                className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-[var(--gold-primary)] to-[var(--gold-warm)] origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredItem === item.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          </motion.div>

          {/* Dropdown Menu */}
          {item.features && (
            <AnimatePresence>
              {hoveredItem === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={[
                    "absolute top-full left-0 w-[400px] p-4 mt-2 rounded-3xl",
                    "bg-black/90 backdrop-blur-xl border border-white/10",
                    "shadow-[var(--shadow-basic-glow)] grid grid-cols-1 gap-2 overflow-hidden"
                  ].join(" ")}
                >
                  <div className="absolute inset-0 bg-dot-white/[0.05]" />
                  <div className="relative grid gap-2">
                    {item.features.map((feature, idx) => (
                      <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0, transition: { delay: idx * 0.1 } }}
                      >
                        <Link
                          href={feature.href}
                          className={[
                            "relative p-4 flex items-start gap-4 rounded-xl transition-all duration-300 hover:bg-white/5 cursor-pointer"
                          ].join(" ")}
                        >
                          <div className={[
                            "flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full",
                            "bg-gradient-to-br from-[var(--gold-primary)/10] to-[var(--gold-dark)/10]",
                            "border border-[var(--gold-primary)/20]"
                          ].join(" ")}>
                            <i className={`lucide-${feature.icon.toLowerCase()} w-5 h-5 text-[var(--gold-primary)]`} />
                          </div>
                          <div>
                            <h4 className="font-medium text-white hover:text-[var(--gold-primary)] transition-all duration-300">
                              {feature.title}
                            </h4>
                            <p className="text-sm mt-0.5 text-white/60 hover:text-white/80 transition-all duration-300">
                              {feature.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </nav>
  );
}
