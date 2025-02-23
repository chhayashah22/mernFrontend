
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
    server:{
 
      port:5173,
      
      
      proxy : {
        "/api" : "https://api-2qzi.onrender.com",
      },
    }
  
})