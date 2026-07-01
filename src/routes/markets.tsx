import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import port from "@/assets/port.jpg";

export const Route = createFileRoute("/markets")({
  head: () => ({
    meta: [
      { title: "Global Markets — Bryx Trades Limited" },
      { name: "description", content: "Exporting Tanzanian agricultural commodities to the Middle East, Europe, Asia and across Africa." },
      { property: "og:title", content: "Global Markets — Bryx Trades" },
      { property: "og:description", content: "Serving importers, food processors and trading houses across four continents." },
      { property: "og:image", content: "https://cdn.gpteng.co/favicons/lovable-og.jpg" },
    ],
  }),
  component: Markets,
});

const regions = [
  { region: "Middle East", cities: ["Dubai", "Abu Dhabi", "Doha", "Riyadh"], note: "Sesame, pulses, avocados" },
  { region: "Europe", cities: ["Rotterdam", "London", "Hamburg"], note: "Hass avocado, chickpeas, soya" },
  { region: "Asia", cities: ["Shanghai", "Mumbai", "Karachi"], note: "Sesame, pigeon peas, soya" },
  { region: "Africa", cities: ["Nairobi", "Kigali", "Lusaka"], note: "Regional distribution" },
];

function Markets() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <img src={port} alt="Cargo port at dusk" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/70 to-emerald-deep/40" />
        <div className="relative mx-auto max-w-[1400px] px-6 pt-32 pb-24 lg:px-10">
          <p className="eyebrow text-gold">Global Markets</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,6rem)] text-cream">
            From Dar es Salaam <em className="italic text-gold">to the world.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-cream/80">
            A geographically diversified buyer base across four continents — importers,
            wholesalers, food processors and trading houses.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {regions.map((r, i) => (
            <div key={r.region} className="bg-background p-10 md:p-14">
              <div className="flex items-baseline justify-between">
                <div className="font-mono text-xs text-accent">R/0{i + 1}</div>
                <div className="eyebrow">Destination</div>
              </div>
              <h3 className="mt-6 font-display text-4xl md:text-5xl">{r.region}</h3>
              <div className="mt-8 flex flex-wrap gap-2">
                {r.cities.map((c) => (
                  <span key={c} className="rounded-sm border border-border px-3 py-1.5 text-xs font-mono">
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-sm text-muted-foreground">{r.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-32 lg:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow rule-gold">Buyer segments</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Who we serve.</h2>
          </div>
          <div className="md:col-span-7 grid gap-4 sm:grid-cols-2">
            {[
              "Food manufacturers",
              "Wholesale importers",
              "Trading houses",
              "Distributors",
              "Food processors",
              "Retail supply chains",
            ].map((s, i) => (
              <div key={s} className="border-t border-border pt-4">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <div className="mt-2 font-display text-2xl">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10">
          <p className="eyebrow text-accent">How we engage</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-cream">A five-step buyer journey.</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {[
              "Inquiry & specifications",
              "Price confirmation",
              "Quality inspection",
              "Documentation & shipment",
              "Delivery & after-sales",
            ].map((s, i) => (
              <div key={s} className="border-t-2 border-gold pt-5">
                <div className="font-mono text-xs text-gold">STEP 0{i + 1}</div>
                <div className="mt-3 font-display text-xl text-cream">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
