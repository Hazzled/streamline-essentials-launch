import { type FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Quote, Award, Users, DollarSign, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import aboutBathroom from "@/assets/about-bathroom.png";
import aboutKitchen from "@/assets/about-kitchen.png";
import { Seo } from "@/components/Seo";

const testimonials = [
  {
    id: 1,
    quote:
      "Stock is predictable and the spec packets are actually useful on commercial submittals. We stopped burning hours chasing back-ordered board from big-box distributors.",
    author: "Marcus T.",
    subtitle: "Commercial GC, Seattle",
  },
  {
    id: 2,
    quote:
      "Their crew knows wet-area assemblies. When we need membrane continuity details answered fast, we get a real answer — not a retail script.",
    author: "Elena V.",
    subtitle: "Tile contractor, Portland metro",
  },
];

const whyChooseItems = [
  {
    icon: Award,
    title: "Spec-grade line card",
    description:
      "Focused SKU mix: backer, membranes, and shower components chosen for code-aligned wet-area builds — not a scattershot retail shelf.",
  },
  {
    icon: Users,
    title: "Trade-first support",
    description:
      "We work with licensed contractors, builders, and distributors. Accounts get direct access to availability, docs, and pricing structured for volume.",
  },
  {
    icon: DollarSign,
    title: "Margins & terms",
    description:
      "Wholesale positioning without retail overhead passed through. Ask about trade terms after your application is approved.",
  },
];

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "You're on the list",
      description: "We’ll send spec updates and stock notices relevant to trade accounts.",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Seo
        title="About | Streamline Essentials"
        description="Pacific Northwest wholesale supplier of tile substrates and waterproofing for contractors and distributors. Portland-based inventory, spec support, trade terms."
        canonicalPath="/about"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 transition-all duration-700",
            visible ? "opacity-100" : "opacity-0"
          )}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={cn(
              "max-w-2xl transition-all duration-700 delay-150",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Streamline Essentials
            </h1>
            <p className="text-slate-300 text-lg">
              Wholesale waterproofing and tile substrates for crews that live on schedule, code, and margin.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding -mt-8 relative z-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <div
              className="animate-fade-in-up opacity-0 order-2 lg:order-1"
              style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
            >
              <p className="text-slate-600 leading-relaxed mb-6">
                Streamline Essentials supplies professional tile substrates, waterproofing, and related materials to
                licensed contractors, builders, and distributors across the Pacific Northwest. We are built for trade
                volume — consistent stock, clear documentation, and account support that respects how your crews work.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                From Essenti Board to membranes and shower-system components, we focus on a tight line card so you
                spend less time sourcing and more time installing. Contact us to open a trade account or coordinate a
                warehouse visit.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="gap-2">
                  Contact Us
                </Button>
              </Link>
            </div>
            <div
              className="animate-fade-in-up opacity-0 order-1 lg:order-2"
              style={{ animationDelay: "250ms", animationFillMode: "forwards" }}
            >
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={aboutBathroom}
                  alt="Bathroom with Streamline Essentials backer board and finished tile installation"
                  className="w-full h-[320px] md:h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Remodeling */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            Commercial &amp; residential installs
          </h2>
          <p
            className="text-slate-600 text-center max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            Our materials show up on production tile jobs — multi-family, hospitality, and high-end residential — where
            waterproofing and flat substrates have to be right the first time.
          </p>
          <div
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-card animate-fade-in-up opacity-0"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            <img
              src={aboutKitchen}
              alt="Modern kitchen and dining area with cabinetry and wood-look flooring"
              className="w-full h-[280px] md:h-[360px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding bg-slate-900">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            What trade partners say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${250 + i * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
                <p className="text-lg text-slate-300 leading-relaxed mb-6 relative z-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {t.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-white block">
                      – {t.author}
                    </span>
                    <span className="text-sm text-slate-400">{t.subtitle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Be the first to know */}
      <section className="section-padding bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div
            className="max-w-xl mx-auto text-center animate-fade-in-up opacity-0"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Trade updates
            </h2>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="bg-slate-50 border-slate-200"
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="bg-slate-50 border-slate-200"
                />
              </div>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-slate-50 border-slate-200"
              />
              <Button type="submit" variant="hero" className="gap-2 w-full sm:w-auto">
                <Send className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Streamline Essentials */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            Why Choose Streamline Essentials?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {whyChooseItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-up opacity-0 bg-white"
                  style={{
                    animationDelay: `${200 + i * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
