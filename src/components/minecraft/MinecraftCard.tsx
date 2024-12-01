import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface MinecraftCardProps {
  name: string;
  icon: string;
  color: string;
  features: string[];
  price: number;
  onClick: () => void;
}

export function MinecraftCard({
  name,
  icon,
  color,
  features,
  price,
  onClick
}: MinecraftCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="minecraft-card relative overflow-hidden"
    >
      {/* Header */}
      <div className="minecraft-header flex items-center gap-4 mb-4">
        <div 
          className="w-12 h-12 minecraft-btn flex items-center justify-center"
          style={{ backgroundColor: `${color}20` }}
        >
          <img src={icon} alt={name} className="w-8 h-8 object-contain" />
        </div>
        <h3 className="minecraft-text text-xl" style={{ color }}>
          {name}
        </h3>
      </div>

      {/* Features */}
      <div className="minecraft-panel mb-4">
        <h4 className="minecraft-text text-sm text-gray-400 mb-2">CARACTERÍSTICAS</h4>
        <ul className="minecraft-features">
          {features.map((feature, i) => (
            <li key={i}>
              <Zap className="w-4 h-4 text-minecraft-gold" />
              <span className="text-white text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price and Button */}
      <div className="minecraft-panel">
        <div className="flex justify-between items-center mb-3">
          <span className="minecraft-text text-gray-400">PRECIO</span>
          <span className="minecraft-price">${price}</span>
        </div>
        <button
          onClick={onClick}
          className="minecraft-btn w-full py-2 text-white hover:brightness-110"
        >
          VER DETALLES
        </button>
      </div>
    </motion.div>
  );
}