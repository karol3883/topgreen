import Image from "next/image";
import Link from "next/link";
import { fullAddress, siteConfig } from "@/data/site-config";

type FooterLink = {
  href: string;
  label: string;
};

type SiteFooterProps = {
  navLinks: FooterLink[];
};

export default function SiteFooter({ navLinks }: SiteFooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand brand-footer">
              <Image src="/logo-optimized.webp" alt="GAPYS" width={160} height={43} className="brand-logo" />
            </div>
            <p>
              Producent nowoczesnych ogrodzeń, bram i furtek dla inwestycji prywatnych oraz komercyjnych. Projekt,
              produkcja i montaż w jednym standardzie.
            </p>
          </div>
          <div>
            <strong>Kontakt</strong>
            <p>
              <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
            </p>
            <p>
              <a href={siteConfig.emailHref}>{siteConfig.email}</a>
            </p>
            <p>{fullAddress}</p>
          </div>
          <div>
            <strong>Nawigacja</strong>
            <div className="footer-links">
              {navLinks.map((link) => (
                <Link key={`${link.href}-${link.label}`} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {siteConfig.socialLinks.length ? (
            <div>
              <strong>Social</strong>
              <div className="socials">
                {siteConfig.socialLinks.map((link) => (
                  <a key={link.href} href={link.href} rel="noreferrer" target="_blank">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
          <div>
            <strong>Województwa</strong>
            <div className="footer-accordion">
              <details className="footer-region">
                <summary>Mazowieckie</summary>
                <div className="footer-cities">
                  <Link href="/realizacje/warszawa">Warszawa</Link>
                </div>
              </details>
              <details className="footer-region">
                <summary>Łódzkie</summary>
                <div className="footer-cities">
                  <Link href="/realizacje/lodz">Łódź</Link>
                </div>
              </details>
              <details className="footer-region">
                <summary>Świętokrzyskie</summary>
                <div className="footer-cities">
                  <Link href="/realizacje/kielce">Kielce</Link>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 GAPYS. Wszelkie prawa zastrzeżone.</span>
          <span>Nowoczesne systemy ogrodzeń i bram.</span>
        </div>
      </div>
    </footer>
  );
}
