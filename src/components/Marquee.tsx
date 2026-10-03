import { useLayoutEffect, useRef } from "react";
import { gsap, reduceMotion } from "../lib/gsap";
import { beneficios } from "../data/company";

export default function Marquee() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      const track = root.current!.querySelector(".marquee-track")!;
      const distance = track.scrollWidth / 2;
      gsap.to(track, {
        x: -distance,
        duration: 34,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % distance}px`,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const items = [...beneficios, ...beneficios];

  return (
    <div className="marquee" ref={root} aria-hidden="true">
      <div className="marquee-track">
        {items.map((b, i) => (
          <span className="marquee-item" key={i}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
              <path d="M4 0l1.2 2.8L8 4l-2.8 1.2L4 8 2.8 5.2 0 4l2.8-1.2z" />
            </svg>
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
