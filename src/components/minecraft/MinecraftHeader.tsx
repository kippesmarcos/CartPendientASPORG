interface MinecraftHeaderProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export function MinecraftHeader({ children, onClose }: MinecraftHeaderProps) {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: 'url("/textures/dirt.png")',
          backgroundSize: '64px',
          imageRendering: 'pixelated'
        }}
      />
      <div className="relative p-6 border-b-4 border-[#3B3B3B]">
        {children}
      </div>
    </div>
  );
}