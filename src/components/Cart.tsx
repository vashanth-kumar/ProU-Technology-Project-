import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../data/mockData';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

export function Cart({ items, onClose, onUpdateQuantity, onRemoveItem }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + tax + shipping;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center">
      <div className="bg-white rounded-t-2xl md:rounded-2xl shadow-2xl w-full md:max-w-2xl max-h-[90vh] flex flex-col">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">
              Shopping Cart ({items.length})
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
                <ShoppingBag className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Add some products to get started!</p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{item.product.category}</p>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                          }
                          className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-700" />
                        </button>
                        <span className="font-medium text-gray-900 w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-gray-900 text-lg">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      ${item.product.price} each
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-2xl">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              {subtotal < 50 && subtotal > 0 && (
                <p className="text-xs text-gray-600">
                  Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                </p>
              )}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-300 mb-4">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-blue-600">
                ${total.toFixed(2)}
              </span>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
