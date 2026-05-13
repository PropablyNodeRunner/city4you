import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/Section";
import projDlazba from "@/assets/real-project-1.jpg";
import projVykop from "@/assets/real-project-2.jpg";
import projDrenaz from "@/assets/real-project-3.jpg";
import projTrat from "@/assets/real-project-4.jpg";
import projNamesti from "@/assets/real-project-5.jpg";
import projBazen from "@/assets/real-project-6.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — City4you s.r.o." },
      {
        name: "description",
        content:
          "Realizované zakázky City4you s.r.o. v Moravskoslezském kraji — zemní práce, pokládka dlažby, odvodnění, demolice.",
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    img: projTrat,
    title: "Oprava trati v úseku Krnov – Skrochovice",
    cat: "Železniční stavby",
    year: "2024",
    desc: "Zemní práce a úpravy spodku trati v rámci celkové opravy úseku.",
  },
  {
    img: projNamesti,
    title: "Realizace dlažeb — Nové Lauby Ostrava",
    cat: "Veřejné prostranství",
    year: "2024",
    desc: "Pokládka velkoformátové dlažby na nově revitalizovaném prostranství.",
  },
  {
    img: projVykop,
    title: "Zemní a výkopové práce — LF Ostrava-Vítkovice",
    cat: "Veřejná zakázka",
    year: "2024",
    desc: "Výkopy a příprava základů v areálu Lékařské fakulty.",
  },
  {
    img: projDlazba,
    title: "Zemní práce a pokládka dlažby",
    cat: "Rezidenční",
    year: "2024",
    desc: "Komplexní úprava příjezdové cesty a okolí rodinného domu.",
  },
  {
    img: projBazen,
    title: "Dlažba a betonování lému bazénu",
    cat: "Soukromý projekt",
    year: "2023",
    desc: "Betonáž a pokládka kamenné dlažby okolo zahradního bazénu.",
  },
  {
    img: projDrenaz,
    title: "Odvodnění a drenáž",
    cat: "Průmyslový areál",
    year: "2023",
    desc: "Návrh a realizace drenážního systému průmyslové haly.",
  },
];

function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Realizované zakázky"
        description="Výběr z nedávných projektů, které jsme dokončili pro municipality, průmyslové i soukromé investory."
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article key={p.title} className="group">
              <div className="w-full aspect-[4/3] mb-6 overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={608}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start gap-3 mb-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  {p.cat}
                </span>
                <span className="font-mono text-[10px] border border-foreground/20 px-2 py-1">
                  {p.year}
                </span>
              </div>
              <h3 className="font-bold uppercase tracking-tight leading-snug mb-2">{p.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
