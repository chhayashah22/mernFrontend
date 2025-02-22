
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
    server:{
       allowedHosts: ['mernfrontend-ix6x.onrender.com'], 
      host: '0.0.0.0', // Bind to all network interfaces
      port: 5173,  
      strictPort:true,
       // Use Render's port or default to 10000
      proxy : {
        "/api" : "https://api-2qzi.onrender.com",
      },
    }
  
})