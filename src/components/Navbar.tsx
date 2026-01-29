import { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Shop", href: "#shop" },
  { name: "About Us", href: "#about" },
  { name: "Tile Projects", href: "#projects" },
  { name: "Contact Us", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span
            className={cn(
              "text-xl md:text-2xl font-bold transition-colors duration-300",
              isScrolled ? "text-slate-800" : "text-white"
            )}
          >
            Streamline Essentials
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200 hover:text-primary",
                isScrolled ? "text-slate-600" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "transition-colors",
              isScrolled ? "text-slate-600 hover:text-primary" : "text-white hover:text-white/80"
            )}
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "relative transition-colors",
              isScrolled ? "text-slate-600 hover:text-primary" : "text-white hover:text-white/80"
            )}
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
              0
            </span>
          </Button>
          <Button
            variant={isScrolled ? "outline" : "heroOutline"}
            size="sm"
            className="hidden md:inline-flex"
          >
            Log In
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden transition-colors",
              isScrolled ? "text-slate-600" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" className="mt-2">
            Log In
          </Button>
        </nav>
      </div>
    </header>
  );
}
