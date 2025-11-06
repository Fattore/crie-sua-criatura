'use client';

import { Monster } from '@/domain/entities/Monster';

interface AttributeDisplayProps {
  attributes: Monster['attributes'];
}

export function AttributeDisplay({ attributes }: AttributeDisplayProps) {
  const attrs = [
    { key: 'for', label: 'FOR', attr: attributes.for },
    { key: 'agi', label: 'AGI', attr: attributes.agi },
    { key: 'int', label: 'INT', attr: attributes.int },
    { key: 'pre', label: 'PRE', attr: attributes.pre },
    { key: 'vig', label: 'VIG', attr: attributes.vig },
  ];

  return (
    <div className="flex gap-2 flex-wrap">
      {attrs.map(({ key, label, attr }) => (
        <div
          key={key}
          className="bg-gray-800 border border-gray-700 rounded px-3 py-2 min-w-[60px]"
        >
          <div className="text-xs text-gray-400 uppercase font-semibold">
            {label}
          </div>
          <div className="text-sm text-white font-bold">
            {attr.modifier >= 0 ? '+' : ''}{attr.modifier}
          </div>
        </div>
      ))}
    </div>
  );
}