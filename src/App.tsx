import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import {
  BriefcaseBusiness,
  ChevronRight,
  Clock3,
  Crosshair,
  LocateFixed,
  Mail,
  MapPin,
  Menu,
  Plus,
  RotateCcw,
  Trash2,
  Phone,
  X,
} from "lucide-react";
import celeronLogo from "./assets/logo-celeron.png";
import { allPages, routeAliases } from "./pages/menuPages";
import type { PageData } from "./pages/types";

type RouteKey = "/" | "/quem-somos" | "/infraestrutura" | "/cobertura" | "/padrao-tecnico" | "/desenvolvimento-web";

const routes: Record<string, PageData> = allPages;

type CoveragePoint = {
  id: string;
  name: string;
  lat: number;
  lng: number;
};

type MapPoint = CoveragePoint & {
  x: number;
  y: number;
};

const coverageStorageKey = "celeron-coverage-points-v2";
const coverageRadiusKm = 5;
const luandaCenter = { lat: -8.8383, lng: 13.2344 };
const mapZoom = 11;
const tileSize = 256;
const mapTileRange = 4;
const defaultCoveragePoints: CoveragePoint[] = [
  { id: "sao-paulo", name: "Sao Paulo", lat: -8.8308, lng: 13.2572 },
  { id: "cassequel", name: "Cassequel", lat: -8.876, lng: 13.2507 },
  { id: "palanca", name: "Palanca", lat: -8.8785, lng: 13.2832 },
];

const navItems: { label: string; path: RouteKey }[] = [
  { label: "Home", path: "/" },
  { label: "Infraestrutura", path: "/infraestrutura" },
  { label: "Cobertura", path: "/cobertura" },
  { label: "Padrao Tecnico", path: "/padrao-tecnico" },
  { label: "Desenvolvimento Web", path: "/desenvolvimento-web" },
];

const footerGroups = [
  {
    title: "Empresa",
    links: [
      { label: "Quem Somos", path: "/quem-somos" },
      { label: "Padrao Tecnico", path: "/padrao-tecnico" },
      { label: "Cobertura em Luanda", path: "/cobertura" },
    ],
  },
  {
    title: "Solucoes",
    links: [
      { label: "Infraestrutura de Rede", path: "/infraestrutura" },
      { label: "Internet Wireless/UTP", path: "/infraestrutura" },
      { label: "ERP e Sites Corporativos", path: "/desenvolvimento-web" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { label: "Solicitar Instalacao", path: "/" },
      { label: "Mapa de Cobertura", path: "/cobertura" },
      { label: "Auditoria Tecnica", path: "/padrao-tecnico" },
    ],
  },
] satisfies { title: string; links: { label: string; path: RouteKey | "/" }[] }[];

const internetPlans = [
  {
    speed: "2 Mbps",
    price: "10.000 Kz",
    profile: "Uso leve",
    use: "WhatsApp, redes sociais, email e pagamentos.",
  },
  {
    speed: "4 Mbps",
    price: "15.000 Kz",
    profile: "Estudantes e familias pequenas",
    use: "Aulas online, YouTube moderado e chamadas.",
  },
  {
    speed: "8 Mbps",
    price: "20.000 Kz",
    profile: "Plano recomendado",
    use: "Casa media, loja, POS e 2 a 4 dispositivos.",
  },
  {
    speed: "16 Mbps",
    price: "25.000 Kz",
    profile: "Familias exigentes",
    use: "Streaming, trabalho remoto e varios dispositivos.",
  },
  {
    speed: "25 Mbps",
    price: "35.000 Kz",
    profile: "Empresas e casas premium",
    use: "Cloud, CCTV remoto, streaming HD e equipas.",
  },
];

const installationModels = [
  {
    model: "Individual",
    cost: "75.000 Kz",
    requirement: "1 cliente",
    value: "Antena propria + router",
    bestFor: "Cliente isolado, maior poder de compra ou necessidade de ponto dedicado.",
  },
  {
    model: "Comunitario",
    cost: "40.000 Kz por cliente",
    requirement: "Minimo 4 clientes",
    value: "Ponto de antena partilhado + router proprio por cliente",
    bestFor: "Vizinhos proximos, ruas densas, predios, condominios e zonas em expansao.",
  },
];

function getRoute(): string {
  const path = window.location.pathname;
  const resolved = routeAliases[path] ?? path;
  return routes[resolved] ? resolved : "/";
}

function ensureMeta(name: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function projectPoint(lat: number, lng: number, zoom: number) {
  const scale = tileSize * 2 ** zoom;
  const sinLat = Math.sin((lat * Math.PI) / 180);
  return {
    x: ((lng + 180) / 360) * scale,
    y: (0.5 - Math.log((1 + sinLat) / (1 - sinLat)) / (4 * Math.PI)) * scale,
  };
}

function unprojectPoint(x: number, y: number, zoom: number) {
  const scale = tileSize * 2 ** zoom;
  const lng = (x / scale) * 360 - 180;
  const latRadians = Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / scale)));
  return {
    lat: (latRadians * 180) / Math.PI,
    lng,
  };
}

