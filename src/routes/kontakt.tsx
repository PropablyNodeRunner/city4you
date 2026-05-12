import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import { PageHeader, Section } from "@/components/Section";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — City4you s.r.o." },
      {
        name: "description",
        content:
          "Kontakt na City4you s.r.o. — telefon, email a sídlo firmy v Moravskoslezském kraji.",
      },
    ],
  }),
  component: Kontakt,
});

const items = [
  { icon: Phone, label: "Telefon", value: "+420 777 000 000", href: "tel:+420777000000" },
  { icon: Mail, label: "Email", value: "info@city4you.cz", href: "mailto:info@city4you.cz" },
  { icon: MapPin, label: "Sídlo", value: "Ostrava, Moravskoslezský kraj" },
  { icon: Building2, label: "IČO", value: "12345678" },
];

function Kontakt() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Spojte se s námi"
        description="Rádi vám připravíme nezávaznou cenovou nabídku. Reagujeme do 48 hodin v pracovních dnech."
      />

      <Section className="grid lg:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
        {items.map((it) => {
          const Inner = (
            <>
              <it.icon size={28} className="text-primary mb-6" strokeWidth={1.5} />
              <div className="text-[10px] uppercase font-bold tracking-widest text-foreground/50 mb-2">
                {it.label}
              </div>
              <div className="text-2xl lg:text-3xl font-extrabold tracking-tighter">{it.value}</div>
            </>
          );
          return it.href ? (
            <a
              key={it.label}
              href={it.href}
              className="bg-background p-10 lg:p-14 hover:bg-secondary transition-colors"
            >
              {Inner}
            </a>
          ) : (
            <div key={it.label} className="bg-background p-10 lg:p-14">
              {Inner}
            </div>
          );
        })}
      </Section>

      <Section className="bg-foreground text-background">
        <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter uppercase mb-6">
          Připravený projekt?
        </h2>
        <p className="text-lg opacity-70 max-w-xl mb-10 leading-relaxed">
          Vyplňte nezávaznou poptávku a my vám do 48 hodin pošleme cenovou kalkulaci a návrh
          technického řešení.
        </p>
        <Link
          to="/poptavka"
          className="inline-flex bg-primary text-primary-foreground px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-background hover:text-foreground transition-colors"
        >
          Odeslat poptávku →
        </Link>
      </Section>
    </>
  );
}
