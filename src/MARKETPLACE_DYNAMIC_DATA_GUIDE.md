/\*\*

- MARKETPLACE DYNAMIC DATA SYSTEM
-
- This document explains the new dynamic marketplace data system based on pharmacy data.
-
- ============================================================================
- ARCHITECTURE OVERVIEW
- ============================================================================
-
- 1.  MARKETPLACE SERVICE (src/services/marketplaceService.ts)
- - Pulls pharmacy vendor data from the directory
- - Maps pharmacy IDs to associated products
- - Provides methods to fetch products by:
-      - Bestsellers (top products)
-      - Pharmacy ID
-      - Category
-      - Search query
- - Generates dynamic product categories based on actual products
-
- 2.  MARKETPLACE HOOK (src/hooks/useMarketplace.ts)
- - React hooks for easy component integration
- - Memoized for performance
- - Available hooks:
-      - usePharmacyVendors() - Get all pharmacy vendors
-      - useMarketplaceProducts() - Get all products
-      - useMarketplaceBestsellers() - Get top products
-      - usePharmacyProducts(pharmacyId) - Get products for specific pharmacy
-      - useProductsByCategory(category) - Filter by category
-      - useProductCategories() - Get all categories
-      - useProductSearch(query) - Search products
-      - usePharmacyById(id) - Get specific pharmacy
-
- 3.  UPDATED COMPONENTS
- - BestsellersSection.tsx - Now displays dynamic bestsellers from marketplaceService
- - CategorySection.tsx - Categories dynamically generated from actual products
-
- ============================================================================
- CURRENT PHARMACY PRODUCTS MAPPING
- ============================================================================
-
- MedPlus Pharmacy (dir-7, Shah Alam)
- - Paracetamol 650mg
- - Amoxicillin 500mg
- - Vitamin D3 60K
-
- Caring Health Pharmacy (dir-8, Kuala Lumpur)
- - Omega 3 Fish Oil
- - Saline Nasal Spray
- - AccuSure Blood Glucose Monitor
-
- ============================================================================
- HOW TO ADD MORE PHARMACIES & PRODUCTS
- ============================================================================
-
- Step 1: Add pharmacy vendor to src/modules/main/constants/directory.ts
- Example:
- {
-     id: "dir-99",
-     name: "Your Pharmacy Name",
-     role: "Vendor",
-     specialty: "Licensed Pharmacy",
-     location: "City Name",
-     rating: 4.5,
-     availability: "Open 24/7",
-     image: pharmacyImg,
- }
-
- Step 2: Add products for the pharmacy in src/services/marketplaceService.ts
- In the PHARMACY_PRODUCTS_MAP object, add:
- "dir-99": [
-     {
-       id: "prod-X",
-       pharmacyId: "dir-99",
-       pharmacyName: "Your Pharmacy Name",
-       name: "Product Name",
-       category: "Obat", // or other category
-       variant: "Product Variant",
-       originalPrice: 50000,
-       discountedPrice: 40000,
-       discountPercentage: 20,
-       image: "/images/marketplace/image.png",
-     },
-     // ... more products
- ]
-
- ============================================================================
- HOW TO USE IN COMPONENTS
- ============================================================================
-
- Example 1: Display bestsellers
- ```

  ```
- import { useMarketplaceBestsellers } from "@/hooks/useMarketplace";
-
- function MyComponent() {
- const bestsellers = useMarketplaceBestsellers();
-
- return (
-     <div>
-       {bestsellers.map(product => (
-         <div key={product.id}>{product.name}</div>
-       ))}
-     </div>
- );
- }
- ```

  ```
-
- Example 2: Display products for specific pharmacy
- ```

  ```
- import { usePharmacyProducts } from "@/hooks/useMarketplace";
-
- function PharmacyPage({ pharmacyId }) {
- const products = usePharmacyProducts(pharmacyId);
- // ...
- }
- ```

  ```
-
- Example 3: Display products by category
- ```

  ```
- import { useProductsByCategory } from "@/hooks/useMarketplace";
-
- function CategoryPage({ categoryName }) {
- const products = useProductsByCategory(categoryName);
- // ...
- }
- ```

  ```
-
- Example 4: Search products
- ```

  ```
- import { useProductSearch } from "@/hooks/useMarketplace";
-
- function SearchResults({ query }) {
- const results = useProductSearch(query);
- // ...
- }
- ```

  ```
-
- ============================================================================
- FUTURE ENHANCEMENTS
- ============================================================================
-
- 1.  DATABASE INTEGRATION
- Replace PHARMACY_PRODUCTS_MAP with API calls to fetch products from database
- Update marketplaceService to make async calls
-
- 2.  INVENTORY MANAGEMENT
- Add stock levels, warehouse locations, and availability tracking
-
- 3.  PRODUCT RATINGS & REVIEWS
- Add user ratings and reviews for each product
-
- 4.  DYNAMIC PRICING
- Fetch pricing from inventory/pricing APIs
-
- 5.  PHARMACY SCHEDULES
- Store operating hours and special schedules for each pharmacy
-
- 6.  PRODUCT FILTERING
- Add more sophisticated filtering (price range, rating, etc.)
-
- ============================================================================
- MIGRATION FROM DUMMY DATA
- ============================================================================
-
- The system still supports the old MARKETPLACE_BESTSELLERS and
- MARKETPLACE_CATEGORIES constants, but components have been updated to use
- the new dynamic data source instead.
-
- If you need to keep using dummy data for any component:
- Import from: src/constants/marketplaceDummyData.ts
-
- ============================================================================
- PERFORMANCE NOTES
- ============================================================================
-
- - All hooks use useMemo() to prevent unnecessary recalculations
- - marketplaceService is a singleton, initialized once
- - Data is computed in-memory (no database calls currently)
- - For large datasets, consider implementing pagination in components
-
- ============================================================================
  \*/

// This file is for documentation purposes only.
// Refer to the actual implementation files:
// - src/services/marketplaceService.ts
// - src/hooks/useMarketplace.ts
