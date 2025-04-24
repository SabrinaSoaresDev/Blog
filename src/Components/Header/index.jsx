import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-lg"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Blog Sabrina Soares</h1>
        <nav className="space-x-4 text-lg">
          <a href="/" className="hover:underline">Início</a>
          <a href="#artigos" className="hover:underline">Artigos</a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
