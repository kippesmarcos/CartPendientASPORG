import { X } from 'lucide-react';
import { MinecraftModal } from '../minecraft/MinecraftModal';
import { MinecraftHeader } from '../minecraft/MinecraftHeader';
import { MinecraftContent } from '../minecraft/MinecraftContent';
import { MinecraftFeatures } from '../minecraft/MinecraftFeatures';
import { MinecraftPrice } from '../minecraft/MinecraftPrice';
import { MinecraftButton } from '../minecraft/MinecraftButton';

interface MinecraftStoreModalProps {
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

export function MinecraftStoreModal({
  isOpen,
  onClose,
  onAddToCart,
  item
}: MinecraftStoreModalProps) {
  const price = typeof item.price === 'number' ? item.price : item.price[item.durationType || 'permanent'];

  return (
    <MinecraftModal isOpen={isOpen} onClose={onClose}>
      <MinecraftHeader>
        <MinecraftButton
          className="absolute right-4 top-4 w-8 h-8"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </MinecraftButton>
        
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
      </MinecraftHeader>

      <MinecraftContent>
        <MinecraftFeatures features={item.features} />
        <MinecraftPrice 
          price={price}
          durationType={item.durationType}
          onAddToCart={onAddToCart}
        />
      </MinecraftContent>
    </MinecraftModal>
  );
}