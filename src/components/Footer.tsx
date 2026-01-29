import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
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
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold mb-4">Streamline Essentials</h4>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Your trusted partner for professional-grade tile installation and waterproofing supplies in the Pacific Northwest.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-4 text-white">Quick Links</h5>
            <ul className="space-y-3">
              {["Shop", "About Us", "Tile Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
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
          <p className="text-center text-slate-500 text-sm">
            © 2024 Streamline Essentials. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
