"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/oferta", label: "Oferta" },
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
      className={`sticky top-0 z-10 bg-white/90 backdrop-blur transition-shadow ${
        scrolled ? "border-b border-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex w-[min(1140px,92vw)] items-center justify-between gap-4 py-3">
        <Link href="/" className="block w-[96px]">
          <Image src="/img.png" alt="TopGreen logo" width={96} height={32} />
        </Link>
        <button
          className="flex flex-col gap-1 md:hidden"
          aria-label="Otwórz menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="h-0.5 w-6 bg-black"></span>
          <span className="h-0.5 w-6 bg-black"></span>
          <span className="h-0.5 w-6 bg-black"></span>
        </button>
        <div className="hidden items-center gap-5 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                activePath === item.href ? "nav-link nav-link-active text-tg-dark" : "nav-link"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      {open ? (
        <div className="absolute right-[4vw] top-[72px] flex w-48 flex-col gap-3 rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={activePath === item.href ? "text-tg-dark" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
