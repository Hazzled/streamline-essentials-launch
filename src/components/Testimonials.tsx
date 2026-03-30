const testimonials = [
  {
    id: 1,
    quote:
      "The Essenti Board cuts clean and saves our crews hours on prep compared to cement board. Less dust on the job, faster carry-in, and the GC notices the pace.",
    author: "James K.",
    role: "Lead installer, residential tile crew",
  },
  {
    id: 2,
    quote:
      "Stock has been steady when other suppliers were flipping ETAs weekly. That predictability is worth more than a few cents on a sheet.",
    author: "Priya M.",
    role: "Purchasing, commercial subcontractor",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What crews are saying
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Trade-focused feedback from installers and buyers who run volume in the field
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300"
            >
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-white block">
                    – {testimonial.author}
                  </span>
                  <span className="text-sm text-slate-400">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
