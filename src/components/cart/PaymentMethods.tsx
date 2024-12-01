import { CreditCard } from 'lucide-react';

const paymentMethods = [
  {
    name: 'PayPal',
    icon: '/images/payments/paypal.svg',
  },
  {
    name: 'Visa',
    icon: '/images/payments/visa.svg',
  },
  {
    name: 'Mastercard',
    icon: '/images/payments/mastercard.svg',
  },
  {
    name: 'American Express',
    icon: '/images/payments/amex.svg',
  }
];

export function PaymentMethods() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <CreditCard className="w-4 h-4 text-beige-400" />
        <h3 className="text-sm font-medium text-beige-300">
          Métodos de pago aceptados
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {paymentMethods.map((method) => (
          <div
            key={method.name}
            className="bg-beige-900/30 p-2 rounded-lg"
            title={method.name}
          >
            <img
              src={method.icon}
              alt={method.name}
              className="h-6 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}