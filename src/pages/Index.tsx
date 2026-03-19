import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { AboutSection } from "@/components/AboutSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { QASection } from "@/components/QASection";
import { Footer } from "@/components/Footer";
import { Seo, getSiteBaseUrl, toAbsoluteUrl } from "@/components/Seo";

const Index = () => {
  const siteBaseUrl = getSiteBaseUrl();
  const logoUrl = toAbsoluteUrl("/streamline-essentials-logo.png", siteBaseUrl);
  const homeUrl = siteBaseUrl ?? undefined;

  return (
    <div className="min-h-screen">
      <Seo
        title="Streamline Essentials | Tile Installation & Waterproofing Supplies (Portland, OR)"
        description="Professional-grade tile installation and waterproofing supplies serving Portland, Oregon and the Pacific Northwest. Browse backer board, membranes, sealants, and more."
        canonicalPath="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Streamline Essentials",
          url: homeUrl,
          logo: logoUrl,
          image: logoUrl,
          telephone: "+1-503-482-8395",
          email: "sales@streamlineessentials.net",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Portland",
            addressRegion: "OR",
            addressCountry: "US",
          },
          areaServed: [
            {
              "@type": "AdministrativeArea",
              name: "Pacific Northwest",
            },
          ],
        }}
      />
      <Navbar />
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <AboutSection />
      <QASection />
      <Testimonials />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
