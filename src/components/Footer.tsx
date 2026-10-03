import { Instagram, MessageCircle, MapPin } from "lucide-react";
import { empresa, unidades, wa } from "../data/company";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" className="brand">
              <span className="brand-mark">G</span>
              <span>
                GOLD IPHONES
                <small>{empresa.assinatura}</small>
              </span>
            </a>
            <p>
              Loja especializada em iPhone em Belo Horizonte. Novos e seminovos
              100% originais, com nota fiscal, garantia e entrega em toda a
              Grande BH.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <a
                className="btn btn-wa"
                href={wa("Olá! Vim pelo site da Gold iPhones.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                className="btn btn-ghost"
                href={empresa.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4>Navegue</h4>
            <ul>
              <li>
                <a href="#dor">Por que a Gold</a>
              </li>
              <li>
                <a href="#diferenciais">Diferenciais</a>
              </li>
              <li>
                <a href="#modelos">Modelos</a>
              </li>
              <li>
                <a href="#lojas">Nossas lojas</a>
              </li>
              <li>
                <a href="#faq">Dúvidas frequentes</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Unidades</h4>
            <ul>
              {unidades.map((u) => (
                <li key={u.nome}>
                  <a href={u.maps} target="_blank" rel="noopener noreferrer">
                    <MapPin
                      size={13}
                      style={{ display: "inline", marginRight: 6 }}
                      color="#e8b84b"
                    />
                    {u.endereco} — {u.bairro}
                  </a>
                </li>
              ))}
              <li>
                <a href={`tel:+${empresa.whatsapp}`}>
                  {empresa.whatsappExibicao}
                </a>
              </li>
              <li>
                <a
                  href={empresa.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {empresa.instagramHandle} · {empresa.seguidores} seguidores
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {ano} {empresa.nomeJuridico} — {empresa.cidade}
          </span>
          <span>
            Apple e iPhone são marcas da Apple Inc. Este site é um canal de
            vendas independente.
          </span>
        </div>
      </div>
    </footer>
  );
}
