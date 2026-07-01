import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import farmerHands from "@/assets/farmer-hands.jpg";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — Bryx Trades Limited" },
      { name: "description", content: "Fair trade partnerships with Tanzanian smallholder farmers, sustainable practices and long-term community impact." },
      { property: "og:title", content: "Sustainability — Bryx Trades" },
      { property: "og:description", content: "Empowering farmers, protecting land, and building a resilient export supply chain." },
    ],
  }),
  component: Sustainability,
});

function Sustainability() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 pt-24 pb-16 lg:px-10">
        <p className="eyebrow rule-gold">Sustainability</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,6rem)]">
          Good exports start with
          <em className="italic text-primary/70"> good ground.</em>
        </h1>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 pb-32 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-5">
          <img src={farmerHands} alt="Farmer hands with soil" loading="lazy" className="rounded-sm w-full object-cover" width={1600} height={1000} />
        </div>
        <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground">
          <p>
            Our supply chain begins with Tanzanian smallholders whose livelihoods depend on
            fair pricing, reliable off-take and access to global markets. That relationship
            is the single most important input to what we ship.
          </p>
          <p>
            We invest in Good Agricultural Practices, farmer training and long-term contracts —
            not spot buying. It's slower, but it produces better commodities and stronger
            communities.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-border md:grid-cols-3">
          {[
            { k: "Farmer-first", d: "Direct partnerships and fair pricing — the entire chain begins here." },
            { k: "Sustainable practices", d: "Good Agricultural Practices reduce inputs and protect the land." },
            { k: "Long-term thinking", d: "Multi-season contracts over transactional spot buying." },
          ].map((p) => (
            <div key={p.k} className="bg-background p-10">
              <h3 className="font-display text-3xl">{p.k}</h3>
              <p className="mt-4 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-32 text-center lg:px-10">
        <p className="eyebrow">Our promise</p>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl md:text-5xl">
          When Tanzanian produce becomes known worldwide for excellence,
          <em className="italic text-primary/70"> everyone in the chain rises with it.</em>
        </h2>
      </section>
    </SiteLayout>
  );
}
