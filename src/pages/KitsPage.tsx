import { useState } from 'react';
import { Header } from '../components/Header';
import { motion } from 'framer-motion';
import { Sword, ChevronLeft, Clock, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { kits } from '../data/kits';
import { useCart } from '../context/CartContext';
import { SnowParticles } from '@/components/SnowParticles';
import { MinecraftProductCard } from '@/components/minecraft/MinecraftProductCard';
import { MinecraftStoreModal } from '@/components/store/MinecraftStoreModal';

export function KitsPage() {
  const [selectedKit, setSelectedKit] = useState<null | typeof kits[0]>(null);
  const [durationType, setDurationType] = useState<'permanent' | 'monthly'>('permanent');
  const { addItem } = useCart();

  const handleAddToCart = (kit: typeof kits[0]) => {
    addItem({
      id: `${kit.id}-${durationType}`,
      name: kit.name,
      price: kit.price[durationType],
      type: 'kit',
      durationType,
      icon: kit.icon,
      color: kit.color,
      quantity: 1
    });
    setSelectedKit(null);
  };

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
      <Header />

      <div className="relative z-20 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Volver al inicio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sword className="w-8 h-8 text-white" />
              <h1 className="text-4xl font-bold text-white">Kits</h1>
            </div>
            <p className="text-white/80">Equípate con los mejores kits del servidor</p>
          </motion.div>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setDurationType('permanent')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                durationType === 'permanent'
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white'
              }`}
            >
              <Crown className="w-5 h-5" />
              Permanente
            </button>
            <button
              onClick={() => setDurationType('monthly')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                durationType === 'monthly'
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white'
              }`}
            >
              <Clock className="w-5 h-5" />
              Mensual
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kits.map((kit) => (
              <MinecraftProductCard
                key={kit.id}
                name={kit.name}
                description={kit.description}
                price={kit.price}
                icon={kit.icon}
                color={kit.color}
                features={kit.features}
                durationType={durationType}
                onClick={() => setSelectedKit(kit)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedKit && (
        <MinecraftStoreModal
          isOpen={true}
          onClose={() => setSelectedKit(null)}
          onAddToCart={() => handleAddToCart(selectedKit)}
          item={selectedKit}
        />
      )}
    </div>
  );
}