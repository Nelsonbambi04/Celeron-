import { Building2, Network, Server, ShieldCheck, UsersRound } from "lucide-react";
import type { PageData } from "./types";

const indexPage: PageData = {
  kicker: "Conectividade Total",
  title: "Infraestrutura de elite, internet empresarial e solucoes digitais para Luanda.",
  lead:
    "A Celeron+ integra redes Wireless, cabeamento UTP/Fibra e desenvolvimento web para empresas que precisam de latencia minima, redundancia de rede e crescimento previsivel.",
  stats: [
    { value: "24/7", label: "Monitoramento tecnico" },
    { value: "SLA", label: "Suporte empresarial" },
    { value: "Full", label: "Infra + Web" },
  ],
  servicesTitle: "Um ecossistema completo para conectar, proteger e digitalizar o seu negocio.",
  services: [
    {
      icon: Network,
      title: "Internet Wireless/UTP",
      text: "Venda e instalacao de internet via radio, cabo UTP e fibra para operacoes com baixa latencia.",
    },
    {
      icon: Server,
      title: "Infraestrutura de Rede",
      text: "Antenas, racks, switches gerenciaveis, servidores e cabeamento estruturado com padrao corporativo.",
    },
    {
      icon: ShieldCheck,
      title: "Solucoes Digitais",
      text: "Criacao de sites, plataformas corporativas e sistemas integrados a rede da empresa.",
    },
  ],
  insightTitle: "Planos de internet para empresas e residencias premium.",
  insightItems: [
    "Wireless 10 Mbps - desde 18.000 Kz/mes",
    "UTP 30 Mbps - desde 35.000 Kz/mes",
    "Link Corporativo 100 Mbps - projeto sob consulta",
  ],
  detailCards: [
    {
      icon: Building2,
      title: "Operacao em Luanda",
      text: "Atendimento tecnico para instalacao, expansao e manutencao de redes em zonas comerciais e residenciais.",
    },
    {
      icon: UsersRound,
      title: "Atendimento Consultivo",
      text: "Diagnostico, levantamento de campo e recomendacao de equipamentos conforme o perfil de uso.",
    },
  ],
  ctaTitle: "Solicite uma instalacao ou avaliacao tecnica para a sua empresa.",
  ctaButton: "Solicitar Instalacao",
};

export default indexPage;
