import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; 

export default defineConfig({
  // Vite server configuration
  server: {
    // Proxy configuration for redirecting '/api' requests to 'http://localhost:3000'
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  // Vite plugins configuration (including the React plugin)
  plugins: [
    react(), // Enable the Vite React plugin
  ],
});
