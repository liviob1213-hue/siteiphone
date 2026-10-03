import { useLayoutEffect, useRef } from "react";
import { MapPin, Clock, Navigation, MessageCircle } from "lucide-react";
import { gsap, reduceMotion } from "../lib/gsap";
import { empresa, unidades, wa } from "../data/company";

export default function Lojas() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      gsap.from(".lojas-head > *", {
        y: 34,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".lojas-head", start: "top 84%" },
      });
      gsap.from(".unit", {
        y: 56,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: { trigger: ".units", start: "top 84%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="lojas" className="section" ref={root}>
      <div className="container">
        <div className="lojas-head" style={{ maxWidth: "720px" }}>
          <span className="eyebrow">Onde estamos</span>
          <h2>
            Duas lojas em Belo Horizonte,{" "}
            <span className="gold-text">mais o seu WhatsApp.</span>
          </h2>
          <p className="lead" style={{ marginTop: 18 }}>
            Você pode ver, tocar e testar o aparelho antes de levar. Ou comprar
            de onde estiver e receber em casa — a escolha é sua.
          </p>
        </div>

        <div className="units">
          {unidades.map((u) => (
            <article className="unit" key={u.nome}>
              <span className="pin">
                <MapPin size={22} />
              </span>
              <span className="bairro">{u.bairro}</span>
              <h3>{u.nome}</h3>
              <address>
                {u.endereco}
                <br />
                {u.cidadeCep}
              </address>
              <div className="meta">
                <Clock size={15} color="#e8b84b" /> {u.horario}
              </div>
              <div className="actions">
                <a
                  href={u.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation size={13} /> Como chegar
                </a>
                <a
                  href={wa(
                    `Olá! Quero falar com a Gold iPhones (${u.bairro}) sobre um iPhone.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={13} /> WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="catalog-note">
          Atendimento por WhatsApp todos os dias · {empresa.whatsappExibicao}
        </p>
      </div>
    </section>
  );
}
