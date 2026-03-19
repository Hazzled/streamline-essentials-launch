import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const qaItems = [
  {
    id: "supply-homeowners-or-contractors",
    question: "Do you supply to individual homeowners or only contractors?",
    answer:
      "Streamline Essentials is a B2B supplier — we work primarily with licensed tile contractors, general construction firms, and commercial developers. If you're a contractor or construction professional in the Portland area, reach out and we'll set you up with trade pricing and account access.",
  },
  {
    id: "tile-backer-board-products",
    question: "What tile backer board products do you stock?",
    answer:
      "We stock professional-grade private label tile backer board suitable for wet area applications, floor builds, wall systems, and commercial tile installation. Our focus on a narrow product line means we maintain consistent inventory — no back-order surprises. Contact us for current spec sheets and pricing.",
  },
  {
    id: "trade-pricing-or-accounts",
    question: "Do you offer trade pricing or contractor accounts?",
    answer:
      "Yes — we're built for the trades. We offer trade pricing for licensed contractors and construction firms, with no retail showroom overhead passed on to you. Get in touch to set up a contractor account and discuss your project needs.",
  },
  {
    id: "service-areas",
    question: "What areas do you serve?",
    answer:
      "We're based in Portland, Oregon and currently serve the Portland metro area and broader Pacific Northwest region. We have the capacity to support regional scaling — contact us to discuss delivery or pickup options for your project location.",
  },
];

export function QASection() {
  return (
    <section className="section-padding bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Q&amp;A
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Answers to common questions
            </h2>
            <p className="mt-3 text-white/70">
              Quick details on supply, product availability, trade pricing, and service
              areas.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <Accordion type="single" collapsible className="divide-y divide-white/10">
              {qaItems.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="px-6">
                  <AccordionTrigger className="py-5 text-left text-base md:text-lg font-semibold text-white hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-sm md:text-base leading-relaxed text-white/70">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

