import { motion } from 'framer-motion';
import { Users, ShoppingBag } from 'lucide-react';
import { usePurchases } from '@/context/PurchaseContext';
import { formatDate } from '@/lib/utils';
import { MinecraftAvatar } from '../minecraft/MinecraftAvatar';

export function RecentPayments() {
  const { purchases } = usePurchases();

  return (
    <div className="relative">
      {/* Minecraft-style border layers */}
      <div className="absolute inset-0 bg-[#3B3B3B] rounded-lg transform scale-[1.02]" />
      <div className="absolute inset-0 bg-[#262626] rounded-lg transform scale-[1.01]" />
      
      {/* Main content */}
      <div className="relative bg-[#1D1D1D] rounded-lg p-4 border-2 border-[#3B3B3B]">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-beige-400" />
          <h3 className="text-lg font-semibold text-beige-100">Pagos Recientes</h3>
        </div>

        {purchases.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center text-center py-8"
          >
            <ShoppingBag className="w-12 h-12 text-beige-400 mb-3 opacity-50" />
            <p className="text-beige-300 text-sm">
              No hay pagos recientes
            </p>
            <p className="text-beige-400 text-xs mt-1">
              Los pagos aparecerán aquí cuando se realicen compras
            </p>
          </motion.div>
        ) : (
          <div className="space-y-3">
            {purchases.slice(0, 5).map((purchase) => (
              <motion.div
                key={purchase.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative"
              >
                {/* Item border layers */}
                <div className="absolute inset-0 bg-[#3B3B3B] rounded-lg transform scale-[1.02]" />
                <div className="absolute inset-0 bg-[#262626] rounded-lg transform scale-[1.01]" />
                
                {/* Item content */}
                <div className="relative bg-[#1D1D1D] p-3 rounded-lg flex items-center gap-4 border-2 border-[#3B3B3B]">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-beige-900/50 border-2 border-[#3B3B3B]">
                    <MinecraftAvatar username={purchase.username} size={40} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-beige-100 font-medium truncate">
                        {purchase.username}
                      </p>
                      <p className="text-beige-100 font-medium ml-2">
                        ${purchase.amount.toFixed(2)}
                      </p>
                    </div>
                    <p className="text-sm text-beige-400 truncate">
                      {purchase.items.map(item => `${item.quantity}x ${item.name}`).join(', ')}
                    </p>
                    <p className="text-xs text-beige-400">
                      {formatDate(purchase.timestamp)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}