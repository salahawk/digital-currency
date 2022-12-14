import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CurrencyProvider } from './context/CurrencyContext';
import './index.css';
import App from './pages/App';
import Coin from './pages/Coin';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CurrencyProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/coin/:id" element={<Coin />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </CurrencyProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
