import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const quickLinks = [
  { label: "Shop", href: "/shop", isRoute: true },
  { label: "About Us", href: "/about", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

export function Footer() {
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "Subscription saved",
      description: "We’ll keep you posted on new products and promotions.",
    });
  };

  return (
    <footer id="contact" className="bg-slate-800 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Be the first to know!
            </h3>
            <p className="text-slate-400 mb-6">
              Subscribe to our newsletter for exclusive deals and product updates
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubscribe}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-primary"
              />
              <Button variant="hero" className="gap-2">
                <Send className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2 flex flex-col">
            <Link
              to="/"
              className="inline-flex shrink-0 w-fit mb-4 h-20 sm:h-24 md:h-28"
              aria-label="Streamline Essentials home"
            >
              <Logo
                className="h-full w-auto max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem]"
                noBackground
              />
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Your trusted partner for professional-grade tile installation and waterproofing supplies in the Pacific Northwest.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-4 text-white">Quick Links</h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-semibold mb-4 text-white">Contact Info</h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:1-503-766-8120"
                  className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  1-503-766-8120
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@streamlineessentials.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  contact@streamlineessentials.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                Portland, Oregon USA
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-slate-500 text-sm flex items-center justify-center gap-2 flex-wrap">
            © 2024 Streamline Essentials LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
