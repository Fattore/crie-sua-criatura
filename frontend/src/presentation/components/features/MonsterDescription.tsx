'use client';

interface MonsterDescriptionProps {
  description: string;
}

export function MonsterDescription({ description }: MonsterDescriptionProps) {
  // Dividir descrição em parágrafos
  const paragraphs = description.split('\n\n').filter(p => p.trim());

  return (
    <div className="space-y-4 text-gray-300 leading-relaxed">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-justify">
          {paragraph}
        </p>
      ))}
    </div>
  );
}