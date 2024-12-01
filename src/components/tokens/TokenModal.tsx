import { motion } from 'framer-motion';
import { Zap, X } from 'lucide-react';
import type { Token } from '@/types/token';

interface TokenModalProps {
  token: Token & { selectedAmount: number; selectedPrice: number };
  onClose: () => void;
  onAddToCart: () => void;
}

export function TokenModal({ token, onClose, onAddToCart }: TokenModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-beige-900/90 rounded-xl max-w-md w-full overflow-hidden border border-beige-800/30"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-beige-800/30">
          <h3 className="text-xl font-bold text-beige-100">Detalles del Token</h3>
          <button
            onClick={onClose}
            className="text-beige-400 hover:text-beige-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div 
          className="p-6 text-center relative border-b border-beige-800/30"
          style={{ backgroundColor: `${token.color}15` }}
        >
          <img 
            src={token.icon} 
            alt={token.name} 
            className="w-24 h-24 mx-auto mb-4 drop-shadow-xl"
          />
          <h3 className="text-2xl font-bold mb-2" style={{ color: token.color }}>
            {token.name} x{token.selectedAmount}
          </h3>
          <div className="text-3xl font-bold text-beige-100">
            ${token.selectedPrice.toFixed(2)}
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-beige-100 mb-3">Características:</h4>
            <p className="text-beige-300">{token.description}</p>
          </div>

          <div className="bg-beige-900/30 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-beige-400">
              <Zap className="w-4 h-4" />
              <span>Cantidad: {token.selectedAmount} tokens</span>
            </div>
          </div>

          <motion.button
            onClick={onAddToCart}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-beige-400 hover:bg-beige-500 text-black py-3 rounded-lg transition-all duration-300 font-medium"
          >
            Agregar al carrito
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}