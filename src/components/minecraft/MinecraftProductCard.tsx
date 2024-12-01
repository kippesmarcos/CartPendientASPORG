import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { MinecraftButton } from './MinecraftButton';

interface MinecraftProductCardProps {
  name: string;
  description?: string;
  price: number | { permanent: number; monthly: number };
  icon: string;
  color: string;
  features: string[];
  durationType?: 'permanent' | 'monthly';
  onClick: () => void;
}

export function MinecraftProductCard({
  name,
  description,
  price,
  icon,
  color,
  features,
  durationType,
  onClick
}: MinecraftProductCardProps) {
  const displayPrice = typeof price === 'number' ? price : price[durationType || 'permanent'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      {/* Minecraft-style border layers */}
      <div className="absolute inset-0 bg-[#4B4B4B] rounded-lg transform scale-[1.02]" />
      <div className="absolute inset-0 bg-[#363636] rounded-lg transform scale-[1.01]" />
      
      {/* Main content */}
      <div className="relative bg-[#2D2D2D] rounded-lg overflow-hidden border-2 border-[#4B4B4B]">
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
            <div className="minecraft-btn w-12 h-12 flex items-center justify-center p-2 bg-[#363636] border-[#4B4B4B]">
              {typeof icon === 'string' && icon.startsWith('data:image') ? (
                <div
                  className="w-full h-full"
                  style={{ color: 'white' }}
                  dangerouslySetInnerHTML={{ __html: decodeURIComponent(icon.split(',')[1]) }}
                />
              ) : (
                <img 
                  src={icon} 
                  alt={name} 
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            <div>
              <h3 className="minecraft-text text-white text-lg">{name}</h3>
              {description && (
                <p className="minecraft-text text-gray-300 text-xs">{description}</p>
              )}
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
          <div className="minecraft-btn p-3 mb-3 bg-[#363636] border-[#4B4B4B]">
            <h4 className="minecraft-text text-gray-300 text-sm mb-2">CARACTERÍSTICAS</h4>
            <ul className="space-y-2">
              {features.slice(0, 3).map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                  <span className="minecraft-text text-white text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price and button */}
          <div className="minecraft-btn p-3 bg-[#363636] border-[#4B4B4B]">
            <div className="flex items-center justify-between mb-3">
              <span className="minecraft-text text-gray-300">PRECIO</span>
              <span className="minecraft-text text-yellow-500 text-xl">
                ${displayPrice}
                {durationType === 'monthly' && (
                  <span className="text-sm text-gray-300 ml-1">/mes</span>
                )}
              </span>
            </div>

            <MinecraftButton fullWidth onClick={onClick}>
              VER DETALLES
            </MinecraftButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}