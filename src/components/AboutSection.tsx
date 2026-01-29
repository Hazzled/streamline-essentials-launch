import { Award, Shield, MessageCircle, Leaf } from "lucide-react";
import aboutImage from "@/assets/about-materials.jpg";

const features = [
  { icon: Award, label: "High-Quality" },
  { icon: Shield, label: "Reliable" },
  { icon: MessageCircle, label: "Expert Advice" },
  { icon: Leaf, label: "Eco-Friendly" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              About Streamline Essentials
            </h2>
            <h3 className="text-xl text-slate-600 mb-6">
              Your Trusted Partner for Tile Installation Needs
            </h3>
            <p className="text-slate-500 leading-relaxed mb-8">
              Streamline Essentials is a wholesale company based in PDX that specializes in providing tiling installation materials to professionals and DIY enthusiasts. Our team has years of experience in the industry and is dedicated to helping our customers find the right products for their projects. We believe in sustainability and environmental responsibility, which is why we offer a wide selection of eco-friendly materials.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-slate-700">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Tile installation materials"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-lg hidden md:block">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
