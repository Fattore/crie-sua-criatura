'use client';

import { Monster } from '@/domain/entities/Monster';
import { StatBlock } from './StatBlock';
import { MonsterDescription } from './MonsterDescription';

interface MonsterSheetProps {
  monster: Monster;
}

export function MonsterSheet({ monster }: MonsterSheetProps) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Área Principal - Título e Descrição */}
          <div className="lg:col-span-2">
            {/* Título Principal */}
            <div className="mb-6">
              <h2 className="text-sm text-gray-400 uppercase mb-1">
                {monster.type}
              </h2>
              <h1 className="text-5xl font-bold text-white uppercase tracking-wide">
                {monster.name}
              </h1>
            </div>

            {/* Descrição */}
            <MonsterDescription description={monster.description} />
          </div>

          {/* Barra Lateral - Estatísticas */}
          <div className="lg:col-span-1">
            <StatBlock monster={monster} />
          </div>
        </div>
      </div>
    </div>
  );
}