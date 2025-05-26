import React from "react";
import { motion } from "framer-motion";
import { useTheme } from '../../context/ThemeContext';
import { Link } from "react-router-dom";

function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } shadow-md`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo e Nome do Blog */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
          >
            
            <h1 className="ml-3 text-2xl font-bold">DevBlog</h1>
          </motion.div>

          {/* Navegação Desktop */}
         <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-accent transition ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Início
            </Link>
            <Link 
              to="/artigos" 
              className={`hover:text-accent transition ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Artigos
            </Link>
            <Link 
              to="/sobre" 
              className={`hover:text-accent transition ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Sobre
            </Link>
            <Link 
              to="/contato" 
              className={`hover:text-accent transition ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Contato
            </Link>

            {/* Botão de Toggle Dark Mode */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-4 p-2 rounded-full ${
                darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'
              }`}
              aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {darkMode ? '☀️' : '🌙'}
            </motion.button>
          </nav>


          {/* Menu Mobile */}
          <button 
            className="md:hidden p-2 rounded-lg focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;