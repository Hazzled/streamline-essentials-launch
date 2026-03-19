import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Seo, getSiteBaseUrl, toAbsoluteUrl } from "@/components/Seo";
import { cn } from "@/lib/utils";

const faq = [
  {
    id: "where-to-buy",
    q: "Where can I buy tile backer board in Portland?",
    a: "Streamline Essentials is a Portland-based B2B supplier specializing in professional-grade tile backer board and tile installation substrates. We serve licensed tile contractors and construction firms in the Portland metro area and across the Pacific Northwest, offering trade pricing and consistent local stock.",
  },
  {
    id: "trade-pricing",
    q: "Do you offer contractor accounts and trade pricing?",
    a: "Yes. We're a B2B-only supplier — our pricing is built around trade volume, not retail margins. Licensed tile contractors and construction firms can set up a contractor account to access current pricing, stock availability, and streamlined ordering. Contact us to get started.",
  },
  {
    id: "wet-areas",
    q: "What's the best backer board for wet area tile installations?",
    a: "For wet area tile installations — showers, wet rooms, and moisture-exposed floors — cement-based backer board is the professional standard. It provides the dimensional stability, compressive strength, and moisture resistance needed for long-term tile performance. Our professional-grade product is specifically rated for wet area and commercial applications.",
  },
  {
    id: "service-area",
    q: "What areas do you serve beyond Portland?",
    a: "We're based in the Portland metro area and currently serve contractors across the Pacific Northwest, including the greater Portland region, Salem, and Vancouver, WA. We have the capacity for regional scaling — contact us to discuss logistics for projects outside the immediate Portland area.",
  },
  {
    id: "homeowners",
    q: "Do you sell to homeowners or only to contractors?",
    a: "Streamline Essentials is a B2B supplier — we work exclusively with licensed tile contractors, general construction firms, and commercial developers. If you're a homeowner looking for a tile installer who sources quality materials, we'd be happy to refer you to contractors in our network.",
  },
  {
    id: "spec-sheets",
    q: "Can I get product spec sheets?",
    a: "Yes. We provide full technical spec sheets, including thickness tolerances, compressive strength ratings, application guidance, and compatibility with waterproofing systems. Request spec documentation and we’ll send it over.",
  },
];

const areas = [
  { city: "Portland", state: "Oregon", note: "Primary" },
  { city: "Vancouver", state: "Washington" },
  { city: "Beaverton", state: "Oregon" },
  { city: "Hillsboro", state: "Oregon" },
  { city: "Salem", state: "Oregon" },
  { city: "Tigard", state: "Oregon" },
  { city: "Lake Oswego", state: "Oregon" },
  { city: "Gresham", state: "Oregon" },
];

