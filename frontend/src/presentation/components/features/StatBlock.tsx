'use client';

import { Monster } from '@/domain/entities/Monster';
import { AttributeDisplay } from './AttributeDisplay';
import { ActionList } from './ActionList';

interface StatBlockProps {
  monster: Monster;
}

export function StatBlock({ monster }: StatBlockProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
      {/* Cabeçalho com Barra Vermelha */}
      <div className="relative">
        <div className="bg-red-600 h-12 flex items-center px-4">
          <span className="text-white text-sm font-semibold uppercase">
            {monster.name}
          </span>
        </div>
        {/* VD destacado */}
        <div className="absolute top-0 right-4 flex items-center h-12">
          <div className="bg-gray-900 px-3 py-1 rounded border border-gray-700">
            <span className="text-xs font-bold text-gray-400">VD</span>
            <span className="text-2xl font-bold text-white ml-1">{monster.vd}</span>
          </div>
        </div>
        {/* Tipo abaixo da barra */}
        <div className="px-4 py-2 bg-gray-900">
          <span className="text-white text-sm font-semibold uppercase">
            {monster.type}
          </span>
        </div>
      </div>

      {/* Conteúdo das Estatísticas */}
      <div className="p-4 space-y-4">
        {/* Presença Perturbadora */}
        {monster.disturbingPresence && (
          <div className="border-b border-gray-700 pb-3">
            <h3 className="text-xs font-bold text-white uppercase mb-1">
              Presença Perturbadora
            </h3>
            <p className="text-sm text-gray-300">{monster.disturbingPresence}</p>
          </div>
        )}

        {/* Iniciativa */}
        <div className="border-b border-gray-700 pb-3">
          <h3 className="text-xs font-bold text-white uppercase mb-1">
            Iniciativa
          </h3>
          <p className="text-sm text-gray-300">
            {monster.initiative.skill} {monster.initiative.value}
          </p>
        </div>

        {/* Defesa */}
        <div className="border-b border-gray-700 pb-3">
          <h3 className="text-xs font-bold text-white uppercase mb-1">
            Defesa
          </h3>
          <div className="space-y-1">
            <p className="text-sm text-gray-300">
              <span className="font-semibold">{monster.defense.total}</span>
            </p>
            <div className="text-xs text-gray-400 space-y-0.5">
              <p>FORTITUDE {monster.defense.fortitude}</p>
              <p>REFLEXOS {monster.defense.reflexes}</p>
              <p>VONTADE {monster.defense.will}</p>
            </div>
          </div>
        </div>

        {/* Pontos de Vida */}
        <div className="border-b border-gray-700 pb-3">
          <h3 className="text-xs font-bold text-white uppercase mb-1">
            Pontos de Vida
          </h3>
          <p className="text-sm text-gray-300 font-semibold">{monster.hitPoints}</p>
        </div>

        {/* Atributos */}
        <div className="border-b border-gray-700 pb-3">
          <h3 className="text-xs font-bold text-white uppercase mb-3">
            Atributos
          </h3>
          <AttributeDisplay attributes={monster.attributes} />
        </div>

        {/* Deslocamento */}
        <div className="border-b border-gray-700 pb-3">
          <h3 className="text-xs font-bold text-white uppercase mb-1">
            Deslocamento
          </h3>
          <p className="text-sm text-gray-300">{monster.displacement}</p>
        </div>

        {/* Ações */}
        <div>
          <h3 className="text-xs font-bold text-white uppercase mb-3">
            Ações
          </h3>
          <ActionList actions={monster.actions} />
        </div>
      </div>
    </div>
  );
}