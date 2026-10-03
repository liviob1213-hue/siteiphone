import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { gsap, reduceMotion, ScrollTrigger } from "../lib/gsap";
import { wa } from "../data/company";

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const tween = gsap.to(bar.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      ScrollTrigger.refresh();
    };
  }, []);

  return <div className="scroll-progress" ref={bar} aria-hidden="true" />;
}

export function WhatsFab() {
  return (
    <a
      className="fab-wa"
      href={wa(
        "Olá! Vim pelo site da Gold iPhones e quero falar sobre um iPhone."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={22} />
      <span>Pedir no WhatsApp</span>
    </a>
  );
}
