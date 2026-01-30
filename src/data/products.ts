export interface Product {
  id: number;
  name: string;
  price: number;
  label: string | null;
  image: string; // Primary image (first in images array, or single image for backward compatibility)
  images?: string[]; // Multiple images for gallery
  description?: string;
  category?: string;
  sku?: string;
  brand?: string;
  features?: string[];
  specifications?: Record<string, string>;
  /** Optional size options (e.g. for Shower Curb). When set, product detail shows a Size selector. */
  sizes?: string[];
}

/** Get the primary image for a product (first from images array, or fallback to image) */
export function getPrimaryImage(product: Product): string {
  return product.images && product.images.length > 0 ? product.images[0] : product.image;
}

/** Unique category names used by products, for filters and breadcrumbs. */
export const CATEGORIES = [
  "Essenti Board",
  "Underlayment",
  "Tools/Miscellaneous",
  "Shower Kit",
] as const;

export function getProductById(id: string | undefined): Product | undefined {
  if (id == null) return undefined;
  const num = parseInt(id, 10);
  if (Number.isNaN(num)) return undefined;
  return products.find((p) => p.id === num);
}

export const products: Product[] = [
  {
    id: 1,
    name: "Essenti Board 1/2 in. x 3 ft. x 5 ft. Backer Board",
    price: 27.99,
    label: "Best Seller",
    image: "https://static.wixstatic.com/media/9f6194_330595360db64e52b1b36842bbc16f56~mv2.jpg/v1/fill/w_548,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_330595360db64e52b1b36842bbc16f56~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/9f6194_330595360db64e52b1b36842bbc16f56~mv2.jpg/v1/fill/w_548,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_330595360db64e52b1b36842bbc16f56~mv2.jpg",
      "https://static.wixstatic.com/media/9f6194_c86e7a3542f64deea856f41cf2523c7c~mv2.jpg/v1/fill/w_548,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_c86e7a3542f64deea856f41cf2523c7c~mv2.jpg",
    ],
    sizes: ["1/2 inch | 3'x5'", "1/4 inch | 3'x5'", "2 inch | 3'x5'"],
    description: "Essenti Board 1/2 in. x 3 ft. x 5 ft. Backer Board offers an optimal foundation for all tile and stone placement. This board incorporates a moisture barrier within it, making it suitable for wet environments like bathtubs and showers. It's versatile enough for dry applications and as a substrate for various materials. Additionally, its lightweight design simplifies the installation process.",
    category: "Essenti Board",
    sku: "00002",
    brand: "Streamline Essentials",
    features: [
      "Eliminates the need for an additional vapor barrier due to its built-in moisture protection",
      "Resistant to mold growth",
      "Exceptional for both tile and non-tile installations, whether wet or dry",
      "Suitable for high-humidity areas",
      "Lighter and more user-friendly compared to cement board",
      "Delivers a smooth and clean finish",
      "Compliant with building codes for wet areas, surpassing the outdated green board standards",
      "Comes with a lifetime limited warranty",
    ],
    specifications: {
      Category: "Essenti Board",
      Thickness: "1/2 in.",
      Size: "3 ft. x 5 ft.",
      Material: "Foam with built-in moisture barrier",
      Warranty: "Lifetime limited",
    },
  },
  {
    id: 2,
    name: "Shower Niche",
    price: 69.99,
    label: "New Arrival",
    image: "https://static.wixstatic.com/media/9f6194_cac81716b4424255a95f171cbce14105~mv2.png/v1/fill/w_548,h_548,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_cac81716b4424255a95f171cbce14105~mv2.png",
    images: [
      "https://static.wixstatic.com/media/9f6194_cac81716b4424255a95f171cbce14105~mv2.png/v1/fill/w_548,h_548,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_cac81716b4424255a95f171cbce14105~mv2.png",
      "https://static.wixstatic.com/media/9f6194_2085c175333647c8a0d06a0399ba4da1~mv2.png/v1/fill/w_548,h_548,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_2085c175333647c8a0d06a0399ba4da1~mv2.png",
      "https://static.wixstatic.com/media/9f6194_f141961a7b544e289d09a394fb3de64d~mv2.png/v1/fill/w_548,h_548,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_f141961a7b544e289d09a394fb3de64d~mv2.png",
      "https://static.wixstatic.com/media/9f6194_34fbd490cc6c45eb93bca781d77e74b1~mv2.png/v1/fill/w_548,h_548,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_34fbd490cc6c45eb93bca781d77e74b1~mv2.png",
    ],
    sizes: ["12 in x 20 in | With Shelf", "12 in x 20 in | Without Shelf", "12 in x 12 in"],
    description: "Our Shower Niche is the perfect addition to any bathroom renovation. Made with waterproof materials and fully sealed inside corners, it will keep your shower essentials safe and dry. The strong construction ensures it will last for years to come. Easy to install and ready to tile, this niche is a must-have for any tiled shower. Improve the functionality and style of your bathroom with our Shower Niche.",
    category: "Shower Kit",
    sku: "SE-002",
    brand: "Streamline Essentials",
    features: [
      "Waterproof materials and fully sealed inside corners",
      "Keeps shower essentials safe and dry",
      "Strong, long-lasting construction",
      "Easy to install and ready to tile",
      "Improves functionality and style of any bathroom",
    ],
    specifications: {
      Category: "Shower Kit",
      Type: "Shower niche",
      Material: "Waterproof composite",
      Finish: "Tile-ready",
    },
  },
  {
    id: 3,
    name: "Shower Pans",
    price: 229.99,
    label: null,
    image: "https://static.wixstatic.com/media/9f6194_7a24038c335e4731b291cac87233fcec~mv2.jpg/v1/fill/w_548,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_7a24038c335e4731b291cac87233fcec~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/9f6194_7a24038c335e4731b291cac87233fcec~mv2.jpg/v1/fill/w_548,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_7a24038c335e4731b291cac87233fcec~mv2.jpg",
    ],
    sizes: ["3'x4'", "3'x5'"],
    description: "Our Shower Pans are made of high-quality materials, ensuring durability and longevity. They are completely waterproof, providing a reliable and leak-free base for your shower. We offer a range of sizes to accommodate any bathroom, and custom sizes can be made upon request. Choose from a variety of drain options and configurations to suit your specific needs. Trust our Shower Pans to provide a sturdy and functional foundation for your bathroom renovation.",
    category: "Shower Kit",
    sku: "SE-003",
    brand: "Streamline Essentials",
    features: [
      "Made of high-quality materials for durability and longevity",
      "Completely waterproof for reliable, leak-free performance",
      "Available in a range of standard sizes",
      "Custom sizes available upon request",
      "Multiple drain options and configurations",
      "Sturdy and functional foundation for bathroom renovations",
      "Tile-ready surface",
    ],
    specifications: {
      Category: "Shower Kit",
      Type: "Shower pan",
      Material: "High-quality waterproof materials",
      Customization: "Custom sizes available",
      Drain: "Multiple options available",
    },
  },
  {
    id: 5,
    name: "Decoupling Mat",
    price: 329.99,
    label: null,
    image: "https://static.wixstatic.com/media/9f6194_dd1e79babfbb4f8f8ef2f83b23d798bf~mv2.jpg/v1/fill/w_548,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_dd1e79babfbb4f8f8ef2f83b23d798bf~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/9f6194_dd1e79babfbb4f8f8ef2f83b23d798bf~mv2.jpg/v1/fill/w_548,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_dd1e79babfbb4f8f8ef2f83b23d798bf~mv2.jpg",
      "https://static.wixstatic.com/media/9f6194_72706eb589124443833e980b596c1981~mv2.jpg/v1/fill/w_548,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_72706eb589124443833e980b596c1981~mv2.jpg",
    ],
    description: "Our Decoupling Mat is the perfect solution for any tiling project. With a waterproof design, this mat provides exceptional protection against moisture and mold. Measuring 322sqft and 1/8\" thick, it's ideal for large-scale installations and offers excellent sound reduction benefits. The mat's unique design also helps to prevent cracks and tile damage, making it a must-have for any tiling job.",
    category: "Underlayment",
    sku: "SE-005",
    brand: "Streamline Essentials",
    features: [
      "Waterproof design for exceptional protection against moisture and mold",
      "322 sq ft coverage—ideal for large-scale installations",
      "1/8\" thick for optimal performance",
      "Excellent sound reduction benefits",
      "Helps prevent cracks and tile damage",
      "Must-have for any tiling job",
    ],
    specifications: {
      Category: "Underlayment",
      Coverage: "322 sq ft",
      Thickness: "1/8 in.",
      "Sound reduction": "Yes",
      "Waterproof": "Yes",
    },
  },
  {
    id: 6,
    name: "Performance Sealant",
    price: 18.99,
    label: null,
    image: "/performance-sealant.png",
    description: "Our waterproofing sealant is the perfect choice for sealing Essenti Boards. It provides superior protection against water damage and creates a strong, waterproof seal that will last for years. The sealant is easy to apply, dries quickly and is extremely durable. It is a great choice for any construction project that requires a reliable and long-lasting waterproof seal.",
    category: "Tools/Miscellaneous",
    sku: "SE-006",
    brand: "Streamline Essentials",
    features: [
      "Perfect for sealing Essenti Boards",
      "Superior protection against water damage",
      "Strong, waterproof seal that lasts for years",
      "Easy to apply and dries quickly",
      "Extremely durable",
      "Reliable and long-lasting for any construction project",
    ],
    specifications: {
      Category: "Tools/Miscellaneous",
      Volume: "18.6 fl. oz. / 548 mL",
      Waterproof: "Yes",
      "Ideal for": "Essenti Boards, joints and transitions",
    },
  },
  {
    id: 7,
    name: "Shower Curb",
    price: 59.99,
    label: null,
    image: "https://static.wixstatic.com/media/9f6194_7c280ab375874acf8d44b5446ae45fcd~mv2.png/v1/fill/w_548,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_7c280ab375874acf8d44b5446ae45fcd~mv2.png",
    images: [
      "https://static.wixstatic.com/media/9f6194_7c280ab375874acf8d44b5446ae45fcd~mv2.png/v1/fill/w_548,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_7c280ab375874acf8d44b5446ae45fcd~mv2.png",
    ],
    sizes: ["3 in x 3 in x 3 ft", "3 in x 3 in x 4 ft", "3 in x 3 in x 5 ft"],
    description: "Our Shower Curb is the perfect addition to any bathroom renovation project. Made from waterproof materials, it ensures that water doesn't seep into your bathroom floor. It is also incredibly strong, meaning it can support heavy shower doors and resist cracking or breaking. We stock a range of sizes to cater for any shower space, making it an ideal choice for both commercial and residential bathroom projects. Upgrade your bathroom with our durable and functional Shower Curb today.",
    category: "Shower Kit",
    sku: "SE-007",
    brand: "Streamline Essentials",
    features: [
      "Waterproof materials prevent water from seeping into the bathroom floor",
      "Incredibly strong—supports heavy shower doors",
      "Resists cracking or breaking",
      "Range of sizes to suit any shower space",
      "Ideal for commercial and residential projects",
      "Durable and functional",
    ],
    specifications: {
      Category: "Shower Kit",
      Type: "Shower curb",
      Material: "Waterproof composite",
      Sizes: "Range of sizes available",
      Use: "Commercial and residential",
    },
  },
  {
    id: 8,
    name: "Waterproofing Membrane",
    price: 399.99,
    label: null,
    image: "https://static.wixstatic.com/media/9f6194_b1b221abbb4b43edbb062db4552ced47~mv2.png/v1/fill/w_548,h_776,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_b1b221abbb4b43edbb062db4552ced47~mv2.png",
    images: [
      "https://static.wixstatic.com/media/9f6194_b1b221abbb4b43edbb062db4552ced47~mv2.png/v1/fill/w_548,h_776,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/9f6194_b1b221abbb4b43edbb062db4552ced47~mv2.png",
    ],
    sku: "00103",
    sizes: ["3.28' x 98.42'"],
    description: "Constructed from high-density polyethylene material and fortified with non-woven polypropylene layers on both sides, this waterproof membrane offers robust waterproofing and anti-seepage properties. Its primary function is to efficiently block the intrusion of water or moisture into surfaces like wooden floors, ceramic tiles, cement, or ceramic floors, effectively preventing the occurrence of tile or floor damage such as cracking. Provides waterproofing for both tiled shower walls and floors. Prevents water damage, which could otherwise result in the growth of mold and mildew. Well-suited for use in continuous-use steam rooms. The roll measures 3 feet and 3 inches in width by 98 feet and 5 inches in length. Covers an area of 323 square feet. Thickness of 20 mm, cutable by scissors. Simple and hassle-free installation.",
    category: "Underlayment",
    brand: "Streamline Essentials",
    features: [
      "Robust waterproofing and anti-seepage properties",
      "Blocks water and moisture intrusion into wood, ceramic, cement, and ceramic floors",
      "Prevents tile and floor damage such as cracking",
      "Waterproofing for tiled shower walls and floors",
      "Prevents mold and mildew from water damage",
      "Suitable for continuous-use steam rooms",
      "Simple and hassle-free installation",
      "Cuttable with scissors",
    ],
    specifications: {
      Category: "Underlayment",
      Material: "High-density polyethylene with non-woven polypropylene layers",
      "Roll dimensions": "3 ft 3 in (width) × 98 ft 5 in (length)",
      "Coverage area": "323 sq ft",
      Thickness: "20 mm",
      Cuttable: "By scissors",
    },
  },
  {
    id: 9,
    name: "Tile Leveling Clips",
    price: 25.99,
    label: null,
    image: "/tile-leveling-system.png",
    sku: "00212",
    sizes: ["1/8\" 500/pcs", "1/16\" 500/pcs"],
    description: "Our Tile Leveling System is the perfect solution for achieving a flawless tile installation. These tools ensure that your tiles are perfectly leveled and evenly spaced. Made from high-quality plastic, our Tile Leveling System is durable and easy to use, making it ideal for both DIYers and professional tile installers. Say goodbye to lippage and uneven tile installations with our Tile Leveling System.",
    category: "Tools/Miscellaneous",
    brand: "Streamline Essentials",
    features: [
      "Perfectly leveled and evenly spaced tiles",
      "Flawless tile installation every time",
      "High-quality plastic—durable and easy to use",
      "Ideal for DIYers and professional tile installers",
      "Eliminates lippage and uneven installations",
    ],
    specifications: {
      Category: "Tools/Miscellaneous",
      Type: "Tile leveling clips",
      Material: "High-quality plastic",
    },
  },
  {
    id: 10,
    name: "Tile Leveling Wedge",
    price: 34.99,
    label: null,
    image: "/tile-leveling-wedge.png",
    description: "Our Tile Leveling System is a must-have for anyone looking to achieve professional-looking tile installations. Designed to work perfectly with our spacers, this system ensures that your tiles are level and flush, giving you a seamless finish every time. Easy to use and highly effective, our Tile Leveling System is suitable for both DIY enthusiasts and professional tilers alike. Whether you're working on a small bathroom renovation or a large-scale tiling project, our leveling system is a reliable and efficient solution that will save you time and effort. Invest in this tool today and take your tiling game to the next level.",
    category: "Tools/Miscellaneous",
    sku: "SE-010",
    brand: "Streamline Essentials",
    features: [
      "Designed to work perfectly with our spacers",
      "Ensures tiles are level and flush for a seamless finish",
      "Easy to use and highly effective",
      "Suitable for DIY enthusiasts and professional tilers",
      "Reliable and efficient—saves time and effort",
      "Ideal for small renovations or large-scale tiling projects",
    ],
    specifications: {
      Category: "Tools/Miscellaneous",
      Type: "Tile leveling wedges",
      "Pieces per bag": "250",
    },
  },
];
