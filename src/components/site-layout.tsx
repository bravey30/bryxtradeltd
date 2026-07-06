import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import bryxLogo from "@/assets/bryx-logo-cropped.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/quality", label: "Quality" },
  { to: "/markets", label: "Markets" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src={bryxLogo}
              alt="Bryx Trades Limited"
              className="h-16 sm:h-20 md:h-24 w-auto max-w-[160px] sm:max-w-[180px] object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm text-foreground/75 transition hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-xs font-medium uppercase tracking-widest text-primary-foreground transition hover:bg-primary/90"
          >
            Request quote
          </Link>
          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border/60 bg-background">
            <div className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-lg font-display border-b border-border/40 last:border-0"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-32 border-t border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="font-display text-4xl">Bryx Trades Limited</div>
              <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
                Integrated agricultural export from Tanzania. Sourcing, quality assurance,
                cold-chain and international logistics — under one partner.
              </p>
              <p className="eyebrow mt-8 text-primary-foreground/60">Est. Dar es Salaam</p>
            </div>
            <div>
              <p className="eyebrow text-primary-foreground/60">Explore</p>
              <ul className="mt-4 space-y-2 text-sm">
                {NAV.slice(1).map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="text-primary-foreground/80 hover:text-accent">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-primary-foreground/60">Contact</p>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                <li>Dar es Salaam, Tanzania</li>
                <li>info@bryxtrades.co.tz</li>
                <li>Managing Director</li>
                <li>George Cosmas</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50">
            <span>© {new Date().getFullYear()} Bryx Trades Limited. All rights reserved.</span>
            <span className="font-mono">International standards compliant</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
