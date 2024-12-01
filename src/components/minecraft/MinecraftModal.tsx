import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface MinecraftModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function MinecraftModal({ isOpen, onClose, children }: MinecraftModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg"
        onClick={e => e.stopPropagation()}
      >
        {/* Minecraft-style border */}
        <div className="absolute inset-0 bg-[#3B3B3B] rounded-lg transform scale-[1.02]" />
        <div className="absolute inset-0 bg-[#262626] rounded-lg transform scale-[1.01]" />
        
        {/* Main content */}
        <div className="relative bg-[#1D1D1D] rounded-lg overflow-hidden">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}