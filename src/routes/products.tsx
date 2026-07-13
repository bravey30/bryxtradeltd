import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Bryx Trades Limited" },
      { name: "description", content: "Hass & Fuerte avocados, white/black/golden sesame, pigeon peas, chickpeas, mung beans, coffee and premium soya beans from Tanzania." },
      { property: "og:title", content: "Product Portfolio — Bryx Trades" },
      { property: "og:description", content: "Fresh produce, oil seeds, pulses and coffee — export-grade Tanzanian commodities." },
    ],
  }),
  component: Products,
});

const groups = [
  {
    title: "Fresh Produce",
    caption: "Creamy, rich-flavoured export varieties grown for the international market.",
    items: [
      { name: "Hass Avocado", image: "/avocado2.jpg" },
      { name: "Fuerte Avocado", image: "/puertu.jpg" },
    ],
  },
  {
    title: "Nuts and Seeds",
    caption: "High oil content, long shelf life — trusted by food processors and manufacturers.",
    items: [
      { name: "Cashew Nuts", image: "/chashewnuts.jpg" },
      { name: "Groundnuts", image: "/peanuts.png" },
      { name: "Sesame Seeds", image: "/sesame.png" },
      { name: "Sunflower Seeds", image: "/sunflower.png" },
      { name: "Cashew Kernel", image: "/chashew-kernel.jpg" },
    ],
  },
  {
    title: "Pulses and Cereals",
    caption: "High-protein legumes processed to strict global standards and buyer specifications.",
    items: [
      { name: "Chickpeas", image: "/chick-peas.jpg" },
      { name: "Pigeon Peas", image: "/pigeon-peas.webp" },
      { name: "Mung Beans", image: "/pexels-ganajp-18358654.jpg" },
      { name: "Soya Beans", image: "/soya-beans.webp" },
    ],
  },
  {
    title: "Coffee",
    caption: "Sun-dried and washed beans from Tanzania's highland estates, graded for specialty and commercial markets.",
    items: [
      { name: "Arabica Coffee", image: null },
      { name: "Robusta Coffee", image: null },
      { name: "Green Coffee Beans", image: null },
    ],
  },
];

const swatches = [
  "bg-accent/15",
  "bg-primary/10",
  "bg-secondary",
  "bg-muted",
];

function Products() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 pt-24 pb-20 lg:px-10">
        <p className="eyebrow rule-gold">Portfolio</p>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.5rem,6vw,6rem)]">
          Ten commodities. One
          <em className="italic text-primary/70"> integrated </em>
          supply chain.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Our portfolio spans fresh horticulture and dry commodities — enabling
          year-round supply and consolidated shipments to global buyers.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-10">
        {groups.map((g) => (
          <div key={g.title} className="mb-16 last:mb-0">
            <h2 className="text-3xl md:text-4xl">{g.title}</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{g.caption}</p>
            <div className="mt-8 grid grid-cols-3 gap-x-8 gap-y-10 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
              {g.items.map((it, idx) => (
                <div key={it.name} className="flex flex-col items-center text-center">
                  {it.image ? (
                    <img
                      src={it.image}
                      alt={it.name}
                      loading="lazy"
                      className="aspect-[4/3] w-full max-w-[160px] rounded-sm object-cover"
                    />
                  ) : (
                    <div
                      className={`flex aspect-[4/3] w-full max-w-[160px] items-center justify-center rounded-sm ${swatches[idx % swatches.length]}`}
                    >
                      <span className="font-display text-3xl text-primary/40">
                        {it.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="mt-4 text-base text-accent">{it.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

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
