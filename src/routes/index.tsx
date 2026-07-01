import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Leaf, Ship, ShieldCheck, Sprout } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import heroFarm from "@/assets/hero-farm.jpg";
import avocados from "@/assets/avocados.jpg";
import sesame from "@/assets/sesame.jpg";
import pulses from "@/assets/pulses.jpg";
import farmerHands from "@/assets/farmer-hands.jpg";
import port from "@/assets/port.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={heroFarm}
          alt="Tanzanian avocado plantation at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/70 via-emerald-deep/40 to-emerald-deep/90" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-[1400px] flex-col justify-between px-6 pt-20 pb-14 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-16 bg-gold" />
            <span className="eyebrow text-cream">01 — Tanzanian Agri-Export</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.9] text-cream">
              From <em className="italic text-gold">fertile</em><br />
              Tanzanian soil<br />
              to the world's tables.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-cream/80">
              Bryx Trades is an integrated agri-export company — sourcing, processing
              and shipping premium avocados, sesame, pulses and soya beans from farm
              to port under a single, accountable partner.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 rounded-sm bg-gold px-6 py-4 text-sm font-medium uppercase tracking-widest text-emerald-deep transition hover:bg-gold-soft"
              >
                View products
                <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-sm border border-cream/40 px-6 py-4 text-sm font-medium uppercase tracking-widest text-cream transition hover:bg-cream/10"
              >
                Partner with us
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-8 border-t border-cream/20 pt-6 text-cream/80 md:grid-cols-4">
            {[
              ["04", "Continents served"],
              ["09", "Export commodities"],
              ["100%", "Traceable supply chain"],
              ["FOB · CIF", "Shipping terms"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-4xl text-cream">{k}</div>
                <div className="eyebrow mt-2 text-cream/60">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow rule-gold">Our Approach</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-[clamp(2rem,4vw,3.75rem)]">
              We don't just trade. We take
              <em className="italic text-primary/70"> ownership </em>
              of every kilogram — from the farmer's hands to the buyer's container.
            </h2>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              Every shipment carries a story of Good Agricultural Practices, HACCP-controlled
              processing, and cold-chain logistics engineered for the Middle East, Europe and Asia.
              This is what integrated export looks like.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-border md:grid-cols-4">
          {[
            { icon: Sprout, title: "Direct sourcing", body: "Farmer-first partnerships across Tanzania's most fertile regions." },
            { icon: ShieldCheck, title: "HACCP quality", body: "Sorting, grading and inspection under international food-safety systems." },
            { icon: Leaf, title: "Cold chain", body: "Temperature integrity from packhouse to port for fresh produce." },
            { icon: Ship, title: "Global logistics", body: "FOB, CIF, sea and air freight, customs — handled end-to-end." },
          ].map((p) => (
            <div key={p.title} className="bg-background p-10">
              <p.icon className="text-accent" size={28} strokeWidth={1.25} />
              <h3 className="mt-8 font-display text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-[1400px] px-6 py-32 lg:px-10">
        <div className="flex items-end justify-between gap-8 pb-16">
          <div>
            <p className="eyebrow">02 — Portfolio</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.75rem)]">Featured harvest</h2>
          </div>
          <Link to="/products" className="hidden md:inline-flex items-center gap-2 text-sm underline underline-offset-8 decoration-accent decoration-2 hover:text-primary">
            All products <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <FeatureCard
            className="md:col-span-7 md:row-span-2"
            image={avocados}
            index="A / 01"
            title="Hass & Fuerte Avocados"
            desc="Premium export varieties, harvested at optimal maturity and shipped in temperature-controlled containers."
            tall
          />
          <FeatureCard
            className="md:col-span-5"
            image={sesame}
            index="A / 02"
            title="Sesame — White · Black · Golden"
            desc="High-oil-content seeds for food processors and manufacturers."
          />
          <FeatureCard
            className="md:col-span-5"
            image={pulses}
            index="A / 03"
            title="Pigeon Peas · Chickpeas · Mung Beans"
            desc="Protein-rich pulses, sorted and graded to buyer specifications."
          />
        </div>
      </section>

      {/* FARMER STORY */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1400px] gap-0 md:grid-cols-2">
          <img
            src={farmerHands}
            alt="A Tanzanian farmer holds soil and a seedling"
            width={1600}
            height={1000}
            loading="lazy"
            className="h-full min-h-[420px] w-full object-cover"
          />
          <div className="flex flex-col justify-center p-12 md:p-20">
            <p className="eyebrow text-accent">03 — Rooted in Tanzania</p>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Every export begins with a<br />
              <em className="italic text-gold">handshake in the field.</em>
            </h2>
            <p className="mt-6 max-w-md text-primary-foreground/75">
              We work directly with smallholder cooperatives across Tanzania, paying
              fairly and investing in the practices that turn good soil into
              internationally recognised produce.
            </p>
            <Link to="/sustainability" className="mt-10 inline-flex w-fit items-center gap-2 border-b border-gold pb-1 text-sm uppercase tracking-widest text-gold">
              Our impact <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section className="mx-auto max-w-[1400px] px-6 py-32 lg:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">04 — Reach</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Shipping to four continents.</h2>
            <p className="mt-6 text-muted-foreground">
              From Dar es Salaam to Rotterdam, Jebel Ali, Mundra and Shanghai —
              our commodities move under FOB and CIF terms tailored to each buyer.
            </p>
            <Link to="/markets" className="mt-8 inline-flex items-center gap-2 text-sm underline underline-offset-8 decoration-accent decoration-2">
              Explore markets <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="md:col-span-7">
            <img
              src={port}
              alt="Cargo ship departing Dar es Salaam port at dusk"
              width={1920}
              height={1080}
              loading="lazy"
              className="w-full rounded-sm object-cover"
            />
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
              {["Middle East", "Europe", "Asia", "Africa"].map((r) => (
                <div key={r} className="border-t border-border pt-3">
                  <div className="font-mono text-xs text-muted-foreground">Region</div>
                  <div className="font-display text-lg">{r}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-8 px-6 py-24 md:flex-row md:items-center md:justify-between lg:px-10">
          <h2 className="max-w-2xl text-4xl md:text-5xl">
            Let's put your next container on the water.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-sm bg-primary px-8 py-5 text-sm font-medium uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
          >
            Request a quote <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function FeatureCard({
  image, index, title, desc, className = "", tall,
}: { image: string; index: string; title: string; desc: string; className?: string; tall?: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-sm bg-primary ${className}`}>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className={`w-full object-cover transition duration-700 group-hover:scale-105 ${tall ? "h-[560px] md:h-full" : "h-[280px]"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="font-mono text-xs text-gold">{index}</div>
        <h3 className="mt-2 font-display text-2xl text-cream md:text-3xl">{title}</h3>
        <p className="mt-3 max-w-md text-sm text-cream/75">{desc}</p>
      </div>
    </div>
  );
}
