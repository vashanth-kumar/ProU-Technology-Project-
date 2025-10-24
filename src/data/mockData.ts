export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  inStock: boolean;
  trending: boolean;
  featured: boolean;
  tags: string[];
  specifications: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 1234,
    image: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Experience immersive sound quality with active noise cancellation and 30-hour battery life.",
    inStock: true,
    trending: true,
    featured: true,
    tags: ["wireless", "noise-canceling", "bluetooth"],
    specifications: {
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "250g",
      "Warranty": "2 years"
    }
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "Wearables",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 892,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Track your health and fitness goals with advanced sensors and GPS tracking.",
    inStock: true,
    trending: true,
    featured: false,
    tags: ["fitness", "smartwatch", "health"],
    specifications: {
      "Display": "1.4 inch AMOLED",
      "Water Resistance": "5ATM",
      "Battery": "7 days",
      "Sensors": "Heart rate, SpO2, GPS"
    }
  },
  {
    id: 3,
    name: "Professional Camera Lens",
    category: "Photography",
    price: 899.99,
    rating: 4.9,
    reviews: 456,
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Capture stunning photos with this versatile 24-70mm f/2.8 professional lens.",
    inStock: true,
    trending: false,
    featured: true,
    tags: ["photography", "lens", "professional"],
    specifications: {
      "Focal Length": "24-70mm",
      "Aperture": "f/2.8",
      "Mount": "Universal",
      "Weight": "800g"
    }
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 449.99,
    originalPrice: 599.99,
    rating: 4.7,
    reviews: 678,
    image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Premium ergonomic design with lumbar support for all-day comfort.",
    inStock: true,
    trending: true,
    featured: false,
    tags: ["office", "ergonomic", "furniture"],
    specifications: {
      "Material": "Mesh & Steel",
      "Max Weight": "150kg",
      "Adjustable": "Height, Arms, Tilt",
      "Warranty": "5 years"
    }
  },
  {
    id: 5,
    name: "4K Drone with Camera",
    category: "Electronics",
    price: 799.99,
    rating: 4.5,
    reviews: 345,
    image: "https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Capture breathtaking aerial footage with 4K video and intelligent flight modes.",
    inStock: true,
    trending: true,
    featured: true,
    tags: ["drone", "4k", "camera"],
    specifications: {
      "Camera": "4K 60fps",
      "Flight Time": "30 minutes",
      "Range": "10km",
      "Obstacle Avoidance": "Yes"
    }
  },
  {
    id: 6,
    name: "Mechanical Gaming Keyboard",
    category: "Gaming",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 1567,
    image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "RGB backlit mechanical keyboard with customizable keys and tactile switches.",
    inStock: true,
    trending: true,
    featured: false,
    tags: ["gaming", "rgb", "mechanical"],
    specifications: {
      "Switch Type": "Mechanical Blue",
      "Lighting": "RGB Customizable",
      "Connection": "USB-C & Wireless",
      "Battery": "40 hours"
    }
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 129.99,
    rating: 4.6,
    reviews: 923,
    image: "https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Waterproof portable speaker with 360-degree sound and 20-hour battery.",
    inStock: true,
    trending: false,
    featured: false,
    tags: ["bluetooth", "portable", "waterproof"],
    specifications: {
      "Power": "40W",
      "Battery": "20 hours",
      "Waterproof": "IPX7",
      "Connectivity": "Bluetooth 5.0"
    }
  },
  {
    id: 8,
    name: "Ultra-Wide Gaming Monitor",
    category: "Electronics",
    price: 599.99,
    originalPrice: 799.99,
    rating: 4.9,
    reviews: 789,
    image: "https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "34-inch curved ultra-wide monitor with 144Hz refresh rate and HDR support.",
    inStock: false,
    trending: true,
    featured: true,
    tags: ["monitor", "gaming", "ultrawide"],
    specifications: {
      "Size": "34 inches",
      "Resolution": "3440x1440",
      "Refresh Rate": "144Hz",
      "Panel": "VA Curved"
    }
  },
  {
    id: 9,
    name: "Smart Home Security Camera",
    category: "Smart Home",
    price: 179.99,
    rating: 4.7,
    reviews: 1123,
    image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "AI-powered security camera with night vision and motion detection alerts.",
    inStock: true,
    trending: true,
    featured: false,
    tags: ["security", "smart-home", "camera"],
    specifications: {
      "Resolution": "1080p",
      "Night Vision": "Yes",
      "Storage": "Cloud & Local",
      "AI Detection": "Person, Pet, Vehicle"
    }
  },
  {
    id: 10,
    name: "Premium Leather Backpack",
    category: "Fashion",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.5,
    reviews: 567,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Handcrafted genuine leather backpack with laptop compartment and multiple pockets.",
    inStock: true,
    trending: false,
    featured: false,
    tags: ["leather", "backpack", "fashion"],
    specifications: {
      "Material": "Genuine Leather",
      "Laptop Size": "Up to 15.6 inches",
      "Capacity": "25L",
      "Pockets": "5 compartments"
    }
  },
  {
    id: 11,
    name: "Wireless Charging Pad",
    category: "Accessories",
    price: 49.99,
    rating: 4.4,
    reviews: 2134,
    image: "https://images.pexels.com/photos/4526413/pexels-photo-4526413.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Fast wireless charging for all Qi-enabled devices with LED indicator.",
    inStock: true,
    trending: false,
    featured: false,
    tags: ["wireless", "charging", "accessory"],
    specifications: {
      "Power": "15W Fast Charge",
      "Compatibility": "All Qi devices",
      "Safety": "Over-charge protection",
      "Material": "Aluminum & Glass"
    }
  },
  {
    id: 12,
    name: "Professional Espresso Machine",
    category: "Kitchen",
    price: 699.99,
    rating: 4.8,
    reviews: 445,
    image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Barista-quality espresso at home with dual boiler system and PID temperature control.",
    inStock: true,
    trending: true,
    featured: true,
    tags: ["espresso", "coffee", "kitchen"],
    specifications: {
      "Boiler": "Dual System",
      "Pressure": "15 bar",
      "Tank Capacity": "2L",
      "Features": "PID Control, Pre-infusion"
    }
  }
];

