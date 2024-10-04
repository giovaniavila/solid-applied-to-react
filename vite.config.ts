// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/solid-applied-to-react/', // Ajuste aqui para o nome do seu repositório
});
