# Estrutura do Projeto Suri Frontend

Esta é a estrutura organizacional do projeto frontend do Suri, seguindo as melhores práticas de desenvolvimento React/TypeScript.

## 📁 Estrutura de Pastas

```
src/
├── features/           # Funcionalidades específicas da aplicação
│   └── auth/          # Módulo de autenticação
│       ├── components/ # Componentes específicos de auth
│       ├── hooks/     # Hooks específicos de auth
│       ├── services/  # Serviços de API para auth
│       └── types/     # Tipos específicos de auth
├── shared/            # Recursos compartilhados
│   ├── components/    # Componentes reutilizáveis
│   │   └── ui/       # Componentes de UI (shadcn/ui)
│   ├── hooks/        # Hooks reutilizáveis
│   ├── utils/        # Utilitários e helpers
│   ├── constants/    # Constantes da aplicação
│   └── types/        # Tipos compartilhados
├── services/         # Serviços de API e configurações
├── context/          # Contextos React
├── layout/           # Componentes de layout
├── types/            # Definições de tipos TypeScript
├── pages/            # Páginas da aplicação
└── assets/           # Recursos estáticos
```

## 🎯 Princípios da Arquitetura

### 1. **Feature-Based Organization**
- Cada funcionalidade principal tem sua própria pasta em `features/`
- Cada feature é auto-contida com seus próprios componentes, hooks, serviços e tipos
- Facilita manutenção e escalabilidade

### 2. **Shared Resources**
- Recursos reutilizáveis ficam em `shared/`
- Componentes UI, hooks utilitários, constantes e tipos globais
- Evita duplicação de código

### 3. **Separation of Concerns**
- **Services**: Lógica de comunicação com API
- **Context**: Gerenciamento de estado global
- **Types**: Definições TypeScript organizadas
- **Components**: Interface do usuário

### 4. **Path Mapping**
- Aliases configurados para facilitar importações
- `@/shared/*` para recursos compartilhados
- `@/features/*` para funcionalidades específicas
- `@/services/*` para serviços
- `@/types/*` para tipos
- `@/context/*` para contextos
- `@/layout/*` para layouts

## 📋 Convenções

### Nomenclatura de Arquivos
- **Componentes**: PascalCase (ex: `LoginForm.tsx`)
- **Hooks**: camelCase com prefixo `use` (ex: `useAuth.ts`)
- **Services**: camelCase com sufixo `Service` (ex: `authService.ts`)
- **Types**: PascalCase (ex: `User.ts`)

### Estrutura de Componentes
```typescript
// Importações organizadas
import React from 'react';
import { Component } from '@/shared/components/ui';
import { useAuth } from '@/features/auth/hooks/useAuth';
import type { User } from '@/types';

interface ComponentProps {
  // props
}

export const Component: React.FC<ComponentProps> = ({ ...props }) => {
  // lógica do componente
  return (
    // JSX
  );
};
```

### Estrutura de Services
```typescript
import { apiClient } from '@/services/api';
import type { ApiResponse, User } from '@/types';

export class AuthService {
  async login(credentials: LoginCredentials): Promise<User> {
    const response = await apiClient.post<User>('/auth/login', credentials);
    return response.data!;
  }
}

export const authService = new AuthService();
```

## 🚀 Benefícios

1. **Escalabilidade**: Fácil adicionar novas features
2. **Manutenibilidade**: Código organizado e bem estruturado
3. **Reutilização**: Componentes e hooks compartilhados
4. **Type Safety**: TypeScript bem configurado
5. **Developer Experience**: Importações limpas e path mapping
6. **Separation of Concerns**: Responsabilidades bem definidas

## 📝 Próximos Passos

1. Migrar componentes existentes para a nova estrutura
2. Atualizar importações nos arquivos existentes
3. Implementar testes unitários
4. Adicionar documentação de componentes
5. Configurar linting e formatação automática
