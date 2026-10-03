import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { gsap, reduceMotion } from "../lib/gsap";
import { faq } from "../data/company";

export default function Faq() {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);

  useLayoutEffect(() => {
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      gsap.from(".faq-head > *", {
        y: 34,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".faq-head", start: "top 84%" },
      });
      gsap.from(".faq-item", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: { trigger: ".faq-list", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" className="section" ref={root}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="faq-head" style={{ maxWidth: "720px" }}>
          <span className="eyebrow">Antes de perguntar no zap</span>
          <h2>
            As dúvidas que <span className="gold-text">mais chegam.</span>
          </h2>
        </div>

        <div className="faq-list">
          {faq.map((f, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {f.q}
                <span className="plus">
                  <Plus size={17} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    className="faq-a"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
