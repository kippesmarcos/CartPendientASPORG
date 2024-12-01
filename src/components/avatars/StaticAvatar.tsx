interface StaticAvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export function StaticAvatar({ src, alt, size = 64, className = "" }: StaticAvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      className={`rounded-lg object-cover ${className}`}
    />
  );
}