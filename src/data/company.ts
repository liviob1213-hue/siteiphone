/**
 * DADOS DA EMPRESA — Gold iPhones BH
 * Fontes: painel de conhecimento do Google, Instagram @gold.iphones_bh e CNPJ.
 *
 * >> Para trocar o número do WhatsApp, altere apenas `whatsapp` abaixo.
 *    Formato: 55 + DDD + número (sem espaços ou parênteses).
 */
export const empresa = {
  nome: "Gold iPhones",
  nomeCurto: "GOLD",
  nomeJuridico: "Gold Iphones e Importados LTDA",
  assinatura: "Novos & Semi Novos",
  cidade: "Belo Horizonte — MG",
  regiao: "Grande BH",

  whatsapp: "5531992744241",
  whatsappExibicao: "(31) 99274-4241",

  instagram: "https://www.instagram.com/gold.iphones_bh/",
  instagramHandle: "@gold.iphones_bh",
  seguidores: "780 mil",
  anosMercado: "+8 anos",
};

/** Monta o link do WhatsApp com a mensagem pré-preenchida. */
export function wa(message: string): string {
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const unidades = [
  {
    nome: "Gold iPhones Centro",
    bairro: "Centro",
    endereco: "Av. Afonso Pena, 262 — Sala 1817",
    cidadeCep: "Centro, Belo Horizonte/MG — 30130-923",
    maps: "https://www.google.com/maps/search/?api=1&query=Avenida+Afonso+Pena+262+Belo+Horizonte+MG",
    horario: "Seg a Sáb · 9h às 18h",
  },
  {
    nome: "Gold iPhones Santa Amélia",
    bairro: "Santa Amélia",
    endereco: "Av. Portugal, 1900",
    cidadeCep: "Jardim Atlântico, Belo Horizonte/MG — 31555-000",
    maps: "https://www.google.com/maps/search/?api=1&query=Avenida+Portugal+1900+Belo+Horizonte+MG",
    horario: "Seg a Sáb · 9h às 18h",
  },
];

export const beneficios = [
  "100% originais",
  "Nota fiscal em toda venda",
  "Garantia de até 24 meses",
  "Entrega em até 30 min",
  "Aceitamos seu usado na troca",
  "Parcelamento em até 18x",
  "Duas unidades físicas",
  "Loja com +8 anos de mercado",
];

export type Produto = {
  nome: string;
  linha: string;
  estado: "Novo e lacrado" | "Seminovo revisado";
  destaque?: string;
  img: string;
};

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const produtos: Produto[] = [
  {
    nome: "iPhone 17 Pro Max",
    linha: "Câmera e bateria no limite",
    estado: "Novo e lacrado",
    destaque: "Mais procurado",
    img: u("1592750475338-74b7b21085ab"),
  },
  {
    nome: "iPhone 17 Pro",
    linha: "Potência para quem trabalha com o celular",
    estado: "Novo e lacrado",
    img: u("1580910051074-3eb694886505"),
  },
  {
    nome: "iPhone 17",
    linha: "O novo padrão, agora acessível",
    estado: "Novo e lacrado",
    img: u("1616348436168-de43ad0db179"),
  },
  {
    nome: "iPhone 16 Pro Max",
    linha: "O topo de linha pela metade do preço",
    estado: "Seminovo revisado",
    destaque: "Melhor custo-benefício",
    img: u("1510557880182-3d4d3cba35a5"),
  },
  {
    nome: "iPhone 16",
    linha: "Rápido, leve e com AI embarcada",
    estado: "Seminovo revisado",
    img: u("1611472173362-3f53dbd65d80"),
  },
  {
    nome: "iPhone 15 Pro",
    linha: "Titanium e câmera profissional",
    estado: "Seminovo revisado",
    img: u("1574944985070-8f3ebc6b79d2"),
  },
  {
    nome: "iPhone 14",
    linha: "O equilíbrio ideal para o dia a dia",
    estado: "Seminovo revisado",
    img: u("1605236453806-6ff36851218e"),
  },
  {
    nome: "iPhone 13",
    linha: "Entra na linha Apple pagando pouco",
    estado: "Seminovo revisado",
    destaque: "A partir de R$ 990",
    img: u("1621330396173-e41b1cafd17f"),
  },
];

export const depoimentos = [
  {
    texto:
      "Fui muito bem atendida do início ao fim. Explicaram cada detalhe do aparelho antes de eu fechar a compra.",
    nome: "Mariana R.",
    origem: "Santa Amélia, BH",
  },
  {
    texto:
      "Pedi às 15h, o aparelho chegou em menos de 40 minutos em casa. Lacrado, com nota e com garantia.",
    nome: "Carlos E.",
    origem: "Contagem, MG",
  },
  {
    texto:
      "Levei meu iPhone antigo na troca e abateram direto no valor. Sem enrolação, sem aquela negociação eterna.",
    nome: "Juliana P.",
    origem: "Pampulha, BH",
  },
  {
    texto:
      "Comprei o terceiro aparelho na Gold. É saber que se der qualquer coisa eu tenho loja física para voltar.",
    nome: "Rafael M.",
    origem: "Betim, MG",
  },
];

export const faq = [
  {
    q: "Os aparelhos são realmente originais?",
    a: "Sim. Trabalhamos apenas com aparelhos 100% originais, com IMEI livre, lacrado ou revisado, e nota fiscal emitida em todas as vendas. Procedência comprovada é o que sustenta os nossos +8 anos de mercado.",
  },
  {
    q: "Qual a garantia?",
    a: "Você recebe garantia Gold de até 24 meses, conforme o modelo e o estado do aparelho. Novos seguem com garantia de fábrica e os seminovos passam por revisão antes de ir para a vitrine.",
  },
  {
    q: "Vocês entregam? Em quanto tempo?",
    a: "Sim. Entregamos em toda a Grande BH com agilidade — em média 30 minutos, dependendo da região. Também é possível retirar em qualquer uma das nossas unidades.",
  },
  {
    q: "Posso usar meu celular atual como parte do pagamento?",
    a: "Pode. Aceitamos o seu aparelho usado na troca e abatemos o valor na hora, tanto para iPhone quanto para Android.",
  },
  {
    q: "Como funciona o parcelamento?",
    a: "Parcelamos em até 18x no cartão, além de pagamento à vista. As condições exatas variam conforme o modelo — é só chamar no WhatsApp que enviamos a simulação.",
  },
  {
    q: "Tem loja física?",
    a: "Sim, duas unidades em Belo Horizonte: Centro (Av. Afonso Pena, 262) e Santa Amélia (Av. Portugal, 1900). Você pode comprar presencialmente ou pelo WhatsApp.",
  },
];
