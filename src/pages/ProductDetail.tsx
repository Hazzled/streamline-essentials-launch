import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { products, getProductById, getPrimaryImage } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Minus, Plus, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(productId);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const relatedScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuantity(1);
    setSelectedSize(undefined);
  }, [productId]);

  useEffect(() => {
    if (product?.sizes?.length === 1) setSelectedSize(product.sizes[0]);
  }, [product?.id, product?.sizes]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-28 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Product not found</h1>
            <p className="text-slate-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const brand = product.brand ?? "Streamline Essentials";
  const sku = product.sku ?? `SE-${String(product.id).padStart(3, "0")}`;
  const features = product.features ?? (product.description ? [product.description] : []);
  const specifications = product.specifications ?? { Category: product.category ?? "—" };

  const relatedProducts = products.filter((p) => p.id !== product.id);

  const handleAddToCart = () => {
    const size = product.sizes?.length ? selectedSize : undefined;
    if (product.sizes?.length && !size) {
      toast({
        title: "Select a size",
        description: "Please choose a size before adding to cart.",
        variant: "destructive",
      });
      return;
    }
    addItem(product.id, quantity, size ? { size } : undefined);
    toast({
      title: "Added to cart",
      description: `${quantity} × "${product.name}"${size ? ` (${size})` : ""} has been added. Open the cart to request a call.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/shop">Shop</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {product.category && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{product.category}</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Main: image + details */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-16">
            <div className="relative aspect-square max-w-xl bg-slate-100 rounded-2xl overflow-hidden border-4 border-slate-200">
              <img
                src={getPrimaryImage(product)}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              {product.label && (
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  {product.label}
                </Badge>
              )}
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">
                {brand}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-slate-800 mb-1">
                Est. ${product.price.toFixed(2)}
              </p>
              <p className="text-sm text-slate-500 mb-6">SKU: {sku} · Price is an estimate; actual price may vary.</p>

              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <Label htmlFor="size-select" className="text-sm font-medium text-slate-700">
                    Size *
                  </Label>
                  <Select value={selectedSize ?? ""} onValueChange={setSelectedSize}>
                    <SelectTrigger id="size-select" className="mt-2 max-w-xs">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-medium text-slate-700">Quantity</span>
                <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-none h-10 w-10"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-none h-10 w-10"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button
                variant="default"
                size="lg"
                className="gap-2 w-full sm:w-auto mb-6"
                onClick={handleAddToCart}
                disabled={product.sizes?.length ? !selectedSize : false}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <p className="text-sm text-slate-500 mt-2 mb-8">
                Add to cart to request a quote or schedule pickup. No payment required now.
              </p>

              <p className="flex items-center gap-2 text-sm text-green-700 mb-8">
                <Check className="h-4 w-4" />
                In Stock
              </p>

              {features.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold text-slate-800 mb-3">Key features</h2>
                  <ul className="list-disc list-inside space-y-2 text-slate-600">
                    {features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* Overview */}
          {product.description && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Product overview</h2>
              <p className="text-slate-600 max-w-3xl">{product.description}</p>
            </section>
          )}

          {/* Specifications */}
          {Object.keys(specifications).length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Specifications</h2>
              <div className="border border-slate-200 rounded-lg overflow-hidden max-w-md">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(specifications).map(([key, value]) => (
                      <tr key={key} className="border-b border-slate-200 last:border-0">
                        <td className="px-4 py-3 font-medium text-slate-700 bg-slate-50 w-1/3">
                          {key}
                        </td>
                        <td className="px-4 py-3 text-slate-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>

        {/* Related products: entire catalog, centered, horizontal scroll, buttons only */}
        {relatedProducts.length > 0 && (
          <section className="w-full mt-12 lg:mt-16 border-t border-slate-200 bg-slate-50/50">
              <div className="pt-8 pb-8 lg:pt-10 lg:pb-10 px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 mb-6">
                  <h2 className="text-xl font-semibold text-slate-800">
                    You may also like
                  </h2>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="rounded-full shrink-0"
                      aria-label="Scroll left"
                      onClick={() => {
                        relatedScrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
                      }}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="rounded-full shrink-0"
                      aria-label="Scroll right"
                      onClick={() => {
                        relatedScrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
                      }}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="max-w-7xl mx-auto">
                  <div
                    ref={relatedScrollRef}
                    className="flex gap-6 overflow-x-auto pb-2 pl-4 pr-4 scroll-smooth scrollbar-hide"
                  >
                    {relatedProducts.map((p) => (
                      <Link
                        key={p.id}
                        to={`/shop/${p.id}`}
                        className="group shrink-0 w-[280px] sm:w-[300px] block bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="aspect-video bg-slate-100 overflow-hidden">
                          <img
                            src={getPrimaryImage(p)}
                            alt={p.name}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-slate-800 group-hover:text-primary transition-colors line-clamp-2">
                            {p.name}
                          </h3>
                          <p className="text-lg font-bold text-slate-800 mt-1">
                            Est. ${p.price.toFixed(2)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
