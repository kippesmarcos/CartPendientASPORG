import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Home } from 'lucide-react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { playSuccessSound } from '@/lib/sounds';
import { SnowParticles } from '@/components/SnowParticles';

export function PurchaseSuccess() {
  const location = useLocation();
  const purchaseId = location.state?.purchaseId;

  useEffect(() => {
    playSuccessSound();
  }, []);

  if (!purchaseId) {
    return <Navigate to="/" />;
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
        <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-beige-900/30 backdrop-blur-lg rounded-xl p-8 max-w-md w-full text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
            >
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </motion.div>

            <h1 className="text-2xl font-bold text-beige-100 mb-2">
              ¡Gracias por tu compra!
            </h1>
            
            <p className="text-beige-300 mb-6">
              Tu compra ha sido procesada exitosamente
            </p>

            <div className="bg-beige-900/30 rounded-lg p-4 mb-8">
              <p className="text-sm text-beige-400 mb-1">ID de la compra:</p>
              <p className="font-mono text-beige-100 text-lg">
                {purchaseId}
              </p>
            </div>

            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg transition-colors font-medium"
              >
                <Home className="w-5 h-5" />
                Volver al inicio
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </MainLayout>
    </div>
  );
}