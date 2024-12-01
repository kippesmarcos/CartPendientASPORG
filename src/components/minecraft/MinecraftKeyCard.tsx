import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface MinecraftKeyCardProps {
  name: string;
  price: number;
  icon: string;
  color: string;
  features: string[];
  description: string;
  onClick: () => void;
}

export function MinecraftKeyCard({
  name,
  price,
  icon,
  color,
  features,
  description,
  onClick
}: MinecraftKeyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      {/* Minecraft-style border */}
      <div className="absolute inset-0 bg-[#3B3B3B] rounded-lg transform scale-[1.02]" />
      <div className="absolute inset-0 bg-[#262626] rounded-lg transform scale-[1.01]" />
      
      {/* Main content */}
      <div className="relative bg-[#1D1D1D] rounded-lg overflow-hidden">
        {/* Header */}
        <div className="relative">
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              backgroundImage: 'url("/textures/dirt.png")',
              backgroundSize: '64px',
              imageRendering: 'pixelated'
            }}
          />
          <div className="relative p-4 flex items-center gap-3">
            <div className="minecraft-btn w-12 h-12 flex items-center justify-center p-2">
              <img 
                src={icon} 
                alt={name} 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="minecraft-text text-white text-lg">{name}</h3>
              <p className="minecraft-text text-gray-400 text-xs">{description}</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div 
          className="relative p-4"
          style={{ 
            backgroundImage: 'url("/textures/stone.png")',
            backgroundSize: '64px',
            imageRendering: 'pixelated'
          }}
        >
          <div className="minecraft-btn p-3 mb-3">
            <h4 className="minecraft-text text-gray-300 text-sm mb-2">CARACTERÍSTICAS</h4>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                  <span className="minecraft-text text-white text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price and button */}
          <div className="minecraft-btn p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="minecraft-text text-gray-400">PRECIO</span>
              <span className="minecraft-text text-yellow-500 text-xl">
                ${price}
              </span>
            </div>

            <button
              onClick={onClick}
              className="minecraft-btn w-full py-3 text-white font-minecraft flex items-center justify-center gap-2 hover:brightness-110 transition-all"
            >
              VER DETALLES
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}