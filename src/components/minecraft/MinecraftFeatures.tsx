import { Zap } from 'lucide-react';

interface MinecraftFeaturesProps {
  features: string[];
}

export function MinecraftFeatures({ features }: MinecraftFeaturesProps) {
  return (
    <div className="minecraft-btn p-4">
      <h4 className="text-sm font-minecraft text-gray-300 mb-3">CARACTERÍSTICAS</h4>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <span className="text-white font-minecraft">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}