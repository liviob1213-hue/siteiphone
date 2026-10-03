import { useLayoutEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { XCircle, HeartCrack, FileQuestion, Ban } from "lucide-react";
import { gsap, reduceMotion } from "../lib/gsap";

const HOOK =
  "Comprar iPhone pela internet virou uma aposta: você paga caro e reza para o aparelho não ser uma bomba.";

const dores = [
  {
    icon: Ban,
    t: "“Tá tudo certo com o aparelho?” — e ninguém responde depois.",
  },
  {
    icon: FileQuestion,
    t: "Veio sem nota fiscal, sem garantia e sem para quem reclamar.",
  },
  {
    icon: HeartCrack,
    t: "Bateria de 74%, câmera travando e o IMEI com problema na ativação.",
  },
  {
    icon: XCircle,
    t: "Você perdeu um dia inteiro indo ver um celular que não valia o deslocamento.",
  },
];

export default function Dor() {
  const root = useRef<HTMLElement>(null);

  const words = useMemo(() => HOOK.split(" "), []);

  useLayoutEffect(() => {
    if (reduceMotion) {
      root.current?.querySelectorAll(".dor-quote .w").forEach((w) => {
        (w as HTMLElement).style.color = "#f3f3f5";
      });
      return;
    }

    const ctx = gsap.context(() => {
      /* scroll motion: cada palavra acende conforme você rola a página */
      gsap.to(".dor-quote .w", {
        color: "#f3f3f5",
        ease: "none",
        stagger: 0.35,
        scrollTrigger: {
          trigger: ".dor-quote",
          start: "top 82%",
          end: "bottom 55%",
          scrub: 0.6,
        },
      });

      gsap.from(".dor-pain li", {
        x: -34,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".dor-pain", start: "top 85%" },
      });

      gsap.from(".dor-turn", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".dor-turn", start: "top 88%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="dor" className="section dor" ref={root}>
      <div className="container dor-grid">
        <div>
          <span className="eyebrow">A parte que ninguém te conta</span>
          <p className="dor-quote">
            {words.map((w, i) => (
              <span className="w" key={i}>
                {w}{" "}
              </span>
            ))}
          </p>
        </div>

        <div className="dor-copy">
          <p>
            Você já passou por isso: achou um preço bom demais, trocou{" "}
            <strong>40 mensagens</strong>, foi até um endereço desconhecido… e o
            celular veio com defeito. Ou comprou de loja e{" "}
            <strong>ninguém mais atendeu</strong> quando o produto falhou.
          </p>
          <p>
            Seu celular não é capricho. É <strong>trabalho</strong>, é câmera, é
            banco, é a linha direta com a sua família. Não faz sentido
            transformar tudo isso numa aposta.
          </p>

          <ul className="dor-pain">
            {dores.map((d, i) => (
              <li key={i}>
                <d.icon size={17} />
                <span>{d.t}</span>
              </li>
            ))}
          </ul>

          <motion.div
            className="dor-turn"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
          >
            A Gold existe exatamente para acabar com isso: procedência
            comprovada, loja física aberta e um nome que precisa responder por
            cada aparelho que sai daqui.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
