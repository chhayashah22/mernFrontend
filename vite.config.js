
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
    server:{
      host: '0.0.0.0', // Bind to all network interfaces
      port: process.env.PORT || 3000,
      strictPort:true,
      https:false, // Use Render's port or default to 10000
      proxy : {
        "/api" : "https://api-2qzi.onrender.com",
      },
    }
  
})