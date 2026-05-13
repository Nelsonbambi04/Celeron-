import { BriefcaseBusiness, Database, Network, Server, ShieldCheck } from "lucide-react";
import type { PageData } from "./types";

const padraoPage: PageData = {
  kicker: "Padrao Tecnico",
  title: "Redes bem documentadas, sistemas integrados e operacao preparada para escala.",
  lead:
    "O nosso padrao combina infraestrutura fisica organizada, seguranca logica, monitoramento e desenvolvimento web integrado ao ambiente de rede.",
  stats: [
    { value: "QoS", label: "Priorizacao de trafego" },
    { value: "VLAN", label: "Segmentacao segura" },
    { value: "ERP", label: "Sistemas sob medida" },
  ],
  servicesTitle: "Padroes aplicados em cada entrega tecnica e digital.",
  services: [
    {
      icon: ShieldCheck,
      title: "Seguranca e Segmentacao",
      text: "Politicas de acesso, VLANs, controlo de usuarios, CCTV e boas praticas para proteger a operacao.",
    },
    {
      icon: Server,
      title: "Gestao de Servidores",
      text: "Configuracao, backup, monitoramento, disponibilidade e suporte para servicos internos e cloud.",
    },
    {
      icon: Database,
      title: "Web e ERP Integrado",
      text: "Criacao de sites, plataformas corporativas e sistemas ERP conectados aos processos da empresa.",
    },
  ],
  insightTitle: "Desenvolvimento web conectado a infraestrutura.",
  insightItems: [
    "Sites institucionais com performance, SEO tecnico e seguranca",
    "Sistemas internos com login, dashboards, relatorios e base de dados",
    "Full-Stack Development integrado a servidores, rede e operacao",
  ],
  detailCards: [
    {
      icon: Network,
      title: "Documentacao Tecnica",
      text: "Mapeamento de pontos, equipamentos, rotas de cabo, credenciais e configuracoes essenciais.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Governanca de TI",
      text: "Processos para suporte, expansao, manutencao preventiva e evolucao da infraestrutura.",
    },
  ],
  ctaTitle: "Eleve o padrao tecnico da sua rede e dos seus sistemas corporativos.",
  ctaButton: "Solicitar Instalacao",
};

export default padraoPage;
