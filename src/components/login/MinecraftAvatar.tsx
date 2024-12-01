import { useState, useEffect } from 'react';

interface MinecraftAvatarProps {
  username: string;
  size?: number;
}

export function MinecraftAvatar({ username, size = 64 }: MinecraftAvatarProps) {
  const [avatarUrl, setAvatarUrl] = useState<string>('');

  useEffect(() => {
    // Fetch Minecraft avatar using Crafatar API
    setAvatarUrl(`https://crafatar.com/avatars/${username}?size=${size}&overlay=true`);
  }, [username, size]);

  return (
    <img
      src={avatarUrl}
      alt={`${username}'s skin`}
      className="rounded-lg"
      style={{ width: size, height: size }}
      onError={(e) => {
        e.currentTarget.src = 'https://crafatar.com/avatars/steve';
      }}
    />
  );
}