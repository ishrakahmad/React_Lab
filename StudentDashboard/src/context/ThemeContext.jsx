import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeProvider(props) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      <div className={darkMode ? 'dark-theme' : 'light-theme'}>
        {props.children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;