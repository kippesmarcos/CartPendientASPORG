import { useState, useEffect } from 'react';

interface MinecraftAvatarProps {
  username: string;
  size?: number;
  className?: string;
}

export function MinecraftAvatar({ username, size = 64, className = "" }: MinecraftAvatarProps) {
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAvatar = async () => {
      setIsLoading(true);
      // Pre-cache the avatar
      const img = new Image();
      img.src = `https://mc-heads.net/avatar/${username}/${size}`;
      
      img.onload = () => {
        setAvatarUrl(img.src);
        setIsLoading(false);
      };
      
      img.onerror = () => {
        setAvatarUrl(`https://crafatar.com/avatars/${username}?size=${size}&overlay=true`);
        setIsLoading(false);
      };
    };

    loadAvatar();
  }, [username, size]);

  if (isLoading) {
    return (
      <div 
        className={`bg-beige-900/30 animate-pulse ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <img
      src={avatarUrl}
      alt={`${username}'s avatar`}
      width={size}
      height={size}
      className={`rounded-lg ${className}`}
      loading="eager"
    />
  );
}