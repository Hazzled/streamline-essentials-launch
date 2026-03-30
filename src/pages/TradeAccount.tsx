import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { TradeAccountForm } from "@/components/TradeAccountForm";

const TradeAccount = () => {
  const [searchParams] = useSearchParams();
  const product = searchParams.get("product") ?? "";
  const size = searchParams.get("size") ?? "";
  const interestLine = [product, size ? `Size: ${size}` : ""].filter(Boolean).join(" · ");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Seo
        title="Trade account application | Streamline Essentials"
        description="Apply for a wholesale trade account. Pacific Northwest contractors and distributors — trade pricing, specs, and dedicated support."
        canonicalPath="/trade-account"
      />
      <Navbar />
      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Trade account application</h1>
          <p className="text-slate-600 mb-8">
            Wholesale waterproofing and tile substrates for licensed contractors and distributors. Tell us about your
            business — we’ll respond with trade pricing and account setup.
          </p>
          <TradeAccountForm key={interestLine} defaultProductInterest={interestLine} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TradeAccount;
