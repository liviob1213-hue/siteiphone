import { useLayoutEffect, useRef } from "react";
import { MessageCircle, ArrowUpRight, ShieldCheck } from "lucide-react";
import { gsap, reduceMotion } from "../lib/gsap";
import { empresa, wa } from "../data/company";

export default function CtaFinal() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top 72%" },
        defaults: { ease: "power4.out" },
      });
      tl.from(".cta-inner > *", {
        y: 46,
        opacity: 0,
        duration: 0.95,
        stagger: 0.11,
      }).from(
        ".cta-ring",
        { scale: 0.7, opacity: 0, duration: 1.1, ease: "back.out(1.6)" },
        "-=0.8"
      );

      gsap.to(".cta-ring", {
        rotate: 360,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section cta" ref={root}>
      <div className="cta-bg" />
      <div className="cta-ring" aria-hidden="true" />
      <div className="container cta-inner">
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          Última chamada
        </span>
        <h2>
          Pare de rolar. Seu iPhone está a{" "}
          <span className="gold-text">uma mensagem de distância.</span>
        </h2>
        <p className="lead">
          Manda o modelo que você quer. Em poucos minutos você recebe as opções
          disponíveis, o valor e a condição de pagamento — sem cadastro, sem
          formulário, sem espera.
        </p>

        <div className="cta-actions">
          <a
            className="btn btn-wa btn-lg"
            href={wa(
              "Olá! Quero comprar um iPhone na Gold iPhones. Pode me passar as opções?"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} /> Falar no WhatsApp agora
            <ArrowUpRight size={18} />
          </a>
          <a className="btn btn-ghost btn-lg" href="#modelos">
            Ver os modelos primeiro
          </a>
        </div>

        <span className="cta-note">
          <ShieldCheck size={15} color="#e8b84b" /> Resposta rápida ·{" "}
          <b>{empresa.whatsappExibicao}</b> · {empresa.instagramHandle}
        </span>
      </div>
    </section>
  );
}
