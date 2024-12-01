import { motion } from 'framer-motion';
import { Trophy, Crown } from 'lucide-react';
import { usePurchases } from '@/context/PurchaseContext';
import { MinecraftAvatar } from '../minecraft/MinecraftAvatar';

export function TopBuyer() {
  const { getTopBuyer } = usePurchases();
  const topBuyer = getTopBuyer();

  return (
    <div className="relative">
      {/* Minecraft-style border layers */}
      <div className="absolute inset-0 bg-[#3B3B3B] rounded-lg transform scale-[1.02]" />
      <div className="absolute inset-0 bg-[#262626] rounded-lg transform scale-[1.01]" />
      
      {/* Main content */}
      <div className="relative bg-[#1D1D1D] rounded-lg p-4 border-2 border-[#3B3B3B]">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-5 h-5 text-beige-400" />
          <h3 className="text-lg font-semibold text-beige-100">Máximo Comprador</h3>
        </div>

        {!topBuyer ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center text-center py-8"
          >
            <Crown className="w-12 h-12 text-beige-400 mb-3 opacity-50" />
            <p className="text-beige-300 text-sm">
              Aún no hay compradores
            </p>
            <p className="text-beige-400 text-xs mt-1">
              El jugador con más compras aparecerá aquí
            </p>
          </motion.div>
        ) : (
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-beige-900/50 border-2 border-[#3B3B3B]">
              <MinecraftAvatar username={topBuyer.username} size={64} />
            </div>
            <div>
              <p className="text-beige-100 font-medium">{topBuyer.username}</p>
              <p className="text-sm text-beige-400">
                Total gastado: ${topBuyer.totalSpent.toFixed(2)}
              </p>
              <p className="text-sm text-beige-400">
                Compras realizadas: {topBuyer.purchaseCount}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}