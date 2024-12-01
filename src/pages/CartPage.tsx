import { MainLayout } from '@/components/layout/MainLayout';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, CreditCard, Package, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '@/components/cart/CartItem';
import { PaymentMethods } from '@/components/cart/PaymentMethods';
import { BackButton } from '@/components/ui/back-button';
import { SnowParticles } from '@/components/SnowParticles';

export function CartPage() {
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = total * 0.21; // 21% IVA
  const finalTotal = total + tax;
  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    navigate('/checkout');
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

      <MainLayout>
        <div className="relative z-20 pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <BackButton />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <ShoppingCart className="w-8 h-8 text-beige-400" />
                <h1 className="text-4xl font-bold text-beige-100">Tu Carrito</h1>
              </div>
              <p className="text-beige-300">
                {itemCount} {itemCount === 1 ? 'item' : 'items'}
              </p>
            </motion.div>

            {cart.items.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <Package className="w-16 h-16 text-beige-400 mx-auto mb-4 opacity-50" />
                <h2 className="text-xl font-medium text-beige-100 mb-2">
                  Tu carrito está vacío
                </h2>
                <p className="text-beige-400 mb-8">
                  Agrega algunos items para comenzar
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Volver a la tienda
                </Link>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  {cart.items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>

                <div className="space-y-6">
                  <PaymentMethods />

                  <div className="bg-beige-900/20 backdrop-blur-sm rounded-lg p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-beige-400">Subtotal</span>
                        <span className="text-beige-100">${total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-beige-400">IVA (21%)</span>
                        <span className="text-beige-100">${tax.toFixed(2)}</span>
                      </div>
                      <div className="pt-2 border-t border-beige-900/50 flex justify-between">
                        <span className="text-beige-100 font-medium">Total</span>
                        <span className="text-xl font-bold text-beige-100">
                          ${finalTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={clearCart}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                        Vaciar
                      </button>
                      <button
                        onClick={handleCheckout}
                        className="flex items-center justify-center gap-2 bg-beige-400 hover:bg-beige-500 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <CreditCard className="w-4 h-4" />
                        Pagar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}