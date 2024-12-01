import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Trash2, CreditCard, ArrowRight, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartPreview() {
  const { cart, toggleCart, removeItem, clearCart, addItem } = useCart();
  const total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleIncreaseQuantity = (item: typeof cart.items[0]) => {
    addItem({ ...item });
  };

  const handleDecreaseQuantity = (item: typeof cart.items[0]) => {
    if (item.quantity > 1) {
      addItem({ ...item, quantity: item.quantity - 1 });
    } else {
      removeItem(item.id);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleCart}
        className="fixed right-4 bottom-4 bg-gradient-to-r from-beige-400 to-beige-500 text-black p-3 rounded-full shadow-lg z-40"
      >
        <div className="relative">
          <ShoppingCart className="w-5 h-5" />
          {cart.items.length > 0 && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center"
            >
              {cart.items.reduce((sum, item) => sum + item.quantity, 0)}
            </motion.span>
          )}
        </div>
      </motion.button>

      <AnimatePresence>
        {cart.isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={toggleCart}
            />
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="fixed right-0 top-0 h-full w-full max-w-[320px] bg-gradient-to-b from-gray-900 to-black shadow-xl z-50 flex flex-col"
            >
              <div className="bg-gradient-to-r from-beige-900/50 to-beige-800/50 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-beige-100" />
                  <h2 className="text-lg font-bold text-beige-100">Tu Carrito</h2>
                </div>
                <button 
                  onClick={toggleCart}
                  className="rounded-full p-1 hover:bg-black/20 transition-colors"
                >
                  <X className="w-5 h-5 text-beige-300" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-3">
                {cart.items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-4">
                    <ShoppingCart className="w-12 h-12 text-beige-800 mb-3" />
                    <p className="text-beige-300 text-base">Tu carrito está vacío</p>
                    <p className="text-beige-400 text-sm mt-1">
                      Agrega algunos items para comenzar
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {cart.items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-r from-beige-900/30 to-beige-800/30 rounded-lg overflow-hidden"
                      >
                        <div className="p-2">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-10 h-10 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: `${item.color}20` }}
                            >
                              <img 
                                src={item.icon} 
                                alt={item.name} 
                                className="w-8 h-8 object-contain"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-beige-100 text-sm truncate">{item.name}</h3>
                              <div className="flex items-center gap-1 text-xs">
                                <span 
                                  className="px-1.5 py-0.5 rounded-full"
                                  style={{ 
                                    backgroundColor: `${item.color}20`,
                                    color: item.color 
                                  }}
                                >
                                  {item.type === 'kit' ? 'Kit' : 'Rank'}
                                </span>
                                <span className="text-beige-400">
                                  {item.durationType === 'monthly' ? 'Mensual' : 'Permanente'}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-beige-100 text-sm">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                              <div className="flex items-center gap-1 mt-1">
                                <button
                                  onClick={() => handleDecreaseQuantity(item)}
                                  className="p-0.5 hover:bg-beige-800/30 rounded transition-colors"
                                >
                                  <Minus className="w-3 h-3 text-beige-400" />
                                </button>
                                <span className="text-beige-300 text-xs min-w-[16px] text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => handleIncreaseQuantity(item)}
                                  className="p-0.5 hover:bg-beige-800/30 rounded transition-colors"
                                >
                                  <Plus className="w-3 h-3 text-beige-400" />
                                </button>
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="text-red-400 hover:text-red-300 p-0.5 transition-colors ml-1"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {cart.items.length > 0 && (
                <div className="border-t border-beige-800/50 bg-black/50 backdrop-blur-sm p-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-beige-300 text-sm">Total:</span>
                    <span className="font-bold text-beige-100">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={clearCart}
                      className="flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors text-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                      Vaciar
                    </button>
                    <button
                      onClick={() => {
                        alert('Procesando pago...');
                      }}
                      className="flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-beige-400 to-beige-500 text-black font-medium hover:from-beige-500 hover:to-beige-600 transition-colors text-sm"
                    >
                      <CreditCard className="w-4 h-4" />
                      Pagar
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}