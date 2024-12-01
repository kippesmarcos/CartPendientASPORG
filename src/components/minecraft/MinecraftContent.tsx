interface MinecraftContentProps {
  children: React.ReactNode;
}

export function MinecraftContent({ children }: MinecraftContentProps) {
  return (
    <div 
      className="relative p-6 space-y-6"
      style={{ 
        backgroundImage: 'url("/textures/stone.png")',
        backgroundSize: '64px',
        imageRendering: 'pixelated'
      }}
    >
      {children}
    </div>
  );
}