import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../data/mockData';

interface ProductCardProps {
  product: Product;
  isInWishlist: boolean;
  isInCart: boolean;
  onToggleWishlist: () => void;
  onToggleCart: () => void;
  onProductClick: () => void;
}

export function ProductCard({
  product,
  isInWishlist,
  isInCart,
  onToggleWishlist,
  onToggleCart,
  onProductClick
}: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden cursor-pointer" onClick={onProductClick}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.trending && (
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              🔥 Trending
            </span>
          )}
          {discount > 0 && (
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {discount}% OFF
            </span>
          )}
          {!product.inStock && (
            <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
              Out of Stock
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist();
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all shadow-md"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-700'
            }`}
          />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {product.category}
          </span>
          {product.featured && (
            <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>

        <h3
          onClick={onProductClick}
          className="font-semibold text-gray-900 mb-2 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors"
        >
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-900 ml-1">
              {product.rating}
            </span>
          </div>
          <span className="text-xs text-gray-500">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={onToggleCart}
          disabled={!product.inStock}
          className={`w-full py-2.5 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
            product.inStock
              ? isInCart
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          {!product.inStock
            ? 'Out of Stock'
            : isInCart
            ? 'In Cart'
            : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
