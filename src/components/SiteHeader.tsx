"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { siteNavItems } from "@/components/site-nav";

type NavItem = {
  href: string;
  label: string;
  children?: NavItem[];
};

type SiteHeaderProps = {
  activeHref?: string;
  sectionIds?: string[];
  brandHref?: string;
};

export default function SiteHeader({ activeHref, sectionIds, brandHref }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionIds?.[0] ?? "");
  const menuId = useId();
  const navItems: NavItem[] = siteNavItems;

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
    setOpenMobileItem(null);
    document.body.style.overflow = "";
  };

  const isActive = (href: string) => {
    if (href.startsWith("#")) return activeSection === href.slice(1);
    return activeHref === href;
  };

  const hasActiveChild = (item: NavItem) => item.children?.some((child) => isActive(child.href)) ?? false;

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
            {navItems.map((item) => {
              const itemIsActive = isActive(item.href) || hasActiveChild(item);

              if (item.children?.length) {
                return (
                  <div key={item.href} className="nav-dropdown">
                    <Link className={`nav-dropdown-trigger${itemIsActive ? " is-active" : ""}`} href={item.href}>
                      <span>{item.label}</span>
                      <svg viewBox="0 0 20 20" className="nav-dropdown-icon" aria-hidden="true">
                        <path
                          d="M5 7l5 5 5-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <div className="nav-dropdown-menu">
                      <div className="nav-dropdown-head">
                        <span className="nav-dropdown-label">Zakres oferty</span>
                      </div>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          className={`nav-dropdown-item${isActive(child.href) ? " is-active" : ""}`}
                          href={child.href}
                        >
                          <span>{child.label}</span>
                          <span className="nav-dropdown-item-arrow" aria-hidden="true">
                            ↗
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return item.href.startsWith("#") ? (
                <a key={item.href} className={itemIsActive ? "is-active" : undefined} href={item.href}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} className={itemIsActive ? "is-active" : undefined} href={item.href}>
                  {item.label}
                </Link>
              );
            })}
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
          {navItems.map((item) => {
            const itemIsActive = isActive(item.href) || hasActiveChild(item);

            return (
              <div key={item.href} className="mobile-group">
                {item.children?.length ? (
                  <button
                    type="button"
                    className={`mobile-link mobile-link-toggle${itemIsActive ? " is-active" : ""}${
                      openMobileItem === item.href ? " is-open" : ""
                    }`}
                    aria-expanded={openMobileItem === item.href}
                    onClick={() => setOpenMobileItem((current) => (current === item.href ? null : item.href))}
                  >
                    <span>{item.label}</span>
                    <svg viewBox="0 0 20 20" className="mobile-link-icon" aria-hidden="true">
                      <path
                        d="M5 7l5 5 5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ) : item.href.startsWith("#") ? (
                  <a className={`mobile-link${itemIsActive ? " is-active" : ""}`} href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                ) : (
                  <Link
                    className={`mobile-link${itemIsActive ? " is-active" : ""}`}
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )}
                {item.children?.length ? (
                  <div className={`mobile-submenu${openMobileItem === item.href ? " is-open" : ""}`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        className={`mobile-sublink${isActive(child.href) ? " is-active" : ""}`}
                        href={child.href}
                        onClick={closeMenu}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
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
