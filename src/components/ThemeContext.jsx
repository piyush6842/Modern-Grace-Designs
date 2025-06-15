// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create a context for managing the theme
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Retrieve saved theme from localStorage or default to light mode
  const savedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(savedTheme || 'light');

  // Apply theme to body element whenever it changes
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Save the selected theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
