import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Hammer, Shovel, Grid3x3, Droplets, Wrench, Truck } from "lucide-react";
import heroImg from "@/assets/real-hero.jpg";
import projDlazba from "@/assets/real-project-1.jpg";
import projVykop from "@/assets/real-project-2.jpg";
import projDrenaz from "@/assets/real-project-3.jpg";
import projTrat from "@/assets/real-project-4.jpg";
import projNamesti from "@/assets/real-project-5.jpg";
import projBazen from "@/assets/real-project-6.jpg";
import partner1 from "@/assets/partner-1.png";
import partner2 from "@/assets/partner-2.png";
import partner3 from "@/assets/partner-3.png";
import partner4 from "@/assets/partner-4.png";
import partner5 from "@/assets/partner-5.png";
import partner6 from "@/assets/partner-6.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "City4you s.r.o. — Stavební a zemní práce v MS kraji" },
      {
        name: "description",
        content:
          "Realizujeme stavební a zemní práce v Moravskoslezském kraji. Výkopy, pokládka dlažby, odvodnění, demolice — s vlastní technikou a vlastním týmem.",
      },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Hammer, title: "Stavební práce", desc: "Kompletní realizace stavebních celků od základů po finální úpravy." },
  { icon: Shovel, title: "Zemní a výkopové", desc: "Terénní úpravy, hloubení základů a příprava inženýrských sítí." },
  { icon: Grid3x3, title: "Pokládka dlažby", desc: "Zámková a velkoformátová dlažba pro chodníky, parkoviště i náměstí." },
  { icon: Droplets, title: "Odvodnění a drenáže", desc: "Drenážní systémy a komplexní řešení odvodu dešťové vody." },
  { icon: Wrench, title: "Demolice", desc: "Bezpečné bourací práce a ekologická likvidace stavebního odpadu." },
];

const projects = [
  { img: projNamesti, title: "Oprava trati Krnov – Skrochovice", tag: "Železnice", year: "2024" },
  { img: projDlazba, title: "Realizace dlažeb Nové Lauby", tag: "Ostrava", year: "2024" },
  { img: projBazen, title: "Zemní práce LF Ostrava-Vítkovice", tag: "Veřejná zakázka", year: "2024" },
  { img: projVykop, title: "Zemní práce a pokládka dlažby", tag: "Rezidence", year: "2024" },
  { img: projTrat, title: "Dlažba a betonování lému bazénu", tag: "Soukromý projekt", year: "2023" },
  { img: projDrenaz, title: "Odvodnění a drenáž", tag: "Průmysl", year: "2023" },
];

