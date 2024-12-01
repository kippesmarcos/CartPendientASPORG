import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { MinecraftAvatar } from '../minecraft/MinecraftAvatar';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      login(username);
      navigate('/');
    } catch (err) {
      setError('Error al iniciar sesión. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {username && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center mb-4"
        >
          <div className="w-24 h-24 rounded-lg overflow-hidden bg-beige-900/30 border-2 border-[#3B3B3B]">
            <MinecraftAvatar username={username} size={96} />
          </div>
        </motion.div>
      )}

      <div className="space-y-4">
        <div>
          <label 
            htmlFor="username" 
            className="block text-sm font-medium text-beige-300 mb-2"
          >
            Nombre de usuario de Minecraft
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 bg-black/50 border-2 border-[#3B3B3B] rounded-lg focus:outline-none focus:ring-2 focus:ring-beige-400 text-beige-100 placeholder-beige-600"
            placeholder="Ingresa tu nombre de usuario"
            required
          />
        </div>
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 text-sm"
        >
          {error}
        </motion.p>
      )}

      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-white hover:bg-gray-100 text-black py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#3B3B3B]"
      >
        {isLoading ? (
          <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-black"></span>
        ) : (
          'Continuar'
        )}
      </motion.button>
    </form>
  );
}