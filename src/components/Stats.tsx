import { Users, ShoppingCart, Trophy } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: Users,
    value: 15000,
    label: "JUGADORES REGISTRADOS",
    delay: 0.3
  },
  {
    icon: ShoppingCart,
    value: 2500,
    label: "COMPRAS REALIZADAS",
    delay: 0.4
  },
  {
    icon: Trophy,
    value: 500,
    label: "FACCIONES ACTIVAS",
    delay: 0.5
  }
];

export function Stats() {
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-minecraft text-center mb-2"
        >
          HACEMOS LAS COSAS MEJOR.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-center mb-12 font-minecraft"
        >
          Y NO TE LO DECIMOS NOSOTROS, TE LO DICEN LOS NÚMEROS.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stat.delay }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#3B3B3B] rounded-lg transform scale-[1.02]" />
              <div className="absolute inset-0 bg-[#262626] rounded-lg transform scale-[1.01]" />
              
              <div className="relative bg-[#1D1D1D] rounded-lg p-6 text-center transform transition-all duration-300 border-4 border-[#3B3B3B]">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay + 0.2, type: "spring" }}
                >
                  <stat.icon className="w-8 h-8 text-white mx-auto mb-4" />
                </motion.div>
                <div className="text-3xl font-bold text-white relative font-minecraft">
                  <span className="absolute -left-4">+</span>
                  <AnimatedCounter from={0} to={stat.value} duration={2.5} />
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay + 0.4 }}
                  className="text-white/60 font-minecraft mt-2"
                >
                  {stat.label}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}