import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="px-6 lg:px-20 py-16 grid lg:grid-cols-3 gap-12">
        <div>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="font-extrabold text-2xl tracking-tighter uppercase">City4you</span>
            <span className="text-[10px] font-mono font-bold bg-primary text-primary-foreground px-1.5 py-0.5">
              MS KRAJ
            </span>
          </div>
          <p className="text-sm opacity-60 max-w-xs leading-relaxed">
            Stavební a zemní práce v Moravskoslezském kraji. Spolehlivý partner pro municipality
            i soukromé investory.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-5">
            Kontakt
          </h4>
          <ul className="space-y-3 font-mono text-sm">
            <li>
              <span className="opacity-50">EMAIL: </span>
              <a href="mailto:info@city4you.cz" className="hover:text-primary">
                info@city4you.cz
              </a>
            </li>
            <li>
              <span className="opacity-50">TEL: </span>
              <a href="tel:+420777000000" className="hover:text-primary">
                +420 777 000 000
              </a>
            </li>
            <li>
              <span className="opacity-50">IČO: </span>12345678
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-5">
            Navigace
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/sluzby" className="hover:text-primary">
                Služby
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-primary">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/o-nas" className="hover:text-primary">
                O nás
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="hover:text-primary">
                Kontakt
              </Link>
            </li>
            <li>
              <Link to="/poptavka" className="hover:text-primary">
                Poptávka
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 px-6 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-3 opacity-50 text-[10px] font-mono uppercase tracking-widest">
        <p>© {new Date().getFullYear()} City4you s.r.o.</p>
        <p>Moravskoslezský kraj / Česká republika</p>
      </div>
    </footer>
  );
}
