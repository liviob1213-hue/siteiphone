import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { empresa, wa } from "../data/company";

const links = [
  { href: "#dor", label: "Por que a Gold" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#modelos", label: "Modelos" },
  { href: "#lojas", label: "Lojas" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${stuck ? "is-stuck" : ""}`}>
        <div className="nav-inner">
          <a href="#top" className="brand" aria-label="Gold iPhones BH">
            <span className="brand-mark">G</span>
            <span>
              GOLD IPHONES
              <small>{empresa.cidade}</small>
            </span>
          </a>

          <nav className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <span className="nav-tel">
              WhatsApp <b>{empresa.whatsappExibicao}</b>
            </span>
            <a
              className="btn btn-wa"
              href={wa(
                "Olá! Vim pelo site da Gold iPhones e quero falar sobre um iPhone."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} /> Comprar agora
            </a>
            <button
              className="burger"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <button
              className="mclose"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>
            {links.map((l) => (
              <a
                key={l.href}
                className="mlink"
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              className="btn btn-wa btn-lg"
              style={{ marginTop: 26 }}
              href={wa("Olá! Vim pelo site e quero falar sobre um iPhone.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
