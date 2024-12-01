import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';
import { PaymentMethods } from '../ui/payment-methods';

interface PaymentSectionProps {
  paymentMethod: 'card' | 'paypal' | null;
  setPaymentMethod: (method: 'card' | 'paypal') => void;
  onSubmit: (e: React.FormEvent) => void;
  isProcessing: boolean;
  formData: {
    email: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    name: string;
  };
  setFormData: (data: any) => void;
  total: number;
}

export function PaymentSection({
  paymentMethod,
  setPaymentMethod,
  onSubmit,
  isProcessing,
  formData,
  setFormData,
  total
}: PaymentSectionProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-beige-100 mb-4">Método de pago</h2>
      <div className="bg-beige-900/30 rounded-lg p-4">
        <PaymentMethods selected={paymentMethod} onSelect={setPaymentMethod} />

        {paymentMethod === 'card' && (
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
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
            <motion.button
              type="submit"
              disabled={isProcessing}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white hover:bg-gray-100 text-black py-3 rounded-lg transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando...
                </span>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" />
                  Pagar ${total.toFixed(2)}
                </>
              )}
            </motion.button>
          </form>
        )}

        {paymentMethod === 'paypal' && (
          <div className="mt-6 text-center">
            <p className="text-beige-300 mb-4">
              Serás redirigido a PayPal para completar tu pago de ${total.toFixed(2)}
            </p>
            <motion.button
              onClick={onSubmit}
              disabled={isProcessing}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white hover:bg-gray-100 text-black py-3 rounded-lg transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Redirigiendo...
                </span>
              ) : (
                <>
                  <img src="/images/payments/paypal.svg" alt="PayPal" className="w-4 h-4 filter brightness-0" />
                  Continuar con PayPal
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}