const partners = [
  { img: partner1, name: "Partner 1" },
  { img: partner2, name: "Partner 2" },
  { img: partner3, name: "Partner 3" },
  { img: partner4, name: "Městský obvod Poruba" },
  { img: partner5, name: "Bystroň Group" },
  { img: partner6, name: "Ostravské komunikace" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <header className="relative border-b border-foreground/10">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-7 px-6 py-16 lg:p-20 flex flex-col justify-center animate-heavy">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 mb-6">
              / City4you s.r.o.
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-balance uppercase">
              Stavíme <span className="text-primary italic">základy</span> Moravy.
            </h1>
            <p className="max-w-md text-lg font-medium leading-relaxed mb-10 text-foreground/70">
              Kvalitní stavební a zemní práce v Moravskoslezském kraji. Od výkopů po finální
              pokládku — s vlastní technikou a vlastním týmem.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/sluzby"
                className="bg-foreground text-background px-8 py-4 font-bold uppercase text-sm tracking-widest flex items-center gap-4 group hover:bg-accent transition-colors"
              >
                Naše služby
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-foreground px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-foreground hover:text-background transition-all"
              >
                Portfolio
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-[360px] lg:h-auto border-t lg:border-t-0 lg:border-l border-foreground/10 overflow-hidden">
            <img
              src={heroImg}
              alt="Bagr na stavbě"
              width={1024}
              height={1216}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-foreground">
        {[
          { n: "01", v: "150+", l: "Realizací" },
          { n: "02", v: "12 let", l: "Praxe v oboru" },
          { n: "03", v: "MSK", l: "Region působnosti" },
          { n: "04", v: "100%", l: "Vlastní technika" },
        ].map((s) => (
          <div key={s.n} className="p-6 lg:p-10 border-r last:border-r-0 border-foreground/10">
            <div className="text-xs font-mono text-foreground/50 mb-2">/ {s.n}</div>
            <div className="text-3xl lg:text-5xl font-extrabold tracking-tighter">{s.v}</div>
            <div className="text-[10px] uppercase font-bold tracking-widest mt-2">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Services */}
      <section className="px-6 lg:px-20 py-16 lg:py-24 bg-accent text-accent-foreground">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-14 gap-4">
          <div>
            <span className="font-mono text-primary text-xs uppercase tracking-[0.2em]">
              / Co děláme
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mt-4 uppercase">
              Profesionální služby
            </h2>
          </div>
          <Link
            to="/sluzby"
            className="font-mono text-xs border-b border-primary text-primary pb-1 uppercase self-start md:self-auto"
          >
            Zobrazit vše →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-accent-foreground/10 border border-accent-foreground/10">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/sluzby"
              className="bg-accent p-8 hover:bg-primary hover:text-primary-foreground transition-all group"
            >
              <s.icon size={28} className="text-primary group-hover:text-primary-foreground mb-6" strokeWidth={1.5} />
              <div className="h-px w-12 bg-primary mb-5 group-hover:bg-primary-foreground" />
              <h3 className="text-base font-bold leading-tight mb-3 uppercase tracking-tighter">
                {s.title}
              </h3>
              <p className="text-xs opacity-60 leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-6 lg:px-20 py-16 lg:py-24">
        <div className="flex justify-between items-baseline mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
              / Portfolio
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tighter mt-4 uppercase">
              Poslední zakázky
            </h2>
          </div>
          <span className="font-mono text-xs opacity-40 hidden md:block">[MSK ARCHIV]</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Link to="/portfolio" key={p.title} className="group cursor-pointer block">
              <div className="w-full aspect-[4/3] mb-5 overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={608}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h4 className="font-bold uppercase tracking-tight leading-snug">{p.title}</h4>
                  <p className="text-xs text-foreground/60 mt-1">{p.tag}</p>
                </div>
                <span className="font-mono text-[10px] border border-foreground/20 px-2 py-1 shrink-0">
                  {p.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="px-6 lg:px-20 py-16 lg:py-20 border-t border-foreground/10 bg-secondary">
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
            / Partneři
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tighter mt-4 uppercase">
            Spolupracujeme s
          </h2>
        </div>
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee items-center">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="shrink-0 w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[25vw] px-10 lg:px-16 flex items-center justify-center"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="max-h-16 lg:max-h-20 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background px-6 lg:px-20 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Truck size={40} className="text-primary mb-8" strokeWidth={1.5} />
            <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-8 uppercase">
              Máte <span className="text-primary">projekt?</span>
            </h2>
            <p className="text-lg opacity-70 max-w-md leading-relaxed">
              Připravíme pro vás nezávaznou cenovou kalkulaci a navrhneme technické řešení.
              Odpovídáme do 48 hodin.
            </p>
          </div>
          <div className="space-y-4">
            <Link
              to="/poptavka"
              className="bg-primary text-primary-foreground w-full block px-8 py-5 font-bold uppercase text-sm tracking-widest hover:bg-background hover:text-foreground transition-colors text-center"
            >
              Odeslat poptávku →
            </Link>
            <Link
              to="/kontakt"
              className="border-2 border-background/30 w-full block px-8 py-5 font-bold uppercase text-sm tracking-widest hover:bg-background hover:text-foreground transition-all text-center"
            >
              Kontaktní údaje
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
