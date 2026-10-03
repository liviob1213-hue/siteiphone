import { useLayoutEffect, useRef, type MouseEvent } from "react";
import { gsap, reduceMotion } from "../lib/gsap";

const items = [
  {
    t: "100% originais, sempre",
    d: "Aparelhos com IMEI livre, procedência comprovada e nota fiscal emitida em cada venda. Zero surpresa na ativação.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    t: "Garantia de até 24 meses",
    d: "Novos com garantia de fábrica e seminovos revisados item a item antes de irem para a vitrine. Se der problema, você tem loja.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8v4l3 2" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    t: "Entrega em 30 minutos",
    d: "Toda a Grande BH atendida com agilidade. Prefere retirar? As duas unidades estão prontas para te atender.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h11v8H3z" />
        <path d="M14 10h4l3 3v2h-7z" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    t: "Seu usado vale dinheiro",
    d: "Aceitamos o seu iPhone ou Android na troca e abatemos o valor na hora. Você paga a diferença — e só.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8h13l-3-3" />
        <path d="M20 16H7l3 3" />
      </svg>
    ),
  },
  {
    t: "Parcelamento sem sufoco",
    d: "Em até 18x no cartão ou à vista. Montamos a simulação no WhatsApp e você escolhe com o valor na mão.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    t: "780 mil seguidores que confiam",
    d: "Somos a Gold iPhones BH: mais de oito anos no mercado, duas unidades físicas e uma comunidade inteira por trás.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
];

export default function Diferenciais() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      gsap.from(".diff-head > *", {
        y: 34,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".diff-head", start: "top 84%" },
      });

      gsap.from(".diff-card", {
        y: 54,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.09,
        scrollTrigger: { trigger: ".cards", start: "top 82%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="diferenciais" className="section" ref={root}>
      <div className="container">
        <div className="diff-head" style={{ maxWidth: "760px" }}>
          <span className="eyebrow">Por que comprar na Gold</span>
          <h2>
            Você não compra um iPhone.{" "}
            <span className="gold-text">Você compra procedência.</span>
          </h2>
          <p className="lead" style={{ marginTop: 20 }}>
            Cada detalhe abaixo existe para você fechar a compra com a mesma
            tranquilidade de quem pega o aparelho na caixa na loja da Apple.
          </p>
        </div>

        <div className="cards">
          {items.map((it, i) => (
            <article
              className="card diff-card"
              key={i}
              onMouseMove={onMove}
            >
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span className="ic">{it.icon}</span>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
