import { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Backer Board",
    price: 27.99,
    label: "Best Seller",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Shower Niche",
    price: 69.99,
    label: "New Arrival",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Shower Pans",
    price: 229.99,
    label: null,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Waterproofing Mat",
    price: 399.99,
    label: null,
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "322sqft Decoupling Mat",
    price: 329.99,
    label: null,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Performance Sealant",
    price: 18.99,
    label: null,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
  },
];

export function FeaturedProducts() {
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
          <div className="flex gap-2 mt-4 md:mt-0">
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
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square bg-slate-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.label && (
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {product.label}
                  </Badge>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-800">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button variant="default" size="sm" className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
