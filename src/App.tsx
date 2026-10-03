import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Dor from "./components/Dor";
import Diferenciais from "./components/Diferenciais";
import Catalogo from "./components/Catalogo";
import Troca from "./components/Troca";
import Depoimentos from "./components/Depoimentos";
import Lojas from "./components/Lojas";
import Faq from "./components/Faq";
import CtaFinal from "./components/CtaFinal";
import Footer from "./components/Footer";
import { ScrollProgress, WhatsFab } from "./components/Extras";
import { ScrollTrigger } from "./lib/gsap";

export default function App() {
  /* imagens, fontes e mudança de layout reposicionam as seções */
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    if (document.fonts?.ready) document.fonts.ready.then(refresh);

    let t: number | undefined;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(t);
      t = window.setTimeout(refresh, 140);
    });
    ro.observe(document.body);

    const t1 = window.setTimeout(refresh, 900);
    const t2 = window.setTimeout(refresh, 2400);

    return () => {
      window.removeEventListener("load", refresh);
      ro.disconnect();
      window.clearTimeout(t);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Dor />
        <Diferenciais />
        <Catalogo />
        <Troca />
        <Depoimentos />
        <Lojas />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsFab />
    </>
  );
}
