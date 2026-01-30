import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "503-766-8120",
    href: "tel:503-766-8120",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@streamlineessentials.com",
    href: "mailto:contact@streamlineessentials.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value:
      "For those who would like to visit our warehouse, please schedule an hour in advance. We are located in Beavercreek Oregon City, OR, 97045",
    href: "https://www.google.com/maps/search/Beavercreek+Oregon+City+OR+97045",
    multiline: true,
  },
];

// OpenStreetMap embed - Beavercreek / Oregon City, OR area (no API key)
const MAP_EMBED_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=-122.654%2C45.330%2C-122.540%2C45.385&layer=mapnik&marker=45.3576,-122.597";

const Contact = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
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
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in touch
            </h1>
            <p className="text-slate-300 text-lg">
              We’re here to help with orders, product questions, or warehouse
              visits. Reach out anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="section-padding -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="animate-fade-in-up opacity-0"
                  style={{
                    animationDelay: `${150 + i * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <Card
                    className={cn(
                      "h-full border-0 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group",
                      "bg-white hover:-translate-y-1"
                    )}
                  >
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.label === "Location" ? "_blank" : undefined}
                              rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                              className={cn(
                                "font-semibold text-slate-800 link-hover block",
                                item.multiline && "leading-snug"
                              )}
                            >
                              {item.multiline ? (
                                <span className="block">{item.value}</span>
                              ) : (
                                item.value
                              )}
                            </a>
                          ) : (
                            <p
                              className={cn(
                                "font-semibold text-slate-800",
                                item.multiline && "leading-snug"
                              )}
                            >
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Visit note */}
          <div
            className="mt-8 flex flex-wrap items-center gap-2 justify-center text-slate-600 animate-fade-in-up opacity-0"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            <Clock className="h-4 w-4 text-primary" />
            <span>
              Warehouse visits by appointment — please schedule at least one
              hour in advance.
            </span>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding pt-0">
        <div className="container mx-auto px-4">
          <div
            className="animate-fade-in-up opacity-0 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            <div className="p-4 md:p-6 border-b border-slate-100 bg-white">
              <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Find us — Beavercreek, Oregon City, OR 97045
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Click the map to open in a new tab for directions.
              </p>
            </div>
            <iframe
              title="Streamline Essentials location - Beavercreek Oregon City OR"
              src={MAP_EMBED_SRC}
              className="w-full h-80 md:h-96 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4 bg-slate-50 flex flex-col sm:flex-row items-center justify-center gap-3 border-t border-slate-100">
              <span className="text-sm text-slate-500">
                Get directions to our warehouse
              </span>
              <a
                href="https://www.google.com/maps/search/Beavercreek+Oregon+City+OR+97045"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-orange-600 transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
