# 🚀 Guia de Deploy - Como Compartilhar os Sites Gratuitamente

## 📋 Opções Gratuitas de Hospedagem

### 1. **Vercel** (Recomendado - Mais Fácil) ⭐

#### Passo a Passo:

1. **Instalar Vercel CLI:**
```bash
npm install -g vercel
```

2. **Fazer build do projeto:**
```bash
npm run build
```

3. **Fazer deploy:**
```bash
vercel
```

4. **Seguir as instruções:**
   - Escolha "Set up and deploy" quando perguntado
   - A Vercel detectará automaticamente que é um projeto Vite
   - Será gerado um link único (ex: `https://seu-projeto.vercel.app`)

5. **Para fazer deploy de produção:**
```bash
vercel --prod
```

**Vantagens:**
- ✅ Totalmente gratuito
- ✅ Deploy automático (se conectar com GitHub)
- ✅ HTTPS automático
- ✅ Domínio personalizado gratuito
- ✅ Muito rápido

---

### 2. **Netlify** (Também Muito Fácil)

#### Passo a Passo:

1. **Instalar Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Fazer build:**
```bash
npm run build
```

3. **Fazer deploy:**
```bash
netlify deploy
```

4. **Para produção:**
```bash
netlify deploy --prod
```

**Vantagens:**
- ✅ Totalmente gratuito
- ✅ Interface web amigável
- ✅ Deploy contínuo com GitHub
- ✅ HTTPS automático

---

### 3. **GitHub Pages** (Gratuito e Permanente)

#### Passo a Passo:

1. **Instalar gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Adicionar scripts no package.json:**
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. **Criar repositório no GitHub**

4. **Fazer deploy:**
```bash
npm run deploy
```

5. **Ativar GitHub Pages no repositório:**
   - Vá em Settings > Pages
   - Escolha branch `gh-pages`
   - O site ficará em: `https://seu-usuario.github.io/nome-do-repo`

**Vantagens:**
- ✅ Totalmente gratuito
- ✅ Sem limite de uso
- ✅ Permanente (enquanto o GitHub existir)

---

### 4. **Surge.sh** (Super Rápido)

#### Passo a Passo:

1. **Instalar Surge:**
```bash
npm install -g surge
```

2. **Fazer build:**
```bash
npm run build
```

3. **Fazer deploy:**
```bash
cd dist
surge
```

4. **Seguir instruções:**
   - Criar conta gratuita
   - Escolher domínio (ex: `seu-site.surge.sh`)

**Vantagens:**
- ✅ Extremamente rápido
- ✅ Deploy em segundos
- ✅ Domínio personalizado

---

### 5. **Firebase Hosting** (Google)

#### Passo a Passo:

1. **Instalar Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Login:**
```bash
firebase login
```

3. **Inicializar:**
```bash
firebase init hosting
```

4. **Fazer build e deploy:**
```bash
npm run build
firebase deploy
```

**Vantagens:**
- ✅ Gratuito (com limites generosos)
- ✅ Backend do Google
- ✅ Muito confiável

---

### 6. **Acesso Local na Rede** (Sem Deploy)

Se você quer que pessoas na mesma rede WiFi acessem:

1. **Executar com host:**
```bash
npm run dev -- --host
```

2. **Descobrir seu IP:**
   - Windows: `ipconfig` (procure IPv4)
   - Mac/Linux: `ifconfig` ou `ip addr`

3. **Compartilhar:**
   - Acesse: `http://SEU_IP:5173`
   - Exemplo: `http://192.168.1.100:5173`

**Limitações:**
- ⚠️ Só funciona na mesma rede
- ⚠️ Precisa manter o computador ligado
- ⚠️ Não é HTTPS

---

## 🎯 Recomendação por Caso de Uso

### Para Teste Rápido:
→ **Surge.sh** ou **Vercel**

### Para Projeto Permanente:
→ **GitHub Pages** ou **Netlify**

### Para Múltiplos Projetos:
→ **Vercel** ou **Netlify**

### Para Acesso Local Temporário:
→ **Vite com --host**

---

## 📝 Configurações Adicionais

### Vite Config para Deploy (Opcional)

Se precisar ajustar o build, edite `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/', // ou '/nome-do-projeto/' para GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
```

---

## 🔗 Links Úteis

- **Vercel**: https://vercel.com
- **Netlify**: https://www.netlify.com
- **GitHub Pages**: https://pages.github.com
- **Surge**: https://surge.sh
- **Firebase**: https://firebase.google.com

---

## 💡 Dica Extra

Para fazer deploy automático sempre que você atualizar o código:

1. Crie conta no GitHub
2. Faça upload do projeto
3. Conecte com Vercel ou Netlify
4. Todo push no GitHub = deploy automático!

