import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import farmerHands from "@/assets/farmer-hands.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bryx Trades Limited" },
      { name: "description", content: "Bryx Trades Limited is a Tanzanian-owned integrated agri-export company built on integrity, quality and partnership." },
      { property: "og:title", content: "About Bryx Trades" },
      { property: "og:description", content: "Vision, mission and values behind Tanzania's integrated agri-export partner." },
    ],
  }),
  component: About,
});

const values = [
  { k: "Partnership", v: "Strong partnerships with farmers and buyers, built on mutual respect and long-term goals." },
  { k: "Integrity", v: "Honesty and transparency in every dealing, fostering trust with clients and partners." },
  { k: "Quality", v: "Only the finest agricultural products, meeting local and international standards of excellence." },
  { k: "Innovation", v: "Continuous improvement of processes and technology to stay ahead of market trends." },
  { k: "Customer Focused", v: "Listening, adapting and delivering — earning trust through service and reliability." },
];

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1400px] px-6 pt-24 pb-16 lg:px-10">
        <p className="eyebrow rule-gold">About Bryx</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,6rem)]">
          A Tanzanian-owned agri-export company built for the
          <em className="italic text-primary/70"> long game.</em>
        </h1>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 pb-32 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-5">
          <img src={farmerHands} alt="Farmer holding soil" loading="lazy" className="rounded-sm w-full object-cover" width={1600} height={1000} />
        </div>
        <div className="md:col-span-7 space-y-8 text-lg text-muted-foreground">
          <p>
            Bryx Trades Limited is a Tanzanian-owned agri-export company specialising in premium
            agricultural products and cold chain solutions. We process and export high-quality
            fresh fruits, oil seeds, legumes and pulses to international markets.
          </p>
          <p>
            Our integrated supply chain enables full control — from farm-level sourcing to
            processing, packaging, cold storage and export logistics — ensuring freshness,
            consistency and compliance with global quality standards.
          </p>
          <p>
            We work closely with local farmers and suppliers, promoting sustainable agriculture,
            fair trade and long-term partnerships. At Bryx Trades Limited, we are committed to
            delivering reliable supply, premium quality and lasting value to our global clients.
          </p>
          <p className="text-foreground">
            Led by Managing Director <span className="font-display italic">George Cosmas</span>,
            our team combines deep farming networks with export-grade discipline.
          </p>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-28 md:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow text-accent">Vision</p>
            <h2 className="mt-6 text-4xl md:text-5xl">
              To be the preferred global partner for
              <em className="italic text-gold"> premium Tanzanian</em> agri-export solutions —
              recognised for integrity, innovation and an unwavering dedication to quality.
            </h2>
          </div>
          <div>
            <p className="eyebrow text-accent">Mission</p>
            <ul className="mt-6 space-y-6 text-primary-foreground/85">
              {[
                "Be a leading provider of high-quality Tanzanian agricultural products to the global market.",
                "Ensure the highest standards of freshness through state-of-the-art cold chain solutions.",
                "Support sustainable farming and empower local communities through fair partnerships.",
                "Create long-lasting value for our farmers, clients and stakeholders.",
                "Deliver reliability our buyers can plan their operations around.",
              ].map((m, i) => (
                <li key={i} className="flex gap-4 border-b border-primary-foreground/15 pb-6">
                  <span className="font-mono text-xs text-gold">0{i + 1}</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-32 lg:px-10">
        <p className="eyebrow">Core values</p>
        <h2 className="mt-4 text-4xl md:text-5xl">Five principles, every shipment.</h2>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-5">
          {values.map((v, i) => (
            <div key={v.k} className="bg-background p-8">
              <div className="font-mono text-xs text-accent">V/0{i + 1}</div>
              <h3 className="mt-6 font-display text-2xl">{v.k}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{v.v}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
