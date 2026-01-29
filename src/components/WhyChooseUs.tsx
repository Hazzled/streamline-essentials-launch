import { Award, Users, DollarSign } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "High-Quality",
    description:
      "We take pride in offering only the highest quality foam tile backer board and materials.",
  },
  {
    icon: Users,
    title: "Expertise",
    description:
      "Our team has years of experience in the construction materials industry.",
  },
  {
    icon: DollarSign,
    title: "Affordable",
    description:
      "We believe in providing exceptional customer service and satisfaction.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Discover what sets Streamline Essentials apart from the competition
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
