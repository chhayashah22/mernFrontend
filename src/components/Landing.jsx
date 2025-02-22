import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-orange-100 to-orange-200 flex items-center justify-center">
    
      <div className="absolute inset-0 bg-cover bg-top md:bg-center brightness-75" style={{backgroundImage: "url('https://seedsystems.net/wp-content/uploads/ngos-hero-background.jpg')",
        }}></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Welcome to <span className="text-orange-500">Non Profit Organization</span>
        </h1>
        <p className="text-lg md:text-xl text-white drop-shadow-md max-w-2xl mx-auto mb-8">
          Empower your digital presence with our cutting-edge technology.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/login" className="bg-orange-500 px-6 py-3 rounded-lg text-lg font-bold hover:bg-orange-600 transition duration-300 shadow-lg text-white" >
            Login
          </a>
          <a href="/register"className="bg-gray-800 px-6 py-3 rounded-lg text-lg font-bold border border-gray-500 hover:bg-gray-700 transition duration-300 shadow-lg text-white" >
            Register
          </a>
        </div>
      </motion.div>
    </div>
  );
}