export const categories: Category[] = [
  { id: "all", name: "All Products", icon: "LayoutGrid", count: 12 },
  { id: "electronics", name: "Electronics", icon: "Laptop", count: 4 },
  { id: "wearables", name: "Wearables", icon: "Watch", count: 1 },
  { id: "photography", name: "Photography", icon: "Camera", count: 1 },
  { id: "furniture", name: "Furniture", icon: "Armchair", count: 1 },
  { id: "gaming", name: "Gaming", icon: "Gamepad2", count: 1 },
  { id: "audio", name: "Audio", icon: "Music", count: 1 },
  { id: "smart-home", name: "Smart Home", icon: "Home", count: 1 },
  { id: "fashion", name: "Fashion", icon: "ShoppingBag", count: 1 },
  { id: "kitchen", name: "Kitchen", icon: "Coffee", count: 1 }
];

export interface SalesData {
  month: string;
  sales: number;
  orders: number;
}

export const salesData: SalesData[] = [
  { month: "Jan", sales: 45000, orders: 234 },
  { month: "Feb", sales: 52000, orders: 287 },
  { month: "Mar", sales: 48000, orders: 256 },
  { month: "Apr", sales: 61000, orders: 324 },
  { month: "May", sales: 58000, orders: 298 },
  { month: "Jun", sales: 67000, orders: 356 },
  { month: "Jul", sales: 72000, orders: 389 }
];

export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalProducts: number;
  avgRating: number;
  revenueGrowth: number;
  orderGrowth: number;
}

export const dashboardStats: DashboardStats = {
  totalRevenue: 403000,
  totalOrders: 2144,
  totalProducts: 12,
  avgRating: 4.7,
  revenueGrowth: 12.5,
  orderGrowth: 8.3
};
