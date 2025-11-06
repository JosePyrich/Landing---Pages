import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite acesso de qualquer IP
    port: 5173, // Porta padrão (pode ser alterada)
    open: true, // Abre automaticamente no navegador
  },
})


