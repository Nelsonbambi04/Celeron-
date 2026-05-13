import { BriefcaseBusiness, Building2, Network, ShieldCheck, UsersRound } from "lucide-react";
import type { PageData } from "./types";

const sobrePage: PageData = {
  kicker: "Quem Somos",
  title: "A Celeron+ cria bases tecnologicas solidas para empresas em Angola.",
  lead:
    "Unimos engenharia de redes, internet de alta performance e desenvolvimento web para entregar operacoes mais estaveis, seguras e preparadas para escalar.",
  stats: [
    { value: "+80", label: "Projetos de rede" },
    { value: "Luanda", label: "Atuacao local" },
    { value: "360", label: "Infraestrutura e software" },
  ],
  servicesTitle: "Trabalhamos com metodo tecnico, documentacao e foco em continuidade operacional.",
  services: [
    {
      icon: Network,
      title: "Engenharia de Conectividade",
      text: "Projetos de enlaces wireless, distribuicao por cabo e redes internas com redundancia planejada.",
    },
    {
      icon: ShieldCheck,
      title: "Padrao Corporativo",
      text: "Instalacoes limpas, organizadas e preparadas para suporte, auditoria e crescimento.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Visao de Negocio",
      text: "Solucoes pensadas para reduzir paragens, melhorar atendimento e sustentar processos digitais.",
    },
  ],
  insightTitle: "Principios que orientam cada projeto da Celeron+.",
  insightItems: [
    "Latencia minima para aplicacoes criticas",
    "Escalabilidade para expansao de pontos e usuarios",
    "Redundancia de rede para maior disponibilidade",
  ],
  detailCards: [
    {
      icon: Building2,
      title: "Empresas e Condominios",
      text: "Projetos para escritorios, lojas, edificios, condominios e unidades operacionais.",
    },
    {
      icon: UsersRound,
      title: "Suporte Proximo",
      text: "Acompanhamento tecnico com linguagem clara e resposta orientada ao impacto no negocio.",
    },
  ],
  ctaTitle: "Fale com a nossa equipa e descubra a melhor arquitetura para a sua operacao.",
  ctaButton: "Solicitar Instalacao",
};

export default sobrePage;
