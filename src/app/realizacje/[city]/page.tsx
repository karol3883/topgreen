import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Project = {
  title: string;
  category: string;
  summary: string;
  scope: string[];
};

type CityPage = {
  city: string;
  region: string;
  hero: string;
  intro: string;
  stats: Array<{ label: string; value: string }>;
  projects: Project[];
};

const cityPages: Record<string, CityPage> = {
  warszawa: {
    city: "Warszawa",
    region: "mazowieckie",
    hero: "Realizacje Warszawa",
    intro:
      "Przykładowe realizacje dla Warszawy pokazują kierunek estetyczny, zakres prac i typy systemów, które możemy wdrażać dla nowoczesnych inwestycji prywatnych oraz firmowych.",
    stats: [
      { label: "Typ inwestycji", value: "Domy premium i zabudowa miejska" },
      { label: "Najczęstszy zakres", value: "Bramy, furtki, ogrodzenia frontowe" },
      { label: "Styl", value: "Minimalizm, ciemne wykończenia, detal premium" },
    ],
    projects: [
      {
        title: "Brama przesuwna z furtką zlicowaną",
        category: "Bramy",
        summary:
          "Dummy realizacja dla inwestycji pod Warszawą, z naciskiem na spokojną geometrię profili i reprezentacyjny front posesji.",
        scope: ["Projekt układu frontowego", "Brama przesuwna", "Furtka wejściowa", "Montaż i regulacja"],
      },
      {
        title: "Ogrodzenie palisadowe przy nowoczesnej bryle",
        category: "Ogrodzenia",
        summary:
          "Przykładowy system dla klienta indywidualnego, gdzie rytm pionów został dopasowany do podziałów elewacji i stolarki.",
        scope: ["Palisada frontowa", "Dobór wypełnienia", "Kolorystyka premium"],
      },
      {
        title: "System wjazdowy dla budynku usługowego",
        category: "Realizacja firmowa",
        summary:
          "Wersja demonstracyjna pod stronę SEO, pokazująca ofertę dla obiektów z większą intensywnością użytkowania.",
        scope: ["Brama automatyczna", "Kontrola dostępu", "Ogrodzenie boczne"],
      },
    ],
  },
  lublin: {
    city: "Lublin",
    region: "lubelskie",
    hero: "Realizacje Lublin",
    intro:
      "Przykładowe realizacje dla Lublina pokazują, jak może wyglądać oferta dla klientów szukających nowoczesnych ogrodzeń, bram i furtek w spójnym standardzie wykonania.",
    stats: [
      { label: "Typ inwestycji", value: "Domy jednorodzinne i mniejsze obiekty firmowe" },
      { label: "Najczęstszy zakres", value: "Front posesji i strefa wejściowa" },
      { label: "Styl", value: "Nowoczesna prostota i trwałe wykończenia" },
    ],
    projects: [
      {
        title: "Front posesji z bramą skrzydłową",
        category: "Bramy",
        summary:
          "Przykładowa realizacja dla Lublina, gdzie liczy się uporządkowana kompozycja wejścia i wygodne codzienne użytkowanie.",
        scope: ["Brama skrzydłowa", "Furtka", "Słupki i detale wykończeniowe"],
      },
      {
        title: "Ogrodzenie premium z ciemnym wykończeniem",
        category: "Ogrodzenia",
        summary:
          "Dummy case dla klienta oczekującego nowoczesnego efektu wizualnego oraz spokojnych proporcji na całej linii frontowej.",
        scope: ["Ogrodzenie frontowe", "Przęsła boczne", "Spójność z architekturą domu"],
      },
      {
        title: "Wjazd dla obiektu usługowego",
        category: "Realizacja firmowa",
        summary:
          "Demonstracyjna podstrona lokalna pokazująca, że jeden szablon może obsługiwać różne miasta i warianty treści.",
        scope: ["Brama przesuwna", "Napęd", "System wejściowy"],
      },
    ],
  },
  lodz: {
    city: "Łódź",
    region: "łódzkie",
    hero: "Realizacje Łódź",
    intro:
      "Przykładowe realizacje dla Łodzi pokazują, jak może wyglądać lokalna podstrona oparta o jeden dynamiczny szablon i osobny zestaw treści dla miasta.",
    stats: [
      { label: "Typ inwestycji", value: "Zabudowa miejska i domy jednorodzinne" },
      { label: "Najczęstszy zakres", value: "Bramy, furtki i front posesji" },
      { label: "Styl", value: "Proste linie i ciemne wykończenia" },
    ],
    projects: [
      {
        title: "Brama przesuwna dla nowoczesnej posesji",
        category: "Bramy",
        summary:
          "Dummy realizacja dla Łodzi przygotowana wyłącznie jako przykład pod routing lokalnych podstron SEO.",
        scope: ["Brama przesuwna", "Furtka wejściowa", "Dopasowanie do elewacji"],
      },
      {
        title: "Ogrodzenie frontowe z rytmem pionów",
        category: "Ogrodzenia",
        summary:
          "Wariant demonstracyjny pokazujący, jak można różnicować opis i nagłówki dla kolejnego miasta bez tworzenia osobnego pliku.",
        scope: ["Przęsła frontowe", "Słupki stalowe", "Kolorystyka premium"],
      },
      {
        title: "System wejściowy dla obiektu usługowego",
        category: "Realizacja firmowa",
        summary:
          "Przykład treści lokalnej, która później może zostać zastąpiona prawdziwymi realizacjami i lokalnym copy.",
        scope: ["Kontrola dostępu", "Brama automatyczna", "Odcinek ogrodzenia"],
      },
    ],
  },
  kielce: {
    city: "Kielce",
    region: "świętokrzyskie",
    hero: "Realizacje Kielce",
    intro:
      "Przykładowe realizacje dla Kielc pokazują prosty model budowy lokalnych landingów z osobnym SEO, ale wspólnym szablonem Next.js.",
    stats: [
      { label: "Typ inwestycji", value: "Domy prywatne i małe obiekty firmowe" },
      { label: "Najczęstszy zakres", value: "Ogrodzenie frontowe i wjazd" },
      { label: "Styl", value: "Nowoczesna forma i uporządkowany detal" },
    ],
    projects: [
      {
        title: "Furtka i brama dla inwestycji jednorodzinnej",
        category: "Bramy",
        summary:
          "Dummy content dla Kielc, przygotowany jako kolejny przykład lokalnej podstrony generowanej z jednego pliku.",
        scope: ["Brama skrzydłowa", "Furtka", "Montaż końcowy"],
      },
      {
        title: "Ogrodzenie premium z ciemnym matem",
        category: "Ogrodzenia",
        summary:
          "Przykładowa sekcja lokalna do późniejszego podmiany na prawdziwe realizacje i bardziej rozbudowany opis miasta.",
        scope: ["Ogrodzenie frontowe", "Przęsła boczne", "Wykończenie premium"],
      },
      {
        title: "Wjazd dla firmy z kontrolą dostępu",
        category: "Realizacja firmowa",
        summary:
          "Demonstracyjna karta projektowa pokazująca, że możesz skalować ten sam szablon na wiele lokalizacji.",
        scope: ["Napęd", "Kontrola dostępu", "System wejściowy"],
      },
    ],
  },
};

