import Link from "next/link";

const navItems = [
  { href: "/news", label: "NEWS" },
  { href: "/about", label: "ABOUT" },
  { href: "/works", label: "WORKS" },
  { href: "/service", label: "SERVICE" },
  { href: "/staff", label: "STAFF" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/company", label: "COMPANY" },
  { href: "/recruit", label: "RECRUIT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#080808", borderTop: "1px solid var(--border)" }}>
      <div className="container py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div>
            <p
              className="text-2xl font-medium mb-1"
              style={{ fontFamily: "'Noto Serif JP', serif", letterSpacing: "0.3em", color: "var(--fg)" }}
            >
              山口庭園
            </p>
            <p
              className="text-[9px] mb-8"
              style={{ letterSpacing: "0.4em", color: "var(--gold)" }}
            >
              YAMAGUCHI TEIEN
            </p>
            <p className="text-xs leading-loose mb-1" style={{ color: "var(--fg-muted)" }}>
              〒358-0000 埼玉県入間市
            </p>
            <p className="text-xs leading-loose mb-6" style={{ color: "var(--fg-muted)" }}>
              Tel: 000-000-0000
            </p>
            <a
              href="https://www.instagram.com/yamaguchiteien0429"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] transition-colors duration-300 hover:text-[var(--gold)]"
              style={{ color: "var(--fg-muted)" }}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              INSTAGRAM
            </a>
          </div>

          {/* Nav */}
          <nav className="grid grid-cols-3 gap-x-10 gap-y-3 self-start">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[10px] tracking-[0.2em] transition-colors duration-300 hover:text-[var(--gold)]"
                style={{ color: "var(--fg-muted)" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div
          className="mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-[10px]" style={{ color: "#444", letterSpacing: "0.1em" }}>
            © {new Date().getFullYear()} 山口庭園. All rights reserved.
          </p>
          <a
            href="#top"
            className="text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 hover:text-[var(--gold)]"
            style={{ color: "#444" }}
          >
            Page Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
