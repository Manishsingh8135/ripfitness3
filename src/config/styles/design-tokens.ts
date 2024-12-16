// src/config/design-tokens.ts

export const COLORS = {
  gold: {
    50: "#FFF9E6",
    100: "#FFF3CC",
    200: "#FFE799",
    300: "#FFDB66",
    400: "#FFCF33",
    500: "#FFD700", // Primary Gold
    600: "#CCA900",
    700: "#997F00",
    800: "#665500",
    900: "#332A00",
  },
  accent: {
    light: "#FDB931", // Warm Gold
    DEFAULT: "#DAA520", // Royal Gold
    dark: "#C6930A", // Dark Gold
  },
  background: {
    DEFAULT: "#000000", // Pure Black
    secondary: "#111111", // Rich Black
    tertiary: "#0A0A0A", // Deep Black
  },
  text: {
    primary: "#FFFFFF",
    secondary: "rgba(255, 255, 255, 0.8)",
    tertiary: "rgba(255, 255, 255, 0.6)",
    accent: "#FFD700",
  }
};

export const GRADIENTS = {
  primary: "linear-gradient(to right, #FFD700, #FDB931, #C6930A)",
  hover: "linear-gradient(to right, #FDB931, #DAA520, #C6930A)",
  text: "linear-gradient(to right, #FFD700, #FDB931, #FFD700)",
  border: "linear-gradient(45deg, #FFD700, #FDB931, #C6930A)",
  glow: {
    primary: "linear-gradient(to right, transparent, #FFD700/20, transparent)",
    secondary: "linear-gradient(to right, transparent, #FDB931/20, transparent)",
  },
  overlay: {
    dark: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
    light: "linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)",
    premium: "linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.8))",
  },
  background: {
    premium: "linear-gradient(to right, #FFD700/5, #FDB931/5, #C6930A/5)",
  }
};

export const SHADOWS = {
  premium: {
    sm: "shadow-[0_0_20px_rgba(218,165,32,0.2)]",
    md: "shadow-[0_0_30px_rgba(218,165,32,0.3)]",
    lg: "shadow-[0_0_40px_rgba(218,165,32,0.4)]",
    xl: "shadow-[0_0_50px_rgba(218,165,32,0.5)]",
  },
  glow: {
    text: "drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]",
    border: "drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]",
    hover: "drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]",
  }
};

export const ANIMATION_CONFIGS = {
  spring: {
    type: "spring" as const,
    stiffness: 260,
    damping: 20,
  },
  smooth: {
    type: "tween" as const,
    duration: 0.3,
    ease: [0.16, 1, 0.3, 1],
  },
  premium: {
    type: "tween" as const,
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  },
  delayStagger: {
    staggerChildren: 0.1,
    delayChildren: 0.2,
  },
};

export const EFFECTS = {
  hover: {
    lift: "hover:-translate-y-1 transition-transform duration-300",
    scale: "hover:scale-[1.02] transition-transform duration-300",
    glow: "hover:shadow-[0_0_30px_rgba(218,165,32,0.3)] transition-shadow duration-300",
    shine: "hover:border-gold-500/40 transition-colors duration-300",
  },
  focus: {
    primary: "focus:outline-none focus:ring-2 focus:ring-gold-500/50",
    subtle: "focus:outline-none focus:ring-1 focus:ring-white/20",
  },
  glass: {
    light: "backdrop-blur-sm bg-white/[0.05] border border-white/10",
    medium: "backdrop-blur-lg bg-black/40 border border-white/10",
    heavy: "backdrop-blur-xl bg-black/60 border border-white/10",
  },
  borders: {
    subtle: "border border-white/10",
    premium: "border border-gold-500/20",
    interactive: "border border-gold-500/40",
  },
  patterns: {
    dots: "bg-dot-white/[0.05]",
    grid: "bg-grid-white/[0.05]",
    noise: "bg-noise-subtle",
  }
};

export const TYPOGRAPHY = {
  headings: {
    h1: "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight",
    h2: "text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight",
    h3: "text-2xl md:text-4xl lg:text-5xl font-bold",
    h4: "text-xl md:text-3xl lg:text-4xl font-bold",
  },
  body: {
    large: "text-lg md:text-xl text-white/80",
    base: "text-base text-white/70",
    small: "text-sm text-white/60",
  },
  special: {
    gradient: "bg-gradient-to-r from-gold-500 via-accent-light to-accent-dark bg-clip-text text-transparent",
    glow: "drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]",
  }
};

export const SPACING = {
  container: {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
  },
  section: {
    sm: "py-12",
    md: "py-20",
    lg: "py-32",
  },
  gap: {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  },
};

export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
};

export const TRANSITIONS = {
  base: "transition-all duration-300",
  smooth: "duration-500 ease-out",
  premium: "duration-800 ease-[0.16,1,0.3,1]",
};

export const Z_INDEX = {
  hide: -1,
  base: 0,
  raised: 1,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1600,
  tooltip: 1700,
};