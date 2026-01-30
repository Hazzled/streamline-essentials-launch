import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";

export function FeaturedProducts() {
  const { addItem } = useCart();
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + 1 >= products.length - visibleCount + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev - 1 < 0 ? products.length - visibleCount : prev - 1
    );
  };

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount);
  const displayProducts = visibleProducts.length < visibleCount 
    ? [...visibleProducts, ...products.slice(0, visibleCount - visibleProducts.length)]
    : visibleProducts;

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
              Latest Products
            </h2>
            <p className="text-slate-500">
              Discover our newest additions to professional-grade materials
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0 items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <Link to="/shop">
                View all products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-primary rounded-2xl overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <Link to={`/shop/${product.id}`} className="flex flex-col flex-1">
                <div className="relative aspect-video bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.label && (
                    <Badge className="absolute top-4 left-4 bg-primary text-white">
                      {product.label}
                    </Badge>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1 min-h-0">
                  {product.category && (
                    <p className="text-sm text-slate-500 mb-1">{product.category}</p>
                  )}
                  <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="min-h-[2.5rem] flex-1">
                    {product.description ? (
                      <p className="text-slate-600 text-sm mb-4 product-description-clamp">
                        {product.description}
                      </p>
                    ) : null}
                  </div>
                  <span className="text-2xl font-bold text-slate-800 mt-auto block">
                    Est. ${product.price.toFixed(2)}
                  </span>
                </div>
              </Link>
              <div className="p-6 pt-0">
                <Button
                  variant="default"
                  size="sm"
                  className="w-full gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addItem(product.id);
                    toast({
                      title: "Added to cart",
                      description: `"${product.name}" has been added. Open the cart to request a call.`,
                    });
                  }}
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
