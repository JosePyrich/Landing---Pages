# ⚡ Deploy Rápido - 3 Passos

## 🚀 Opção Mais Rápida: Vercel (5 minutos)

### Passo 1: Instalar Vercel
```bash
npm install -g vercel
```

### Passo 2: Fazer Build
```bash
npm run build
```

### Passo 3: Deploy
```bash
vercel --prod
```

**Pronto!** Você receberá um link como: `https://seu-projeto.vercel.app`

---

## 🌐 Opção Alternativa: Netlify (5 minutos)

### Passo 1: Instalar Netlify
```bash
npm install -g netlify-cli
```

### Passo 2: Fazer Build
```bash
npm run build
```

### Passo 3: Deploy
```bash
netlify deploy --prod
```

**Pronto!** Você receberá um link como: `https://seu-projeto.netlify.app`

---

## 📱 Compartilhar na Mesma Rede WiFi

### Passo 1: Executar
```bash
npm run dev:host
```

### Passo 2: Descobrir seu IP
**Windows:**
```bash
ipconfig
```
Procure por "IPv4" (ex: 192.168.1.100)

**Mac/Linux:**
```bash
ifconfig
```
ou
```bash
ip addr
```

### Passo 3: Compartilhar
Acesse de qualquer dispositivo na mesma rede:
```
http://SEU_IP:5173
```
Exemplo: `http://192.168.1.100:5173`

---

## 💡 Qual Escolher?

- **Vercel/Netlify**: Para compartilhar com qualquer pessoa, em qualquer lugar
- **Rede Local**: Para mostrar rapidamente para alguém perto de você

---

## 🎯 Dica Pro

Se você tem GitHub, pode fazer deploy automático:
1. Faça upload do projeto no GitHub
2. Conecte com Vercel ou Netlify
3. Todo push = deploy automático!

