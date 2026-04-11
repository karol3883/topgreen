import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Project = {
  title: string;
  category: string;
  summary: string;
  scope: string[];
};

type OfferPage = {
  offer: string;
  category: string;
  hero: string;
  intro: string;
  stats: Array<{ label: string; value: string }>;
  projects: Project[];
};

const offerPages: Record<string, OfferPage> = {
  "ogrodzenia-palisadowe": {
    offer: "Ogrodzenia palisadowe",
    category: "Ogrodzenia nowoczesne",
    hero: "Ogrodzenia palisadowe",
    intro:
      "System palisadowy dla inwestorów, którzy chcą zachować prostą geometrię, nowoczesny detal i spójność z bryłą domu.",
    stats: [
      { label: "Typ zabudowy", value: "Front posesji i ogrodzenie boczne" },
      { label: "Najczęstszy zakres", value: "Przęsła, furtka, brama" },
      { label: "Efekt", value: "Nowoczesny rytm pionów i czysta linia" },
    ],
    projects: [
      {
        title: "Palisada z furtką zlicowaną",
        category: "Zestaw frontowy",
        summary:
          "Wariant demonstracyjny pokazujący, jak może wyglądać front posesji z naciskiem na równe podziały i spokojne proporcje.",
        scope: ["Projekt układu frontowego", "Furtka wejściowa", "Dopasowanie przęseł", "Montaż i regulacja"],
      },
      {
        title: "Pionowe profile przy nowoczesnej bryle",
        category: "Ogrodzenia",
        summary:
          "Przykładowy układ, w którym rozstaw profili jest dopasowany do elewacji, stolarki i podziałów frontu działki.",
        scope: ["Palisada frontowa", "Dobór wypełnienia", "Kolorystyka premium"],
      },
      {
        title: "System palisadowy dla obiektu usługowego",
        category: "Obiekt firmowy",
        summary:
          "Wersja demonstracyjna pod ofertę dla miejsc z większą intensywnością użytkowania i większym naciskiem na trwałość.",
        scope: ["Brama automatyczna", "Kontrola dostępu", "Ogrodzenie boczne"],
      },
    ],
  },
  "ogrodzenia-panelowe": {
    offer: "Ogrodzenia panelowe",
    category: "Systemy panelowe",
    hero: "Ogrodzenia panelowe",
    intro:
      "Rozwiązanie dla klientów, którzy chcą połączyć szybki montaż, dobrą estetykę i przewidywalny budżet inwestycji.",
    stats: [
      { label: "Typ inwestycji", value: "Domy, firmy i działki użytkowe" },
      { label: "Najczęstszy zakres", value: "Obwód działki i strefy techniczne" },
      { label: "Priorytet", value: "Trwałość, prostota, dobra cena" },
    ],
    projects: [
      {
        title: "Panel 3D wokół działki prywatnej",
        category: "System obwodowy",
        summary:
          "Wariant przykładowy dla klienta, który oczekuje szybkiego montażu i estetycznego zamknięcia całej posesji.",
        scope: ["Panele stalowe", "Słupki systemowe", "Montaż liniowy"],
      },
      {
        title: "Panele przy obiekcie usługowym",
        category: "Ogrodzenia",
        summary:
          "Przykład systemu panelowego stosowanego tam, gdzie liczy się szybkość realizacji i porządek na większym obwodzie.",
        scope: ["Ogrodzenie panelowe", "Strefa serwisowa", "Brama techniczna"],
      },
      {
        title: "Panel z furtką techniczną",
        category: "Uzupełnienie systemu",
        summary:
          "Podstrona demonstracyjna pokazująca, że ten sam szablon może obsługiwać różne warianty oferty pod jednym routingiem.",
        scope: ["Furtka", "Słupki", "Dopasowanie do paneli"],
      },
    ],
  },
  "brama-przesuwna": {
    offer: "Brama przesuwna",
    category: "Strefa wjazdu",
    hero: "Brama przesuwna",
    intro:
      "Wjazd dla klientów, którzy potrzebują wygody codziennego użytkowania, stabilnej pracy i nowoczesnej formy frontu posesji.",
    stats: [
      { label: "Najczęstszy zakres", value: "Wjazd główny i automatyka" },
      { label: "Typ posesji", value: "Domy jednorodzinne i firmy" },
      { label: "Korzyść", value: "Wygoda i oszczędność miejsca" },
    ],
    projects: [
      {
        title: "Brama przesuwna z automatyką",
        category: "Bramy",
        summary:
          "Przykładowy wariant dla nowoczesnej posesji z naciskiem na wygodny wjazd i spokojną geometrię frontu.",
        scope: ["Brama przesuwna", "Furtka wejściowa", "Dopasowanie do elewacji"],
      },
      {
        title: "Wjazd do firmy z większym światłem przejazdu",
        category: "Obiekt firmowy",
        summary:
          "Wersja ofertowa dla klienta biznesowego, gdzie ważna jest powtarzalność działania i bezpieczne użytkowanie.",
        scope: ["Brama przesuwna", "Napęd", "Elementy bezpieczeństwa"],
      },
      {
        title: "Front posesji z jedną linią wzorniczą",
        category: "Komplet frontowy",
        summary:
          "Przykład, jak zgrać bramę przesuwną z furtką i przęsłami, tak aby cały front był wizualnie spójny.",
        scope: ["Brama", "Furtka", "Przęsło frontowe"],
      },
    ],
  },
  "brama-skrzydlowa": {
    offer: "Brama skrzydłowa",
    category: "Klasyczny wjazd",
    hero: "Brama skrzydłowa",
    intro:
      "Rozwiązanie dla inwestycji, w których najlepiej sprawdza się tradycyjna forma otwierania i klarowny układ strefy wejściowej.",
    stats: [
      { label: "Typ posesji", value: "Domy prywatne i mniejsze inwestycje" },
      { label: "Najczęstszy zakres", value: "Front posesji i strefa wejścia" },
      { label: "Atut", value: "Prosta konstrukcja i czytelna forma" },
    ],
    projects: [
      {
        title: "Brama dwuskrzydłowa z furtką",
        category: "Bramy",
        summary:
          "Przykładowa konfiguracja dla frontu domu jednorodzinnego z naciskiem na wygodne użytkowanie i estetykę.",
        scope: ["Brama skrzydłowa", "Furtka", "Montaż końcowy"],
      },
      {
        title: "Klasyczny wjazd przy zwartej zabudowie",
        category: "Front posesji",
        summary:
          "Wariant demonstracyjny pokazujący, że klasyczne otwieranie nadal może wyglądać nowocześnie i spójnie.",
        scope: ["Skrzydła", "Słupki", "Wykończenie frontu"],
      },
      {
        title: "Brama z automatyką i kontrolą dostępu",
        category: "Rozszerzenie systemu",
        summary:
          "Pokazowy układ dla klienta, który chce połączyć tradycyjną konstrukcję z wygodą automatycznego otwierania.",
        scope: ["Napęd", "Kontrola dostępu", "System wejściowy"],
      },
    ],
  },
  "furtki-wejsciowe": {
    offer: "Furtki wejściowe",
    category: "Strefa wejścia",
    hero: "Furtki wejściowe",
    intro:
      "Rozwiązanie dla klientów, którzy chcą uporządkować wejście na posesję i zachować spójność wzorniczą z ogrodzeniem oraz bramą.",
    stats: [
      { label: "Najczęstszy zakres", value: "Furtka, słupki, zamek i domofon" },
      { label: "Typ inwestycji", value: "Domy prywatne i małe obiekty firmowe" },
      { label: "Efekt", value: "Wygodne wejście i spójny front posesji" },
    ],
    projects: [
      {
        title: "Furtka z pochwytami i zamkiem elektrozaczepowym",
        category: "Wejście główne",
        summary:
          "Przykładowa konfiguracja dla inwestora, który oczekuje czystej formy, wygody użytkowania i nowoczesnego wyglądu strefy wejściowej.",
        scope: ["Furtka stalowa", "Słupek", "Elektrozaczep", "Regulacja"],
      },
      {
        title: "Furtka zintegrowana z linią ogrodzenia",
        category: "Spójność wizualna",
        summary:
          "Wariant demonstracyjny pokazujący, jak zgrać furtkę z rytmem przęseł i całą kompozycją frontu posesji.",
        scope: ["Dopasowanie wzoru", "Kolorystyka", "Detale montażowe"],
      },
      {
        title: "Wejście z domofonem i kontrolą dostępu",
        category: "Rozszerzenie systemu",
        summary:
          "Przykład pod ofertę rozszerzoną, gdzie poza samą furtką ważna jest też wygoda codziennego korzystania.",
        scope: ["Domofon", "Kontrola dostępu", "Osprzęt wejściowy"],
      },
    ],
  },
  "automatyka-i-kontrola": {
    offer: "Automatyka i kontrola",
    category: "Napędy i sterowanie",
    hero: "Automatyka i kontrola",
    intro:
      "Systemy sterowania dla bram i furtek, które poprawiają wygodę użytkowania, bezpieczeństwo oraz codzienną powtarzalność działania.",
    stats: [
      { label: "Najczęstszy zakres", value: "Napędy, piloty, sterowniki i fotokomórki" },
      { label: "Typ obiektów", value: "Domy jednorodzinne i firmy" },
      { label: "Korzyść", value: "Wygoda, bezpieczeństwo i kontrola dostępu" },
    ],
    projects: [
      {
        title: "Automatyka do bramy przesuwnej",
        category: "Napęd",
        summary:
          "Przykładowy wariant dla klientów oczekujących płynnej pracy systemu, prostego sterowania i niezawodności na co dzień.",
        scope: ["Napęd", "Piloty", "Konfiguracja", "Uruchomienie"],
      },
      {
        title: "Kontrola dostępu dla wejścia głównego",
        category: "Wejście",
        summary:
          "Wersja demonstracyjna pod rozbudowę systemu wejściowego o elementy zwiększające bezpieczeństwo i wygodę obsługi.",
        scope: ["Domofon", "Elektrozaczep", "Sterowanie wejściem"],
      },
      {
        title: "Zestaw bezpieczeństwa dla strefy wjazdu",
        category: "Bezpieczeństwo",
        summary:
          "Przykład pokazujący, jak łączyć napęd, fotokomórki i sterowanie w jeden logiczny pakiet usługowy.",
        scope: ["Fotokomórki", "Lampa", "Sterownik", "Testy działania"],
      },
    ],
  },
};

