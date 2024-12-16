"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { navActions } from "@/data/static/navigation/navbar.data";

export function NavbarAction() {
  return (
    <div className="flex items-center gap-3">
      {navActions.map((action, idx) => (
        <motion.div
          key={action.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: { delay: idx * 0.1 } 
          }}
        >
          <Link href={action.href}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={[
                "btn", // base styles from global
                action.variant === 'primary' ? "btn-primary" :
                action.variant === 'secondary' ? "btn-secondary" : 
                "btn-ghost",
                "relative group"
              ].join(" ")}
            >
              <span className="relative flex items-center gap-2">
                {action.label}
                {action.icon && (
                  // Assume we have an Icon component or use Lucide icons directly
                  <i className={`lucide-${action.icon.toLowerCase()} w-4 h-4 group-hover:scale-110 transition-transform duration-300`} />
                )}
              </span>
              {/* Additional decorative effects can remain if desired */}
            </motion.button>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
