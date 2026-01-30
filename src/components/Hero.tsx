import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bathroom.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Modern luxury bathroom with marble tiles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tile Installation &<br />
            <span className="text-primary">Waterproofing Supplies</span>
            <br />in Portland, OR
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
            Let Us Make Your Home Better. Professional-grade materials for contractors and DIY enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="hero" size="lg" asChild>
              <Link to="/shop">Shop Products</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="/#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
