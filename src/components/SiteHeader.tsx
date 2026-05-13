import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/city4you-logo.png";

const links = [
  { to: "/", label: "Úvod" },
  { to: "/sluzby", label: "Služby" },
  { to: "/o-nas", label: "O nás" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b-4 border-foreground">
      <div className="px-6 lg:px-10 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="City4you s.r.o." className="h-9 w-auto" />
          <span className="hidden sm:inline text-[10px] font-mono font-bold bg-primary text-primary-foreground px-1.5 py-0.5">
            MS KRAJ
          </span>
        </Link>

        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
              className="hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/poptavka"
            className="hidden sm:inline-flex bg-foreground text-background px-5 py-2.5 text-xs font-bold uppercase tracking-tighter hover:bg-accent transition-colors"
          >
            Poptávka
          </Link>
          <button
            type="button"
            className="md:hidden p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-foreground/10 bg-background">
          <div className="flex flex-col px-6 py-4 gap-1 text-sm font-bold uppercase tracking-widest">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
                className="py-2 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/poptavka"
              onClick={() => setOpen(false)}
              className="mt-3 bg-foreground text-background px-5 py-3 text-xs font-bold uppercase tracking-tighter text-center"
            >
              Poptávka
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
