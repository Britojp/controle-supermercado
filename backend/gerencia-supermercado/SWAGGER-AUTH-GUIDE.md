# 🚀 Guia de Autenticação JWT no Swagger

## 📋 **Visão Geral**

Este guia explica como testar rotas protegidas no Swagger UI da API de Gerenciamento de Supermercado.

## 🔐 **Como Funciona a Autenticação**

- **Rotas Públicas**: Marcadas com `@IsPublic()` - não precisam de token
- **Rotas Protegidas**: Todas as outras rotas precisam de token JWT válido
- **Guard Global**: `JwtAuthGuard` protege automaticamente todas as rotas

## 🧪 **Passo a Passo para Testar Rotas Protegidas**

### **1. Acessar o Swagger UI**
```
http://localhost:3000/api
```

### **2. Fazer Login para Obter Token**
1. **Expandir** a seção "Autenticação"
2. **Clicar** em "POST /login"
3. **Clicar** em "Try it out"
4. **Inserir** credenciais válidas:
   ```json
   {
     "email": "admin@exemplo.com",
     "password": "senha123"
   }
   ```
5. **Executar** a requisição
6. **Copiar** o `access_token` da resposta

### **3. Configurar Autenticação no Swagger**
1. **Clicar** no botão "Authorize" (🔒) no topo da página
2. **Inserir** o token no campo "Value":
   ```
   Bearer SEU_TOKEN_AQUI
   ```
3. **Clicar** em "Authorize"
4. **Fechar** o modal

### **4. Testar Rotas Protegidas**
Agora você pode testar qualquer rota protegida:
- **GET /user** - Listar usuários
- **GET /user/{email}** - Buscar usuário por email
- **PATCH /user/{id}** - Atualizar usuário
- **DELETE /user/{id}** - Excluir usuário

## 🎯 **Rotas de Teste Disponíveis**

### **Rota Pública (Sem Autenticação)**
- `GET /test-auth/public` - Teste de rota pública

### **Rotas Protegidas (Com Autenticação)**
- `GET /test-auth/protected` - Teste de rota protegida GET
- `POST /test-auth/protected-post` - Teste de rota protegida POST

## 📝 **Exemplo de Uso**

### **1. Login**
```bash
POST /login
{
  "email": "admin@exemplo.com",
  "password": "senha123"
}
```

**Resposta:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "123",
    "email": "admin@exemplo.com",
    "name": "Administrador"
  }
}
```

### **2. Usar Token em Rota Protegida**
```bash
GET /user
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## ⚠️ **Problemas Comuns**

### **Erro 401 - Não Autorizado**
- Token JWT expirado ou inválido
- Token não foi configurado no Swagger
- Formato incorreto: deve ser `Bearer TOKEN`

### **Erro 403 - Acesso Negado**
- Usuário não tem permissão para a operação
- Token válido mas permissões insuficientes

### **Token Não Funciona**
- Verificar se o token foi copiado completamente
- Verificar se o formato está correto: `Bearer TOKEN`
- Verificar se o token não expirou

## 🔧 **Configuração Técnica**

### **Swagger Configuration**
```typescript
const config = new DocumentBuilder()
  .setTitle('API Gerenciamento Supermercado')
  .setDescription('API para gerenciamento de vendas de um supermercado')
  .setVersion('1.0')
  .addBearerAuth() // Habilita autenticação JWT
  .build();
```

### **Controller Protegido**
```typescript
@ApiBearerAuth() // Indica que precisa de autenticação
@Controller('user')
export class UsuarioController {
  // Rotas protegidas automaticamente
}
```

### **Rota Pública**
```typescript
@IsPublic() // Marca como pública
@Post('login')
login() {
  // Não precisa de autenticação
}
```

## 📚 **Recursos Adicionais**

- **JWT Strategy**: `src/auth/strategies/jwt.strategy.ts`
- **JWT Guard**: `src/auth/guards/jwt-auth.guard.ts`
- **Auth Service**: `src/auth/auth.service.ts`
- **IsPublic Decorator**: `src/auth/decorators/is-public.decorator.ts`

## 🎉 **Dicas de Teste**

1. **Sempre** faça login primeiro
2. **Copie** o token completo da resposta
3. **Use** o botão "Authorize" para configurar o token
4. **Teste** rotas públicas primeiro para verificar conectividade
5. **Verifique** se o token está sendo enviado no header Authorization

---

**💡 Dica**: Use as rotas de teste (`/test-auth/*`) para verificar se a autenticação está funcionando antes de testar as rotas principais da aplicação. 