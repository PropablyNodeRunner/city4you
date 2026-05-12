import { createFileRoute, Link } from "@tanstack/react-router";
import { Hammer, Shovel, Grid3x3, Droplets, Wrench, ArrowRight } from "lucide-react";
import { PageHeader, Section } from "@/components/Section";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby — City4you s.r.o." },
      {
        name: "description",
        content:
          "Stavební a zemní práce, pokládka dlažby, výkopy, odvodnění a demolice v Moravskoslezském kraji.",
      },
    ],
  }),
  component: Sluzby,
});

const services = [
  {
    icon: Hammer,
    title: "Stavební práce",
    desc: "Kompletní realizace stavebních celků od základů po finální úpravy. Pracujeme pro municipality i soukromé investory.",
    items: ["Základové desky", "Hrubá stavba", "Zídky a opěrné konstrukce", "Betonáž"],
  },
  {
    icon: Shovel,
    title: "Zemní a výkopové práce",
    desc: "Terénní úpravy, hloubení základů, výkopy pro inženýrské sítě a bazény. Vlastní pásová i kolová technika.",
    items: ["Výkopy základů", "Inženýrské sítě", "Terénní úpravy", "Přesun zemin"],
  },
  {
    icon: Grid3x3,
    title: "Pokládka dlažby",
    desc: "Zámková i velkoformátová dlažba pro chodníky, parkoviště, příjezdy i veřejná prostranství.",
    items: ["Zámková dlažba", "Velkoformátová dlažba", "Chodníky a vjezdy", "Obrubníky"],
  },
  {
    icon: Droplets,
    title: "Odvodnění a drenáže",
    desc: "Komplexní řešení odvodu dešťové i spodní vody. Drenážní systémy pro stavby i pozemky.",
    items: ["Drenážní systémy", "Dešťová kanalizace", "Liniové odvodnění", "Vsakovací jímky"],
  },
  {
    icon: Wrench,
    title: "Demolice",
    desc: "Bezpečné bourací práce menšího i středního rozsahu s ekologickou likvidací stavebního odpadu.",
    items: ["Bourání staveb", "Odvoz suti", "Recyklace materiálu", "Příprava staveniště"],
  },
];

function Sluzby() {
  return (
    <>
      <PageHeader
        eyebrow="Služby"
        title="Co pro vás postavíme"
        description="Specializujeme se na stavební a zemní práce v Moravskoslezském kraji. Pracujeme s vlastní technikou a kompletním týmem."
      />

      <Section>
        <div className="grid gap-px bg-foreground/10 border border-foreground/10">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="bg-background p-8 lg:p-12 grid lg:grid-cols-12 gap-8 hover:bg-secondary transition-colors"
            >
              <div className="lg:col-span-1 flex lg:flex-col items-start gap-4">
                <span className="font-mono text-xs text-foreground/50">/ 0{i + 1}</span>
                <s.icon size={36} className="text-primary" strokeWidth={1.5} />
              </div>
              <div className="lg:col-span-6">
                <h2 className="text-3xl lg:text-4xl font-extrabold uppercase tracking-tighter mb-4">
                  {s.title}
                </h2>
                <p className="text-foreground/70 leading-relaxed max-w-xl">{s.desc}</p>
              </div>
              <ul className="lg:col-span-5 space-y-2 font-mono text-sm">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-3 items-baseline">
                    <span className="text-primary font-bold">→</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            to="/poptavka"
            className="bg-foreground text-background px-8 py-4 font-bold uppercase text-sm tracking-widest flex items-center gap-4 group hover:bg-accent"
          >
            Poptat službu
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/portfolio"
            className="border-2 border-foreground px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-foreground hover:text-background"
          >
            Naše realizace
          </Link>
        </div>
      </Section>
    </>
  );
}
