import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { gsap, reduceMotion } from "../lib/gsap";
import { produtos, wa } from "../data/company";

export default function Catalogo() {
  const root = useRef<HTMLElement>(null);
  const [imgErr, setImgErr] = useState<Record<string, boolean>>({});

  useLayoutEffect(() => {
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      gsap.from(".cat-head > *", {
        y: 34,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".cat-head", start: "top 84%" },
      });

      gsap.from(".prod", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".grid-prod", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="modelos" className="section" ref={root}>
      <div className="container">
        <div className="catalog-head cat-head">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">Vitrine</span>
            <h2>
              O modelo que você quer,{" "}
              <span className="gold-text">pronto para sair hoje.</span>
            </h2>
          </div>
          <a
            className="btn btn-ghost"
            href={wa(
              "Olá! Quero a tabela de preços atualizada da Gold iPhones."
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={17} /> Pedir tabela de preços
          </a>
        </div>

        <div className="grid-prod">
          {produtos.map((p, i) => (
            <motion.article
              className="prod"
              key={p.nome}
              initial={{ opacity: 1 }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
            >
              <div className="prod-media">
                <span
                  className={`prod-tag ${
                    p.estado === "Novo e lacrado" ? "tag-new" : "tag-used"
                  }`}
                >
                  {p.estado}
                </span>
                {p.destaque && <span className="prod-flag">{p.destaque}</span>}
                {imgErr[p.img] ? (
                  <div
                    style={{
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      fontFamily: "Sora, sans-serif",
                      color: "#e8b84b",
                      fontSize: 42,
                      fontWeight: 700,
                    }}
                  >
                    {p.nome.split(" ")[1]}
                  </div>
                ) : (
                  <img
                    src={p.img}
                    alt={`${p.nome} — Gold iPhones BH`}
                    loading="lazy"
                    onError={() =>
                      setImgErr((s) => ({ ...s, [p.img]: true }))
                    }
                  />
                )}
              </div>
              <div className="prod-body">
                <h3>{p.nome}</h3>
                <p>{p.linha}</p>
                <div className="prod-foot">
                  <span className="prod-price">
                    Sob consulta
                    <small>no WhatsApp</small>
                  </span>
                  <a
                    className="prod-cta"
                    href={wa(
                      `Olá! Tenho interesse no ${p.nome}. Pode me passar o valor?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={14} /> Consultar
                  </a>
                </div>
              </div>
              <span aria-hidden="true" style={{ display: "none" }}>
                {i}
              </span>
            </motion.article>
          ))}
        </div>

        <p className="catalog-note">
          Preços e condições variam conforme a memória, a cor e o estado do
          aparelho. Chame no WhatsApp que respondemos com a opção certa para o
          seu bolso.
        </p>
      </div>
    </section>
  );
}
