import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { StaffSection } from './StaffSection';
import { Container } from './ui/container';

const paymentMethods = [
  { 
    name: 'PayPal',
    icon: '/images/payments/paypal.svg'
  },
  { 
    name: 'Visa',
    icon: '/images/payments/visa.svg'
  },
  { 
    name: 'Mastercard',
    icon: '/images/payments/mastercard.svg'
  },
  { 
    name: 'American Express',
    icon: '/images/payments/amex.svg'
  }
];

export function Store() {
  return (
    <>
      <div id="store" className="bg-black text-beige-100 py-16">
        <Container>
          <div className="relative">
            {/* Minecraft-style border layers */}
            <div className="absolute inset-0 bg-[#3B3B3B] rounded-lg transform scale-[1.02]" />
            <div className="absolute inset-0 bg-[#262626] rounded-lg transform scale-[1.01]" />
            
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-[#1D1D1D] rounded-lg p-8 mb-16 border-2 border-[#3B3B3B]"
            >
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: 'url("/pattern.png")', backgroundSize: '50px' }} />
              </div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <ShieldCheck className="w-6 h-6 text-beige-400" />
                    <h3 className="text-2xl font-bold text-beige-100">Pagos Seguros</h3>
                  </div>
                  <p className="text-beige-300">Aceptamos múltiples métodos de pago para tu comodidad</p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-6">
                  {paymentMethods.map((method, index) => (
                    <motion.div
                      key={method.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-beige-900/20 rounded-lg transform -skew-x-12 group-hover:bg-beige-900/30 transition-all duration-300" />
                      <div className="relative px-6 py-4">
                        <img 
                          src={method.icon} 
                          alt={method.name}
                          className="h-8 w-auto object-contain transition-all duration-300 group-hover:scale-105 filter brightness-0 invert"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
      <StaffSection />
    </>
  );
}