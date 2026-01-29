import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Streamline Essentials transformed my kitchen into a culinary haven! From drab to fab, their team blended style and functionality seamlessly.",
    author: "Sophie L.",
  },
  {
    id: 2,
    quote:
      "Streamline Essentials worked magic on my bathroom! They waved goodbye to outdated tiles and welcomed in a spa-like oasis.",
    author: "Kevin S.",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            See what our customers have to say about their experience with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
              <p className="text-lg text-slate-300 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <span className="font-semibold text-white">
                  – {testimonial.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
