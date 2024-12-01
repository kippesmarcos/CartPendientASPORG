import { X, Zap, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: () => void;
  item: {
    name: string;
    price: number | { permanent: number; monthly: number };
    color: string;
    icon: string;
    features: string[];
    durationType?: 'permanent' | 'monthly';
    description?: string;
  };
}

export function StoreModal({
  isOpen,
  onClose,
  onAddToCart,
  item
}: StoreModalProps) {
  if (!isOpen) return null;

  const price = typeof item.price === 'number' ? item.price : item.price[item.durationType || 'permanent'];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg"
          onClick={e => e.stopPropagation()}
        >
          {/* Minecraft-style border */}
          <div className="absolute inset-0 bg-[#3B3B3B] rounded-lg transform scale-[1.02]" />
          <div className="absolute inset-0 bg-[#262626] rounded-lg transform scale-[1.01]" />
          
          {/* Main content */}
          <div className="relative bg-[#1D1D1D] rounded-lg overflow-hidden">
            {/* Header with dirt texture background */}
            <div className="relative">
              <div 
                className="absolute inset-0 opacity-10"
                style={{ 
                  backgroundImage: 'url("/textures/dirt.png")',
                  backgroundSize: '64px',
                  imageRendering: 'pixelated'
                }}
              />
              <div className="relative p-6 border-b-4 border-[#3B3B3B]">
                <button 
                  onClick={onClose}
                  className="minecraft-btn absolute right-4 top-4 w-8 h-8 flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-4">
                  <div className="minecraft-btn w-16 h-16 flex items-center justify-center p-2">
                    {typeof item.icon === 'string' && item.icon.startsWith('data:image') ? (
                      <div
                        className="w-full h-full"
                        style={{ color: item.color }}
                        dangerouslySetInnerHTML={{ __html: decodeURIComponent(item.icon.split(',')[1]) }}
                      />
                    ) : (
                      <img 
                        src={item.icon} 
                        alt={item.name} 
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-minecraft text-white">{item.name}</h3>
                    {item.description && (
                      <p className="text-gray-400 text-sm mt-1 font-minecraft">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Content with stone texture background */}
            <div 
              className="relative p-6 space-y-6"
              style={{ 
                backgroundImage: 'url("/textures/stone.png")',
                backgroundSize: '64px',
                imageRendering: 'pixelated'
              }}
            >
              <div className="relative">
                <div className="minecraft-btn p-4">
                  <h4 className="text-sm font-minecraft text-gray-300 mb-3">CARACTERÍSTICAS</h4>
                  <ul className="space-y-3">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span className="text-white font-minecraft">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="minecraft-btn p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 font-minecraft">PRECIO</span>
                  <div className="text-right">
                    <span className="text-2xl font-minecraft text-yellow-500">
                      ${price}
                    </span>
                    {item.durationType === 'monthly' && (
                      <span className="text-sm text-gray-400 ml-1 font-minecraft">/mes</span>
                    )}
                  </div>
                </div>

                <button
                  onClick={onAddToCart}
                  className="minecraft-btn w-full py-3 text-white font-minecraft flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                >
                  <ShoppingCart className="w-4 h-4" />
                  AGREGAR AL CARRITO
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}