import { useEffect, useRef, useState } from 'react';
import { SkinViewer } from 'skinview3d';

interface MinecraftSkinViewerProps {
  width?: number;
  height?: number;
  rotate?: boolean;
  username?: string;
  uuid?: string;
}

export function MinecraftSkinViewer({ 
  width = 300, 
  height = 400, 
  rotate = true,
  username,
  uuid 
}: MinecraftSkinViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewerRef = useRef<SkinViewer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const initSkinViewer = async () => {
      setIsLoading(true);
      setError(false);

      try {
        if (viewerRef.current) {
          viewerRef.current.dispose();
        }

        // Prioritize username over UUID
        const skinUrls = username ? [
          `https://crafatar.com/skins/${username}`,
          `https://mc-heads.net/skin/${username}`,
          `https://minecraft-api.com/api/skins/${username}/body/10.5/10`,
        ] : uuid ? [
          `https://textures.minecraft.net/texture/${uuid}`
        ] : [
          'https://textures.minecraft.net/texture/1a4af718455d4aab528e7a61f86fa25e6a369d1768dcb13f7df319a713eb810b'
        ];

        let skinImage = new Image();
        skinImage.crossOrigin = "anonymous";

        let loadedSkin = false;
        for (const url of skinUrls) {
          try {
            await new Promise((resolve, reject) => {
              skinImage.onload = resolve;
              skinImage.onerror = reject;
              skinImage.src = url;
            });
            loadedSkin = true;
            break;
          } catch (e) {
            console.warn(`Failed to load skin from ${url}`);
            continue;
          }
        }

        if (!loadedSkin) {
          throw new Error('Failed to load skin from all sources');
        }

        viewerRef.current = new SkinViewer({
          canvas: canvasRef.current,
          width,
          height,
          skin: skinImage,
        });

        viewerRef.current.camera.position.z = 70;
        viewerRef.current.camera.position.y = 0;
        
        if (rotate) {
          viewerRef.current.autoRotate = true;
        }
        
        viewerRef.current.animation = viewerRef.current.animations.idle;

        if (canvasRef.current) {
          canvasRef.current.addEventListener('mouseenter', () => {
            if (viewerRef.current) {
              viewerRef.current.animation = viewerRef.current.animations.walk;
            }
          });

          canvasRef.current.addEventListener('mouseleave', () => {
            if (viewerRef.current) {
              viewerRef.current.animation = viewerRef.current.animations.idle;
            }
          });
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error loading skin:', error);
        setError(true);
        setIsLoading(false);
      }
    };

    initSkinViewer();

    return () => {
      if (viewerRef.current) {
        viewerRef.current.dispose();
      }
    };
  }, [username, uuid, width, height, rotate]);

  if (isLoading) {
    return (
      <div 
        style={{ width, height }}
        className="rounded-lg bg-beige-900/30 animate-pulse flex items-center justify-center"
      >
        <div className="w-8 h-8 border-2 border-beige-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div 
        style={{ width, height }}
        className="rounded-lg bg-beige-900/30 flex items-center justify-center"
      >
        <div className="text-beige-400 text-sm text-center px-4">
          No se pudo cargar el skin
        </div>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="rounded-lg bg-beige-900/30"
    />
  );
}