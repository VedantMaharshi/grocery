import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import LandingApp from './App.jsx';

import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './context/AppContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <LandingApp />
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