type PageProps = {
  params: Promise<{ city: string }>;
};

function getCityPage(slug: string) {
  return cityPages[slug];
}

export function generateStaticParams() {
  return Object.keys(cityPages).map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const page = getCityPage(city);

  if (!page) {
    return {};
  }

  return {
    title: `${page.hero} | GAPYS`,
    description: `Dummy podstrona SEO dla miasta ${page.city}. Realizacje, bramy, furtki i ogrodzenia w jednym dynamicznym szablonie Next.js.`,
  };
}

export default async function CityRealizationsPage({ params }: PageProps) {
  const { city } = await params;
  const page = getCityPage(city);

  if (!page) {
    notFound();
  }

  return (
    <main>
        <section className="hero" aria-labelledby="city-realizations-title">
          <div className="container hero-shell">
            <div className="hero-core reveal is-visible">
            <div className="hero-copy city-hero-copy">
              <span className="eyebrow">Realizacje lokalne</span>
              <h1 id="city-realizations-title">{page.hero}</h1>
              <p>{page.intro}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projekty">
                  Zobacz przykłady
                </a>
                <Link className="btn btn-secondary" href="/kontakt">
                  Kontakt
                </Link>
              </div>
              <span className="hero-fineprint">{page.city} / {page.region}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-divider">
        <div className="container">
          <div className="section-head reveal is-visible">
            <div>
              <span className="eyebrow">Strona SEO</span>
              <h2>Jedna dynamiczna trasa, osobny content dla każdego miasta.</h2>
            </div>
            <p>
              Ta podstrona jest generowana z jednego pliku `page.tsx`, ale dla każdego miasta może mieć własne
              nagłówki, opis, dane projektów i osobne meta tagi.
            </p>
          </div>

          <div className="stats-panel reveal is-visible">
            {page.stats.map((item) => (
              <article key={item.label} className="stat-card">
                <span className="pill">{item.label}</span>
                <strong style={{ fontSize: "clamp(1.35rem, 2vw, 2rem)", lineHeight: 1.05 }}>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projekty">
        <div className="container">
          <div className="section-head reveal is-visible">
            <div>
              <span className="eyebrow">Dummy data</span>
              <h2>Przykładowe realizacje dla miasta {page.city}.</h2>
            </div>
            <p>
              Na razie to dane demonstracyjne, ale dokładnie w tym miejscu możesz później podmieniać lokalne case
              studies, zakresy prac, FAQ i treści pod SEO.
            </p>
          </div>

          <div className="offers-grid">
            {page.projects.map((project) => (
              <article key={project.title} className="offer-card reveal is-visible">
                <div className="offer-visual"></div>
                <div>
                  <span className="pill">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div style={{ marginTop: 22, display: "grid", gap: 10 }}>
                    {project.scope.map((item) => (
                      <span key={item} style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                        • {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-divider" id="kontakt">
        <div className="container cta-grid">
          <div className="cta-main reveal is-visible">
            <div className="cta-copy">
              <span className="eyebrow">Następny krok</span>
              <h2>{page.city}: ten sam szablon może obsłużyć dziesiątki lokalnych landingów.</h2>
              <p>
                Jeśli będziesz chciał, w kolejnym kroku możemy ten model rozszerzyć na kombinacje typu miasto +
                usługa, np. `warszawa/bramy` albo `lublin/ogrodzenia`.
              </p>
            </div>
            <div className="cta-side">
              <div className="cta-direct">
                <Link href="/realizacje/warszawa">/realizacje/warszawa</Link>
                <Link href="/realizacje/lublin">/realizacje/lublin</Link>
              </div>
              <div className="cta-actions">
                <Link className="btn btn-primary" href="/kontakt">
                  Przejdź dalej
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
