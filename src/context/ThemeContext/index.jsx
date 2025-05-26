import React from 'react';
import { createContext, useState, useContext, useEffect } from 'react';

// 1. Criamos o contexto com um valor padrão (opcional)
export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {}
});

// 2. Criamos o provider com funcionalidades extras
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Verifica o localStorage ou preferência do sistema
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 3. Função para alternar o tema
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // 4. Persistência no localStorage e aplicação da classe
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', darkMode);
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 5. Hook personalizado para consumo mais fácil
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}