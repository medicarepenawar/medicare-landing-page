export const MARKETPLACE_CATEGORIES = [
  { id: 1, name: "Medicines", description: "Care for every need", image: "/images/marketplace/bestseller_item.png" },
  { id: 2, name: "Health Care", description: "Stay healthy, every day", image: "/images/marketplace/promo_bottles.png" },
  { id: 3, name: "Personal Care", description: "Look good, feel great", image: "/images/marketplace/category_medicines.png" },
  { id: 4, name: "Wellness", description: "Stronger inside out", image: "/images/marketplace/promo_bottles.png" },
  { id: 5, name: "Baby Care", description: "Gentle care for little ones", image: "/images/marketplace/category_medicines.png" },
  { id: 6, name: "Elderly Care", description: "Care that matters", image: "/images/marketplace/bestseller_item.png" }
];

export const MARKETPLACE_BESTSELLERS = [
  { 
    id: 1, 
    name: "Paracetamol 650mg", 
    variant: "Strip of 15 Tablets", 
    originalPrice: "RM35.00", 
    discountedPrice: "RM28.00", 
    discountBadge: "20% OFF", 
    image: "/images/marketplace/bestseller_item.png" 
  },
  { 
    id: 2, 
    name: "Amoxicillin 500mg", 
    variant: "Strip of 10 Capsules", 
    originalPrice: "RM65.00", 
    discountedPrice: "RM52.00", 
    discountBadge: "20% OFF", 
    image: "/images/marketplace/bestseller_item.png" 
  },
  { 
    id: 3, 
    name: "Omega 3 Fish Oil", 
    variant: "Capsule - 60 Softgels", 
    originalPrice: "RM399.00", 
    discountedPrice: "RM299.00", 
    discountBadge: "25% OFF", 
    image: "/images/marketplace/promo_bottles.png" 
  },
  { 
    id: 4, 
    name: "Vitamin D3 60K", 
    variant: "Strip of 4 Tablets", 
    originalPrice: "RM80.00", 
    discountedPrice: "RM60.00", 
    discountBadge: "25% OFF", 
    image: "/images/marketplace/category_medicines.png" 
  },
  { 
    id: 5, 
    name: "Saline Nasal Spray", 
    variant: "20ml", 
    originalPrice: "RM100.00", 
    discountedPrice: "RM75.00", 
    discountBadge: "25% OFF", 
    image: "/images/marketplace/bestseller_item.png" 
  },
  { 
    id: 6, 
    name: "AccuSure Blood Glucose", 
    variant: "Monitor", 
    originalPrice: "RM999.00", 
    discountedPrice: "RM699.00", 
    discountBadge: "22% OFF", 
    image: "/images/marketplace/category_medicines.png" 
  }
];

export const MARKETPLACE_BENEFITS = [
  { id: 1, title: "Order with Prescription", subtitle: "Upload & Save Time" },
  { id: 2, title: "Expert Pharmacist Support", subtitle: "We're Here to Help" },
  { id: 3, title: "Doorstep Delivery", subtitle: "On-time, Every time" },
  { id: 4, title: "Easy Returns & Refunds", subtitle: "Hassle-free Policy" }
];

export const MARKETPLACE_PRODUCT_DETAIL = {
  id: 1,
  name: "Paracetamol 650mg",
  variant: "Strip of 15 Tablets",
  description: "Effective for fast relief of headaches, body aches, and fever. Paracetamol 650mg provides strong action against pain while being gentle on the stomach. Suitable for adults and children over 12 years.",
  originalPrice: "35.00",
  discountedPrice: "28.00",
  discountBadge: "20% OFF",
  image: "/images/marketplace/bestseller_item.png",
  manufacturer: "PharmaCare Inc.",
  stock: 124,
  highlights: [
    "Fast acting pain relief",
    "Reduces body temperature/fever",
    "Gentle on the stomach"
  ]
};

export const MARKETPLACE_CART_ITEMS = [
  {
    id: 1,
    name: "Paracetamol 650mg",
    variant: "Strip of 15 Tablets",
    price: 28.00,
    quantity: 2,
    image: "/images/marketplace/bestseller_item.png"
  },
  {
    id: 4,
    name: "Vitamin D3 60K",
    variant: "Strip of 4 Tablets",
    price: 60.00,
    quantity: 1,
    image: "/images/marketplace/category_medicines.png"
  }
];
