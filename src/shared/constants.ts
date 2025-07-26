import type { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.1 }
  }
};

export const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

export const positionColors: Record<string, string> = {
  Portero:   "bg-yellow-500",
  Defensa:   "bg-blue-500",
  Centrocampista: "bg-green-500",
  Extremo:   "bg-purple-500",
  Delantero: "bg-red-500"
};

export const COLORS = ['#ef4444', '#22c55e', '#3b82f6', '#a855f7', '#eab308'];
