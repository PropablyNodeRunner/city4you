import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/Section";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nás — City4you s.r.o." },
      {
        name: "description",
        content:
          "City4you s.r.o. — stavební firma se sídlem v Moravskoslezském kraji. 12 let zkušeností s vlastní technikou a vlastním týmem.",
      },
    ],
  }),
  component: ONas,
});

function ONas() {
  return (
    <>
      <PageHeader
        eyebrow="O nás"
        title="Stavíme s respektem k řemeslu"
        description="City4you s.r.o. je stavební firma se sídlem v Moravskoslezském kraji. Zaměřujeme se na zemní práce, pokládku dlažeb a kompletní stavební realizace."
      />

      <Section className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6 text-foreground/80 leading-relaxed text-lg">
          <p>
            Naše společnost působí v regionu severní Moravy více než dvanáct let. Za tu dobu jsme
            realizovali přes sto padesát zakázek pro municipality, průmyslové investory i soukromé
            klienty.
          </p>
          <p>
            Pracujeme s vlastním parkem stavební techniky a stálým týmem zkušených pracovníků.
            Díky tomu garantujeme termíny i kvalitu provedených prací — od výkopu po finální úpravy.
          </p>
          <p>
            Naším standardem je transparentní komunikace, dodržování technologických postupů a
            dokončování zakázek na čas. Spolupracujeme s ověřenými dodavateli materiálů a držíme
            standardy kvality podle českých norem.
          </p>
        </div>

        <aside className="lg:col-span-5 bg-foreground text-background p-10">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-8">
            / Firemní údaje
          </h3>
          <dl className="space-y-5 font-mono text-sm">
            {[
              ["Název", "City4you s.r.o."],
              ["IČO", "12345678"],
              ["DIČ", "CZ12345678"],
              ["Sídlo", "Ostrava, Moravskoslezský kraj"],
              ["Působnost", "MSK a okolí"],
              ["Založeno", "2013"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-background/10 pb-3">
                <dt className="opacity-50 uppercase text-[10px] tracking-widest">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>

          <Link
            to="/kontakt"
            className="mt-10 block bg-primary text-primary-foreground px-6 py-4 font-bold uppercase text-xs tracking-widest text-center hover:bg-background hover:text-foreground transition-colors"
          >
            Spojte se s námi →
          </Link>
        </aside>
      </Section>

      <Section className="bg-accent text-accent-foreground">
        <span className="font-mono text-primary text-xs uppercase tracking-[0.2em]">
          / Hodnoty
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mt-4 mb-12 uppercase">
          Na čem nám záleží
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { n: "01", t: "Termíny", d: "Dodržujeme dohodnuté harmonogramy a komunikujeme každý odkloněný den." },
            { n: "02", t: "Vlastní tým", d: "Žádné subdodavatelské řetězce — za výsledek ručíme my." },
            { n: "03", t: "Kvalita", d: "Pracujeme podle ČSN a používáme materiály od ověřených dodavatelů." },
          ].map((v) => (
            <div key={v.n} className="border-t-2 border-primary pt-6">
              <span className="font-mono text-xs text-primary">/ {v.n}</span>
              <h3 className="text-2xl font-extrabold tracking-tighter uppercase mt-3 mb-3">
                {v.t}
              </h3>
              <p className="text-sm opacity-70 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
