import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Nová poptávka z webu City4you.cz");
    formData.append("from_name", "City4you.cz");

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
        setError(
          "Poptávku se nepodařilo odeslat. Zavolejte nám prosím nebo napište e-mail.",
        );
      }
    } catch {
      setError(
        "Poptávku se nepodařilo odeslat. Zavolejte nám prosím nebo napište e-mail.",
      );
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

        <form
          onSubmit={handleSubmit}
          className="bg-[#111111] border border-border p-6 md:p-8 space-y-6"
        >
          {sent ? (
            <div className="space-y-5 text-white">
              <p className="text-xs uppercase tracking-widest text-primary font-bold">
                / Odesláno
              </p>
              <h3 className="text-2xl font-bold">Děkujeme za poptávku</h3>
              <p className="text-white/75">
                Vaše poptávka byla odeslána. Ozveme se vám do 48 hodin v
                pracovních dnech.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setError("");
                }}
                className="w-full bg-primary text-primary-foreground font-bold py-4 uppercase tracking-widest text-sm hover:bg-background hover:text-foreground transition-colors"
              >
                Odeslat další poptávku →
              </button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Jméno a příjmení" name="name" required />
                <Field label="Telefon" name="telefon" type="tel" required />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Email" name="email" type="email" required />
                <Field label="Lokalita" name="lokalita" required />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-primary">
                  Typ služby
                </label>
                <select
                  name="typ_sluzby"
                  required
                  className="w-full bg-[#1b1b1d] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary"
                >
                  <option value="">Vyberte službu</option>
                  <option value="Stavební práce">Stavební práce</option>
                  <option value="Zemní a výkopové práce">
                    Zemní a výkopové práce
                  </option>
                  <option value="Pokládka dlažby">Pokládka dlažby</option>
                  <option value="Odvodnění a drenáže">
                    Odvodnění a drenáže
                  </option>
                  <option value="Demolice">Demolice</option>
                  <option value="Jiné">Jiné</option>
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
                  className="w-full bg-[#1b1b1d] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
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
                <p className="text-sm text-red-400 font-medium">{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-primary text-primary-foreground font-bold py-4 uppercase tracking-widest text-sm hover:bg-background hover:text-foreground transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Odesílám..." : "Odeslat poptávku →"}
              </button>

              <p className="text-[10px] opacity-50 font-mono uppercase tracking-widest text-white">
                Odesláním souhlasíte se zpracováním osobních údajů pro účely
                poptávky.
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
        className="w-full bg-[#1b1b1d] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
      />
    </div>
  );
}
