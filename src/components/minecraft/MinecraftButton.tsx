import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MinecraftButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function MinecraftButton({ children, fullWidth = false, className, ...props }: MinecraftButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "minecraft-btn py-3 text-white font-minecraft flex items-center justify-center gap-2 hover:brightness-110 transition-all bg-[#363636] border-[#4B4B4B]",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}