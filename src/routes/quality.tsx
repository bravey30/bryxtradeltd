import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Compliance — Bryx Trades Limited" },
      { name: "description", content: "GAP, HACCP, GMP, phytosanitary certification and full traceability across every Bryx shipment." },
      { property: "og:title", content: "Quality Assurance — Bryx Trades" },
      { property: "og:description", content: "Farm-level GAP, HACCP processing, and complete supply-chain traceability." },
    ],
  }),
  component: Quality,
});

const steps = [
  { n: "01", t: "Farm-level GAP", d: "Good Agricultural Practices applied at source with our farmer network." },
  { n: "02", t: "Aggregation", d: "Consolidation from cooperatives into our regional receiving points." },
  { n: "03", t: "Inspection", d: "Sorting, grading and quality inspection against buyer specifications." },
  { n: "04", t: "HACCP processing", d: "Food safety systems, GMP-compliant facilities, clean & controlled." },
  { n: "05", t: "Packaging", d: "Export packaging appropriate to sea/air freight and destination." },
  { n: "06", t: "Cold storage", d: "Temperature integrity from packhouse to container." },
  { n: "07", t: "Documentation", d: "Phytosanitary certificates, export docs, customs clearance." },
  { n: "08", t: "Shipping", d: "FOB or CIF, sea or air, tracked to the buyer's door." },
];

function Quality() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 pt-24 pb-20 lg:px-10">
        <p className="eyebrow rule-gold">Quality & Compliance</p>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.5rem,6vw,6rem)]">
          Every kilogram
          <em className="italic text-primary/70"> traceable </em>
          to the field it came from.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Traceability isn't paperwork — it's how we honour the trust of our buyers in
          Rotterdam, Dubai and Mumbai. Every shipment carries a documented lineage back
          to the smallholder cooperative that grew it.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-32 lg:px-10">
        <div className="grid gap-x-10 gap-y-6 md:grid-cols-4">
          {["GAP", "HACCP", "GMP", "Phytosanitary"].map((c) => (
            <div key={c} className="border-t-2 border-accent pt-4">
              <div className="font-display text-3xl">{c}</div>
              <div className="eyebrow mt-2">Certified system</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10">
          <p className="eyebrow text-accent">The eight-step chain</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-cream">Farm to port, without gaps.</h2>

          <div className="mt-16 grid gap-px bg-primary-foreground/15 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="bg-primary p-8">
                <div className="font-mono text-xs text-gold">{s.n}</div>
                <h3 className="mt-4 font-display text-xl text-cream">{s.t}</h3>
                <p className="mt-3 text-sm text-primary-foreground/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 py-32 md:grid-cols-2 lg:px-10">
        <div>
          <p className="eyebrow">Competitive advantages</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Why buyers choose Bryx.</h2>
        </div>
        <ul className="space-y-6">
          {[
            "Reliable, consistent supply across seasons",
            "Direct farmer sourcing — no middlemen",
            "Rigorous quality control at every stage",
            "Full export compliance & documentation",
            "Flexible FOB and CIF shipping arrangements",
            "Competitive pricing with transparent communication",
          ].map((a, i) => (
            <li key={a} className="flex gap-6 border-b border-border pb-5">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <span className="text-lg">{a}</span>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
