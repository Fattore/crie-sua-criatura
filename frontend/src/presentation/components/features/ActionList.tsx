'use client';

import { Action } from '@/domain/entities/Monster';

interface ActionListProps {
  actions: Action[];
}

export function ActionList({ actions }: ActionListProps) {
  return (
    <div className="space-y-2">
      {actions.map((action, index) => (
        <div key={index} className="text-sm text-gray-300">
          <div className="font-semibold uppercase">
            {action.type} {action.name}
          </div>
          {action.damage && (
            <div className="text-gray-400 text-xs mt-0.5">
              Dano {action.damage}
            </div>
          )}
          {action.description && (
            <div className="text-gray-400 text-xs mt-1">
              {action.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}