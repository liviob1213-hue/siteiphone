import { useLayoutEffect, useRef } from "react";
import { Check } from "lucide-react";
import { gsap, reduceMotion } from "../lib/gsap";

const PARALLAX_IMG =
  "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1400&q=80";

const bullets = [
  {
    t: "Revisamos cada aparelho",
    d: "Bateria, câmera, áudio, sensores e IMEI — antes de ir para a vitrine.",
  },
  {
    t: "Nota fiscal em toda venda",
    d: "Documento que comprova origem, protege sua garantia e valoriza o aparelho na revenda.",
  },
  {
    t: "Troca avaliada na hora",
    d: "Traga seu usado e saia com o novo no mesmo atendimento, com o abatimento já lançado.",
  },
  {
    t: "Pós-venda com endereço",
    d: "Se algo acontecer, você sabe exatamente onde nos encontrar — Centro e Santa Amélia.",
  },
];

export default function Troca() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      /* scroll motion: a imagem se move dentro da moldura (parallax) */
      gsap.fromTo(
        ".parallax-frame img",
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: ".parallax-frame",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.from(".split-copy > *", {
        y: 42,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".split", start: "top 78%" },
      });

      gsap.from(".check-list li", {
        x: -30,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".check-list", start: "top 88%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section" ref={root}>
      <div className="container split">
        <div className="split-copy">
          <span className="eyebrow">Confiança é detalhe</span>
          <h2>
            O que acontece <span className="gold-text">depois</span> da compra é
            o que separa loja de site de anúncio.
          </h2>
          <p className="lead" style={{ marginTop: 18 }}>
            Todo mundo promete o aparelho perfeito. Poucos te entregam o
            documento, a garantia e o endereço para voltar caso algo saia do
            plano.
          </p>

          <ul className="check-list">
            {bullets.map((b, i) => (
              <li key={i}>
                <Check size={18} />
                <span>
                  <b>{b.t}.</b> {b.d}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="parallax-frame">
          <img src={PARALLAX_IMG} alt="Atendimento na Gold iPhones BH" />
          <div className="badge">
            <strong>30min</strong>
            <span>
              é o tempo médio de entrega em toda a Grande BH — grátis acima de
              um valor combinado no WhatsApp.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
