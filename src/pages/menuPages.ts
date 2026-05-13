import {
  Building2,
  BriefcaseBusiness,
  Cable,
  Camera,
  Code2,
  Database,
  Globe2,
  MapPin,
  Network,
  RadioTower,
  Server,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import homeLuanda from "../assets/home-luanda.jpg";
import intraImage from "../assets/intra.jpg";
import coberturaAntenas from "../assets/antenas_2.jpg";
import type { PageData } from "./types";

const serverRack =
  "https://source.unsplash.com/1800x1000/?server-rack,network-cables,data-center";
const networkInstall =
  "https://source.unsplash.com/1800x1000/?network-installation,technician,ethernet";
const telecomTower =
  "https://source.unsplash.com/1800x1000/?telecommunication-tower,antenna,wireless";
const fiberOptic = intraImage;
const codeInterface =
  "https://source.unsplash.com/1800x1000/?web-development,code,dashboard";

export const allPages: Record<string, PageData> = {
  "/": {
    seoTitle: "Celeron+ Angola | Infraestrutura de Rede, Internet e Desenvolvimento Web",
    seoDescription:
      "Infraestrutura de rede, internet Wireless/UTP/Fibra e desenvolvimento de sistemas corporativos para empresas em Luanda, Angola.",
    kicker: "High-Tech Corporate",
    title: "Conectividade, infraestrutura e software para empresas em Angola.",
    introTitle: "Uma base tecnologica integrada para operar com mais estabilidade.",
    lead:
      "A Celeron+ une redes profissionais, links de internet e desenvolvimento web para criar uma base tecnologica robusta, segura e escalavel.",
    heroImage: homeLuanda,
    heroAlt: "Vista aerea da marginal de Luanda para cobertura Celeron+",
    stats: [
      { value: "24/7", label: "Monitoramento" },
      { value: "99.5%", label: "Meta de uptime" },
      { value: "Luanda", label: "Base operacional" },
    ],
    servicesTitle: "Arquitetura completa para operacoes que dependem de tecnologia.",
    services: [
      { icon: RadioTower, title: "Internet Wireless", text: "Links por antenas Mikrotik/Ubiquiti com estudo de visada, alinhamento e testes de latencia." },
      { icon: Cable, title: "UTP/Fibra", text: "Cabeamento estruturado Cat6, backbone em fibra e organizacao de racks tecnicos." },
      { icon: Code2, title: "Software Corporativo", text: "Sites, ERPs e plataformas integradas aos processos e a infraestrutura da empresa." },
    ],
    insightTitle: "Tecnologia preparada para operacoes criticas.",
    insightItems: [
      "Infraestrutura de rede para empresas em crescimento",
      "Conectividade, CCTV e sistemas no mesmo ecossistema",
      "Suporte tecnico orientado a estabilidade operacional",
    ],
    detailCards: [
      { icon: ShieldCheck, title: "Seguranca", text: "CCTV IP, segmentacao de rede, controlo de acessos e boas praticas de disponibilidade." },
      { icon: Network, title: "Escalabilidade", text: "Topologias preparadas para crescimento de usuarios, dispositivos, filiais e sistemas." },
    ],
    visualTitle: "Operacao integrada de rede e software",
    visualText: "Uma base tecnica preparada para conectar pessoas, equipamentos, dados e sistemas empresariais.",
    visualType: "image",
    ctaTitle: "Solicite um diagnostico tecnico para a sua empresa.",
    ctaButton: "Solicitar Instalacao",
  },
  "/quem-somos": {
    seoTitle: "Quem Somos | Celeron+ Infraestrutura e Tecnologia em Luanda",
    seoDescription:
      "Conheca a Celeron+, empresa de infraestrutura de rede, internet e desenvolvimento web para o mercado empresarial de Angola.",
    kicker: "Quem Somos",
    title: "Somos uma equipa tecnica focada em redes, internet e sistemas corporativos.",
    introTitle: "Tecnologia aplicada ao contexto empresarial de Luanda.",
    lead:
      "Trabalhamos com empresas que precisam de conectividade confiavel, suporte tecnico claro e plataformas digitais que acompanham a operacao.",
    heroImage: networkInstall,
    heroAlt: "Tecnico realizando instalacao de rede corporativa",
    stats: [
      { value: "B2B", label: "Foco empresarial" },
      { value: "360", label: "Rede e software" },
      { value: "AO", label: "Mercado Angola" },
    ],
    servicesTitle: "O nosso modelo combina consultoria, instalacao e suporte.",
    services: [
      { icon: Building2, title: "Diagnostico Empresarial", text: "Levantamos usuarios, pontos, criticidade, cobertura e necessidade de software." },
      { icon: UsersRound, title: "Equipa de Campo", text: "Tecnicos para instalacao de antenas, cabos, racks, CCTV e validacao de sinal." },
      { icon: BriefcaseBusiness, title: "Gestao do Projeto", text: "Escopo claro, proposta objetiva e acompanhamento ate a estabilizacao da solucao." },
    ],
    insightTitle: "Como posicionamos a Celeron+ no mercado.",
    insightItems: [
      "Parceiro tecnico para empresas em crescimento",
      "Entrega integrada entre infraestrutura e desenvolvimento web",
      "Padrao visual e operacional High-Tech Corporate",
    ],
    detailCards: [
      { icon: ShieldCheck, title: "Confianca Tecnica", text: "Priorizamos estabilidade, documentacao e clareza de suporte." },
      { icon: Globe2, title: "Visao Digital", text: "A infraestrutura fisica e pensada para sustentar sistemas, websites e ERPs." },
    ],
    visualTitle: "Equipa tecnica para ambientes empresariais",
    visualText: "Atuamos com diagnostico, instalacao e acompanhamento para manter a operacao tecnologica previsivel.",
    visualType: "image",
    ctaTitle: "Fale com a equipa Celeron+ sobre o seu objetivo tecnico.",
    ctaButton: "Solicitar Instalacao",
  },
  "/infraestrutura": {
    seoTitle: "Infraestrutura de Rede em Luanda | Mikrotik, Ubiquiti, UTP Cat6 e Fibra",
    seoDescription:
      "Instalacao de antenas Mikrotik/Ubiquiti, cabeamento UTP Cat6, fusao de fibra optica, switches gerenciaveis e racks em Luanda.",
    kicker: "Infraestrutura",
    title: "Hardware profissional para redes estaveis, rapidas e escalaveis.",
    introTitle: "Da antena ao rack, cada componente e escolhido para reduzir falhas.",
    lead:
      "Planeamos e instalamos a base fisica da rede: antenas, cabos, fibra, racks, switches gerenciaveis, servidores e CCTV IP.",
    heroImage: fiberOptic,
    heroAlt: "Cabos de fibra optica e rede para infraestrutura corporativa",
    stats: [
      { value: "Cat6", label: "UTP estruturado" },
      { value: "Fibra", label: "Fusao optica" },
      { value: "L2/L3", label: "Switching" },
    ],
    servicesTitle: "Detalhes de hardware e instalacao.",
    services: [
      { icon: RadioTower, title: "Mikrotik/Ubiquiti", text: "Instalacao de antenas, alinhamento de enlaces, estudo de visada e reducao de interferencia." },
      { icon: Cable, title: "UTP Cat6 e Fibra", text: "Cabeamento estruturado, identificacao de pontos, fusao de fibra optica e certificacao visual." },
      { icon: Server, title: "Racks e Switches", text: "Switches gerenciaveis, patch panels, nobreaks e organizacao para manutencao eficiente." },
    ],
    insightTitle: "Pontos tecnicos que reforcam a infraestrutura.",
    insightItems: [
      "Antenas Mikrotik/Ubiquiti com alinhamento e testes de sinal",
      "Racks organizados com switches gerenciaveis e patch panels",
      "Backbones em fibra e UTP Cat6 para trafego estavel",
    ],
    detailCards: [
      { icon: Camera, title: "CCTV IP", text: "Cameras em rede separada, NVR, acesso remoto e politica de retencao de imagens." },
      { icon: ShieldCheck, title: "Redundancia", text: "Links alternativos, energia protegida e topologia preparada para continuidade." },
    ],
    visualTitle: "Infraestrutura fisica pronta para escalar",
    visualText: "Cabeamento, racks, switches, fibra e energia protegida organizados para facilitar suporte e crescimento.",
    visualType: "image",
    ctaTitle: "Solicite um levantamento para modernizar a sua infraestrutura.",
    ctaButton: "Solicitar Instalacao",
  },
  "/cobertura": {
    seoTitle: "Cobertura Celeron+ em Luanda | Sao Paulo, Cassequel e Palanca",
    seoDescription:
      "Cobertura tecnica para internet ilimitada em Luanda, incluindo Sao Paulo, Cassequel e Palanca.",
    kicker: "Cobertura",
    title: "Cobertura tecnica organizada por zonas estrategicas de Luanda.",
    introTitle: "A disponibilidade depende de zona, visada, rota de cabo e capacidade tecnica.",
    lead:
      "Validamos cada zona por viabilidade de sinal, disponibilidade de cabo, distancia, altura, energia e condicoes de instalacao.",
    heroImage: coberturaAntenas,
    heroAlt: "Torre de telecomunicacoes para cobertura wireless em Luanda",
    stats: [
      { value: "Sao Paulo", label: "Cobertura ativa" },
      { value: "Cassequel", label: "Zona atendida" },
      { value: "Palanca", label: "Instalacao local" },
    ],
    servicesTitle: "Zonas de atendimento destacadas.",
    services: [
      { icon: MapPin, title: "Sao Paulo", text: "Atendimento para residencias, lojas e pequenos negocios que precisam de internet ilimitada estavel." },
      { icon: MapPin, title: "Cassequel", text: "Instalacoes por radio e UTP com avaliacao de visada, cabo e ponto tecnico mais proximo." },
      { icon: MapPin, title: "Palanca", text: "Cobertura para clientes individuais e grupos comunitarios com instalacao local organizada." },
    ],
    insightTitle: "Distritos e zonas para triagem de cobertura.",
    insightItems: [
      "Sao Paulo: validar altura, visada e ponto de instalacao",
      "Cassequel: confirmar rota UTP e disponibilidade do ponto tecnico",
      "Palanca: avaliar instalacao individual ou comunitaria",
    ],
    detailCards: [
      { icon: RadioTower, title: "Viabilidade Wireless", text: "Analise de visada, interferencia e altura antes da ativacao." },
      { icon: Cable, title: "Viabilidade UTP/Fibra", text: "Avaliacao de rota de cabo, backbone e ponto tecnico mais proximo." },
    ],
    visualTitle: "Mapa de cobertura de Luanda",
    visualText: "Mapa tecnico para organizar zonas de atendimento, viabilidade e prioridade de instalacao.",
    visualType: "map",
    zones: ["Sao Paulo", "Cassequel", "Palanca"],
    ctaTitle: "Confirme a viabilidade tecnica na sua zona.",
    ctaButton: "Solicitar Instalacao",
  },
  "/padrao-tecnico": {
    seoTitle: "Padrao Tecnico Celeron+ | Protocolos, CCTV e Uptime em Angola",
    seoDescription:
      "Padrao tecnico para redes empresariais com protocolos TCP/IP, VLAN, QoS, CCTV IP, seguranca e uptime garantido em Angola.",
    kicker: "Padrao Tecnico",
    title: "Protocolos, seguranca e uptime para ambientes corporativos exigentes.",
    introTitle: "Regras claras para manter a rede documentada, segura e previsivel.",
    lead:
      "Definimos a rede para operar com segmentacao, seguranca, monitoramento e documentacao tecnica desde a primeira instalacao.",
    heroImage: serverRack,
    heroAlt: "Switches, cabos e servidores para padrao tecnico de rede",
    stats: [
      { value: "TCP/IP", label: "Base de rede" },
      { value: "VLAN", label: "Segmentacao" },
      { value: "99.5%", label: "Uptime alvo" },
    ],
    servicesTitle: "Protocolos e praticas aplicadas nos projetos.",
    services: [
      { icon: Network, title: "TCP/IP, VLAN e QoS", text: "Enderecamento, segmentacao, priorizacao de trafego e reducao de gargalos." },
      { icon: Camera, title: "Seguranca CCTV", text: "Cameras IP em rede isolada, NVR, acessos controlados e politica de retencao." },
      { icon: ShieldCheck, title: "Uptime Garantido", text: "Monitoramento, energia protegida, redundancia e resposta tecnica documentada." },
    ],
    insightTitle: "Itens verificados em auditoria tecnica.",
    insightItems: [
      "Mapa de IPs, portas, VLANs e equipamentos",
      "Separacao entre usuarios, visitantes, CCTV e servidores",
      "Backups, logs, alertas e plano de resposta a falhas",
    ],
    detailCards: [
      { icon: Server, title: "Servidores", text: "Servicos internos, armazenamento, backups e monitoramento de disponibilidade." },
      { icon: Database, title: "Documentacao", text: "Registos de topologia, credenciais, ativos e mudancas para suporte futuro." },
    ],
    visualTitle: "Console tecnico e monitoramento",
    visualText: "Monitoramento, logs e padroes de rede para acompanhar disponibilidade e reduzir falhas.",
    visualType: "code",
    ctaTitle: "Padronize a sua rede antes que ela cresca sem controlo.",
    ctaButton: "Solicitar Instalacao",
  },
  "/desenvolvimento-web": {
    seoTitle: "Desenvolvimento Web e ERP em Angola | Sites Corporativos Celeron+",
    seoDescription:
      "Desenvolvimento de ERPs, sites corporativos, portais e sistemas integrados a infraestrutura de rede para empresas em Angola.",
    kicker: "Desenvolvimento Web",
    title: "ERPs e sites corporativos conectados a infraestrutura da empresa.",
    introTitle: "Software empresarial precisa nascer ligado a rede, dados e processos reais.",
    lead:
      "Criamos software sob medida que usa a rede como base: sistemas internos, portais, dashboards, relatorios e integracoes.",
    heroImage: codeInterface,
    heroAlt: "Interface colorida de codigo para desenvolvimento web corporativo",
    stats: [
      { value: "ERP", label: "Gestao interna" },
      { value: "API", label: "Integracoes" },
      { value: "Web", label: "Presenca digital" },
    ],
    servicesTitle: "Software construido para a rotina operacional.",
    services: [
      { icon: Globe2, title: "Sites Corporativos", text: "Presenca digital profissional, rapida e preparada para SEO tecnico." },
      { icon: Database, title: "ERP Sob Medida", text: "Clientes, stock, vendas, relatorios, permissoes e rotinas internas." },
      { icon: Server, title: "Infra + Software", text: "Hospedagem, backups, acesso seguro e integracao com servidores e rede." },
    ],
    insightTitle: "Sistemas para operacoes mais organizadas.",
    insightItems: [
      "Dashboards para acompanhar indicadores da empresa",
      "Portais internos para equipas e clientes",
      "Sistemas integrados com dados, rede e servidores",
    ],
    detailCards: [
      { icon: ShieldCheck, title: "Seguranca Aplicacional", text: "Login, niveis de acesso, logs e protecao de dados empresariais." },
      { icon: Network, title: "Integracao com Rede", text: "Sistemas planejados junto com conectividade, servidores e backup." },
    ],
    visualTitle: "Interface de desenvolvimento",
    visualText: "Interfaces corporativas para gerir processos, dados, permissoes e relatorios.",
    visualType: "code",
    ctaTitle: "Solicite um sistema corporativo alinhado a sua infraestrutura.",
    ctaButton: "Solicitar Projeto",
  },
};

export const routeAliases: Record<string, string> = {
  "/infra": "/infraestrutura",
  "/padrao": "/padrao-tecnico",
};
