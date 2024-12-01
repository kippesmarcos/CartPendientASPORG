import { Kit } from '../types/kit';

export const kits: Kit[] = [
  {
    id: 'destruction',
    name: 'Destruction Kit',
    description: 'Un kit diseñado para la destrucción total',
    price: {
      permanent: 8.99,
      monthly: 3.99
    },
    icon: '/images/kits/destruction.svg',
    color: '#9d4edd',
    features: [
      'Espada de Diamante (Sharpness V)',
      'Set completo de armadura de diamante (Protection IV)',
      '64x Perlas de Ender',
      '32x Manzanas de Oro',
      '16x TNT',
      'Pico de Diamante (Efficiency V)',
      'Cooldown: 24 horas'
    ]
  },
  {
    id: 'ultra',
    name: 'Ultra Kit',
    description: 'El kit más poderoso para los jugadores más exigentes',
    price: {
      permanent: 8.99,
      monthly: 3.99
    },
    icon: '/images/kits/ultra.svg',
    color: '#ff00ff',
    features: [
      'Espada de Netherite (Sharpness V, Fire Aspect II)',
      'Set completo de armadura de Netherite (Protection IV)',
      '128x Perlas de Ender',
      '64x Manzanas de Oro',
      '32x TNT',
      'Pico de Netherite (Efficiency V, Fortune III)',
      'Cooldown: 12 horas'
    ]
  }
];