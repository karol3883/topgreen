import Image from "next/image";
import Link from "next/link";

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
            <p>+48 123 456 789</p>
            <p>kontakt@gapys.pl</p>
            <p>
              ul. Przemysłowa 18
              <br />
              00-000 Warszawa
            </p>
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
          <div>
            <strong>Social</strong>
            <div className="socials">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
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
