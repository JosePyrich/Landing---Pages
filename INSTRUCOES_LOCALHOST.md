# 🚀 Como Abrir o Projeto em Localhost

Existem várias formas de executar e acessar o projeto:

## 📋 Método 1: Servidor de Desenvolvimento (Recomendado)

```bash
npm run dev
```

Isso irá:
- Iniciar o servidor Vite
- Abrir automaticamente no navegador (se configurado)
- Mostrar a URL no terminal (geralmente `http://localhost:5173`)

### URLs de acesso:
- **Local**: `http://localhost:5173`
- **Rede local**: `http://[SEU_IP]:5173` (para acessar de outros dispositivos na mesma rede)

## 📋 Método 2: Build de Produção + Preview

```bash
# 1. Primeiro, criar o build
npm run build

# 2. Depois, visualizar o build
npm run preview
```

Isso cria uma versão otimizada e a servirá em outra porta (geralmente `http://localhost:4173`)

## 📋 Método 3: Abrir Manualmente no Navegador

1. Execute `npm run dev`
2. Veja a URL no terminal (ex: `http://localhost:5173`)
3. Abra manualmente no navegador:
   - Chrome/Edge: `http://localhost:5173`
   - Firefox: `http://localhost:5173`
   - Ou copie e cole a URL do terminal

## 📋 Método 4: Usar uma Porta Diferente

Se a porta 5173 estiver ocupada, você pode especificar outra porta:

```bash
npm run dev -- --port 3000
```

Ou configurar no `vite.config.js`:
```js
server: {
  port: 3000
}
```

## 📋 Método 5: Acessar de Outros Dispositivos na Rede

1. Descubra seu IP local:
   - Windows: `ipconfig` (procure por "IPv4")
   - Mac/Linux: `ifconfig` ou `ip addr`

2. Execute o servidor com:
   ```bash
   npm run dev -- --host
   ```

3. Acesse de outro dispositivo usando:
   `http://[SEU_IP]:5173`

## 📋 Método 6: Usar Extensão do VS Code

Se você usa VS Code, pode instalar a extensão "Live Server" ou similar, mas para projetos React/Vite, o método recomendado é usar `npm run dev`.

## 🔧 Solução de Problemas

### Porta já em uso:
```bash
# Windows - matar processo na porta 5173
netstat -ano | findstr :5173
taskkill /PID [NUMERO_PID] /F

# Ou simplesmente use outra porta
npm run dev -- --port 3000
```

### Erro "Cannot GET /":
- Certifique-se de que está acessando a rota raiz (`/`)
- Verifique se o servidor está rodando
- Tente recarregar a página

### Não abre automaticamente:
- Abra manualmente: `http://localhost:5173`
- Ou configure `open: true` no `vite.config.js`

## 📝 Notas Importantes

- O servidor de desenvolvimento precisa estar rodando para o projeto funcionar
- Qualquer mudança nos arquivos será refletida automaticamente (Hot Module Replacement)
- Para parar o servidor, pressione `Ctrl + C` no terminal

