import { motion } from 'framer-motion';
import { SnowParticles } from '../components/SnowParticles';
import { Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/login/LoginForm';

export function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/images/background/minecraft-castle.jpg')`
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
      
      <SnowParticles />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 w-full max-w-md mx-auto px-4"
      >
        <div className="bg-black/80 backdrop-blur-lg p-8 rounded-lg shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Wind className="w-8 h-8 text-white" />
            <span className="text-white text-xl font-bold tracking-tight">
              Aspirados
            </span>
          </div>

          <h2 className="text-2xl font-bold text-white text-center mb-6">
            ¡Bienvenido! 👋
          </h2>
          <p className="text-white/80 text-center mb-8">
            Ingresa con tu nombre de usuario de Minecraft
          </p>

          <LoginForm />

          <div className="mt-8 text-center">
            <Link 
              to="/"
              className="text-white/80 hover:text-white transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}