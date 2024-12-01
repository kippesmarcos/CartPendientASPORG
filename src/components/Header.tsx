import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavButton } from './NavButton';
import { CartSheet } from './cart/CartSheet';
import { UserMenu } from './UserMenu';
import { useAuth } from '@/context/AuthContext';
import { Link } from 'react-router-dom';
import { NavMenu } from './ui/nav-menu';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <Link to="/">
              <img src="/logo.svg" alt="Logo" className="h-12 filter brightness-0 invert" />
            </Link>
            <span className="text-beige-100 font-minecraft text-xl hidden sm:block">ASPIRADOS</span>
          </motion.div>

          <div className="flex items-center gap-4">
            <NavMenu />
            <CartSheet />
            {!user && <NavButton delay={0.4} className="hidden md:flex" />}
            {user && <UserMenu />}
          </div>
        </nav>
      </div>
    </header>
  );
}