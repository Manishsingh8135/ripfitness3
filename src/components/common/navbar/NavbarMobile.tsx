"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { navItems, navActions, mobileNavFeatures } from "@/data/static/navigation/navbar.data";
import { ChevronDown, ChevronRight } from "lucide-react";

interface NavbarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NavbarMobile({ isOpen, onClose }: NavbarMobileProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* Mobile Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className={[
              "fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-black border-l border-white/10",
              "flex flex-col"
            ].join(" ")}
          >
            <div className="absolute inset-0 bg-dot-white/[0.05]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--gold-primary)/5] via-transparent to-[var(--gold-dark)/5]" />
            <div className="relative flex-1 flex flex-col">
              {/* Menu Items */}
              <nav className="flex-1 overflow-y-auto p-6 space-y-2">
                {navItems.map((item) => (
                  <div key={item.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {item.features ? (
                        <button
                          onClick={() => setExpandedItem(
                            expandedItem === item.id ? null : item.id
                          )}
                          className={[
                            "w-full px-4 py-2 rounded-xl text-lg font-medium text-white/80 hover:text-white transition-all duration-300",
                            expandedItem === item.id && "text-[var(--gold-primary)]"
                          ].join(" ")}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.label}</span>
                            <ChevronDown
                              className={[
                                "w-5 h-5 transition-transform duration-300",
                                expandedItem === item.id && "rotate-180 text-[var(--gold-primary)]"
                              ].join(" ")}
                            />
                          </div>
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="flex items-center justify-between px-4 py-2 rounded-xl text-lg font-medium text-white/80 hover:text-white transition-all duration-300"
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="w-5 h-5" />
                        </Link>
                      )}
                    </motion.div>

                    {/* Expandable Features */}
                    {item.features && (
                      <AnimatePresence>
                        {expandedItem === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pt-2 pb-4 pl-4"
                          >
                            {item.features.map((feature, idx) => (
                              <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0, transition: { delay: idx * 0.1 } }}
                              >
                                <Link
                                  href={feature.href}
                                  onClick={onClose}
                                  className={[
                                    "flex items-center gap-3 px-4 py-2 rounded-xl group transition-all duration-300 hover:bg-white/5"
                                  ].join(" ")}
                                >
                                  <div className={[
                                    "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg",
                                    "bg-gradient-to-br from-[var(--gold-primary)/10] to-[var(--gold-dark)/10]",
                                    "border border-[var(--gold-primary)/20] group-hover:border-[var(--gold-primary)/40]"
                                  ].join(" ")}>
                                    <i className={`lucide-${feature.icon.toLowerCase()} w-4 h-4 text-[var(--gold-primary)]`} />
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-white/80 group-hover:text-[var(--gold-primary)] transition-all duration-300">
                                      {feature.title}
                                    </h4>
                                    <p className="text-sm text-white/60 group-hover:text-white/80 transition-all duration-300">
                                      {feature.description}
                                    </p>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}

                {/* Additional Mobile Features */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="px-4 text-sm font-medium text-white/40 uppercase">
                    Additional Features
                  </h3>
                  <div className="mt-4 space-y-2">
                    {mobileNavFeatures.map((feature, idx) => (
                      <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0, transition: { delay: 0.2 + idx * 0.1 } }}
                      >
                        <Link
                          href={feature.href}
                          onClick={onClose}
                          className="flex items-center gap-3 px-4 py-2 rounded-xl group hover:bg-white/5 transition-all duration-300"
                        >
                          <div className={[
                            "w-8 h-8 flex items-center justify-center rounded-lg",
                            "bg-gradient-to-br from-[var(--gold-primary)/10] to-[var(--gold-dark)/10]",
                            "border border-[var(--gold-primary)/20] group-hover:border-[var(--gold-primary)/40]"
                          ].join(" ")}>
                            <i className={`lucide-${feature.icon.toLowerCase()} w-4 h-4 text-[var(--gold-primary)]`} />
                          </div>
                          <div>
                            <h4 className="font-medium text-white/80 group-hover:text-[var(--gold-primary)] transition-all duration-300">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-white/60 group-hover:text-white/80 transition-all duration-300">
                              {feature.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </nav>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex flex-col gap-3 border-t border-white/10">
                {navActions.map((action, idx) => (
                  <motion.div
                    key={action.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.3 + idx * 0.1 } }}
                    className="w-full"
                  >
                    <Link
                      href={action.href}
                      onClick={onClose}
                      className={[
                        "w-full px-4 py-2 rounded-xl flex items-center justify-center gap-2 transition-all duration-300",
                        action.variant === "primary" ?
                          "bg-gradient-to-r from-[var(--gold-primary)] via-[var(--gold-warm)] to-[var(--gold-dark)] text-black font-semibold" :
                          "border-2 border-[var(--gold-primary)/20] text-white/80 hover:text-white hover:border-[var(--gold-primary)/40]"
                      ].join(" ")}
                    >
                      <span>{action.label}</span>
                      {action.icon && (
                        <i className={`lucide-${action.icon.toLowerCase()} w-4 h-4 ${
                          action.variant === "primary" ? "text-black" : "text-current"
                        }`} />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
