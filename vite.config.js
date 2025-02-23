
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
    server:{
      //  allowedHosts: ['mernfrontend-ix6x.onrender.com'], 
      port:5173,
      
       // Use Render's port or default to 10000
      proxy : {
        "/api" : "https://api-2qzi.onrender.com",
      },
    }
  
})