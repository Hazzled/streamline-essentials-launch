import { Link } from "react-router-dom";

const tileProjects = [
  {
    id: "project-1",
    title: "Modern Walk-In Shower",
    description:
      "Barrier-free wet area with continuous waterproofing and large-format tile — typical of multi-unit and custom residential work.",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&h=600&fit=crop&auto=format&q=80",
    productsUsed: ["Essenti Board", "Linear Drain"],
  },
  {
    id: "project-2",
    title: "Kitchen Backsplash",
    description:
      "Production backsplash runs where flat substrates and sealant compatibility matter for GC schedules.",
    image:
      "https://images.unsplash.com/photo-1600585154340-0ef3c08c0632?w=800&h=600&fit=crop&auto=format&q=80",
    productsUsed: ["Performance Sealant", "Leveling Clips"],
  },
  {
    id: "project-3",
    title: "Master Bath Installation",
    description:
      "Large-format tile and recessed storage — the kind of job where prep, decoupling, and waterproofing have to ship as a system.",
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
            Install gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Materials on real job sites
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            Representative installs from trade partners using Streamline Essentials substrates and waterproofing. For
            spec sheets and trade pricing, use the catalog or apply for an account.
          </p>
          <Link
            to="/projects"
            className="mt-4 inline-flex items-center text-sm font-semibold text-orange-500 hover:text-orange-600"
          >
            View full gallery
            <span className="ml-1 text-orange-400 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tileProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">
                  Featured materials
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.productsUsed.map((p) => (
                    <li
                      key={p}
                      className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
