import { MapPin, Network, UsersRound } from "lucide-react";
import type { PageData } from "./types";

const coberturaPage: Partial<PageData> = {
  kicker: "Cobertura",
  title: "Cobertura tecnica em São Paulo, Cassequel e Palanca.",
  lead:
    "Avaliamos disponibilidade por localizacao, visada para enlaces wireless, distancia do ponto tecnico e viabilidade para cabo UTP.",
  stats: [
    { value: "São Paulo", label: "Cobertura ativa" },
    { value: "Cassequel", label: "Zona atendida" },
    { value: "Palanca", label: "Instalacao local" },
  ],
  servicesTitle: "Zonas de atendimento para internet ilimitada.",
  services: [
    {
      icon: MapPin,
      title: "São Paulo",
      text: "Atendimento para residencias, lojas e pequenos negocios que precisam de internet ilimitada estavel.",
    },
    {
      icon: MapPin,
      title: "Cassequel",
      text: "Instalacoes por radio e UTP com avaliacao de visada, cabo e ponto tecnico mais proximo.",
    },
    {
      icon: MapPin,
      title: "Palanca",
      text: "Cobertura para clientes individuais e grupos comunitarios com instalacao local organizada.",
    },
  ],
  insightTitle: "Lista de zonas atendidas por avaliacao tecnica.",
  insightItems: [
    "Sao Paulo: validar altura, visada e ponto de instalacao",
    "Cassequel: confirmar rota UTP e disponibilidade do ponto tecnico",
    "Palanca: avaliar instalacao individual ou comunitaria",
  ],
  detailCards: [
    {
      icon: Network,
      title: "Viabilidade Wireless",
      text: "Verificacao de visada, altura, distancia e interferencia antes da proposta de instalacao.",
    },
    {
      icon: UsersRound,
      title: "Suporte de Proximidade",
      text: "Equipa preparada para levantamento, instalacao, manutencao e expansao de pontos.",
    },
  ],
  ctaTitle: "Confirme se a sua zona tem cobertura e receba uma proposta tecnica.",
  ctaButton: "Solicitar Instalacao",
};

export default coberturaPage;
