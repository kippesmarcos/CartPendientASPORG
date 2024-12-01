import { Timer } from 'lucide-react';
import { motion } from 'framer-motion';

export function SpecialOffer() {
  return (
    <div className="relative">
      {/* Minecraft-style border layers */}
      <div className="absolute inset-0 bg-[#FFD700] rounded-lg transform scale-[1.02] opacity-20" />
      <div className="absolute inset-0 bg-[#FFA500] rounded-lg transform scale-[1.01] opacity-10" />
      
      {/* Main content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative bg-gradient-to-r from-[#2D2D2D] to-[#1D1D1D] p-4 rounded-lg border-2 border-[#FFD700]/30"
      >
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              backgroundImage: 'url("/textures/stone.png")',
              backgroundSize: '64px',
              imageRendering: 'pixelated'
            }}
          />
          <motion.div
            animate={{
              x: ['0%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent transform -skew-x-12"
          />
        </div>

        <div className="relative flex items-start gap-3">
          <div className="bg-[#FFD700]/20 p-2 rounded-lg">
            <Timer className="w-5 h-5 text-[#FFD700]" />
          </div>
          <div>
            <h3 className="font-minecraft text-[#FFD700] text-lg mb-0.5">
              ¡Oferta especial!
            </h3>
            <p className="text-gray-300 text-sm">
              Aprovecha los descuentos por tiempo limitado en todos los tokens
            </p>
          </div>
        </div>

        <div className="absolute top-2 right-2">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="text-[#FFD700] font-minecraft text-sm px-2 py-1 rounded bg-[#FFD700]/10 border border-[#FFD700]/20"
          >
            -50%
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}