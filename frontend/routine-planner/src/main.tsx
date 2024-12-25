import './index.css'
import axios from 'axios'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { StrictMode } from 'react'
import { Toaster } from 'react-hot-toast'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'

axios.defaults.baseURL = 'http://localhost:5000/api/v1';
axios.defaults.withCredentials = true;

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Condensed, serif',
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster position="top-right"/>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>

  </StrictMode>,
);
