import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, Section } from "@/components/Section";

export const Route = createFileRoute("/poptavka")({
  head: () => ({
    meta: [
      { title: "Poptávka — City4you s.r.o." },
      {
        name: "description",
        content:
          "Nezávazná poptávka stavebních a zemních prací. Odpovídáme do 48 hodin.",
      },
    ],
  }),
  component: Poptavka,
});

function Poptavka() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Poptávka"
        title="Pošlete nám zadání"
        description="Vyplňte krátký formulář s popisem vaší zakázky. Reagujeme do 48 hodin v pracovních dnech."
      />

      <Section className="grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-4 space-y-8">
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">
              / Co od vás potřebujeme
            </h3>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex gap-3">
                <span className="font-mono text-primary">→</span>
                Lokalitu, kde se zakázka odehrává
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-primary">→</span>
                Druh požadované práce
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-primary">→</span>
                Předpokládaný termín realizace
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-primary">→</span>
                Stručný popis nebo projektovou dokumentaci
              </li>
            </ul>
          </div>
          <div className="border-t border-foreground/10 pt-6 font-mono text-sm space-y-2">
            <p>
              <span className="opacity-50">TEL: </span>
              <a href="tel:+420777000000" className="hover:text-primary">
                +420 777 000 000
              </a>
            </p>
            <p>
              <span className="opacity-50">EMAIL: </span>
              <a href="mailto:info@city4you.cz" className="hover:text-primary">
                info@city4you.cz
              </a>
            </p>
          </div>
        </aside>

        <form
          className="lg:col-span-8 bg-foreground text-background p-8 lg:p-12 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="py-16 text-center">
              <div className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-4">
                / Odesláno
              </div>
              <h3 className="text-3xl font-extrabold tracking-tighter uppercase mb-4">
                Děkujeme za poptávku
              </h3>
              <p className="opacity-70 max-w-md mx-auto">
                Ozveme se vám do 48 hodin v pracovních dnech.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Jméno a příjmení" name="name" required />
                <Field label="Telefon" name="phone" type="tel" required />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Email" name="email" type="email" required />
                <Field label="Lokalita" name="location" required />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-primary">
                  Typ služby
                </label>
                <select
                  name="service"
                  className="w-full bg-accent border border-background/20 px-4 py-3 text-sm focus:outline-none focus:border-primary"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Vyberte službu
                  </option>
                  <option>Stavební práce</option>
                  <option>Zemní a výkopové práce</option>
                  <option>Pokládka dlažby</option>
                  <option>Odvodnění a drenáže</option>
                  <option>Demolice</option>
                  <option>Jiné</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-primary">
                  Popis zakázky
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full bg-accent border border-background/20 px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold py-4 uppercase tracking-widest text-sm hover:bg-background hover:text-foreground transition-colors"
              >
                Odeslat poptávku →
              </button>
              <p className="text-[10px] opacity-50 font-mono uppercase tracking-widest">
                Odesláním souhlasíte se zpracováním osobních údajů pro účely poptávky.
              </p>
            </>
          )}
        </form>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase font-bold tracking-widest text-primary">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-accent border border-background/20 px-4 py-3 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}
