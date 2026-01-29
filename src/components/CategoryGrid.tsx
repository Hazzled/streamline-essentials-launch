import { Button } from "@/components/ui/button";
import { Layers, Grid3X3, Wrench, ShowerHead } from "lucide-react";

const categories = [
  {
    name: "Essenti Board",
    description: "Premium foam tile backer boards",
    icon: Layers,
  },
  {
    name: "Underlayment",
    description: "Waterproofing membranes & mats",
    icon: Grid3X3,
  },
  {
    name: "Tools/Miscellaneous",
    description: "Professional installation tools",
    icon: Wrench,
  },
  {
    name: "Shower Kit",
    description: "Complete shower system kits",
    icon: ShowerHead,
  },
];

export function CategoryGrid() {
  return (
    <section id="shop" className="section-padding bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Waterproofing Supplies in Oregon
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Browse our premium selection of tile installation and waterproofing materials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <category.icon className="w-10 h-10 text-slate-600 group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {category.name}
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                {category.description}
              </p>
              <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                Shop Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