type PageProps = {
  params: Promise<{ offer: string }>;
};

function getOfferPage(slug: string) {
  return offerPages[slug];
}

export function generateStaticParams() {
  return Object.keys(offerPages).map((offer) => ({ offer }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { offer } = await params;
  const page = getOfferPage(offer);

  if (!page) {
    return {};
  }

  return {
    title: `${page.hero} | GAPYS`,
    description: `Podstrona oferty ${page.offer}. Bramy, furtki i ogrodzenia w jednym dynamicznym szablonie Next.js.`,
  };
}

export default async function OfferPage({ params }: PageProps) {
  const { offer } = await params;
  const page = getOfferPage(offer);

  if (!page) {
    notFound();
  }

  return (
    <main>
        <section className="hero" aria-labelledby="offer-page-title">
          <div className="container hero-shell">
            <div className="hero-core reveal is-visible">
            <div className="hero-copy city-hero-copy">
              <span className="eyebrow">{page.category}</span>
              <h1 id="offer-page-title">{page.hero}</h1>
              <p>{page.intro}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projekty">
                  Zobacz przykłady
                </a>
                <Link className="btn btn-secondary" href="/kontakt">
                  Kontakt
                </Link>
              </div>
              <span className="hero-fineprint">{page.offer}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-divider">
        <div className="container">
          <div className="section-head reveal is-visible">
            <div>
              <span className="eyebrow">Strona oferty</span>
              <h2>Jedna dynamiczna trasa, osobny content dla każdej usługi.</h2>
            </div>
            <p>
              Ta podstrona jest generowana z jednego pliku `page.tsx`, ale dla każdej usługi może mieć własne
              nagłówki, opis, przykłady zastosowań i osobne meta tagi.
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
              <h2>Przykładowe warianty dla usługi {page.offer}.</h2>
            </div>
            <p>
              Na razie to dane demonstracyjne, ale dokładnie w tym miejscu możesz później podmieniać zakresy prac,
              FAQ, zdjęcia i treści pod SEO.
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
              <h2>{page.offer}: ten sam szablon może obsłużyć całą strukturę oferty.</h2>
              <p>
                Jeśli będziesz chciał, w kolejnym kroku możemy ten model rozszerzyć na kombinacje typu miasto +
                usługa, np. `warszawa/brama-przesuwna` albo `lublin/ogrodzenia-panelowe`.
              </p>
            </div>
            <div className="cta-side">
              <div className="cta-direct">
                <Link href="/oferta/ogrodzenia-panelowe">/oferta/ogrodzenia-panelowe</Link>
                <Link href="/oferta/brama-przesuwna">/oferta/brama-przesuwna</Link>
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
