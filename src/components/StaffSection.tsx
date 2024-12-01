import { motion } from 'framer-motion';
import { Crown, Github, Instagram, Twitter } from 'lucide-react';
import { MinecraftAvatar } from './minecraft/MinecraftAvatar';

export function StaffSection() {
  return (
    <div className="bg-black text-beige-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* Minecraft-style border layers */}
          <div className="absolute inset-0 bg-[#3B3B3B] rounded-lg transform scale-[1.02]" />
          <div className="absolute inset-0 bg-[#262626] rounded-lg transform scale-[1.01]" />
          
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#1D1D1D] rounded-lg overflow-hidden border-2 border-[#3B3B3B]"
          >
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: 'url("/pattern.png")', backgroundSize: '50px' }} />
            </div>

            <div className="relative z-10 p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-beige-400 to-beige-600 rounded-lg opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt blur-md"></div>
                  <div className="relative w-48 h-48 rounded-lg overflow-hidden ring-4 ring-beige-400/20 group-hover:ring-beige-400/40 transition-all duration-300 border-2 border-[#3B3B3B]">
                    <MinecraftAvatar
                      username="IMonstersito"
                      size={192}
                      className="transform scale-110"
                    />
                  </div>
                </motion.div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <Crown className="w-6 h-6 text-beige-400" />
                  <h3 className="text-2xl font-bold text-beige-100">Prejuicioso</h3>
                  <span className="px-2 py-1 bg-beige-900/30 rounded-full text-beige-400 text-sm border border-[#3B3B3B]">
                    Owner
                  </span>
                </div>
                
                <p className="text-beige-300 mb-6 leading-relaxed">
                  Fundador y desarrollador principal de Aspirados. Con más de 5 años de experiencia
                  en servidores de Minecraft, mi objetivo es crear la mejor experiencia HCF para
                  la comunidad hispana. Siempre buscando innovar y mejorar la experiencia de
                  nuestros jugadores.
                </p>

                <div className="flex items-center justify-center md:justify-start gap-4">
                  {['twitter', 'instagram', 'github'].map((social) => (
                    <motion.a
                      key={social}
                      href={`https://${social}.com/prejucioso`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-[#3B3B3B] rounded-lg transform scale-[1.02]" />
                      <div className="absolute inset-0 bg-[#262626] rounded-lg transform scale-[1.01]" />
                      <div className="relative bg-[#1D1D1D] p-2 rounded-lg border-2 border-[#3B3B3B] hover:bg-beige-900/50 transition-colors group">
                        {social === 'twitter' && <Twitter className="w-5 h-5 text-beige-400 group-hover:text-beige-300" />}
                        {social === 'instagram' && <Instagram className="w-5 h-5 text-beige-400 group-hover:text-beige-300" />}
                        {social === 'github' && <Github className="w-5 h-5 text-beige-400 group-hover:text-beige-300" />}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}