"use client";

import { FormEvent, useEffect, useState } from "react";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const contactItems = [
  {
    title: "Adres",
    content: "ul. Przemysłowa 18, 00-000 Warszawa",
    href: null,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Telefon",
    content: "+48 123 456 789",
    href: "tel:+48123456789",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6 4h4l2 5-2.5 1.5a15 15 0 0 0 4 4L15 12l5 2v4a2 2 0 0 1-2 2h-1C10 20 4 14 4 7V6a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "E-mail",
    content: "kontakt@gapys.pl",
    href: "mailto:kontakt@gapys.pl",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 7h16v10H4z" stroke="currentColor" strokeWidth="1.6" />
        <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Godziny pracy",
    content: "Poniedziałek - piątek: 8:00 - 17:00\nSobota: po wcześniejszym umówieniu",
    href: null,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function KontaktPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<{ tone: "idle" | "success" | "error"; message: string }>({
    tone: "idle",
    message: "Odpowiadamy możliwie szybko w godzinach pracy.",
  });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

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

    return () => {
      observer?.disconnect();
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
    };

    if (!payload.name || !payload.phone || !payload.email || !payload.message) {
      setFormState({
        tone: "error",
        message: "Uzupełnij imię, telefon, e-mail i wiadomość.",
      });
      return;
    }

    setIsSubmitting(true);
    setFormState({
      tone: "idle",
      message: "Wysyłanie wiadomości...",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Nie udało się wysłać wiadomości.");
      }

      form.reset();
      setFormState({
        tone: "success",
        message: result.message ?? "Wiadomość została wysłana.",
      });
    } catch (error) {
      setFormState({
        tone: "error",
        message: error instanceof Error ? error.message : "Nie udało się wysłać wiadomości.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SiteHeader activeHref="/kontakt" />

      <main>
        <PageHero
          eyebrow="Kontakt"
          title="Porozmawiajmy o Twojej inwestycji."
          description="Jeśli chcesz zamówić ogrodzenie, bramę lub furtkę w standardzie premium, skontaktuj się z nami. Doradzimy i wskażemy najlepszy kierunek realizacji."
          id="kontakt"
          titleId="contact-hero-title"
          actions={
            <>
              <a className="btn btn-primary" href="#formularz">
                Wyślij zapytanie
              </a>
              <a className="btn btn-secondary" href="tel:+48123456789">
                Zadzwoń do nas
              </a>
            </>
          }
        />

        <section className="section section-divider" id="formularz">
          <div className="container contact-layout">
            <div className="contact-panel reveal">
              <span className="eyebrow">Dane kontaktowe</span>
              <h2>Jeden kontakt. Jasny proces. Konkretny termin.</h2>
              <p>
                Napisz lub zadzwoń, jeśli chcesz omówić zakres inwestycji i termin realizacji. Pracujemy zarówno dla
                klientów indywidualnych, jak i dla firm.
              </p>

              <div className="contact-stack">
                {contactItems.map((item) => (
                  <div key={item.title} className="contact-item">
                    <div className="mini-icon" aria-hidden="true">
                      {item.icon}
                    </div>
                    <div>
                      <strong>{item.title}</strong>
                      {item.href ? (
                        <a href={item.href}>{item.content}</a>
                      ) : (
                        <span>
                          {item.content.split("\n").map((line) => (
                            <span key={line}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-panel reveal">
              <span className="eyebrow">Formularz kontaktowy</span>
              <h2>Napisz do nas.</h2>
              <p>Opisz krótko inwestycję. Im więcej konkretów podasz, tym szybciej przygotujemy sensowną odpowiedź.</p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="name">Imię i nazwisko</label>
                    <input id="name" name="name" type="text" placeholder="Jan Kowalski" autoComplete="name" />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Telefon</label>
                    <input id="phone" name="phone" type="tel" placeholder="+48 123 456 789" autoComplete="tel" />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" name="email" type="email" placeholder="kontakt@firma.pl" autoComplete="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="service">Zakres</label>
                    <select id="service" name="service" defaultValue="Ogrodzenie">
                      <option>Ogrodzenie</option>
                      <option>Brama</option>
                      <option>Furtka</option>
                      <option>Kompletny system</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">Wiadomość</label>
                  <textarea id="message" name="message" placeholder="Opisz inwestycję, lokalizację, termin i zakres prac." />
                </div>

                <input className="contact-honeypot" type="text" name="company" tabIndex={-1} autoComplete="off" />

                <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}
                </button>
                <div className={`form-note form-note--${formState.tone}`} aria-live="polite">
                  {formState.message}
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="contact-map-card reveal">
              <div className="contact-map-art">
                <iframe
                  title="Mapa Google - Przysucha"
                  src="https://www.google.com/maps?q=Przysucha%2C%20Polska&z=13&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="contact-map-meta">
                <span className="eyebrow">Lokalizacja</span>
                <strong>Przysucha</strong>
                <span>Na ten moment ustawiona jako lokalizacja referencyjna dla sekcji mapy.</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter
        navLinks={[
          { href: "/", label: "Strona główna" },
          { href: "/oferta", label: "Oferta" },
          { href: "/galeria", label: "Galeria" },
          { href: "/kontakt", label: "Kontakt" },
        ]}
      />
    </>
  );
}