function kmToPixels(radiusKm: number, lat: number, zoom: number) {
  const metersPerPixel = (156543.03392 * Math.cos((lat * Math.PI) / 180)) / 2 ** zoom;
  return (radiusKm * 1000) / metersPerPixel;
}

function loadCoveragePoints() {
  try {
    const stored = window.localStorage.getItem(coverageStorageKey);
    if (!stored) {
      return defaultCoveragePoints;
    }

    const parsed = JSON.parse(stored) as CoveragePoint[];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return defaultCoveragePoints;
    }

    return parsed.filter(
      (point) =>
        typeof point.id === "string" &&
        typeof point.name === "string" &&
        Number.isFinite(point.lat) &&
        Number.isFinite(point.lng),
    );
  } catch {
    return defaultCoveragePoints;
  }
}

function CoverageMap({ title, text }: { title: string; text: string }) {
  const [points, setPoints] = useState<CoveragePoint[]>(loadCoveragePoints);
  const [activeId, setActiveId] = useState(defaultCoveragePoints[0].id);
  const center = useMemo(() => projectPoint(luandaCenter.lat, luandaCenter.lng, mapZoom), []);
  const radiusPx = useMemo(() => kmToPixels(coverageRadiusKm, luandaCenter.lat, mapZoom), []);

  useEffect(() => {
    window.localStorage.setItem(coverageStorageKey, JSON.stringify(points));
  }, [points]);

  const activePoint = points.find((point) => point.id === activeId) ?? points[0];
  const mapPoints: MapPoint[] = points.map((point) => {
    const projected = projectPoint(point.lat, point.lng, mapZoom);
    return {
      ...point,
      x: 50 + ((projected.x - center.x) / (tileSize * mapTileRange)) * 100,
      y: 50 + ((projected.y - center.y) / (tileSize * mapTileRange)) * 100,
    };
  });

  const updatePoint = (id: string, patch: Partial<CoveragePoint>) => {
    setPoints((current) =>
      current.map((point) => (point.id === id ? { ...point, ...patch } : point)),
    );
  };

  const movePointFromCanvas = (
    id: string,
    clientX: number,
    clientY: number,
    canvas: HTMLDivElement,
  ) => {
    const rect = canvas.getBoundingClientRect();
    const xPercent = clamp(((clientX - rect.left) / rect.width) * 100, 0, 100);
    const yPercent = clamp(((clientY - rect.top) / rect.height) * 100, 0, 100);
    const worldX = center.x + ((xPercent - 50) / 100) * tileSize * mapTileRange;
    const worldY = center.y + ((yPercent - 50) / 100) * tileSize * mapTileRange;
    const next = unprojectPoint(worldX, worldY, mapZoom);
    updatePoint(id, {
      lat: Number(next.lat.toFixed(6)),
      lng: Number(next.lng.toFixed(6)),
    });
  };

  const addPoint = () => {
    const nextPoint = {
      id: `zona-${Date.now()}`,
      name: `Nova zona ${points.length + 1}`,
      lat: luandaCenter.lat,
      lng: luandaCenter.lng,
    };
    setPoints((current) => [...current, nextPoint]);
    setActiveId(nextPoint.id);
  };

  const removePoint = (id: string) => {
    setPoints((current) => {
      if (current.length === 1) {
        return current;
      }

      const next = current.filter((point) => point.id !== id);
      setActiveId(next[0].id);
      return next;
    });
  };

  const resetPoints = () => {
    setPoints(defaultCoveragePoints);
    setActiveId(defaultCoveragePoints[0].id);
  };

  const tiles = [];
  const centerTileX = Math.floor(center.x / tileSize);
  const centerTileY = Math.floor(center.y / tileSize);
  const centerOffsetX = center.x - centerTileX * tileSize;
  const centerOffsetY = center.y - centerTileY * tileSize;

  for (let dx = -2; dx <= 2; dx += 1) {
    for (let dy = -2; dy <= 2; dy += 1) {
      tiles.push({
        key: `${dx}-${dy}`,
        x: centerTileX + dx,
        y: centerTileY + dy,
        left: `calc(50% + ${dx * tileSize - centerOffsetX}px)`,
        top: `calc(50% + ${dy * tileSize - centerOffsetY}px)`,
      });
    }
  }

  return (
    <div className="visual-panel map-panel" aria-label="Mapa real de cobertura de Luanda">
      <div className="coverage-map-workspace">
        <div className="coverage-map-canvas">
          {tiles.map((tile) => (
            <img
              key={tile.key}
              src={`https://tile.openstreetmap.org/${mapZoom}/${tile.x}/${tile.y}.png`}
              alt=""
              aria-hidden="true"
              style={{ left: tile.left, top: tile.top }}
              draggable={false}
            />
          ))}
          <div className="coverage-map-vignette" />
          {mapPoints.map((point) => (
            <button
              key={point.id}
              type="button"
              className={`coverage-point ${activePoint?.id === point.id ? "coverage-point--active" : ""}`}
              style={
                {
                  "--point-x": `${point.x}%`,
                  "--point-y": `${point.y}%`,
                  "--radius-px": `${radiusPx}px`,
                } as CSSProperties
              }
              onClick={() => setActiveId(point.id)}
              onPointerDown={(event) => {
                event.currentTarget.setPointerCapture(event.pointerId);
                setActiveId(point.id);
                movePointFromCanvas(point.id, event.clientX, event.clientY, event.currentTarget.parentElement as HTMLDivElement);
              }}
              onPointerMove={(event) => {
                if (event.buttons !== 1) {
                  return;
                }

                movePointFromCanvas(point.id, event.clientX, event.clientY, event.currentTarget.parentElement as HTMLDivElement);
              }}
            >
              <span />
              {point.name}
            </button>
          ))}
          <div className="coverage-map-credit">OpenStreetMap</div>
        </div>
        <div className="coverage-toolbar" aria-label="Ferramentas do mapa de cobertura">
          <button type="button" onClick={addPoint} title="Adicionar ponto">
            <Plus size={18} />
          </button>
          <button type="button" onClick={resetPoints} title="Restaurar pontos iniciais">
            <RotateCcw size={18} />
          </button>
          <span>
            <Crosshair size={16} />
            Raio {coverageRadiusKm} km
          </span>
        </div>
      </div>
      <div className="coverage-editor">
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        {activePoint && (
          <div className="coverage-form">
            <label>
              Nome do ponto
              <input
                value={activePoint.name}
                onChange={(event) => updatePoint(activePoint.id, { name: event.target.value })}
              />
            </label>
            <div className="coverage-coordinate-grid">
              <label>
                Latitude
                <input
                  type="number"
                  step="0.000001"
                  value={activePoint.lat}
                  onChange={(event) =>
                    updatePoint(activePoint.id, { lat: Number(event.target.value) })
                  }
                />
              </label>
              <label>
                Longitude
                <input
                  type="number"
                  step="0.000001"
                  value={activePoint.lng}
                  onChange={(event) =>
                    updatePoint(activePoint.id, { lng: Number(event.target.value) })
                  }
                />
              </label>
            </div>
            <div className="coverage-actions">
              <button
                type="button"
                onClick={() => updatePoint(activePoint.id, luandaCenter)}
              >
                <LocateFixed size={17} />
                Centralizar
              </button>
              <button type="button" onClick={() => removePoint(activePoint.id)}>
                <Trash2 size={17} />
                Remover
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function VisualBlock({ page }: { page: PageData }) {
  if (page.visualType === "map") {
    return <CoverageMap title={page.visualTitle} text={page.visualText} />;
  }

  if (page.visualType === "code") {
    return (
      <div className="visual-panel code-panel">
        <pre>{`const celeron = {
  market: "Angola",
  uptime: "99.5%",
  stack: ["network", "cctv", "erp"],
  security: "segmented"
};`}</pre>
        <div>
          <h3>{page.visualTitle}</h3>
          <p>{page.visualText}</p>
        </div>
      </div>
    );
  }

  return (
    <figure className="visual-panel image-panel">
      <img src={page.heroImage} alt={page.heroAlt} />
      <figcaption>
        <h3>{page.visualTitle}</h3>
        <p>{page.visualText}</p>
      </figcaption>
    </figure>
  );
}

function SocialIcon({ name }: { name: "linkedin" | "facebook" | "instagram" }) {
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.96H3.9v10.15h3.04V8.96ZM5.42 4.89a1.72 1.72 0 1 0 0 3.44 1.72 1.72 0 0 0 0-3.44Zm6.72 4.07H9.23v10.15h3.04v-5.32c0-1.4.64-2.23 1.84-2.23 1.07 0 1.58.76 1.58 2.23v5.32h3.04v-6.01c0-2.83-1.51-4.39-3.94-4.39-1.17 0-2.06.51-2.65 1.3V8.96Z" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.18 8.08h2.05V4.7a26.63 26.63 0 0 0-2.99-.15c-2.96 0-4.99 1.86-4.99 5.28v2.97H4.9v3.78h3.35v9.42h4.11v-9.42h3.22l.51-3.78h-3.73v-2.6c0-1.09.3-2.12 1.82-2.12Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.2" />
      <circle cx="12" cy="12" r="3.35" />
      <circle cx="16.55" cy="7.45" r="0.95" />
    </svg>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [route, setRoute] = useState(getRoute);

  const page = useMemo(() => routes[route] ?? routes["/"], [route]);

  useEffect(() => {
    document.title = "Celeron +";
    ensureMeta("description", page.seoDescription);
    ensureMeta("keywords", "Celeron+, Angola, Luanda, infraestrutura de rede, internet wireless, UTP, fibra optica, CCTV, ERP");
  }, [page]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onPopState = () => setRoute(getRoute());
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    setRoute(getRoute());
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    if (route !== "/") {
      window.history.pushState({}, "", "/");
      setRoute("/");
      setMobileOpen(false);
      window.setTimeout(() => {
        document.getElementById("contato")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      return;
    }

    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <div className="site-shell">
      <header className={`main-header ${scrolled ? "main-header--scrolled" : ""}`}>
        <div className="header-inner">
          <button type="button" className="brand" onClick={() => navigateTo("/")}>
            <img src={celeronLogo} alt="Celeron +" className="brand-logo" />
            <span className="brand-text">eleron +</span>
          </button>

          <nav className="desktop-nav" aria-label="Menu principal">
            {navItems.map((item) => (
              <div key={item.path} className="nav-item">
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => navigateTo(item.path)}
                  aria-current={route === item.path ? "page" : undefined}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </nav>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="mobile-menu" aria-label="Menu mobile">
            <div className="mobile-group">
              {navItems.map((item) => (
                <button key={item.path} type="button" onClick={() => navigateTo(item.path)}>
                  {item.label}
                </button>
              ))}
            </div>
            <button type="button" className="mobile-contact" onClick={scrollToContact}>
              Solicitar Instalacao
            </button>
          </nav>
        )}
      </header>

      <main id="topo" style={{ "--page-image": `url(${page.heroImage})` } as CSSProperties}>
        <div
          className="page-visual-backdrop page-visual-backdrop--tinted"
          style={{
            backgroundImage: `url(${page.heroImage})`,
          }}
        >
          <section className={`hero-section ${route === "/" ? "hero-section--home" : ""}`}>
            <div className="hero-shade" />
            <div className="hero-content">
              <p>{page.kicker}</p>
              <h1>{page.title}</h1>
            </div>
          </section>

          <section className="content-section section-split">
            <div className="section-text">
              <p>{page.lead}</p>
              <div className="stats-row">
                {page.stats.map((item) => (
                  <span key={item.label}>
                    <strong>{item.value}</strong>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="content-section">
          <div className="section-heading">
            <p className="section-kicker">Solucoes</p>
            <h2>{page.servicesTitle}</h2>
          </div>
          <div className="service-grid">
            {page.services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="service-card">
                <Icon size={28} />
                <h3>{title}</h3>
                <p>{text}</p>
                <button type="button" onClick={scrollToContact}>
                  Solicitar Instalacao <ChevronRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </section>

        {route !== "/" && route !== "/cobertura" && route !== "/infraestrutura" && (
          <section className="content-section visual-section">
            <VisualBlock page={page} />
          </section>
        )}

        {route === "/cobertura" && (
          <section className="content-section sales-strategy-section">
            <div className="section-heading">
              <p className="section-kicker">Nossos planos ilimitados</p>
              <h2>Escolha o plano ideal para navegar sem limites, com instalacao rapida e suporte tecnico em Luanda.</h2>
            </div>

            <div className="plans-grid">
              {internetPlans.map((plan) => (
                <article key={plan.speed} className="plan-card">
                  <span>{plan.profile}</span>
                  <h3>{plan.speed}</h3>
                  <strong>{plan.price}/mes</strong>
                  <p>{plan.use}</p>
                </article>
              ))}
            </div>

            <div className="install-grid">
              {installationModels.map((item) => (
                <article key={item.model} className="strategy-card install-card">
                  <span>{item.requirement}</span>
                  <h3>{item.model}</h3>
                  <strong>{item.cost}</strong>
                  <p>{item.value}</p>
                  <small>{item.bestFor}</small>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="content-section insight-band">
          <div>
            <p className="section-kicker">Estrategia</p>
            <h2>{page.insightTitle}</h2>
          </div>
          <div className="insight-list">
            {page.insightItems.map((item) => (
              <button key={item} type="button" onClick={scrollToContact}>
                {item}
                <ChevronRight size={18} />
              </button>
            ))}
          </div>
        </section>

        <section className="content-section credential-section">
          {page.detailCards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="credential-card">
              <Icon size={30} />
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </section>

        <section className="content-section career-section">
          <div>
            <p className="section-kicker">Proximo Passo</p>
            <h2>{page.ctaTitle}</h2>
          </div>
          <button type="button" onClick={scrollToContact}>
            {page.ctaButton} <BriefcaseBusiness size={18} />
          </button>
        </section>

        {route === "/" && (
          <section id="contato" className="content-section contact-section">
            <div>
              <p className="section-kicker">Contato</p>
              <h2>Fale com a Celeron+ em Luanda.</h2>
              <p>
                Envie a sua necessidade e retornaremos com a melhor solucao para internet,
                infraestrutura de rede, CCTV, servidores ou desenvolvimento web.
              </p>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Nome" aria-label="Nome" />
              <input type="email" placeholder="E-mail" aria-label="E-mail" />
              <select aria-label="Assunto" defaultValue="">
                <option value="" disabled>
                  Assunto
                </option>
                <option>Solicitar Instalacao</option>
                <option>Infraestrutura de Rede</option>
                <option>Cobertura em Luanda</option>
                <option>ERP ou Site Corporativo</option>
              </select>
              <textarea placeholder="Mensagem" aria-label="Mensagem" rows={4} />
              <button type="submit">Enviar mensagem</button>
            </form>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <button type="button" className="brand" onClick={() => navigateTo("/")}>
              <img src={celeronLogo} alt="Celeron +" className="brand-logo" />
              <span className="brand-text">eleron+</span>
            </button>
            <p>
              Internet ilimitada, infraestrutura de rede e suporte tecnico para empresas e
              residencias em Angola.
            </p>
            <div className="social-links">
              <a href="/" aria-label="LinkedIn" onClick={(event) => event.preventDefault()}>
                <SocialIcon name="linkedin" />
              </a>
              <a href="/" aria-label="Facebook" onClick={(event) => event.preventDefault()}>
                <SocialIcon name="facebook" />
              </a>
              <a href="/" aria-label="Instagram" onClick={(event) => event.preventDefault()}>
                <SocialIcon name="instagram" />
              </a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="footer-column">
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <button key={link.label} type="button" onClick={() => navigateTo(link.path)}>
                  {link.label}
                </button>
              ))}
            </div>
          ))}

          <div className="footer-contact">
            <h3>Atendimento</h3>
            <p>
              <Phone size={16} /> +244 923 000 000
            </p>
            <p>
              <Mail size={16} /> comercial@celeron.co.ao
            </p>
            <p>
              <MapPin size={16} /> Luanda, Angola
            </p>
            <p>
              <Clock3 size={16} /> Seg. a Sex. 08h as 18h
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Celeron+ 2022. Todos os direitos reservados.</span>
          <span>Politica de privacidade · Termos de uso · Suporte tecnico</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
