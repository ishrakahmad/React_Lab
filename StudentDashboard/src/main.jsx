import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App.jsx';
import ThemeProvider from './context/ThemeContext';
import StudentProvider from './context/StudentContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <StudentProvider>
        <App />
      </StudentProvider>
    </ThemeProvider>
  </StrictMode>
);