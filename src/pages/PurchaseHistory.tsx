import { MainLayout } from '@/components/layout/MainLayout';
import { useAuth } from '@/context/AuthContext';
import { usePurchases } from '@/context/PurchaseContext';
import { motion } from 'framer-motion';
import { History, ShoppingBag, ChevronLeft } from 'lucide-react';
import { Navigate, Link } from 'react-router-dom';
import { MinecraftAvatar } from '@/components/minecraft/MinecraftAvatar';
import { formatDate } from '@/lib/utils';
import { SnowParticles } from '@/components/SnowParticles';

export function PurchaseHistory() {
  const { user } = useAuth();
  const { purchases } = usePurchases();
  const userPurchases = purchases.filter(purchase => purchase.username === user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen">
      {/* Background image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/images/background/minecraft-castle.jpg')`
        }}
      />
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      <SnowParticles />

      <MainLayout>
        <div className="relative z-20 pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-beige-300 hover:text-beige-100 mb-8 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Volver al inicio
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <History className="w-8 h-8 text-beige-400" />
                <h1 className="text-4xl font-bold text-beige-100">Historial de Compras</h1>
              </div>
              <p className="text-beige-300">Revisa todas tus compras realizadas en el servidor</p>
            </motion.div>

            {userPurchases.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <ShoppingBag className="w-16 h-16 text-beige-400 mx-auto mb-4 opacity-50" />
                <h2 className="text-xl font-medium text-beige-100 mb-2">
                  No hay compras realizadas
                </h2>
                <p className="text-beige-400">
                  Tus compras aparecerán aquí una vez que hayas realizado alguna transacción.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {userPurchases.map((purchase) => (
                  <motion.div
                    key={purchase.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-beige-900/30 p-4 rounded-lg"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-beige-900/50">
                        <MinecraftAvatar username={purchase.username} size={48} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-beige-100">
                            {purchase.username}
                          </h3>
                          <p className="text-lg font-bold text-beige-100">
                            ${purchase.amount.toFixed(2)}
                          </p>
                        </div>
                        <p className="text-sm text-beige-400">
                          {formatDate(purchase.timestamp)}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {purchase.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-beige-300">{item.name}</span>
                          <span className="text-beige-400">x{item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}