"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Start" },
  {
    href: "/oferta",
    label: "Oferta",
    children: [
      { href: "/oferta/ogrodzenia-palisadowe", label: "Ogrodzenia palisadowe" },
      { href: "/oferta/ogrodzenia-panelowe", label: "Ogrodzenia panelowe" },
      { href: "/oferta/brama-przesuwna", label: "Brama przesuwna" },
      { href: "/oferta/brama-skrzydlowa", label: "Brama skrzydłowa" },
      { href: "/oferta/furtki-wejsciowe", label: "Furtki wejściowe" },
      { href: "/oferta/automatyka-i-kontrola", label: "Automatyka i kontrola" },
    ],
  },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
];

type NavbarProps = {
  activePath?: string;
};

export default function Navbar({ activePath }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-6">
      <nav
        className={`mx-auto w-[min(1180px,100%)] rounded-[1.75rem] border transition-all ${
          scrolled
            ? "border-tg-line bg-[rgba(20,20,22,0.88)] shadow-[0_18px_50px_rgba(0,0,0,0.36)] backdrop-blur-xl"
            : "border-[rgba(232,227,216,0.12)] bg-[rgba(20,20,22,0.62)] backdrop-blur-lg"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-tg-line bg-tg-alt/70">
                <Image src="/img.png" alt="TopGreen logo" width={30} height={30} className="h-auto w-auto" />
              </span>
              <span className="block">
                <span className="block font-serif text-2xl leading-none tracking-[0.06em] text-tg-secondary">
                  TopGreen
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.34em] text-tg-muted">
                  Ogrodzenia i bramy stalowe
                </span>
              </span>
            </Link>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive = activePath === item.href;

              if (item.children) {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={`nav-pill ${isActive ? "nav-pill-active" : ""}`}
                    >
                      <span>{item.label}</span>
                      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden="true">
                        <path
                          d="M5 7l5 5 5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <div className="pointer-events-none invisible absolute left-0 top-full z-30 mt-3 w-72 rounded-[1.4rem] border border-tg-line bg-[rgba(20,20,22,0.96)] p-3 opacity-0 shadow-[0_18px_52px_rgba(0,0,0,0.42)] transition-all group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                      <div className="mb-2 px-3 py-2">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-tg-muted">Zakres oferty</p>
                      </div>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3 py-2.5 text-sm text-tg-muted transition hover:bg-tg-alt/80 hover:text-tg-secondary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link key={item.href} href={item.href} className={`nav-pill ${isActive ? "nav-pill-active" : ""}`}>
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="tel:+48000000000" className="text-sm font-medium text-tg-muted transition hover:text-tg-secondary">
              +48 000 000 000
            </a>
            <Link
              href="/kontakt"
              className="rounded-full bg-tg-primary px-5 py-2.5 text-sm font-semibold text-[#141416] transition hover:bg-tg-primary-hover"
            >
              Konsultacja
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-tg-line bg-tg-dark/70 text-tg-secondary lg:hidden"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {open ? (
          <div className="border-t border-tg-line px-5 pb-5 pt-3 lg:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <div key={item.href} className="rounded-2xl border border-tg-line/80 bg-tg-dark/55 p-3">
                  <Link
                    href={item.href}
                    className={`block text-sm font-semibold ${
                      activePath === item.href ? "text-tg-secondary" : "text-tg-muted"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="mt-3 grid gap-1 border-t border-tg-line pt-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-xl px-2 py-1.5 text-sm text-tg-muted transition hover:bg-tg-alt/70 hover:text-tg-secondary"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-tg-line bg-tg-dark/55 p-4">
              <a href="tel:+48000000000" className="text-sm text-tg-secondary">
                +48 000 000 000
              </a>
              <Link
                href="/kontakt"
                className="rounded-full bg-tg-primary px-5 py-3 text-center text-sm font-semibold text-[#141416]"
                onClick={() => setOpen(false)}
              >
                Umów konsultację
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
