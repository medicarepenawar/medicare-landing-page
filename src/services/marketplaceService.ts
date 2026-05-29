import { directoryItems } from "../modules/main/constants/directory";

export interface PharmacyProduct {
  id: string;
  pharmacyId: string;
  pharmacyName: string;
  name: string;
  category: string;
  variant: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  image: string;
  rating?: number;
  availability?: string;
}

export interface PharmacyVendor {
  id: string;
  name: string;
  location: string;
  rating: number;
  availability: string;
  image: string;
  specialty?: string;
}

// Default products for each pharmacy
const PHARMACY_PRODUCTS_MAP: Record<string, PharmacyProduct[]> = {
  "dir-7": [
    // MedPlus Pharmacy
    {
      id: "prod-1",
      pharmacyId: "dir-7",
      pharmacyName: "MedPlus Pharmacy",
      name: "Paracetamol 650mg",
      category: "Medicine",
      variant: "Strip of 10 Tablets",
      originalPrice: 15.00,
      discountedPrice: 12.00,
      discountPercentage: 20,
      image: "/images/marketplace/bestseller_item.png",
    },
    {
      id: "prod-2",
      pharmacyId: "dir-7",
      pharmacyName: "MedPlus Pharmacy",
      name: "Amoxicillin 500mg",
      category: "Medicine",
      variant: "Strip of 10 Capsules",
      originalPrice: 19.00,
      discountedPrice: 15.00,
      discountPercentage: 21,
      image: "/images/marketplace/bestseller_item.png",
    },
    {
      id: "prod-3",
      pharmacyId: "dir-7",
      pharmacyName: "MedPlus Pharmacy",
      name: "Vitamin D3 60K",
      category: "Vitamins & Supplements",
      variant: "Strip of 4 Tablets",
      originalPrice: 60.00,
      discountedPrice: 45.00,
      discountPercentage: 25,
      image: "/images/marketplace/category_medicines.png",
    },
  ],
  "dir-8": [
    // Caring Health Pharmacy
    {
      id: "prod-4",
      pharmacyId: "dir-8",
      pharmacyName: "Caring Health Pharmacy",
      name: "Omega 3 Fish Oil",
      category: "Vitamins & Supplements",
      variant: "Bottle - 60 Capsules",
      originalPrice: 178.00,
      discountedPrice: 139.00,
      discountPercentage: 22,
      image: "/images/marketplace/promo_bottles.png",
    },
    {
      id: "prod-5",
      pharmacyId: "dir-8",
      pharmacyName: "Caring Health Pharmacy",
      name: "Saline Nasal Spray",
      category: "Personal Care",
      variant: "20ml",
      originalPrice: 100.00,
      discountedPrice: 75.00,
      discountPercentage: 25,
      image: "/images/marketplace/bestseller_item.png",
    },
    {
      id: "prod-6",
      pharmacyId: "dir-8",
      pharmacyName: "Caring Health Pharmacy",
      name: "AccuSure Blood Glucose Monitor",
      category: "Medical Devices",
      variant: "Monitor",
      originalPrice: 640.00,
      discountedPrice: 499.00,
      discountPercentage: 22,
      image: "/images/marketplace/category_medicines.png",
    },
  ],
};

class MarketplaceService {
  /**
   * Get all pharmacy vendors from directory
   */
  getPharmacyVendors(): PharmacyVendor[] {
    const pharmacyItems = directoryItems.filter((item) => item.role === "Vendor");

    return pharmacyItems.map((item) => ({
      id: item.id,
      name: item.name,
      location: item.location,
      rating: item.rating,
      availability: item.availability,
      image: item.image,
      specialty: item.specialty,
    }));
  }

  /**
   * Get all products from all pharmacies
   */
  getAllProducts(): PharmacyProduct[] {
    return Object.values(PHARMACY_PRODUCTS_MAP).flat();
  }

  /**
   * Get bestselling products (top 6 across all pharmacies)
   */
  getBestsellers(): PharmacyProduct[] {
    return this.getAllProducts().slice(0, 6);
  }

  /**
   * Get products for a specific pharmacy
   */
  getPharmacyProducts(pharmacyId: string): PharmacyProduct[] {
    return PHARMACY_PRODUCTS_MAP[pharmacyId] || [];
  }

  /**
   * Get products by category
   */
  getProductsByCategory(category: string): PharmacyProduct[] {
    return this.getAllProducts().filter((product) => product.category.toLowerCase() === category.toLowerCase());
  }

  /**
   * Get unique product categories
   */
  getProductCategories(): { id: number; name: string; description: string; image: string }[] {
    const categories = new Set<string>();
    this.getAllProducts().forEach((product) => {
      categories.add(product.category);
    });

    const categoryDescriptions: Record<string, { description: string; image: string }> = {
      Medicine: {
        description: "For various symptoms",
        image: "/images/marketplace/bestseller_item.png",
      },
      "Vitamins & Supplements": {
        description: "Boost your daily immunity",
        image: "/images/marketplace/promo_bottles.png",
      },
      "Personal Care": {
        description: "Look fresh and confident",
        image: "/images/marketplace/category_medicines.png",
      },
      "Medical Devices": {
        description: "Monitor your vitals",
        image: "/images/marketplace/bestseller_item.png",
      },
      "Health Care": {
        description: "Everyday health essentials",
        image: "/images/marketplace/promo_bottles.png",
      },
      "Mother & Child": {
        description: "For the little ones",
        image: "/images/marketplace/category_medicines.png",
      },
    };

    return Array.from(categories).map((category, idx) => ({
      id: idx + 1,
      name: category,
      description: categoryDescriptions[category]?.description || "Produk kesehatan berkualitas",
      image: categoryDescriptions[category]?.image || "/images/marketplace/bestseller_item.png",
    }));
  }

  /**
   * Search products across all pharmacies
   */
  searchProducts(query: string): PharmacyProduct[] {
    const lowerQuery = query.toLowerCase();
    return this.getAllProducts().filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery) ||
        product.pharmacyName.toLowerCase().includes(lowerQuery),
    );
  }

  /**
   * Get pharmacy by ID
   */
  getPharmacyById(id: string): PharmacyVendor | null {
    const pharmacy = directoryItems.find((item) => item.id === id && item.role === "Vendor");

    if (!pharmacy) return null;

    return {
      id: pharmacy.id,
      name: pharmacy.name,
      location: pharmacy.location,
      rating: pharmacy.rating,
      availability: pharmacy.availability,
      image: pharmacy.image,
      specialty: pharmacy.specialty,
    };
  }

  /**
   * Get pharmacy by slug
   */
  getPharmacyBySlug(slug: string): (PharmacyVendor & { id: string }) | null {
    const pharmacy = directoryItems.find((item) => item.role === "Vendor" && item.slug === slug);

    if (!pharmacy) return null;

    return {
      id: pharmacy.id,
      name: pharmacy.name,
      location: pharmacy.location,
      rating: pharmacy.rating,
      availability: pharmacy.availability,
      image: pharmacy.image,
      specialty: pharmacy.specialty,
    };
  }

  /**
   * Get pharmacy ID by slug
   */
  getPharmacyIdBySlug(slug: string): string | null {
    const pharmacy = directoryItems.find((item) => item.role === "Vendor" && item.slug === slug);
    return pharmacy?.id || null;
  }
}

export const marketplaceService = new MarketplaceService();
