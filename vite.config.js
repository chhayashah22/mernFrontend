import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "https://api-2qzi.onrender.com",
        changeOrigin: true,
        secure: true, // Ensures HTTPS compatibility
        rewrite: (path) => path.replace(/^\/api/, ""), // Removes "/api" prefix before forwarding
      },
    },
  }
});
