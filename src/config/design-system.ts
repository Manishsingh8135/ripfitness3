// src/config/design-system.ts

import { cva } from "class-variance-authority";

// Card Variants
export const cardVariants = cva(
  "relative rounded-3xl overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: [
          "bg-black/40",
          "backdrop-blur-lg",
          "border border-white/10",
          "hover:border-gold-500/20",
        ],
        solid: [
          "bg-background-secondary",
          "border border-gold-500/20",
          "hover:border-gold-500/40",
        ],
        glass: [
          "backdrop-blur-xl",
          "bg-white/5",
          "border border-white/10",
          "hover:bg-white/10",
        ],
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-1",
        scale: "hover:scale-[1.02]",
      },
      glow: {
        none: "",
        sm: "hover:shadow-[0_0_20px_rgba(218,165,32,0.2)]",
        md: "hover:shadow-[0_0_30px_rgba(218,165,32,0.3)]",
        lg: "hover:shadow-[0_0_40px_rgba(218,165,32,0.4)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      hover: "none",
      glow: "none",
    },
  }
);

// Button Variants
export const buttonVariants = cva(
  "relative rounded-full font-semibold transition-all duration-300",
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#C6930A]",
          "text-black",
          "shadow-[0_0_20px_rgba(218,165,32,0.3)]",
          "hover:shadow-[0_0_30px_rgba(218,165,32,0.4)]",
          "active:scale-95",
        ],
        secondary: [
          "bg-black/10",
          "backdrop-blur-sm",
          "text-white",
          "border-2 border-[#FFD700]/50",
          "hover:border-[#FFD700]/70",
          "hover:bg-black/20",
          "active:scale-95",
        ],
        ghost: [
          "text-white/80",
          "hover:text-white",
          "hover:bg-white/5",
        ],
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
      glow: {
        none: "",
        sm: "hover:shadow-[0_0_20px_rgba(218,165,32,0.2)]",
        md: "hover:shadow-[0_0_30px_rgba(218,165,32,0.3)]",
        lg: "hover:shadow-[0_0_40px_rgba(218,165,32,0.4)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      glow: "none",
    },
  }
);

// Typography Variants
export const textVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight",
      h2: "text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight",
      h3: "text-2xl md:text-4xl lg:text-5xl font-bold",
      h4: "text-xl md:text-3xl lg:text-4xl font-bold",
      p: "text-base md:text-lg text-white/70",
      lead: "text-xl md:text-2xl text-white/70",
      small: "text-sm text-white/60",
    },
    gradient: {
      none: "",
      gold: "bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#C6930A] bg-clip-text text-transparent",
      white: "bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent",
    },
    glow: {
      none: "",
      sm: "drop-shadow-[0_0_10px_rgba(218,165,32,0.2)]",
      md: "drop-shadow-[0_0_15px_rgba(218,165,32,0.3)]",
      lg: "drop-shadow-[0_0_20px_rgba(218,165,32,0.4)]",
    },
  },
  defaultVariants: {
    variant: "p",
    gradient: "none",
    glow: "none",
  },
});

// Container Variants
export const containerVariants = cva(
  "mx-auto w-full px-4",
  {
    variants: {
      size: {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "max-w-full",
      },
    },
    defaultVariants: {
      size: "xl",
    },
  }
);

// Navigation Variants
export const navVariants = cva(
  [
    "fixed top-0 left-0 right-0",
    "w-full backdrop-blur-lg",
    "transition-all duration-300",
    "z-50",
  ],
  {
    variants: {
      variant: {
        transparent: "bg-transparent",
        glass: [
          "bg-black/40",
          "border-b",
          "border-white/10",
        ],
        solid: [
          "bg-black/95",
          "border-b",
          "border-[#FFD700]/20",
        ],
      },
      scrolled: {
        true: [
          "bg-black/95",
          "border-b",
          "border-[#FFD700]/20",
          "shadow-[0_0_20px_rgba(218,165,32,0.2)]",
        ],
        false: "",
      }
    },
    defaultVariants: {
      variant: "transparent",
      scrolled: false,
    }
  }
);

// Section Variants
export const sectionVariants = cva(
  "relative w-full overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        gradient: "bg-gradient-to-b from-black to-background",
        pattern: "bg-dot-white/[0.05]",
      },
      padding: {
        none: "",
        sm: "py-12",
        md: "py-20",
        lg: "py-32",
      },
      glow: {
        none: "",
        sm: "shadow-[0_0_50px_rgba(218,165,32,0.1)_inset]",
        md: "shadow-[0_0_100px_rgba(218,165,32,0.15)_inset]",
        lg: "shadow-[0_0_150px_rgba(218,165,32,0.2)_inset]",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      glow: "none",
    },
  }
);

// Input Variants
export const inputVariants = cva(
  [
    "w-full rounded-xl",
    "bg-white/5",
    "border border-white/10",
    "text-white",
    "transition-all duration-300",
  ],
  {
    variants: {
      variant: {
        default: [
          "hover:border-white/20",
          "focus:border-[#FFD700]/50",
          "focus:ring-1 focus:ring-[#FFD700]/50",
        ],
        premium: [
          "border-[#FFD700]/20",
          "hover:border-[#FFD700]/30",
          "focus:border-[#FFD700]/50",
          "focus:ring-1 focus:ring-[#FFD700]/50",
        ],
      },
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-3 text-base",
        lg: "px-5 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

// Types export
export type CardVariants = typeof cardVariants;
export type ButtonVariants = typeof buttonVariants;
export type TextVariants = typeof textVariants;
export type ContainerVariants = typeof containerVariants;
export type NavVariants = typeof navVariants;
export type SectionVariants = typeof sectionVariants;
export type InputVariants = typeof inputVariants;