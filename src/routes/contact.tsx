import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bryx Trades Limited" },
      { name: "description", content: "Request a quote, discuss specifications, or start a partnership with Bryx Trades in Dar es Salaam." },
      { property: "og:title", content: "Contact — Bryx Trades" },
      { property: "og:description", content: "Reach the Bryx Trades team in Dar es Salaam." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 pt-24 pb-16 lg:px-10">
        <p className="eyebrow rule-gold">Contact</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,6rem)]">
          Let's talk about your
          <em className="italic text-primary/70"> next container.</em>
        </h1>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 pb-32 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-5 space-y-10">
          <div>
            <p className="eyebrow">Headquarters</p>
            <div className="mt-4 flex items-start gap-4">
              <MapPin className="text-accent mt-1" size={20} />
              <div>
                <div className="font-display text-2xl">Dar es Salaam</div>
                <div className="text-sm text-muted-foreground">Tanzania, East Africa</div>
              </div>
            </div>
          </div>
          <div>
            <p className="eyebrow">Email</p>
            <div className="mt-4 flex items-start gap-4">
              <Mail className="text-accent mt-1" size={20} />
              <div className="space-y-1">
                <a href="mailto:info@bryxtrades.co.tz" className="block font-display text-xl underline underline-offset-4 decoration-accent">info@bryxtrades.co.tz</a>
                <a href="mailto:md@bryxtrades.co.tz" className="block text-sm text-muted-foreground">md@bryxtrades.co.tz (George Cosmas, MD)</a>
              </div>
            </div>
          </div>
          <div>
            <p className="eyebrow">Phone</p>
            <div className="mt-4 flex items-start gap-4">
              <Phone className="text-accent mt-1" size={20} />
              <div className="font-display text-xl">+255 000 000 000</div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="eyebrow">Credentials</p>
            <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
              {["TIN Certified", "Registered Co.", "HACCP", "GAP", "GMP"].map((c) => (
                <span key={c} className="rounded-sm border border-border px-3 py-1.5">{c}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-6 rounded-sm border border-border bg-card p-8 md:p-12"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Country" name="country" />
            </div>
            <Field label="Product interest" name="product" placeholder="Hass avocados, white sesame, mung beans…" />
            <Field label="Estimated volume" name="volume" placeholder="e.g. 1 x 20ft container / month" />
            <div>
              <label className="eyebrow">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-3 w-full resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
            >
              {sent ? "Thanks — we'll be in touch" : "Send inquiry"}
              <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow">{label}{required && <span className="text-accent"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
      />
    </div>
  );
}
