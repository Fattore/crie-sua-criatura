# Crie Sua Criatura

Projeto monorepo com backend Node.js e frontend Next.js seguindo Clean Architecture.

## Estrutura do Projeto

```
crie-sua-criatura/
├── backend/          # Backend Node.js com Fastify
├── frontend/         # Frontend Next.js com App Router
└── shared/           # Código compartilhado entre frontend e backend
```

## Arquitetura

Este projeto segue os princípios da Clean Architecture:

### Backend
- **Domain**: Entidades e interfaces de repositórios (sem dependências externas)
- **Application**: Casos de uso que orquestram a lógica de negócio
- **Infrastructure**: Implementações concretas (DB, APIs externas)
- **Presentation**: HTTP controllers e rotas

### Frontend
- **Domain**: Types/interfaces e contratos de repositórios
- **Application**: Casos de uso e serviços de aplicação
- **Infrastructure**: Implementação de chamadas HTTP e repositórios
- **Presentation**: Componentes React e hooks

## Instalação

```bash
# Instalar todas as dependências dos workspaces
npm install
```

## Desenvolvimento

```bash
# Rodar backend e frontend simultaneamente
npm run dev

# Rodar apenas o backend
npm run dev:backend

# Rodar apenas o frontend
npm run dev:frontend
```

O backend estará disponível em `http://localhost:3001`
O frontend estará disponível em `http://localhost:3000`

## Build

```bash
# Build de todos os workspaces
npm run build
```

## Testes

```bash
# Executar testes de todos os workspaces
npm run test
```

## Tecnologias

- **Backend**: Node.js, TypeScript, Fastify
- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Monorepo**: npm workspaces

