export interface Product {
  id: string;
  name: string;
  category: 'Cloths & Wipes' | 'Kitchen Essentials' | 'Bins' | 'Dispensers & Refills' | 'Food Service';
  subtitle?: string;
  price: number;
  originalPrice?: number;
  image: string;
  color: string;
  size: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  description: string;
  features: string[];
  isFeatured?: boolean;
  isFoodService?: boolean;
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Microfiber Cleaning Cloths Pack',
    category: 'Cloths & Wipes',
    subtitle: 'Premium edgeless microfiber pack for streak-free cleaning',
    price: 24,
    originalPrice: 30,
    image: '/images/shop_product_1.webp',
    color: 'Blue',
    size: 'Pack of 10 (40x40 cm)',
    badge: 'Best Seller',
    rating: 4.9,
    reviewsCount: 142,
    description: 'Ultra-absorbent commercial microfiber cloths designed for high-traffic cleaning. Traps dust, grime, and grease without scratching delicate surfaces.',
    features: [
      '80/20 polyester-polyamide high-density split fiber',
      'Lint-free and streak-free finish on glass and steel',
      'Machine washable up to 300 cycles',
      'Color-coded to prevent cross-contamination'
    ],
    isFeatured: true,
    inStock: true,
  },
  {
    id: 'prod-2',
    name: 'Service Industry Wipes',
    category: 'Cloths & Wipes',
    subtitle: 'Heavy-duty absorbent food-safe wipes for catering & hospitality',
    price: 38,
    originalPrice: 45,
    image: '/images/shop_product_2.webp',
    color: 'Aqua',
    size: 'Roll of 150 Sheets',
    badge: 'Popular',
    rating: 4.8,
    reviewsCount: 98,
    description: 'Durable nonwoven wipes with anti-bacterial formulation. Engineered for fast wipe-downs in food preparation zones, catering setups, and workstations.',
    features: [
      'Food-contact safe and chemical-resistant',
      'High tensile strength wet or dry',
      'Fast drying to minimize bacterial growth',
      'Perforated for easy single-sheet dispensing'
    ],
    isFeatured: true,
    inStock: true,
  },
  {
    id: 'prod-3',
    name: 'Pedal Bin',
    category: 'Bins',
    subtitle: 'Hands-free hygienic stainless steel pedal waste bin',
    price: 65,
    originalPrice: 78,
    image: '/images/shop_product_3.webp',
    color: 'Black',
    size: '30 Litre',
    badge: 'Commercial Grade',
    rating: 4.9,
    reviewsCount: 86,
    description: 'Heavy-duty matte black steel pedal bin with soft-close damping mechanism. Provides sanitary hands-free waste disposal for commercial washrooms and kitchens.',
    features: [
      'Sturdy foot pedal mechanism rated for 100,000+ steps',
      'Soft-close lid with odour-trapping seal',
      'Removable inner bucket with carrying handle',
      'Fingerprint-proof powder-coated finish'
    ],
    isFeatured: true,
    inStock: true,
  },
  {
    id: 'prod-4',
    name: 'Wrap Dispenser with Cling Film Refill',
    category: 'Dispensers & Refills',
    subtitle: 'Compact starter bundle for prep counters and domestic kitchens',
    price: 110,
    originalPrice: 130,
    image: '/images/shop_product_4.webp',
    color: 'White',
    size: '300 mm Starter Set',
    badge: 'Kitchen Standard',
    rating: 4.8,
    reviewsCount: 76,
    description: 'Complete dispenser unit including one full 300m roll of commercial-grade cling film. Perfect for prep stations, cafes, and busy household kitchens.',
    features: [
      'Ready-to-use bundle with starter film included',
      'Stable non-slip rubber feet for countertop balance',
      'Ergonomic push-cutter slide mechanism',
      'Compact footprint fits standard kitchen counters'
    ],
    isFeatured: true,
    inStock: true,
  },
  {
    id: 'prod-5',
    name: 'Wrapmaster 4500 Dispenser',
    category: 'Food Service',
    subtitle: 'The gold standard catering wrap and foil dispenser',
    price: 185,
    originalPrice: 210,
    image: '/foodservice/prod_wrapmaster_4500.webp',
    color: 'White',
    size: '450 mm (18 inch)',
    badge: 'Kitchen Standard',
    rating: 5.0,
    reviewsCount: 215,
    description: 'The award-winning wrap dispenser built for commercial kitchens. Delivers an effortless one-press cut with a completely concealed safety blade to protect staff hands.',
    features: [
      'Concealed blade system eliminates kitchen lacerations',
      'Dishwasher-safe lid and base for HACCP hygiene compliance',
      'Reduces wrap wastage by up to 35% compared to cardboard cutter boxes',
      'Compatible with 450mm cling film, foil, and parchment rolls'
    ],
    isFeatured: true,
    isFoodService: true,
    inStock: true,
  },
  {
    id: 'prod-6',
    name: 'Cling Film, Foil & Baking Parchment',
    category: 'Food Service',
    subtitle: 'High-cling food service grade preservation wrap',
    price: 65,
    originalPrice: 75,
    image: '/foodservice/prod_rolls.webp',
    color: 'Clear',
    size: '450 mm x 300 m',
    badge: 'HACCP Compliant',
    rating: 4.9,
    reviewsCount: 173,
    description: 'Professional food-grade PVC/PE cling film roll with high elasticity and barrier protection. Keeps food fresh, locks in flavours, and minimizes spoilage.',
    features: [
      'Breathable moisture-locking membrane',
      'Freezer-safe and microwave-safe food grade material',
      'Tangle-free roll winding for smooth dispensing',
      'Tested to international food contact safety standards'
    ],
    isFeatured: true,
    isFoodService: true,
    inStock: true,
  },
  {
    id: 'prod-7',
    name: 'Disposable Chef Hats',
    category: 'Food Service',
    subtitle: 'Pleated non-woven chef caps for hygienic kitchen operations',
    price: 42,
    originalPrice: 50,
    image: '/foodservice/prod_hats.webp',
    color: 'White',
    size: 'Box of 50 pcs',
    badge: 'Food Safe',
    rating: 4.8,
    reviewsCount: 89,
    description: 'Maintain a pristine, professional appearance while strictly upholding food safety and kitchen hygiene standards. Lightweight, breathable, and adjustable.',
    features: [
      'Breathable pleated crown with sweatband absorption',
      'Adjustable adhesive closure fits all head sizes comfortably',
      'Hypoallergenic lightweight spun-bond fabric',
      'Compliant with UAE Food Authority regulations'
    ],
    isFeatured: true,
    isFoodService: true,
    inStock: true,
  },
  {
    id: 'prod-8',
    name: 'Wrapmaster Refills',
    category: 'Food Service',
    subtitle: 'Genuine heavy-duty replacement rolls for Wrapmaster 4500',
    price: 89,
    originalPrice: 105,
    image: '/foodservice/prod_refills.webp',
    color: 'Clear / Silver',
    size: 'Pack of 3 Rolls',
    badge: 'Genuine Refill',
    rating: 4.9,
    reviewsCount: 112,
    description: 'Genuine high-performance refill rolls engineered specifically for Wrapmaster dispensers. Easy drop-in core loading in seconds.',
    features: [
      'Snug fit core pins for frictionless rotation',
      'Anti-static formulation prevents roll jamming',
      'High puncture resistance for bone-in meats and deep pans',
      'Available in premium cling film or heavy aluminium foil'
    ],
    isFeatured: true,
    isFoodService: true,
    inStock: true,
  },
  {
    id: 'prod-9',
    name: 'Wrap Dispenser with Cling Film Refill',
    category: 'Dispensers & Refills',
    subtitle: 'Compact starter bundle for prep counters and domestic kitchens',
    price: 110,
    originalPrice: 130,
    image: '/images/product-wrap-dispenser.webp',
    color: 'White',
    size: '300 mm Starter Set',
    badge: 'Starter Set',
    rating: 4.8,
    reviewsCount: 76,
    description: 'Complete dispenser unit including one full 300m roll of commercial-grade cling film. Perfect for prep stations, cafes, and busy household kitchens.',
    features: [
      'Ready-to-use bundle with starter film included',
      'Stable non-slip rubber feet for countertop balance',
      'Ergonomic push-cutter slide mechanism',
      'Compact footprint fits standard kitchen counters'
    ],
    isFeatured: false,
    inStock: true,
  },
  {
    id: 'prod-10',
    name: 'Stainless Steel Touchless Sanitizer Dispenser',
    category: 'Dispensers & Refills',
    subtitle: 'Automatic infrared wall-mounted hygiene dispenser',
    price: 145,
    originalPrice: 175,
    image: '/images/category-dispensers-refills.webp',
    color: 'Stainless Steel',
    size: '1000 ml Capacity',
    badge: 'Touchless Tech',
    rating: 4.9,
    reviewsCount: 131,
    description: 'Sleek brushed stainless steel hands-free hand sanitizer dispenser. Designed for hospital entrances, office lobbies, and luxury restaurant washrooms.',
    features: [
      'Infrared sensor activates within 0.25 seconds',
      'Drip-free precision spray/gel nozzle',
      'Lockable cabinet with sight window for liquid level',
      'Dual power: battery operated or DC adapter'
    ],
    isFeatured: false,
    inStock: true,
  },
  {
    id: 'prod-11',
    name: 'Heavy Duty Kitchen Degreaser & Sanitizer',
    category: 'Kitchen Essentials',
    subtitle: 'Commercial grade grease dissolver for grills, fryers and hoods',
    price: 52,
    originalPrice: 62,
    image: '/images/category-kitchen-essentials.webp',
    color: 'Amber',
    size: '5 Litre Jerrycan',
    badge: 'Industrial Strength',
    rating: 4.9,
    reviewsCount: 154,
    description: 'Fast-acting professional degreasing formula that breaks down burnt-on fats, carbon deposits, and oil residue on culinary equipment.',
    features: [
      'Rapid grease-cutting action in under 3 minutes',
      'Non-corrosive to food-grade 304 stainless steel',
      'Biodegradable surfactants with low foaming',
      'Concentrated dilution ratio: up to 1:20'
    ],
    isFeatured: false,
    inStock: true,
  },
  {
    id: 'prod-12',
    name: 'Dual-Compartment Recycling Bin (Stainless)',
    category: 'Bins',
    subtitle: 'Modern waste segregation system with foot pedal',
    price: 135,
    originalPrice: 160,
    image: '/images/category-bins.webp',
    color: 'Silver / Stainless',
    size: '2 x 20 Litre',
    badge: 'Eco Separation',
    rating: 4.8,
    reviewsCount: 67,
    description: 'Two independent inner buckets allow effortless segregation of recyclables and general waste. Sleek brushed finish that resists smudges.',
    features: [
      'Dual independent color-coded pedals',
      'Stay-open lid lock for easy bag replacement',
      'Airtight lid seals prevent room odour leakage',
      'Integrated rear handle for easy room repositioning'
    ],
    isFeatured: false,
    inStock: true,
  }
];

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  image: string;
  count: number;
  description: string;
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'cat-1',
    name: 'Cloths & Wipes',
    slug: 'cloths-wipes',
    image: '/images/category-cloths-wipes.webp',
    count: 3,
    description: 'Microfiber, nonwoven and service industry wipes for immaculate cleaning.',
  },
  {
    id: 'cat-2',
    name: 'Kitchen Essentials',
    slug: 'kitchen-essentials',
    image: '/images/category-kitchen-essentials.webp',
    count: 2,
    description: 'Degreasers, sanitisers and hygiene aids for commercial kitchens.',
  },
  {
    id: 'cat-3',
    name: 'Bins',
    slug: 'bins',
    image: '/images/category-bins.webp',
    count: 2,
    description: 'Hands-free pedal bins and waste management solutions.',
  },
  {
    id: 'cat-4',
    name: 'Dispensers & Refills',
    slug: 'dispensers-refills',
    image: '/images/category-dispensers-refills.webp',
    count: 5,
    description: 'Wrap dispensers, automatic sanitizer dispensers, and genuine refill rolls.',
  },
];
