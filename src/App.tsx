import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { ProductCard } from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { Wishlist } from './components/Wishlist';
import { Filters } from './components/Filters';
import { products, Product } from './data/mockData';
import { LayoutGrid, List } from 'lucide-react';

interface CartItem {
  product: Product;
  quantity: number;
}

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'products'>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);
  const [showOnlyTrending, setShowOnlyTrending] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const [wishlist, setWishlist] = useState<Set<number>>(new Set());
  const [cart, setCart] = useState<Map<number, CartItem>>(new Map());
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' ||
        product.category.toLowerCase() === selectedCategory;

      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      const matchesStock = !showOnlyInStock || product.inStock;

      const matchesTrending = !showOnlyTrending || product.trending;

      const matchesRating = product.rating >= minRating;

      return matchesSearch && matchesCategory && matchesPrice && matchesStock &&
        matchesTrending && matchesRating;
    });

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, showOnlyInStock, showOnlyTrending, minRating, sortBy]);

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      return newWishlist;
    });
  };

  const toggleCart = (productId: number) => {
    setCart((prev) => {
      const newCart = new Map(prev);
      const product = products.find((p) => p.id === productId);
      if (!product) return newCart;

      if (newCart.has(productId)) {
        newCart.delete(productId);
      } else {
        newCart.set(productId, { product, quantity: 1 });
      }
      return newCart;
    });
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    setCart((prev) => {
      const newCart = new Map(prev);
      const item = newCart.get(productId);
      if (item) {
        newCart.set(productId, { ...item, quantity });
      }
      return newCart;
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => {
      const newCart = new Map(prev);
      newCart.delete(productId);
      return newCart;
    });
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist((prev) => {
      const newWishlist = new Set(prev);
      newWishlist.delete(productId);
      return newWishlist;
    });
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 1000]);
    setShowOnlyInStock(false);
    setShowOnlyTrending(false);
    setMinRating(0);
    setSortBy('featured');
  };

  const wishlistProducts = products.filter((p) => wishlist.has(p.id));
  const cartItems = Array.from(cart.values());

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartCount={cartItems.length}
        wishlistCount={wishlist.size}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onCartClick={() => setShowCart(true)}
        onWishlistClick={() => setShowWishlist(true)}
        currentView={currentView}
        onViewChange={setCurrentView}
      />

      {currentView === 'dashboard' ? (
        <Dashboard />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Products</h2>
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <Filters
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                showOnlyInStock={showOnlyInStock}
                onShowOnlyInStockChange={setShowOnlyInStock}
                showOnlyTrending={showOnlyTrending}
                onShowOnlyTrendingChange={setShowOnlyTrending}
                minRating={minRating}
                onMinRatingChange={setMinRating}
                sortBy={sortBy}
                onSortByChange={setSortBy}
                onReset={resetFilters}
              />
            </div>

            <div className="lg:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LayoutGrid className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <button
                    onClick={resetFilters}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                      : 'space-y-4'
                  }
                >
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isInWishlist={wishlist.has(product.id)}
                      isInCart={cart.has(product.id)}
                      onToggleWishlist={() => toggleWishlist(product.id)}
                      onToggleCart={() => toggleCart(product.id)}
                      onProductClick={() => setSelectedProduct(product)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          isInWishlist={wishlist.has(selectedProduct.id)}
          isInCart={cart.has(selectedProduct.id)}
          onClose={() => setSelectedProduct(null)}
          onToggleWishlist={() => toggleWishlist(selectedProduct.id)}
          onToggleCart={() => toggleCart(selectedProduct.id)}
        />
      )}

      {showCart && (
        <Cart
          items={cartItems}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateCartQuantity}
          onRemoveItem={removeFromCart}
        />
      )}

      {showWishlist && (
        <Wishlist
          items={wishlistProducts}
          onClose={() => setShowWishlist(false)}
          onRemoveItem={removeFromWishlist}
          onAddToCart={toggleCart}
          cartItems={new Set(cart.keys())}
        />
      )}
    </div>
  );
}

export default App;
