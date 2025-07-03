import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ProductList } from './pages/ProductList.tsx';
import { ProductDisplay } from './pages/ProductDisplay.tsx';
import { Layout } from './components/Layout.tsx';
import * as PurpleDot from '@purple-dot/browser';

PurpleDot.init({
  apiKey: '5ce2721b-6eb4-4ab3-a3c8-2261090922a2',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDisplay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
