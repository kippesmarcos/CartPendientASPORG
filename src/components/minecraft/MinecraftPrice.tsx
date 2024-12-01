import { ShoppingCart } from 'lucide-react';
import { MinecraftButton } from './MinecraftButton';

interface MinecraftPriceProps {
  price: number;
  durationType?: 'permanent' | 'monthly';
  onAddToCart: () => void;
}

export function MinecraftPrice({ price, durationType, onAddToCart }: MinecraftPriceProps) {
  return (
    <div className="minecraft-btn p-4">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-400 font-minecraft">PRECIO</span>
        <div className="text-right">
          <span className="text-2xl font-minecraft text-yellow-500">
            ${price}
          </span>
          {durationType === 'monthly' && (
            <span className="text-sm text-gray-400 ml-1 font-minecraft">/mes</span>
          )}
        </div>
      </div>

      <MinecraftButton fullWidth onClick={onAddToCart}>
        <ShoppingCart className="w-4 h-4" />
        AGREGAR AL CARRITO
      </MinecraftButton>
    </div>
  );
}