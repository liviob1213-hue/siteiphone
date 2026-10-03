import { useLayoutEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionStyle,
} from "framer-motion";
import { MessageCircle, ArrowDown, ShieldCheck, Truck } from "lucide-react";
import { gsap, reduceMotion } from "../lib/gsap";
import { empresa, wa } from "../data/company";

const HERO_IMG =
  "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=1400&q=80";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  /* posição do mouse para o parallax (Framer Motion) */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 90, damping: 18, mass: 0.6 });
  const smy = useSpring(my, { stiffness: 90, damping: 18, mass: 0.6 });
  const imgX = useTransform(smx, [-0.5, 0.5], [-26, 26]);
  const imgY = useTransform(smy, [-0.5, 0.5], [-20, 20]);
  const cardX = useTransform(smx, [-0.5, 0.5], [16, -16]);
  const cardY = useTransform(smy, [-0.5, 0.5], [12, -12]);

  useLayoutEffect(() => {
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-badge", { y: 24, opacity: 0, duration: 0.8 })
        .from(
          ".line-mask > span",
          { yPercent: 118, duration: 1.15, stagger: 0.1 },
          "-=0.45"
        )
        .from(".hero-copy .lead", { y: 26, opacity: 0, duration: 0.9 }, "-=0.7")
        .from(
          ".hero-actions .btn",
          { y: 22, opacity: 0, duration: 0.7, stagger: 0.1 },
          "-=0.6"
        )
        .from(
          ".hero-stats > div",
          { y: 26, opacity: 0, duration: 0.8, stagger: 0.09 },
          "-=0.55"
        )
        .from(
          ".hero-visual",
          { clipPath: "inset(14% 8% 14% 8% round 30px)", scale: 1.08, opacity: 0, duration: 1.3 },
          "-=1.5"
        )
        .from(".float-card", { y: 26, opacity: 0, duration: 0.7, stagger: 0.12 }, "-=0.7")
        .from(".scroll-cue", { opacity: 0, duration: 0.6 }, "-=0.4");

      /* scroll motion: imagem ganha profundidade + conteúdo sai suave */
      gsap.to(".hero-visual img", {
        yPercent: 12,
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-copy", {
        y: -70,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "40% top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const visualStyle: MotionStyle = reduceMotion
    ? {}
    : { x: imgX, y: imgY };
  const card1Style: MotionStyle = reduceMotion ? {} : { x: cardX, y: cardY };
  const card2Style: MotionStyle = reduceMotion ? {} : { x: cardX, y: cardY };

  return (
    <section id="top" className="hero" ref={root} onMouseMove={onMove}>
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-badge">
            <span className="dot" /> Loja física em BH · {empresa.anosMercado} no mercado
          </span>

          <h1>
            <span className="line-mask">
              <span>Seu iPhone novo.</span>
            </span>
            <span className="line-mask">
              <span className="gold-text">Sem risco.</span>
            </span>
            <span className="line-mask">
              <span>Sem enrolação.</span>
            </span>
          </h1>

          <p className="lead">
            Chega de pagar barato e receber um aparelho com problema. Na{" "}
            <strong>Gold iPhones BH</strong> você compra 100% original, com nota
            fiscal, garantia de até 24 meses e entrega em toda a Grande BH em até
            30 minutos.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-wa btn-lg"
              href={wa(
                "Olá! Vim pelo site da Gold iPhones e quero saber os valores de um iPhone."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} /> Quero meu iPhone no WhatsApp
            </a>
            <a className="btn btn-ghost btn-lg" href="#modelos">
              Ver modelos <ArrowDown size={17} />
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>30 min</strong>
              <span>Entrega na Grande BH</span>
            </div>
            <div>
              <strong>24 meses</strong>
              <span>De garantia</span>
            </div>
            <div>
              <strong>{empresa.seguidores}</strong>
              <span>Seguidores no Instagram</span>
            </div>
          </div>
        </div>

        <motion.div className="hero-visual" style={visualStyle}>
          <img src={HERO_IMG} alt="iPhone novo na Gold iPhones BH" />
        </motion.div>

        <motion.div className="float-card fc-1" style={card1Style}>
          <span className="ico">
            <ShieldCheck size={18} />
          </span>
          <span>
            <b>100% Original</b>
            <span>IMEI livre + nota fiscal</span>
          </span>
        </motion.div>

        <motion.div className="float-card fc-2" style={card2Style}>
          <span className="ico">
            <Truck size={18} />
          </span>
          <span>
            <b>Entrega expressa</b>
            <span>Retire na loja ou receba em casa</span>
          </span>
        </motion.div>
      </div>

      <div className="scroll-cue">
        Role para ver
        <i />
        <ArrowDown size={14} />
      </div>

    </section>
  );
}
