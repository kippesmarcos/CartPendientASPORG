import { motion } from 'framer-motion';
import { X, CreditCard } from 'lucide-react';
import { useState, useRef } from 'react';
import { useCart } from '@/context/CartContext';
import { useClickOutside } from '@/hooks/useClickOutside';

interface CheckoutModalProps {
  onClose: () => void;
}

export function CheckoutModal({ onClose }: CheckoutModalProps) {
  const { cart } = useCart();
  const modalRef = useRef<HTMLDivElement>(null);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });

  useClickOutside(modalRef, onClose);

  const total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = total * 0.21; // 21% IVA
  const finalTotal = total + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Processing payment:', { paymentMethod, formData });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-beige-900/90 rounded-xl max-w-md w-full overflow-hidden"
      >
        <div className="flex justify-between items-center p-4 border-b border-beige-800/30">
          <h3 className="text-xl font-bold text-beige-100">Checkout</h3>
          <button
            onClick={onClose}
            className="text-beige-400 hover:text-beige-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h4 className="text-sm font-medium text-beige-300 mb-2">Método de pago</h4>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-lg border transition-all ${
                  paymentMethod === 'card'
                    ? 'border-beige-400 bg-beige-400/10'
                    : 'border-beige-800/30 hover:border-beige-400/50'
                }`}
              >
                <CreditCard className="w-6 h-6 text-beige-400 mx-auto mb-2" />
                <span className="text-sm text-beige-100">Tarjeta</span>
              </button>
              <button
                onClick={() => setPaymentMethod('paypal')}
                className={`p-4 rounded-lg border transition-all ${
                  paymentMethod === 'paypal'
                    ? 'border-beige-400 bg-beige-400/10'
                    : 'border-beige-800/30 hover:border-beige-400/50'
                }`}
              >
                <img
                  src="/images/payments/paypal.svg"
                  alt="PayPal"
                  className="w-6 h-6 mx-auto mb-2 filter invert"
                />
                <span className="text-sm text-beige-100">PayPal</span>
              </button>
            </div>
          </div>

          {paymentMethod === 'card' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-beige-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 bg-black/50 border border-beige-800/30 rounded-lg focus:outline-none focus:border-beige-400 text-beige-100"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-beige-300 mb-1">
                  Número de tarjeta
                </label>
                <input
                  type="text"
                  required
                  maxLength={19}
                  className="w-full px-3 py-2 bg-black/50 border border-beige-800/30 rounded-lg focus:outline-none focus:border-beige-400 text-beige-100"
                  value={formData.cardNumber}
                  onChange={e => setFormData({ ...formData, cardNumber: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-beige-300 mb-1">
                    Fecha de expiración
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full px-3 py-2 bg-black/50 border border-beige-800/30 rounded-lg focus:outline-none focus:border-beige-400 text-beige-100"
                    value={formData.expiryDate}
                    onChange={e => setFormData({ ...formData, expiryDate: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-beige-300 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={4}
                    className="w-full px-3 py-2 bg-black/50 border border-beige-800/30 rounded-lg focus:outline-none focus:border-beige-400 text-beige-100"
                    value={formData.cvv}
                    onChange={e => setFormData({ ...formData, cvv: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-beige-300 mb-1">
                  Nombre en la tarjeta
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 bg-black/50 border border-beige-800/30 rounded-lg focus:outline-none focus:border-beige-400 text-beige-100"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-beige-400 hover:bg-beige-500 text-black py-3 rounded-lg transition-all duration-300 font-medium"
              >
                Pagar ${finalTotal.toFixed(2)}
              </button>
            </form>
          )}

          {paymentMethod === 'paypal' && (
            <div className="text-center">
              <p className="text-beige-300 mb-4">
                Serás redirigido a PayPal para completar tu pago de ${finalTotal.toFixed(2)}
              </p>
              <button
                onClick={() => {
                  // Handle PayPal redirect
                  console.log('Redirecting to PayPal...');
                }}
                className="w-full bg-[#0070ba] hover:bg-[#003087] text-white py-3 rounded-lg transition-all duration-300 font-medium"
              >
                Continuar con PayPal
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}