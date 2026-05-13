import type { LucideIcon } from "lucide-react";

export type PageCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type PageData = {
  seoTitle: string;
  seoDescription: string;
  kicker: string;
  title: string;
  introTitle: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  stats: { value: string; label: string }[];
  servicesTitle: string;
  services: PageCard[];
  insightTitle: string;
  insightItems: string[];
  detailCards: PageCard[];
  visualTitle: string;
  visualText: string;
  visualType: "image" | "map" | "code";
  zones?: string[];
  ctaTitle: string;
  ctaButton: string;
};
