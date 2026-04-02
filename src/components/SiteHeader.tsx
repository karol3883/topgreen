"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  navItems: NavItem[];
  activeHref?: string;
  sectionIds?: string[];
  brandHref?: string;
};

export default function SiteHeader({ navItems, activeHref, sectionIds, brandHref }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionIds?.[0] ?? "");
  const menuId = useId();

  useEffect(() => {
    const syncHeader = () => {
      setScrolled(window.scrollY > 24);
    };

    const syncNav = () => {
      if (!sectionIds?.length) return;

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section instanceof HTMLElement);

      const position = window.scrollY + window.innerHeight * 0.24;
      let current = sections[0]?.id ?? sectionIds[0] ?? "";

      sections.forEach((section) => {
        if (position >= section.offsetTop) current = section.id;
      });

      setActiveSection(current);
    };

    syncHeader();
    syncNav();
    window.addEventListener("scroll", syncHeader, { passive: true });
    window.addEventListener("scroll", syncNav, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncHeader);
      window.removeEventListener("scroll", syncNav);
    };
  }, [sectionIds]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const isActive = (href: string) => {
    if (href.startsWith("#")) return activeSection === href.slice(1);
    return activeHref === href;
  };

  const logoHref = brandHref ?? (navItems[0]?.href.startsWith("#") ? navItems[0].href : "/");

  return (
    <header className="header-wrap">
      <div className="container">
        <nav className={`header${scrolled ? " is-scrolled" : ""}`} aria-label="Główna nawigacja">
          {logoHref.startsWith("#") ? (
            <a className="brand" href={logoHref} aria-label="GAPYS - strona główna" onClick={closeMenu}>
              <Image src="/logo-optimized.webp" alt="GAPYS" width={160} height={43} priority className="brand-logo" />
            </a>
          ) : (
            <Link className="brand" href={logoHref} aria-label="GAPYS - strona główna" onClick={closeMenu}>
              <Image src="/logo-optimized.webp" alt="GAPYS" width={160} height={43} priority className="brand-logo" />
            </Link>
          )}

          <div className="nav">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a key={item.href} className={isActive(item.href) ? "is-active" : undefined} href={item.href}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} className={isActive(item.href) ? "is-active" : undefined} href={item.href}>
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="header-actions">
            <a className="phone" href="tel:+48123456789">
              +48 123 456 789
            </a>
          </div>

          <button
            className={`menu-btn${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label="Otwórz menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        <div className={`mobile-menu${menuOpen ? " is-open" : ""}`} id={menuId}>
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                className={`mobile-link${isActive(item.href) ? " is-active" : ""}`}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                className={`mobile-link${isActive(item.href) ? " is-active" : ""}`}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="mobile-actions">
            <a className="btn btn-secondary" href="tel:+48123456789" onClick={closeMenu}>
              +48 123 456 789
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
