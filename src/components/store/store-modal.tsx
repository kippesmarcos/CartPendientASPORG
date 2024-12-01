import { Zap, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: () => void;
  item: {
    name: string;
    price: number;
    color: string;
    icon: string;
    features: string[];
    durationType?: 'permanent' | 'monthly';
  };
}

export function StoreModal({
  isOpen,
  onClose,
  onAddToCart,
  item
}: StoreModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-gradient-to-b from-beige-900/90 to-beige-900/80 rounded-lg overflow-hidden w-full max-w-sm"
          onClick={e => e.stopPropagation()}
        >
          <div 
            className="p-4 relative border-b border-beige-800/30"
            style={{ backgroundColor: `${item.color}10` }}
          >
            <div className="absolute inset-0 opacity-5" 
              style={{ 
                backgroundImage: `linear-gradient(to bottom right, ${item.color}, transparent)` 
              }} 
            />
            <div className="relative flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="font-bold text-beige-100">{item.name}</h3>
                <div className="text-lg font-bold" style={{ color: item.color }}>
                  ${item.price}
                  {item.durationType === 'monthly' && (
                    <span className="text-xs text-beige-400 ml-1">/mes</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-2">
            {item.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-beige-400 flex-shrink-0" />
                <span className="text-beige-300">{feature}</span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-beige-900/30 border-t border-beige-800/30">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onAddToCart}
              className="w-full bg-beige-400 hover:bg-beige-500 text-black py-2.5 rounded-lg transition-colors duration-300 font-medium text-sm flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Agregar al carrito
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}