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

const WEB3FORMS_ACCESS_KEY = "681c4d3c-3303-4c7e-8eb0-5e7e41f8db99";

function Poptavka() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Nová poptávka z webu City4you.cz");
    formData.append("from_name", "City4you.cz");
    formData.append("to_email", "info@city4you.cz");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        form.reset();
      } else {
        setError("Poptávku se nepodařilo odeslat. Zavolejte nám prosím nebo napište e-mail.");
      }
    } catch {
      setError("Poptávku se nepodařilo odeslat. Zavolejte nám prosím nebo napište e-mail.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Poptávka"
        title="Nezávazná poptávka"
        description="Popište nám stručně, co potřebujete realizovat. Ozveme se vám do 48 hodin v pracovních dnech."
      />

      <Section className="grid md:grid-cols-[0.8fr_1.2fr] gap-10">
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-bold mb-3">
              / Co od vás potřebujeme
            </p>
            <ul className="space-y-3 text-sm opacity-80">
              <li>→ Lokalitu, kde se zakázka odehrává</li>
              <li>→ Druh požadované práce</li>
              <li>→ Předpokládaný termín realizace</li>
              <li>→ Stručný popis nebo projektovou dokumentaci</li>
            </ul>
          </div>

          <div className="border border-border p-6 space-y-3">
            <p className="text-xs uppercase tracking-widest text-primary font-bold">
              Přímý kontakt
            </p>
            <p className="text-sm">
              <strong>TEL:</strong> +420 736 140 001
            </p>
            <p className="text-sm">
              <strong>EMAIL:</strong> info@city4you.cz
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 border border-border p-6">
          {sent ? (
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-primary font-bold">
                / Odesláno
              </p>
              <h3 className="text-2xl font-bold">Děkujeme za poptávku</h3>
              <p className="opacity-80">
                Vaše poptávka byla odeslána. Ozveme se vám do 48 hodin v pracovních dnech.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="bg-primary text-primary-foreground font-bold px-6 py-3 uppercase tracking-widest text-sm hover:bg-background hover:text-foreground transition-colors"
              >
                Odeslat další poptávku
              </button>
            </div>
          ) : (
            <>
              <Field label="Jméno a příjmení" name="name" required />
              <Field label="Telefon" name="telefon" type="tel" required />
              <Field label="E-mail" name="email" type="email" required />
              <Field label="Lokalita realizace" name="lokalita" required />

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-primary">
                  Typ služby
                </label>
                <select
                  name="typ_sluzby"
                  required
                  className="w-full bg-accent border border-background/20 px-4 py-3 text-sm focus:outline-none focus:border-primary"
                >
                  <option value="">Vyberte službu</option>
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
                  required
                  rows={6}
                  className="w-full bg-accent border border-background/20 px-4 py-3 text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {error && (
                <p className="text-sm text-red-600 font-medium">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-primary text-primary-foreground font-bold py-4 uppercase tracking-widest text-sm hover:bg-background hover:text-foreground transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Odesílám..." : "Odeslat poptávku →"}
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
