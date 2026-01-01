import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import App from './App.tsx';
import HowWeWork from './pages/HowWeWork.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
      </Routes>
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  </StrictMode>
);
