import { Button } from '@/presentation/components/ui/Button';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Crie Sua Criatura
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Estrutura Clean Architecture implementada
        </p>
        
        <div className="flex justify-center gap-4">
          <Button href="/criaturas" variant="primary">
            Criar Nova Criatura
          </Button>
        </div>

        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-green-400">✅ Tailwind CSS está funcionando!</p>
        </div>
      </div>
    </main>
  );
}