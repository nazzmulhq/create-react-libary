import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: true,
  },
  optimizeDeps: {
    // Force re-optimization when library changes
    force: true,
  },
});
