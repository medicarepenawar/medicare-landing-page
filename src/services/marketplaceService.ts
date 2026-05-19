import { directoryItems } from "../modules/main/constants/directory";
import type { DirectoryItem } from "../modules/main/types";

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
      category: "Obat",
      variant: "Strip isi 10 Tablet",
      originalPrice: 15000,
      discountedPrice: 12000,
      discountPercentage: 20,
      image: "/images/marketplace/bestseller_item.png",
    },
    {
      id: "prod-2",
      pharmacyId: "dir-7",
      pharmacyName: "MedPlus Pharmacy",
      name: "Amoxicillin 500mg",
      category: "Obat",
      variant: "Strip isi 10 Kapsul",
      originalPrice: 19000,
      discountedPrice: 15000,
      discountPercentage: 21,
      image: "/images/marketplace/bestseller_item.png",
    },
    {
      id: "prod-3",
      pharmacyId: "dir-7",
      pharmacyName: "MedPlus Pharmacy",
      name: "Vitamin D3 60K",
      category: "Vitamin & Suplemen",
      variant: "Strip isi 4 Tablet",
      originalPrice: 60000,
      discountedPrice: 45000,
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
      category: "Vitamin & Suplemen",
      variant: "Kapsul - 60 Kapsul",
      originalPrice: 178000,
      discountedPrice: 139000,
      discountPercentage: 22,
      image: "/images/marketplace/promo_bottles.png",
    },
    {
      id: "prod-5",
      pharmacyId: "dir-8",
      pharmacyName: "Caring Health Pharmacy",
      name: "Saline Nasal Spray",
      category: "Perawatan Diri",
      variant: "20ml",
      originalPrice: 100000,
      discountedPrice: 75000,
      discountPercentage: 25,
      image: "/images/marketplace/bestseller_item.png",
    },
    {
      id: "prod-6",
      pharmacyId: "dir-8",
      pharmacyName: "Caring Health Pharmacy",
      name: "AccuSure Blood Glucose Monitor",
      category: "Alat Kesehatan",
      variant: "Monitor",
      originalPrice: 640000,
      discountedPrice: 499000,
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
      Obat: {
        description: "Untuk berbagai keluhan",
        image: "/images/marketplace/bestseller_item.png",
      },
      "Vitamin & Suplemen": {
        description: "Jaga daya tahan tubuh",
        image: "/images/marketplace/promo_bottles.png",
      },
      "Perawatan Diri": {
        description: "Tampil bersih & percaya diri",
        image: "/images/marketplace/category_medicines.png",
      },
      "Alat Kesehatan": {
        description: "Dukung hidup sehat",
        image: "/images/marketplace/bestseller_item.png",
      },
      Kesehatan: {
        description: "Sehari-hari lebih sehat",
        image: "/images/marketplace/promo_bottles.png",
      },
      "Ibu & Anak": {
        description: "Kebutuhan si kecil",
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
