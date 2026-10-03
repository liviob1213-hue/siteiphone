import { useLayoutEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import { gsap, reduceMotion } from "../lib/gsap";
import { depoimentos } from "../data/company";

export default function Depoimentos() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".h-head > *", {
        y: 34,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".h-head", start: "top 88%" },
      });
    }, root);

    const mm = gsap.matchMedia();

    /* Desktop: scroll horizontal fixado (pin + scrub) */
    mm.add("(min-width: 900px)", () => {
      const track = root.current!.querySelector(".h-track") as HTMLElement;
      const dist = () => Math.max(0, track.scrollWidth - window.innerWidth + 60);

      const tween = gsap.to(track, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + dist(),
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section className="horizontal" ref={root}>
      <div className="container h-head">
        <span className="eyebrow">Quem já comprou</span>
        <h2 style={{ maxWidth: "16ch" }}>
          780 mil pessoas acompanham. <span className="gold-text">E confiam.</span>
        </h2>
      </div>

      <div className="h-track">
        {depoimentos.map((d, i) => (
          <article className="depo" key={i}>
            <Quote size={26} color="rgba(232,184,75,.35)" />
            <div className="stars" aria-label="5 estrelas">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p>“{d.texto}”</p>
            <div className="who">
              <span className="avatar">{d.nome.charAt(0)}</span>
              <span>
                <b>{d.nome}</b>
                <span>{d.origem}</span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
