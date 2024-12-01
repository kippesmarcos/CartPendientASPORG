import { Key } from '../types/key';

export const keys: Key[] = [
  {
    id: 'perk-key-1',
    name: 'Perk Key I',
    description: 'Desbloquea beneficios temporales de nivel 1',
    price: 1.79,
    icon: '/images/keys/perk-1.svg',
    color: '#4aff4a',
    features: [
      'Velocidad aumentada por 1 hora',
      'Resistencia mejorada por 1 hora',
      'Cooldown de 24 horas',
      'Acumulable con otros beneficios'
    ]
  },
  {
    id: 'perk-key-2',
    name: 'Perk Key II',
    description: 'Desbloquea beneficios temporales de nivel 2',
    price: 2.69,
    icon: '/images/keys/perk-2.svg',
    color: '#ffff4a',
    features: [
      'Todos los beneficios de Perk Key I',
      'Fuerza aumentada por 2 horas',
      'Cooldown de 12 horas',
      'Duración extendida'
    ]
  },
  {
    id: 'perk-key-3',
    name: 'Perk Key III',
    description: 'Desbloquea los mejores beneficios temporales',
    price: 3.59,
    icon: '/images/keys/perk-3.svg',
    color: '#ff4aff',
    features: [
      'Todos los beneficios anteriores',
      'Vuelo temporal por 3 horas',
      'Cooldown de 6 horas',
      'Máxima duración de efectos'
    ]
  }
];