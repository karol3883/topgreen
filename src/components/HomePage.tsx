"use client";

import Image from "next/image";
import { useEffect } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const navItems = [
  { href: "#home", label: "Strona główna" },
  { href: "/galeria", label: "Galeria v3" },
  { href: "#o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
];

const homeSectionIds = ["home", "o-nas", "oferta", "kontakt"];

const storyValues = [
  {
    title: "Wyważony design",
    text: "Nowoczesna forma bez przesady, z naciskiem na ponadczasową elegancję.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 20h16M7 17V8m5 9V4m5 13v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Trwałość i jakość",
    text: "Każdy element powstaje z myślą o wieloletniej eksploatacji i estetyce premium.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l7 4v5c0 4.2-2.6 7.8-7 9-4.4-1.2-7-4.8-7-9V7l7-4Z" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Własna produkcja",
    text: "Pełna kontrola nad materiałem, konstrukcją i finalnym wykończeniem.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 8h16M7 4h10v16H7z" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Kompleksowa realizacja",
    text: "Od koncepcji po montaż prowadzimy inwestycję w jednym, spójnym standardzie.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m4 12 5 5 11-11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const stats = [
  { pill: "Doświadczenie", value: "12+ lat", text: "obsługi inwestycji mieszkaniowych, osiedlowych i komercyjnych" },
  { pill: "Realizacje", value: "1500+", text: "zrealizowanych systemów ogrodzeniowych w całej Polsce" },
  {
    pill: "Satysfakcja klientów",
    value: "98%",
    text: "pozytywnych rekomendacji dzięki jakości wykonania, spójnej estetyce i profesjonalnej współpracy",
    className: "stat-card stat-card--wide",
  },
  {
    pill: "Standard pracy",
    value: "Projekt, produkcja i montaż w jednym rytmie",
    text: "Prowadzimy realizacje tak, żeby efekt końcowy był spójny nie tylko wizualnie, ale też wykonawczo. Mniej przypadkowych decyzji, więcej kontroli nad detalem.",
    className: "stat-card stat-card--note",
  },
  {
    pill: "Obsługa",
    value: "Od pomiaru po montaż",
    text: "Jeden zespół odpowiada za cały przebieg realizacji i finalny efekt na inwestycji.",
    className: "stat-card stat-card--note",
  },
];

const uspCards = [
  {
    title: "Własna produkcja",
    text: "Kontrolujemy proces od początku do końca, dlatego możemy dopracować jakość, proporcję i detal bez półśrodków.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 19V6l8-3 8 3v13l-8 3-8-3Z" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Nowoczesny luksus",
    text: "Projektujemy rozwiązania wyraziste, ale spokojne formalnie. Eleganckie dziś i równie mocne za kilka lat.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 18 12 4l8 14H4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Indywidualne podejście",
    text: "Dostosowujemy projekt do charakteru bryły budynku, oczekiwań inwestora i funkcji całego wejścia.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 8h16M4 16h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Kompleksowa odpowiedzialność",
    text: "Projekt, produkcja i montaż realizujemy w jednym standardzie, dzięki czemu końcowy efekt jest spójny i przewidywalny.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m4 12 5 5 11-11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const offerCards = [
  {
    className: "offer-card offer-card--fence reveal",
    pill: "01 / Ogrodzenia",
    title: "Ogrodzenia premium",
    text: "Minimalistyczne palisady i systemy frontowe o dopracowanym rytmie, wyważonych proporcjach i elegancji wpisanej w architekturę.",
  },
  {
    className: "offer-card offer-card--gate reveal",
    pill: "02 / Bramy",
    title: "Bramy przesuwne i skrzydłowe",
    text: "Rozwiązania zaprojektowane dla komfortu i reprezentacyjnego wyglądu, z możliwością integracji z automatyką i kontrolą dostępu.",
  },
  {
    className: "offer-card offer-card--wicket reveal",
    pill: "03 / Furtki",
    title: "Furtki i wejścia boczne",
    text: "Subtelne moduły wejściowe, które dopełniają kompozycję frontu i wzmacniają pierwsze wrażenie już przy wejściu na posesję.",
  },
];

const processCards = [
  { step: "01", title: "Kontakt", text: "Poznanie oczekiwań, stylu inwestycji i funkcji, jakie ma spełniać system ogrodzeniowy." },
  { step: "02", title: "Pomiar i projekt", text: "Dobór kompozycji, proporcji i rozwiązań technicznych zgodnych z architekturą obiektu." },
  { step: "03", title: "Produkcja", text: "Wykonanie wszystkich elementów w jednym standardzie jakościowym i estetycznym." },
  { step: "04", title: "Montaż", text: "Profesjonalne osadzenie, regulacja i finalne dopięcie realizacji gotowej do użytkowania." },
];

const quoteCards = [
  {
    pill: "Klient indywidualny",
    quote: "„Ogrodzenie wygląda jak część projektu domu, a nie element techniczny. To właśnie ten poziom elegancji, którego szukaliśmy.”",
    initials: "AK",
    name: "Anna K.",
    meta: "Warszawa, dom jednorodzinny",
  },
  {
    pill: "Realizacja premium",
    quote: "„Bardzo wysoka kultura współpracy, świetne doradztwo i precyzyjne wykonanie. Brama oraz furtka prezentują się dokładnie tak, jak oczekiwaliśmy.”",
    initials: "MP",
    name: "Michał P.",
    meta: "Wrocław, nowoczesna inwestycja",
  },
  {
    pill: "Klient biznesowy",
    quote: "„Doceniliśmy nie tylko estetykę wykonania, ale również terminowość i pełną odpowiedzialność za efekt końcowy.”",
    initials: "TB",
    name: "Tomasz B.",
    meta: "Poznań, obiekt firmowy",
  },
];

export default function HomePage() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const tiltCards = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));

    let observer: IntersectionObserver | null = null;

    if (!reduced && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );

      revealItems.forEach((item) => observer?.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    const cleanups: Array<() => void> = [];

    if (!reduced) {
      tiltCards.forEach((card) => {
        const reset = () => {
          card.style.transform = "";
        };

        const onMove = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width;
          const py = (event.clientY - rect.top) / rect.height;
          const rotateY = (px - 0.5) * 7;
          const rotateX = (0.5 - py) * 7;
          card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        };

        card.addEventListener("pointermove", onMove);
        card.addEventListener("pointerleave", reset);
        card.addEventListener("blur", reset, true);

        cleanups.push(() => {
          card.removeEventListener("pointermove", onMove);
          card.removeEventListener("pointerleave", reset);
          card.removeEventListener("blur", reset, true);
        });
      });
    }

    return () => {
      observer?.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
      <SiteHeader navItems={navItems} sectionIds={homeSectionIds} brandHref="#home" />

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="container hero-shell">
            <div className="hero-core reveal">
              <div className="hero-copy">
                <h1 id="hero-title" className="sr-only">
                  GAPYS
                </h1>
                <Image
                  src="/logo-optimized.webp"
                  alt="GAPYS"
                  width={420}
                  height={112}
                  priority
                  className="hero-logo"
                />
                <p>Ogrodzenia, bramy i furtki zaprojektowane tak, by od pierwszego spojrzenia robiły właściwe wrażenie.</p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#oferta">
                    Zobacz ofertę
                  </a>
                  <a className="btn btn-secondary" href="#kontakt">
                    Skontaktuj się
                  </a>
                </div>
                <span className="hero-fineprint">Projekt / produkcja / montaż</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-divider" id="o-nas">
          <div className="container story-grid">
            <div className="luxury-panel reveal">
              <span className="eyebrow">O marce</span>
              <h2>Projektujemy ogrodzenia, które podnoszą klasę całej inwestycji.</h2>
              <p>
                Dla GAPYS ogrodzenie nie jest dodatkiem technicznym. To część kompozycji domu lub obiektu, która wpływa
                na odbiór całej architektury. Dlatego pracujemy nad formą, materiałem i detalem z taką samą uwagą jak
                nad funkcją i trwałością.
              </p>
              <div className="story-values">
                {storyValues.map((item) => (
                  <article key={item.title} className="story-value">
                    <div className="mini-icon" aria-hidden="true">
                      {item.icon}
                    </div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="stats-panel reveal">
              {stats.map((item) => (
                <article key={`${item.pill}-${item.value}`} className={item.className ?? "stat-card"}>
                  <span className="pill">{item.pill}</span>
                  <strong>{item.value}</strong>
                  <span>{item.text}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Przewagi</span>
                <h2>Marka budowana na klasie, precyzji i odpowiedzialności za efekt końcowy.</h2>
              </div>
              <p>
                GAPYS powstał dla klientów, którzy oczekują wyższej jakości wizualnej i wykonawczej. Każda realizacja
                ma być spójna, reprezentacyjna i gotowa na codzienne użytkowanie bez kompromisów.
              </p>
            </div>

            <div className="usp-grid">
              {uspCards.map((item) => (
                <article key={item.title} className="usp-card reveal">
                  <div className="mini-icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-divider" id="oferta">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Oferta</span>
                <h2>Trzy kategorie, jeden spójny język projektowy.</h2>
              </div>
              <p>
                Tworzymy ogrodzenia, bramy i furtki tak, aby razem budowały jedną kompozycję. Każdy element jest
                ważny, ale dopiero całość nadaje inwestycji właściwy charakter.
              </p>
            </div>

            <div className="offers-grid">
              {offerCards.map((item) => (
                <article key={item.title} className={item.className} data-tilt>
                  <div className="offer-visual"></div>
                  <div>
                    <span className="pill">{item.pill}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <a className="offer-link" href="#kontakt">
                      Dowiedz się więcej <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-divider">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Proces współpracy</span>
                <h2>Spokojny, klarowny proces prowadzący do efektu premium.</h2>
              </div>
              <p>
                Dbamy nie tylko o wynik końcowy, ale również o przebieg współpracy. Inwestor ma pełną świadomość
                kolejnych etapów i jakości podejmowanych decyzji.
              </p>
            </div>

            <div className="process-grid">
              {processCards.map((item) => (
                <article key={item.step} className="process-card reveal">
                  <span className="pill">Etap {item.step}</span>
                  <div className="process-number">{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Opinie klientów</span>
                <h2>Klienci doceniają efekt końcowy, ale też jakość całej współpracy.</h2>
              </div>
              <p>
                Dla inwestorów ważne są nie tylko materiały i wygląd. Liczy się również sposób prowadzenia projektu,
                komunikacja i pewność, że końcowy efekt będzie dokładnie taki, jak trzeba.
              </p>
            </div>

            <div className="quotes-grid">
              {quoteCards.map((item) => (
                <article key={item.name} className="quote-card reveal">
                  <span className="pill">{item.pill}</span>
                  <blockquote>{item.quote}</blockquote>
                  <div className="quote-person">
                    <div className="avatar" aria-hidden="true">
                      {item.initials}
                    </div>
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.meta}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-divider" id="kontakt">
          <div className="container cta-grid">
            <div className="cta-main reveal">
              <div className="cta-copy">
                <span className="eyebrow">Kontakt</span>
                <h2>Stwórzmy ogrodzenie, które podkreśli charakter Twojej inwestycji.</h2>
                <p>
                  Jeśli zależy Ci na nowoczesnym efekcie i realizacji prowadzonej z pełną odpowiedzialnością,
                  skontaktuj się z nami. Doradzimy i zaproponujemy najlepszy kierunek projektu.
                </p>
              </div>
              <div className="cta-side">
                <div className="cta-actions">
                  <a className="btn btn-primary" href="mailto:kontakt@gapys.pl">
                    Napisz do nas
                  </a>
                  <a className="btn btn-secondary" href="tel:+48123456789">
                    Zadzwoń do nas
                  </a>
                </div>
                <div className="cta-direct">
                  <a href="mailto:kontakt@gapys.pl">kontakt@gapys.pl</a>
                  <a href="tel:+48123456789">+48 123 456 789</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter
        navLinks={[
          { href: "#oferta", label: "Oferta" },
          { href: "#o-nas", label: "O nas" },
          { href: "/galeria", label: "Galeria" },
          { href: "/kontakt", label: "Kontakt" },
        ]}
      />
    </>
  );
}
