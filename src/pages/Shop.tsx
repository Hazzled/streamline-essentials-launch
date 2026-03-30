import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { products, CATEGORIES } from "@/data/products";
import { ChevronDown, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Seo } from "@/components/Seo";

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter(
          (p) => p.category && selectedCategories.includes(p.category)
        );

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => setSelectedCategories([]);

  const FilterSidebar = () => (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="lg:sticky lg:top-28 space-y-4">
        <h2 className="text-lg font-semibold text-slate-800">Filter by category</h2>
        <Button
          variant={selectedCategories.length === 0 ? "default" : "outline"}
          size="sm"
          className="w-full justify-start"
          onClick={clearFilters}
        >
          All categories
        </Button>
        <ul className="space-y-2">
          {CATEGORIES.map((category) => (
            <li key={category} className="flex items-center gap-2">
              <Checkbox
                id={`cat-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <label
                htmlFor={`cat-${category}`}
                className="text-sm text-slate-700 cursor-pointer select-none"
              >
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Wholesale catalog | Streamline Essentials"
        description="B2B catalog of professional tile substrates, waterproofing, and installation supplies for Pacific Northwest contractors. Trade pricing by application."
        canonicalPath="/shop"
      />
      <Navbar />

      <section className="pt-28 pb-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Wholesale catalog
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Professional-grade substrates and waterproofing for tile contractors, builders, and distributors. Request
            trade pricing on any line.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white flex-1">
        <div className="container mx-auto px-4">
          <Collapsible
            open={filtersOpen}
            onOpenChange={setFiltersOpen}
            className="lg:hidden mb-6"
          >
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between gap-2">
                <span className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                  {selectedCategories.length > 0 && (
                    <span className="text-primary font-medium">
                      ({selectedCategories.length})
                    </span>
                  )}
                </span>
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", filtersOpen && "rotate-180")}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-4 p-4 border border-slate-200 rounded-lg bg-slate-50">
                <FilterSidebar />
              </div>
            </CollapsibleContent>
          </Collapsible>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="hidden lg:block">
              <FilterSidebar />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-500 mb-6">
                {filteredProducts.length === 0
                  ? "No products in selected categories."
                  : `Showing ${filteredProducts.length} product${filteredProducts.length === 1 ? "" : "s"}.`}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white border border-primary rounded-2xl overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <Link
                      to={`/shop/${product.id}`}
                      className="flex flex-col flex-1"
                    >
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
                        <h2 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h2>
                        <div className="min-h-[2.5rem] flex-1">
                          {product.description ? (
                            <p className="text-slate-600 text-sm mb-4 product-description-clamp">
                              {product.description}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </Link>
                    <div className="p-6 pt-0">
                      <Button variant="default" size="sm" className="w-full" asChild>
                        <Link to={`/trade-account?product=${encodeURIComponent(product.name)}`}>
                          Request trade pricing
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
