import { useMemo } from "react";
import { marketplaceService } from "../services/marketplaceService";
import type { PharmacyProduct, PharmacyVendor } from "../services/marketplaceService";

/**
 * Hook to get all pharmacy vendors
 */
export function usePharmacyVendors(): PharmacyVendor[] {
  return useMemo(() => marketplaceService.getPharmacyVendors(), []);
}

/**
 * Hook to get all products
 */
export function useMarketplaceProducts(): PharmacyProduct[] {
  return useMemo(() => marketplaceService.getAllProducts(), []);
}

/**
 * Hook to get bestselling products
 */
export function useMarketplaceBestsellers(): PharmacyProduct[] {
  return useMemo(() => marketplaceService.getBestsellers(), []);
}

/**
 * Hook to get products for a specific pharmacy
 */
export function usePharmacyProducts(pharmacyId: string): PharmacyProduct[] {
  return useMemo(() => marketplaceService.getPharmacyProducts(pharmacyId), [pharmacyId]);
}

/**
 * Hook to get products by category
 */
export function useProductsByCategory(category: string): PharmacyProduct[] {
  return useMemo(() => marketplaceService.getProductsByCategory(category), [category]);
}

/**
 * Hook to get product categories
 */
export function useProductCategories() {
  return useMemo(() => marketplaceService.getProductCategories(), []);
}

/**
 * Hook to search products
 */
export function useProductSearch(query: string): PharmacyProduct[] {
  return useMemo(() => marketplaceService.searchProducts(query), [query]);
}

/**
 * Hook to get pharmacy by ID
 */
export function usePharmacyById(id: string): PharmacyVendor | null {
  return useMemo(() => marketplaceService.getPharmacyById(id), [id]);
}

/**
 * Hook to get pharmacy by slug
 */
export function usePharmacyBySlug(slug: string) {
  return useMemo(() => marketplaceService.getPharmacyBySlug(slug), [slug]);
}

/**
 * Hook to get pharmacy ID by slug
 */
export function usePharmacyIdBySlug(slug: string): string | null {
  return useMemo(() => marketplaceService.getPharmacyIdBySlug(slug), [slug]);
}
