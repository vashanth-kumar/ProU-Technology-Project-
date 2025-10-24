# ShopHub - E-Commerce Product Dashboard

A modern, responsive e-commerce product dashboard built with React, TypeScript, and Tailwind CSS. Features interactive product browsing, advanced filtering, shopping cart, wishlist, and analytics dashboard.

## 📸 Screenshots

### Dashboard View
![Dashboard]([https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Dashboard+View](https://grim-plum-ynwgbmg0bf.edgeone.app/screencapture-localhost-5173-2025-10-24-18_03_53.png)

The dashboard provides comprehensive business analytics including:
- Revenue and order statistics
- Sales trends over time
- Top-performing products
- Key performance indicators

### Products View
![Products](https://via.placeholder.com/800x400/06B6D4/FFFFFF?text=Products+View)

Browse products with:
- Grid and list view options
- Advanced filtering and sorting
- Real-time search
- Interactive product cards

## ✨ Features

### 🛍️ Product Browsing
- **12 Mock Products** with detailed information
- **Grid/List View Toggle** for flexible browsing
- **Product Cards** with images, ratings, prices, and badges
- **Product Detail Modal** with full specifications
- **Trending & Featured** product highlights
- **Stock Status** indicators

### 🔍 Advanced Filtering & Search
- **Real-time Search** across product names, descriptions, and categories
- **Category Filtering** with 10 different categories
- **Price Range Filter** with dual inputs and slider
- **Rating Filter** (1-5 stars minimum)
- **Stock Filter** (show only in-stock items)
- **Trending Filter** (show only trending products)
- **Multiple Sort Options**:
  - Featured
  - Price: Low to High
  - Price: High to Low
  - Highest Rated
  - Most Reviews

### 🛒 Shopping Cart
- **Add/Remove Products**
- **Quantity Management** with +/- controls
- **Price Calculations** (subtotal, tax, shipping)
- **Free Shipping** on orders over $50
- **Responsive Modal** design
- **Empty State** handling

### ❤️ Wishlist
- **Save Favorite Products**
- **Quick Add to Cart** from wishlist
- **Remove Items**
- **Add All to Cart** bulk action
- **Product Status** indicators

### 📊 Analytics Dashboard
- **Revenue & Order Statistics**
- **Sales Overview Chart** (7 months)
- **Top 5 Products** by popularity
- **Growth Metrics** with trend indicators
- **Conversion & Satisfaction Rates**
- **Visual KPI Cards**

### 🎨 UI/UX Features
- **Fully Responsive Design** (mobile, tablet, desktop)
- **Modern Animations** (fade, slide, scale)
- **Smooth Transitions** on all interactions
- **Hover Effects** and micro-interactions
- **Professional Color Scheme** (blue/cyan gradients)
- **Clean Typography** and spacing
- **Intuitive Navigation**
- **Loading States** and empty states

### 🔧 Technical Features
- **TypeScript** for type safety
- **React Hooks** (useState, useMemo)
- **Component Architecture** with clear separation
- **Mock JSON Data** structure
- **Performance Optimized** with useMemo
- **Lucide React Icons**
- **Tailwind CSS** for styling
- **No External API Dependencies**

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repository-url>
cd shophub
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npm run typecheck
```

## 📁 Project Structure

```
shophub/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header with search
│   │   ├── Dashboard.tsx    # Analytics dashboard
│   │   ├── ProductCard.tsx  # Product display card
│   │   ├── ProductDetail.tsx # Product details modal
│   │   ├── Filters.tsx      # Filtering sidebar
│   │   ├── Cart.tsx         # Shopping cart modal
│   │   └── Wishlist.tsx     # Wishlist modal
│   ├── data/
│   │   └── mockData.ts      # Mock product data
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles & animations
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # This file
```

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.2** - Build tool and dev server

### Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - CSS vendor prefixes

### Icons & UI
- **Lucide React 0.344.0** - Icon library
- Custom animations and transitions

### Development Tools
- **ESLint 9.9.1** - Code linting
- **TypeScript ESLint** - TypeScript linting
- **Vite Plugin React** - React fast refresh

## 📊 Mock Data Structure

The application uses comprehensive mock data including:

### Products (12 items)
```typescript
{
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
```

### Categories (10 types)
- Electronics
- Wearables
- Photography
- Furniture
- Gaming
- Audio
- Smart Home
- Fashion
- Kitchen
- Accessories

### Sales Data
- 7 months of historical data
- Revenue and order tracking
- Trend analysis

### Dashboard Statistics
- Total revenue: $403,000
- Total orders: 2,144
- Growth metrics
- Average ratings

## 🎯 Key Features Implementation

### State Management
- **React Hooks** for local state
- **useMemo** for performance optimization
- **Efficient re-renders** with proper dependency arrays

### Filtering Logic
Multi-criteria filtering system:
1. Search across multiple fields
2. Category selection
3. Price range (dual inputs + slider)
4. Stock availability
5. Trending products
6. Minimum rating
7. Multiple sort options

### Cart & Wishlist
- **Set** for wishlist (O(1) lookup)
- **Map** for cart (quantity management)
- Persistent state during session
- Optimistic UI updates

### Responsive Design
Breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design Decisions

### Color Palette
- **Primary**: Blue (#2563EB) to Cyan (#06B6D4) gradients
- **Secondary**: Gray scale for neutral elements
- **Accent Colors**:
  - Green for success/stock
  - Red for wishlist/errors
  - Orange for trending
  - Purple for featured

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Regular weight, optimal line height
- **Interactive Elements**: Medium weight for emphasis

### Layout
- **Consistent Spacing**: 8px grid system
- **White Space**: Generous padding for readability
- **Card-Based Design**: Clean, modern containers
- **Sticky Header**: Always accessible navigation

## 🔄 Future Enhancements

### Potential Additions
- [ ] User authentication
- [ ] Backend API integration
- [ ] Persistent storage (localStorage/database)
- [ ] Order history
- [ ] Product reviews and comments
- [ ] Advanced analytics charts
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Payment integration
- [ ] Email notifications

## 🐛 Known Issues & Limitations

- Mock data only (no backend)
- No data persistence (refreshing clears cart/wishlist)
- Images from Pexels (external dependency)
- No actual checkout process
- Limited to 12 sample products

## 📝 Assumptions

1. **No Backend Required**: All data is mock/static
2. **Modern Browser Support**: Assumes ES6+ support
3. **Image Availability**: External Pexels images are accessible
4. **No Authentication**: Public access to all features
5. **Demo Purpose**: Optimized for presentation over production use

## 🎓 Code Quality

### Best Practices Followed
- ✅ **TypeScript** for type safety
- ✅ **Component composition** and reusability
- ✅ **Clean code** with clear naming
- ✅ **Consistent formatting**
- ✅ **Performance optimization** with useMemo
- ✅ **Accessibility** considerations
- ✅ **Responsive design** principles
- ✅ **Error handling** for edge cases

### Code Organization
- Separate components for each concern
- Centralized data management
- Reusable utility functions
- Clear prop interfaces
- Logical file structure

## 👤 Author

**VASHANTHA KUMAR K S**

Frontend Development Assessment for ProU Technology

Submission Date: October 26, 2025

## 📄 License

This project is created for assessment purposes.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind Labs** for Tailwind CSS
- **Lucide** for the icon library
- **Pexels** for stock images
- **ProU Technology** for the opportunity

---

## 📞 Contact

For any questions or clarifications, please contact:
- Email: vashanthakumarks2004@gmail.com


---

**Built with ❤️ using React + TypeScript + Tailwind CSS**
