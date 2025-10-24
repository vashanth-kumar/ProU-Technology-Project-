import { X, Star, ShoppingCart, Heart, Package, Shield, Truck, RefreshCw } from 'lucide-react';
import { Product } from '../data/mockData';

interface ProductDetailProps {
  product: Product;
  isInWishlist: boolean;
  isInCart: boolean;
  onClose: () => void;
  onToggleWishlist: () => void;
  onToggleCart: () => void;
}

export function ProductDetail({
  product,
  isInWishlist,
  isInCart,
  onClose,
  onToggleWishlist,
  onToggleCart
}: ProductDetailProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
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
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                {product.featured && (
                  <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">{product.rating}</span>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="text-lg font-semibold text-green-600">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>

              <div className={`mb-6 p-4 rounded-lg ${
                product.inStock ? 'bg-green-50' : 'bg-red-50'
              }`}>
                <div className="flex items-center gap-2">
                  <Package className={`w-5 h-5 ${
                    product.inStock ? 'text-green-600' : 'text-red-600'
                  }`} />
                  <span className={`font-medium ${
                    product.inStock ? 'text-green-900' : 'text-red-900'
                  }`}>
                    {product.inStock ? 'In Stock - Ready to Ship' : 'Currently Out of Stock'}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 mb-8">
                <button
                  onClick={onToggleCart}
                  disabled={!product.inStock}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    product.inStock
                      ? isInCart
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {!product.inStock
                    ? 'Out of Stock'
                    : isInCart
                    ? 'In Cart'
                    : 'Add to Cart'}
                </button>

                <button
                  onClick={onToggleWishlist}
                  className="py-3 px-6 rounded-lg font-semibold border-2 border-gray-300 hover:border-red-500 transition-all"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-700'
                    }`}
                  />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Truck className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-900">Free Shipping</p>
                  <p className="text-xs text-gray-600">On orders $50+</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-900">Secure Payment</p>
                  <p className="text-xs text-gray-600">100% Protected</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <RefreshCw className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-900">Easy Returns</p>
                  <p className="text-xs text-gray-600">30-day policy</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
