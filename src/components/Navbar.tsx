import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";
import { toast } from "@/hooks/use-toast";

const navLinks = [
  { name: "Home", href: "/", isRoute: true },
  { name: "Catalog", href: "/shop", isRoute: true },
  { name: "About Us", href: "/about", isRoute: true },
  { name: "Contact Us", href: "/contact", isRoute: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isShopPage = location.pathname === "/shop" || location.pathname.startsWith("/shop/");
  const showScrolledStyle = isScrolled || isShopPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tradePortalClick = () => {
    toast({
      title: "Trade portal",
      description: "Portal access is provided after account approval. Apply for trade pricing or call (503) 482-8395.",
    });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showScrolledStyle ? "py-3 shadow-md" : "py-4"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 -z-10 transition-all duration-300",
          showScrolledStyle
            ? "bg-white/95 backdrop-blur-md"
            : "bg-gradient-to-b from-slate-900/95 via-slate-800/70 to-transparent"
        )}
      />
      <div className="container mx-auto px-4 flex items-center justify-between relative gap-4 h-14 md:h-16">
        <Link
          to="/"
          className="flex items-center shrink-0 min-w-0 h-full"
          aria-label="Streamline Essentials home"
        >
          <Logo
            className="h-full w-auto max-w-[11rem] sm:max-w-[13rem] md:max-w-[15rem] transition-all duration-300"
            noBackground
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-primary",
                  showScrolledStyle ? "text-slate-600" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-primary",
                  showScrolledStyle ? "text-slate-600" : "text-white/90"
                )}
              >
                {link.name}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <Button variant="hero" size="sm" className="sm:hidden shadow-md px-3 text-xs" asChild>
            <Link to="/trade-account">Apply</Link>
          </Button>
          <Button
            variant={showScrolledStyle ? "outline" : "heroOutline"}
            size="sm"
            className="hidden md:inline-flex text-xs px-3"
            type="button"
            onClick={tradePortalClick}
          >
            Trade portal login
          </Button>
          <Button variant="hero" size="sm" className="hidden sm:inline-flex shadow-md" asChild>
            <Link to="/trade-account">Apply for trade pricing</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden transition-colors",
              showScrolledStyle ? "text-slate-600" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-slate-600 font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            )
          )}
          <Button variant="outline" className="mt-2 w-full" type="button" onClick={tradePortalClick}>
            Trade portal login
          </Button>
          <Button variant="hero" className="w-full" asChild>
            <Link to="/trade-account" onClick={() => setIsMobileMenuOpen(false)}>
              Apply for trade pricing
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
