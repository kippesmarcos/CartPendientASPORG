import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface NavButtonProps {
  delay?: number;
  mobile?: boolean;
}

export function NavButton({ delay = 0, mobile = false }: NavButtonProps) {
  return (
    <Link to="/login">
      <Button
        variant="default"
        className={`
          relative overflow-hidden bg-white/10 hover:bg-white/20 text-white
          ${mobile ? 'w-full text-center' : ''}
        `}
        asChild
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Iniciar sesión
        </motion.div>
      </Button>
    </Link>
  );
}