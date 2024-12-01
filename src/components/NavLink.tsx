import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  label: string;
  delay?: number;
  mobile?: boolean;
}

export function NavLink({ href, label, delay = 0, mobile = false }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: mobile ? 20 : -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative text-beige-300 hover:text-beige-100 transition-colors duration-300 group"
    >
      {label}
      <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-beige-500 group-hover:w-full transition-all duration-300"
        whileHover={{ width: '100%' }}
      />
    </motion.a>
  );
}