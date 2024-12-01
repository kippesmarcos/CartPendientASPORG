import { motion } from 'framer-motion';
import { Coins } from 'lucide-react';

export function TokensHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <div className="inline-flex items-center justify-center gap-3 mb-4 bg-beige-900/30 px-6 py-3 rounded-full">
        <Coins className="w-6 h-6 text-beige-400" />
        <h1 className="text-3xl font-bold text-beige-100">Tokens</h1>
      </div>
      <p className="text-beige-300 text-lg">
        Compra tokens para usar en el servidor
      </p>
    </motion.div>
  );
}