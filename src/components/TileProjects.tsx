import { Link } from "react-router-dom";

const tileProjects = [
  {
    id: "project-1",
    title: "Modern Walk-In Shower",
    description:
      "A sleek, barrier-free spa shower featuring clean lines and warm neutrals.",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&h=600&fit=crop&auto=format&q=80",
    productsUsed: ["Essenti Board", "Linear Drain"],
  },
  {
    id: "project-2",
    title: "Kitchen Backsplash",
    description:
      "Crisp subway tile backsplash that ties together modern cabinetry and fixtures.",
    image:
      "https://images.unsplash.com/photo-1600585154340-0ef3c08c0632?w=800&h=600&fit=crop&auto=format&q=80",
    productsUsed: ["Performance Sealant", "Leveling Clips"],
  },
  {
    id: "project-3",
    title: "Master Bath Renovation",
    description:
      "A resort-inspired master bath with large-format tile and recessed storage.",
    image:
      "https://images.unsplash.com/photo-1617099212847-23aaf4c7d07f?w=800&h=600&fit=crop&auto=format&q=80",
    productsUsed: ["Decoupling Mat", "Shower Niche"],
  },
];

export function TileProjects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-10">
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 block">
            Project Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            See Our Products in Action
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            A snapshot of recent bathroom and kitchen renovations completed with
            Streamline Essentials materials. Visit the full gallery to explore
            more details.
          </p>
          <Link
            to="/projects"
            className="mt-4 inline-flex items-center text-sm font-semibold text-orange-500 hover:text-orange-600"
          >
            View all projects
            <span className="ml-1 text-orange-400 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tileProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-64 bg-slate-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600">{project.description}</p>
                </div>

                <div className="mt-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                    Products Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.productsUsed.map((product) => (
                      <span
                        key={product}
                        className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-2 inline-flex items-center text-sm font-semibold text-orange-500 hover:text-orange-600"
                >
                  View Details
                  <span className="ml-1 text-orange-400 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
