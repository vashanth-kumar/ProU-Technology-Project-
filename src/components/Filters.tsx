import { SlidersHorizontal, X } from 'lucide-react';
import { categories } from '../data/mockData';
import * as Icons from 'lucide-react';

interface FiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  showOnlyInStock: boolean;
  onShowOnlyInStockChange: (value: boolean) => void;
  showOnlyTrending: boolean;
  onShowOnlyTrendingChange: (value: boolean) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
  sortBy: string;
  onSortByChange: (sortBy: string) => void;
  onReset: () => void;
}

export function Filters({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  showOnlyInStock,
  onShowOnlyInStockChange,
  showOnlyTrending,
  onShowOnlyTrendingChange,
  minRating,
  onMinRatingChange,
  sortBy,
  onSortByChange,
  onReset
}: FiltersProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-blue-600" />
          <h3 className="font-bold text-gray-900">Filters</h3>
        </div>
        <button
          onClick={onReset}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
        >
          <X className="w-4 h-4" />
          Reset
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Category
          </label>
          <div className="space-y-2">
            {categories.map((category) => {
              const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
              return (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    <span className="text-sm">{category.name}</span>
                  </div>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Price Range
          </label>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Min"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Max"
              />
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
              className="w-full accent-blue-600"
            />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="reviews">Most Reviews</option>
          </select>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Minimum Rating
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => onMinRatingChange(rating)}
                className={`flex-1 py-2 px-3 rounded-lg border-2 transition-all font-medium ${
                  minRating === rating
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                {rating}★
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={showOnlyInStock}
              onChange={(e) => onShowOnlyInStockChange(e.target.checked)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">
              Show only in stock
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={showOnlyTrending}
              onChange={(e) => onShowOnlyTrendingChange(e.target.checked)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">
              Show only trending
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
