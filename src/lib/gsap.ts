import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* atalho para depuração no console */
if (typeof window !== "undefined") {
  (window as unknown as Record<string, unknown>).__gsap = { gsap, ScrollTrigger };
}

export const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { gsap, ScrollTrigger };
