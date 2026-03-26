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
  { href: "/kontakt", label: "Kontakt" },
  { href: "/o-nas", label: "O nas" },
];

type NavbarProps = {
  activePath?: string;
};

export default function Navbar({ activePath }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-10 bg-tg-dark/80 backdrop-blur transition-shadow ${
        scrolled ? "border-b border-tg-line shadow-[0_14px_40px_rgba(0,0,0,0.35)]" : ""
      }`}
    >
      <div className="mx-auto flex w-[min(1140px,92vw)] items-center justify-between gap-4 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="inline-flex h-10 w-12 items-center justify-center rounded-xl bg-tg-alt/80 px-2">
            <Image src="/img.png" alt="TopGreen logo" width={80} height={32} />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold tracking-wide text-tg-secondary">
              TopGreen
            </span>
            <span className="block text-[11px] uppercase tracking-[0.28em] text-tg-muted">
              Ogrodzenia stalowe
            </span>
          </span>
        </Link>
        <button
          className="flex flex-col gap-1 md:hidden"
          aria-label="Otwórz menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="h-0.5 w-6 bg-tg-primary"></span>
          <span className="h-0.5 w-6 bg-tg-primary"></span>
          <span className="h-0.5 w-6 bg-tg-primary"></span>
        </button>
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => {
            const isActive = activePath === item.href;
            if (item.children) {
              return (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={
                      isActive
                        ? "nav-link nav-link-active inline-flex items-center gap-2 text-tg-secondary"
                        : "nav-link inline-flex items-center gap-2 text-tg-muted hover:text-tg-primary"
                    }
                  >
                    {item.label}
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
                  <span className="absolute left-0 top-full h-3 w-full" />
                  <div className="invisible absolute left-0 top-full z-20 mt-2 w-64 rounded-2xl border border-tg-line bg-tg-dark p-3 opacity-0 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 group-hover:pointer-events-auto group-focus-within:pointer-events-auto pointer-events-none">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3 py-2 text-sm text-tg-muted transition hover:bg-tg-alt hover:text-tg-secondary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "nav-link nav-link-active text-tg-secondary"
                    : "nav-link text-tg-muted hover:text-tg-primary"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
      {open ? (
        <div className="absolute right-[4vw] top-[76px] flex w-64 flex-col gap-3 rounded-2xl border border-tg-line bg-tg-dark p-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)] md:hidden">
          {navItems.map((item) => (
            <div key={item.href} className="space-y-2">
              <Link
                href={item.href}
                className={activePath === item.href ? "text-tg-secondary" : "text-tg-muted"}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="grid gap-1 border-l border-tg-line pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="text-sm text-tg-muted"
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
      ) : null}
    </nav>
  );
}
