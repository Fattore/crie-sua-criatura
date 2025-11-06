import { Button } from '@/presentation/components/ui/Button';

export default function NovaCriaturaPage() {
    return (
      <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Criar Nova Criatura
        </h1>
        <div className="bg-gray-800 rounded-lg p-6">
          <p className="text-gray-300 text-center mb-6">
            Formulário de criação de criatura será implementado aqui
          </p>
          
          {/* Botões de ação */}
          <div className="flex justify-center gap-4">
            <Button 
              href="/criaturas/1" 
              variant="secondary"
            >
              👁️ Visualizar Exemplo
            </Button>
            <Button 
              href="/" 
              variant="primary"
            >
              Voltar
            </Button>
          </div>
        </div>
      </div>
    </main>
    );
  }