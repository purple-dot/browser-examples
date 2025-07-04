import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ProductList } from './pages/ProductList.tsx';
import { ProductDisplay } from './pages/ProductDisplay.tsx';
import { Layout } from './components/Layout.tsx';
import * as PurpleDot from '@purple-dot/browser';

PurpleDot.init({
  apiKey: '394ceb41-2fe5-4f36-8232-f390b49954b1',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/browser-examples/'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDisplay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
