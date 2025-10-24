import { ShoppingCart, Heart, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCartClick: () => void;
  onWishlistClick: () => void;
  currentView: 'dashboard' | 'products';
  onViewChange: (view: 'dashboard' | 'products') => void;
}

export function Header({
  cartCount,
  wishlistCount,
  searchQuery,
  onSearchChange,
  onCartClick,
  onWishlistClick,
  currentView,
  onViewChange
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                ShopHub
              </h1>
            </div>

            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => onViewChange('dashboard')}
                className={`text-sm font-medium transition-colors ${
                  currentView === 'dashboard'
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => onViewChange('products')}
                className={`text-sm font-medium transition-colors ${
                  currentView === 'products'
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Products
              </button>
            </nav>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={onWishlistClick}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Heart className="w-5 h-5 text-gray-700" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        )}

        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => {
                  onViewChange('dashboard');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2 rounded-lg transition-colors ${
                  currentView === 'dashboard'
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  onViewChange('products');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2 rounded-lg transition-colors ${
                  currentView === 'products'
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Products
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
