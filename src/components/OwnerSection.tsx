import { motion } from 'framer-motion';
import { Crown, Github, Instagram, Twitter } from 'lucide-react';

export function OwnerSection() {
  return (
    <div className="bg-black text-beige-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-beige-900/50 to-black backdrop-blur-lg rounded-xl"
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
                <div className="absolute -inset-0.5 bg-gradient-to-r from-beige-400 to-beige-600 rounded-full opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt blur-md"></div>
                <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-beige-400/20 group-hover:ring-beige-400/40 transition-all duration-300">
                  <img 
                    src="/prejucioso.svg" 
                    alt="Owner Avatar"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 filter invert"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <Crown className="w-6 h-6 text-beige-400" />
                <h3 className="text-2xl font-bold text-beige-100">Prejucioso</h3>
                <span className="px-2 py-1 bg-beige-900/30 rounded-full text-beige-400 text-sm">
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
                <motion.a
                  href="https://twitter.com/prejucioso"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-beige-900/30 p-2 rounded-lg hover:bg-beige-900/50 transition-colors group"
                >
                  <Twitter className="w-5 h-5 text-beige-400 group-hover:text-beige-300" />
                </motion.a>
                <motion.a
                  href="https://instagram.com/prejucioso"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-beige-900/30 p-2 rounded-lg hover:bg-beige-900/50 transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-beige-400 group-hover:text-beige-300" />
                </motion.a>
                <motion.a
                  href="https://github.com/prejucioso"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-beige-900/30 p-2 rounded-lg hover:bg-beige-900/50 transition-colors group"
                >
                  <Github className="w-5 h-5 text-beige-400 group-hover:text-beige-300" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}