import { motion } from 'framer-motion';
import { Token, TokenPrice } from '@/types/token';

interface TokenCardProps {
  token: Token;
  onSelectToken: (token: Token, amount: number, price: number) => void;
}

export function TokenCard({ token, onSelectToken }: TokenCardProps) {
  const PriceOption = ({ price }: { price: TokenPrice }) => (
    <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg hover:bg-black/30 transition-all">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${token.color}20` }}
          >
            <span className="text-sm font-bold" style={{ color: token.color }}>
              {price.amount}x
            </span>
          </div>
          <span className="text-beige-100 font-medium">{price.amount} tokens</span>
        </div>
        <div className="text-right">
          <div className="text-beige-400 line-through text-sm">
            ${price.originalPrice.toFixed(2)}
          </div>
          <div className="text-xl font-bold text-beige-100">
            ${price.price.toFixed(2)}
          </div>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onSelectToken(token, price.amount, price.price)}
        className="w-full bg-beige-400 hover:bg-beige-500 text-black py-2.5 rounded-lg transition-all duration-300 font-medium text-sm"
      >
        Seleccionar
      </motion.button>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-beige-900/30 backdrop-blur-lg rounded-xl overflow-hidden border border-beige-800/30"
    >
      <div 
        className="p-6 text-center relative"
        style={{ backgroundColor: `${token.color}10` }}
      >
        <div className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: `linear-gradient(to bottom right, ${token.color}, transparent)` 
          }} 
        />
        <img 
          src={token.icon} 
          alt={token.name} 
          className="w-20 h-20 mx-auto mb-4 drop-shadow-xl"
        />
        <h3 className="text-2xl font-bold mb-2" style={{ color: token.color }}>
          {token.name}
        </h3>
        <p className="text-beige-300 text-sm">{token.description}</p>
      </div>

      <div className="p-4 space-y-3">
        {token.prices.map((price, index) => (
          <PriceOption key={index} price={price} />
        ))}
      </div>
    </motion.div>
  );
}