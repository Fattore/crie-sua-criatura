import { MonsterSheet } from '@/presentation/components/features/MonsterSheet';
import { Monster } from '@/domain/entities/Monster';

// Dados de exemplo - depois virá do backend
const exampleMonster: Monster = {
  id: '1',
  name: 'ZUMBI DE SANGUE',
  type: 'Zumbi de Sangue',
  vd: 20,
  attributes: {
    for: { name: 'Força', value: 2, modifier: 2 },
    agi: { name: 'Agilidade', value: 3, modifier: 3 },
    int: { name: 'Intelecto', value: 0, modifier: 0 },
    pre: { name: 'Presença', value: 0, modifier: 0 },
    vig: { name: 'Vigor', value: 1, modifier: 1 },
  },
  defense: {
    total: 17,
    fortitude: 10,
    reflexes: 10,
    will: 10,
  },
  initiative: {
    value: 10,
    skill: 'PERCEPÇÃO',
  },
  hitPoints: 45,
  displacement: '9m',
  disturbingPresence: 'Descrição da presença perturbadora...',
  actions: [
    {
      name: 'AGREDIR',
      type: 'PADRÃO',
      damage: '1d6+2',
    },
    {
      name: 'GARRAS',
      type: '',
      damage: '1d6+2',
    },
    {
      name: 'MORDIDA',
      type: '',
      damage: '1d4+2',
    },
  ],
  description: `Descrição completa do monstro aqui. Este é um parágrafo de exemplo que descreve as características, comportamento e história do Zumbi de Sangue.

Segundo parágrafo com mais informações sobre o monstro, suas habilidades especiais, fraquezas e como ele se comporta em combate.

Terceiro parágrafo com informações adicionais sobre a origem, lore e contexto do monstro no mundo do jogo.`,
};

export default function MonsterPage() {
  return <MonsterSheet monster={exampleMonster} />;
}