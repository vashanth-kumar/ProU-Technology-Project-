import { X, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Product } from '../data/mockData';

interface WishlistProps {
  items: Product[];
  onClose: () => void;
  onRemoveItem: (productId: number) => void;
  onAddToCart: (productId: number) => void;
  cartItems: Set<number>;
}

export function Wishlist({ items, onClose, onRemoveItem, onAddToCart, cartItems }: WishlistProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center">
      <div className="bg-white rounded-t-2xl md:rounded-2xl shadow-2xl w-full md:max-w-2xl max-h-[90vh] flex flex-col">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-red-500 fill-red-500" />
            <h2 className="text-xl font-bold text-gray-900">
              Wishlist ({items.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
              <p className="text-gray-600 mb-6">Save your favorite products here!</p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {items.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{product.category}</p>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => onAddToCart(product.id)}
                        disabled={!product.inStock || cartItems.has(product.id)}
                        className={`flex-1 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all text-sm ${
                          !product.inStock
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : cartItems.has(product.id)
                            ? 'bg-green-500 text-white'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {!product.inStock
                          ? 'Out of Stock'
                          : cartItems.has(product.id)
                          ? 'In Cart'
                          : 'Add to Cart'}
                      </button>

                      <button
                        onClick={() => onRemoveItem(product.id)}
                        className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {product.trending && (
                    <div className="flex items-start">
                      <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">
                        🔥 Hot
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-2xl">
            <button
              onClick={() => {
                items.forEach(product => {
                  if (product.inStock && !cartItems.has(product.id)) {
                    onAddToCart(product.id);
                  }
                });
              }}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
            >
              Add All to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
