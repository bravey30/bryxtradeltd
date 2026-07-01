import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import avocados from "@/assets/avocados.jpg";
import sesame from "@/assets/sesame.jpg";
import pulses from "@/assets/pulses.jpg";
import soya from "@/assets/soya.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Bryx Trades Limited" },
      { name: "description", content: "Hass & Fuerte avocados, white/black/golden sesame, pigeon peas, chickpeas, mung beans and premium soya beans from Tanzania." },
      { property: "og:title", content: "Product Portfolio — Bryx Trades" },
      { property: "og:description", content: "Fresh produce, oil seeds and pulses — export-grade Tanzanian commodities." },
    ],
  }),
  component: Products,
});

const groups = [
  {
    tag: "01 — Fresh Produce",
    title: "Avocados",
    image: avocados,
    items: [
      { name: "Hass Avocado", note: "Premium export variety — high oil, rich flavour." },
      { name: "Fuerte Avocado", note: "Smooth-skinned, buttery texture, strong shelf life." },
    ],
  },
  {
    tag: "02 — Oil Seeds",
    title: "Sesame",
    image: sesame,
    items: [
      { name: "White Sesame", note: "Cleaned to 99.95%+ purity for food processors." },
      { name: "Black Sesame", note: "Bold flavour, popular for confectionery & oils." },
      { name: "Golden Sesame", note: "High oil content, prized in Middle Eastern markets." },
    ],
  },
  {
    tag: "03 — Pulses",
    title: "Legumes",
    image: pulses,
    items: [
      { name: "Pigeon Peas", note: "Protein-rich, sorted and machine-cleaned." },
      { name: "Chickpeas", note: "Kabuli & desi varieties, calibrated by size." },
      { name: "Mung Beans", note: "Bright green, uniform grade for export." },
    ],
  },
  {
    tag: "04 — Oil Beans",
    title: "Soya Beans",
    image: soya,
    items: [
      { name: "Premium Soya", note: "High oil content, HACCP processed, long shelf life." },
    ],
  },
];

function Products() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 pt-24 pb-20 lg:px-10">
        <p className="eyebrow rule-gold">Portfolio</p>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.5rem,6vw,6rem)]">
          Nine commodities. One
          <em className="italic text-primary/70"> integrated </em>
          supply chain.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Our portfolio spans fresh horticulture and dry commodities — enabling
          year-round supply and consolidated shipments to global buyers.
        </p>
      </section>

      {groups.map((g, i) => (
        <section
          key={g.title}
          className={`mx-auto max-w-[1400px] px-6 pb-24 lg:px-10 ${i === 0 ? "" : ""}`}
        >
          <div className={`grid gap-10 md:grid-cols-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="md:col-span-7">
              <img
                src={g.image}
                alt={g.title}
                loading="lazy"
                className="h-[420px] w-full rounded-sm object-cover md:h-[560px]"
              />
            </div>
            <div className="md:col-span-5 flex flex-col justify-center">
              <p className="eyebrow text-accent">{g.tag}</p>
              <h2 className="mt-4 text-5xl md:text-6xl">{g.title}</h2>
              <ul className="mt-10 space-y-6">
                {g.items.map((it, idx) => (
                  <li key={it.name} className="border-t border-border pt-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-2xl">{it.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{it.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between lg:px-10">
          <h2 className="max-w-2xl text-3xl md:text-4xl">
            Need volumes, specifications or a custom blend?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
          >
            Send an inquiry <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
