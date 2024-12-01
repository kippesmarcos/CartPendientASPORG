import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface StoreCardProps {
  name: string;
  price: number | { permanent: number; monthly: number };
  color: string;
  icon: string;
  features: string[];
  durationType?: 'permanent' | 'monthly';
  onClick: () => void;
}

export function StoreCard({
  name,
  price,
  color,
  icon,
  features,
  durationType,
  onClick
}: StoreCardProps) {
  const displayPrice = typeof price === 'number' ? price : price[durationType || 'permanent'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group bg-gradient-to-b from-beige-900/30 to-beige-900/10 rounded-lg overflow-hidden border border-beige-800/20 hover:border-beige-800/40 transition-all duration-300"
    >
      <div 
        className="p-3 text-center relative"
        style={{ backgroundColor: `${color}10` }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
          style={{ 
            backgroundImage: `linear-gradient(to bottom right, ${color}, transparent)` 
          }} 
        />
        <img 
          src={icon} 
          alt={name} 
          className="w-12 h-12 mx-auto mb-2 transform group-hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-lg font-bold mb-1" style={{ color }}>
          {name}
        </h3>
        <div className="text-xl font-bold text-beige-100">
          ${displayPrice}
          {durationType === 'monthly' && (
            <span className="text-xs text-beige-400 ml-1">/mes</span>
          )}
        </div>
      </div>

      <div className="p-3">
        <ul className="space-y-1.5 mb-3">
          {features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-xs">
              <Zap className="w-3 h-3 text-beige-400 flex-shrink-0" />
              <span className="text-beige-300">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onClick}
          className="w-full bg-beige-400/10 hover:bg-beige-400/20 text-beige-100 py-2 rounded text-sm font-medium transition-colors duration-300"
        >
          Ver detalles
        </button>
      </div>
    </motion.div>
  );
}