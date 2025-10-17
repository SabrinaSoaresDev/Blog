import React from "react";
import { useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;