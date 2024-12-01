import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function CartSheet() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={() => navigate('/cart')}
      className="relative"
    >
      <ShoppingCart className="h-5 w-5 text-beige-300 hover:text-beige-100 transition-colors" />
      {cart.items.length > 0 && (
        <motion.span 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center"
        >
          <span className="bg-[#ff9f43] w-4 h-4 rounded-full flex items-center justify-center text-xs font-medium text-white">
            {itemCount}
          </span>
        </motion.span>
      )}
    </button>
  );
}