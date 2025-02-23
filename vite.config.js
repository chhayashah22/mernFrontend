
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
    server:{
       allowedHosts: ['https://mern-frontend-9164.vercel.app/'], 
      port:5173,
      
      
      proxy : {
        "/api" : "https://api-2qzi.onrender.com",
      },
    }
  
})