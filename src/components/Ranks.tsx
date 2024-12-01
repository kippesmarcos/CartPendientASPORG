import { motion } from 'framer-motion';
import { Crown, Zap } from 'lucide-react';

const ranks = [
  {
    name: 'Runner',
    price: 4.99,
    color: '#00ff00',
    icon: '/images/ranks/runner.png',
    features: [
      'Chat color verde',
      'Prefijo [Runner]',
      'Acceso a /kit runner',
      '2 homes adicionales',
      'Acceso a /fly en zonas seguras'
    ]
  },
  {
    name: 'Bolt',
    price: 9.99,
    color: '#ffcc00',
    icon: '/images/ranks/bolt.png',
    features: [
      'Todos los beneficios de Runner',
      'Chat color dorado',
      'Prefijo [Bolt]',
      'Acceso a /kit bolt',
      '4 homes adicionales',
      'Acceso a /feed'
    ]
  },
  {
    name: 'Light',
    price: 14.99,
    color: '#00ffff',
    icon: '/images/ranks/light.png',
    features: [
      'Todos los beneficios anteriores',
      'Chat color aqua',
      'Prefijo [Light]',
      'Acceso a /kit light',
      '6 homes adicionales',
      'Acceso a /heal'
    ]
  },
  {
    name: 'Dynamic',
    price: 24.99,
    color: '#9900ff',
    icon: '/images/ranks/dynamic.png',
    features: [
      'Todos los beneficios anteriores',
      'Chat color púrpura',
      'Prefijo [Dynamic]',
      'Acceso a /kit dynamic',
      '8 homes adicionales',
      'Acceso a /enderchest'
    ]
  },
  {
    name: 'Advanced',
    price: 49.99,
    color: '#00ccff',
    icon: '/images/ranks/advanced.png',
    features: [
      'Todos los beneficios anteriores',
      'Chat color celeste',
      'Prefijo [Advanced]',
      'Acceso a /kit advanced',
      '10 homes adicionales',
      'Acceso a /craft'
    ]
  }
];

export function Ranks() {
  return (
    <div id="ranks" className="bg-black text-beige-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-beige-400" />
            <h2 className="text-4xl font-bold">Ranks Permanentes</h2>
          </div>
          <p className="text-beige-300">Mejora tu experiencia con beneficios exclusivos</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ranks.map((rank, index) => (
            <motion.div
              key={rank.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-beige-900/50 backdrop-blur-lg rounded-xl overflow-hidden"
            >
              {/* Rank Header */}
              <div 
                className="p-6 text-center relative"
                style={{ backgroundColor: `${rank.color}15` }}
              >
                <div className="absolute inset-0 opacity-10" 
                  style={{ 
                    backgroundImage: `linear-gradient(to bottom right, ${rank.color}, transparent)` 
                  }} 
                />
                <img 
                  src={rank.icon} 
                  alt={rank.name} 
                  className="w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold mb-2" style={{ color: rank.color }}>
                  {rank.name}
                </h3>
                <div className="text-3xl font-bold text-beige-100">
                  ${rank.price}
                </div>
              </div>

              {/* Features List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {rank.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-beige-400 flex-shrink-0" />
                      <span className="text-beige-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-beige-400 hover:bg-beige-500 text-black py-3 rounded-lg transition-all duration-300 font-medium"
                >
                  Comprar Ahora
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}