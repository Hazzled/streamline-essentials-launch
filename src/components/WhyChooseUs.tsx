import { Award, Users, DollarSign } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Wet-area performance",
    description:
      "Substrates and membranes selected for shower, steam, and exterior tile builds — aligned to how PNW crews actually waterproof.",
  },
  {
    icon: Users,
    title: "Reliable stock",
    description:
      "A narrow, deep line card so your orders don’t disappear behind general merchandise priorities.",
  },
  {
    icon: DollarSign,
    title: "Trade economics",
    description:
      "Wholesale structure built for contractor margins and repeat volume — not retail impulse pricing.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Why crews spec us
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Installation speed, code-credible assemblies, and terms that respect trade work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-8 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