export default function TileBackerBoardPortland() {
  const siteBaseUrl = getSiteBaseUrl();
  const logoUrl = toAbsoluteUrl("/streamline-essentials-logo.png", siteBaseUrl);
  const pagePath = "/tile-backer-board-portland";
  const pageUrl = siteBaseUrl ? `${siteBaseUrl}${pagePath}` : undefined;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Streamline Essentials",
    description:
      "B2B tile backer board and tile installation substrate supplier serving Portland, Oregon and the Pacific Northwest.",
    url: siteBaseUrl ?? undefined,
    telephone: "+1-503-482-8395",
    email: "sales@streamlineessentials.net",
    logo: logoUrl,
    image: logoUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Portland",
      addressRegion: "OR",
      addressCountry: "US",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tile Backer Board & Installation Substrates",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Professional-Grade Tile Backer Board",
            description:
              "Private label cement backer board for wet area tile installations, floor builds, wall systems, and commercial tile installation.",
          },
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Seo
        title="Tile Backer Board Supplier Portland, OR | Trade Pricing for Contractors | Streamline Essentials"
        description="Portland's B2B tile backer board supplier. Professional-grade cement board and tile installation substrates at trade pricing — consistent stock, no retail markup. Serving tile contractors across the Pacific Northwest."
        canonicalPath={pagePath}
        jsonLd={[businessJsonLd, faqJsonLd]}
      />

      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-14 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Portland, Oregon · B2B Supplier
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Tile Backer Board for <span className="text-primary">Portland</span> Contractors
            </h1>
            <p className="mt-5 text-slate-300 text-lg max-w-2xl">
              Professional-grade tile installation substrates at trade pricing. No retail markup, no
              runaround — just consistent stock built for the job site.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" className="gap-2">
                <a href="#trade-pricing">Request trade pricing</a>
              </Button>
              <Button asChild variant="heroOutline">
                <a href="#product">View product specs</a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              {[
                { top: "B2B", bottom: "Contractors only" },
                { top: "PDX", bottom: "Portland-based" },
                { top: "PNW", bottom: "Regional coverage" },
              ].map((s) => (
                <div key={s.top} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="text-2xl md:text-3xl font-extrabold text-white leading-none">
                    {s.top}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-white/60">
                    {s.bottom}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white font-semibold text-sm uppercase tracking-wider">
            <span>Trade pricing for licensed contractors</span>
            <span className="h-1 w-1 rounded-full bg-white/60" />
            <span>Consistent stock — no back-order surprises</span>
            <span className="h-1 w-1 rounded-full bg-white/60" />
            <span>No retail showroom overhead</span>
            <span className="h-1 w-1 rounded-full bg-white/60" />
            <span>Pacific Northwest distribution</span>
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            What we supply
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Tile Backer Board &amp; Installation Substrates
          </h2>
          <p className="text-slate-600 max-w-2xl">
            We focus on one product category so we can do it better than anyone else in the region.
            No generalist catalog. No guesswork on availability.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="md:col-span-2 border-0 shadow-card overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-slate-900 text-white p-8 md:p-10">
                    <span className="inline-flex text-xs font-semibold uppercase tracking-wider bg-primary text-white px-3 py-1 rounded-full">
                      Flagship product
                    </span>
                    <h3 className="mt-4 text-2xl md:text-3xl font-bold">
                      Professional-grade tile backer board
                    </h3>
                    <p className="mt-4 text-white/70 leading-relaxed">
                      Our private label cement backer board is engineered for professional tile
                      installation — wet areas, floor builds, wall systems, and commercial
                      applications. Consistent thickness, predictable handling, and the performance
                      specs your jobs demand.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button asChild variant="hero">
                        <a href="#trade-pricing">Request spec sheet</a>
                      </Button>
                      <Button asChild variant="heroOutline">
                        <Link to="/contact">Contact sales</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 bg-slate-50">
                    <ul className="space-y-2 text-slate-700">
                      {[
                        "Suitable for wet area and shower applications",
                        "Floor, wall, and countertop rated",
                        "Commercial and residential applications",
                        "Consistent batch-to-batch quality",
                        "Trade pricing for licensed contractors",
                        "Pacific Northwest stock availability",
                      ].map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {[
              {
                title: "Cement backer board",
                body: "Dense, dimensionally stable cement board for tile installations requiring a rigid, moisture-resistant substrate. Ideal for floors and high-traffic areas.",
                bullets: ["High compressive strength", "Floor and wall rated", "Standard sizing"],
              },
              {
                title: "Wet area substrates",
                body: "Backer board formulated for continuous moisture exposure — showers, wet rooms, and exterior-adjacent applications where performance matters.",
                bullets: ["Shower-ready specification", "Resistant to mold growth", "Pairs with waterproofing membranes"],
              },
            ].map((c) => (
              <Card key={c.title} className="border border-slate-200 shadow-sm">
                <CardContent className="p-7">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{c.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{c.body}</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Why contractors choose us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Built for the trades, not the showroom
          </h2>
          <p className="text-slate-600 max-w-2xl">
            Big-box stores and generalist distributors weren’t designed for how contractors
            actually work. We were.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Specialized product focus",
                body: "We supply tile installation substrates and nothing else. That means tighter quality control, better pricing leverage, and stock that doesn't get deprioritized.",
              },
              {
                num: "02",
                title: "Trade pricing, no retail overhead",
                body: "No showroom floor and no consumer model. Our cost structure is built around B2B volume — and we pass that along.",
              },
              {
                num: "03",
                title: "Consistent Portland-area stock",
                body: "We hold inventory locally. You won’t discover a last-minute back-order from a distant warehouse.",
              },
              {
                num: "04",
                title: "Digital-first procurement",
                body: "Streamlined ordering and account setup built for repeat purchasing and job scheduling.",
              },
              {
                num: "05",
                title: "Pacific Northwest distribution",
                body: "Based in Portland with regional capacity across the Pacific Northwest.",
              },
              {
                num: "06",
                title: "Contractor account setup",
                body: "Set up a trade account and get access to current pricing, stock levels, and ordering without the runaround.",
              },
            ].map((item) => (
              <Card key={item.num} className="border border-slate-200 shadow-sm hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-7">
                  <div className="text-4xl font-extrabold text-slate-200 leading-none">
                    {item.num}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-800">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content + trade pricing */}
      <section id="trade-pricing" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                Tile backer board in Portland
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                The right substrate makes or breaks the tile job
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Portland tile contractors know the substrate is where tile jobs succeed or fail.
                  Inconsistent thickness, poor moisture resistance, or variable density can mean
                  callbacks and failures. That’s why the choice of supplier matters as much as the
                  product spec.
                </p>
                <h3 className="text-xl font-bold text-slate-800 pt-4">
                  What to look for in a tile backer board supplier
                </h3>
                <p>
                  For professional tile installation in Portland, the right supplier should offer
                  consistent stock of cement backer board and tile installation substrates, reliable
                  availability for scheduling, and pricing structured for trade volume — not retail
                  margins. Streamline Essentials was built specifically to fill that gap in the
                  Portland market.
                </p>
                <h3 className="text-xl font-bold text-slate-800 pt-4">
                  Cement backer board vs. other tile substrates
                </h3>
                <p>
                  Cement backer board remains the industry standard substrate for most professional
                  tile installations — particularly wet areas, floors, and commercial applications —
                  because of its dimensional stability, compressive strength, and broad compatibility
                  with tile setting materials. Pairing cement board with a waterproofing membrane is
                  the professional standard for wet areas.
                </p>
                <h3 className="text-xl font-bold text-slate-800 pt-4">
                  Serving Portland tile contractors directly
                </h3>
                <p>
                  We work exclusively B2B — licensed tile contractors, general construction firms,
                  and commercial developers. If you’re a contractor looking for consistent stock and
                  trade pricing, reach out to set up an account and request current pricing and
                  availability.
                </p>
              </div>
            </div>

            <Card className={cn("border-0 shadow-card lg:sticky lg:top-28", "bg-slate-900 text-white")}>
              <CardContent className="p-7">
                <h3 className="text-xl font-bold">Get trade pricing</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Set up a contractor account or request a quote. We’ll be in touch within one
                  business day.
                </p>
                <div className="mt-5 space-y-3">
                  <Button asChild variant="hero" className="w-full">
                    <Link to="/contact">Contact sales</Link>
                  </Button>
                  <Button asChild variant="heroOutline" className="w-full">
                    <a href="mailto:sales@streamlineessentials.net?subject=Trade%20pricing%20request%20-%20Tile%20backer%20board">
                      Email for pricing
                    </a>
                  </Button>
                  <div className="pt-3 text-xs text-white/60">
                    Or call{" "}
                    <a className="underline hover:text-white" href="tel:+15034828395">
                      (503) 482-8395
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Frequently asked questions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Backer board questions, answered
          </h2>
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="rounded-2xl border border-slate-200 bg-white">
              {faq.map((item, idx) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className={cn("px-6", idx === faq.length - 1 ? "border-b-0" : undefined)}
                >
                  <AccordionTrigger className="py-5 text-left text-base md:text-lg font-semibold text-slate-800 hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-sm md:text-base leading-relaxed text-slate-600">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Service area
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Portland Metro &amp; Pacific Northwest
          </h2>
          <p className="text-white/70 max-w-2xl">
            Portland-based with the inventory and logistics capacity to serve contractors across the
            region.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {areas.map((a) => (
              <div key={a.city} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="font-bold uppercase tracking-wide">{a.city}</div>
                <div className="text-xs text-white/60 mt-1">
                  {a.state}
                  {a.note ? ` · ${a.note}` : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to set up a trade account?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Get access to trade pricing, current stock levels, and streamlined B2B ordering — built
            for Portland contractors.
          </p>
          <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
            <a href="#trade-pricing">Get trade pricing now</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

