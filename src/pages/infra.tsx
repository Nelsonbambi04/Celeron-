import { Cable, Network, RadioTower, Server, ShieldCheck } from "lucide-react";
import type { PageData } from "./types";

const infraPage: PageData = {
  kicker: "Infraestrutura",
  title: "Internet via radio, UTP e fibra com equipamentos profissionais.",
  lead:
    "Projetamos e instalamos redes para empresas que precisam de conexao estavel, cobertura interna bem distribuida e estrutura pronta para crescer.",
  stats: [
    { value: "UTP", label: "Cabeamento estruturado" },
    { value: "Fibra", label: "Backbone de alta capacidade" },
    { value: "Radio", label: "Enlaces ponto a ponto" },
  ],
  servicesTitle: "Solucoes tecnicas para internet, rede local e ambientes criticos.",
  services: [
    {
      icon: RadioTower,
      title: "Antenas PowerBeam e AirFiber",
      text: "Instalacao e alinhamento de enlaces Ubiquiti para internet via radio com visada, estabilidade e baixa interferencia.",
    },
    {
      icon: Cable,
      title: "UTP/Fibra e Racks",
      text: "Cabeamento estruturado, patch panels, organizacao de rack e backbone para empresas em crescimento.",
    },
    {
      icon: Server,
      title: "Switches Gerenciaveis",
      text: "Configuracao de VLANs, QoS, monitoramento, controle de trafego e segmentacao segura da rede.",
    },
  ],
  insightTitle: "Planos e instalacoes orientados ao tipo de operacao.",
  insightItems: [
    "Wireless Empresarial - ideal para cobertura rapida e enlaces dedicados",
    "UTP/Fibra Corporativo - ideal para escritorios, lojas e edificios",
    "Rede Gerenciada - switches, servidores, CCTV e monitoramento continuo",
  ],
  detailCards: [
    {
      icon: Network,
      title: "Redundancia de Rede",
      text: "Arquiteturas com rotas alternativas, links de contingencia e equipamentos preparados para continuidade.",
    },
    {
      icon: ShieldCheck,
      title: "Monitoramento CCTV",
      text: "Integracao de cameras IP, gravadores, rede dedicada e acesso remoto controlado.",
    },
  ],
  ctaTitle: "Solicite uma visita tecnica para avaliar antenas, cabos, rack e cobertura.",
  ctaButton: "Solicitar Instalacao",
};

export default infraPage;
