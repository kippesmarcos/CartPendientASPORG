import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, History } from 'lucide-react';
import { useState, useRef } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { MinecraftAvatar } from './minecraft/MinecraftAvatar';
import { useClickOutside } from '@/hooks/useClickOutside';

export function UserMenu() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setIsOpen(false));

  if (!user) return null;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-beige-900/30 hover:bg-beige-900/50 transition-colors rounded-lg p-2"
      >
        <div className="w-8 h-8 rounded bg-beige-900/50 overflow-hidden">
          <MinecraftAvatar username={user} size={32} />
        </div>
        <span className="text-beige-100">{user}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-80 bg-beige-900/90 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden z-50"
          >
            <div className="p-4 border-b border-beige-800/50">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-beige-900/50">
                  <MinecraftAvatar username={user} size={96} />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-beige-100 font-medium">{user}</h3>
                <a
                  href={`https://namemc.com/profile/${user}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-beige-400 hover:text-beige-300"
                >
                  Ver en NameMC
                </a>
              </div>
            </div>
            
            <div className="p-2 space-y-1">
              <Link to="/purchase-history">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-beige-300 hover:text-beige-100"
                >
                  <History className="w-4 h-4 mr-2" />
                  Historial de compras
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-950/20"
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Cerrar sesión
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}