import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-materials.jpg";

export function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutImage}
                alt="Professional tile installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl flex items-center justify-center shadow-lg hidden md:flex">
              <div className="text-center text-white">
                <div className="text-3xl font-bold">PNW</div>
                <div className="text-sm">Wholesale</div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
              Trade supply
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Built for installers who live on schedule and spec
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Streamline Essentials is a Portland-area wholesale supplier focused on tile substrates, waterproofing, and
              job-site essentials for licensed contractors and distributors. We prioritize consistent inventory, technical
              clarity, and trade terms that protect your margins — not retail packaging or showroom markup.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/about">About our operation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
