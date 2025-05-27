import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from '../../context/ThemeContext';
import { Link } from "react-router-dom";

function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [menuAberto, setMenuAberto] = useState(false); // ✅ Faltava isso

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-md`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center cursor-pointer">
            <h1 className="ml-3 text-2xl font-bold">DevBlog</h1>
          </motion.div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-accent transition ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Início</Link>
            <Link to="/artigos" className={`hover:text-accent transition ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Artigos</Link>
            <Link to="/sobre" className={`hover:text-accent transition ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Sobre</Link>
            <Link to="/contato" className={`hover:text-accent transition ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Contato</Link>
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-4 p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
              aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {darkMode ? '☀️' : '🌙'}
            </motion.button>
          </nav>

          {/* Botão Mobile */}
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none"
            aria-label="Menu"
            onClick={() => setMenuAberto(!menuAberto)} // ✅ Agora o botão abre/fecha
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu Mobile Links */}
        {menuAberto && (
          <div className="mt-4 md:hidden flex flex-col space-y-4">
            <Link to="/" onClick={() => setMenuAberto(false)} className="hover:text-accent">Início</Link>
            <Link to="/artigos" onClick={() => setMenuAberto(false)} className="hover:text-accent">Artigos</Link>
            <Link to="/sobre" onClick={() => setMenuAberto(false)} className="hover:text-accent">Sobre</Link>
            <Link to="/contato" onClick={() => setMenuAberto(false)} className="hover:text-accent">Contato</Link>
            <button
              onClick={() => {
                toggleDarkMode();
                setMenuAberto(false);
              }}
              className={`p-2 rounded-full w-fit ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
            </button>
          </div>
        )}
      </div>
    </motion.header>
  );
}

export default Header;
