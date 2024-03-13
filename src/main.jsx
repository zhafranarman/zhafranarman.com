import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { PlausibleProvider, Plausible } from 'next-plausible';

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <PlausibleProvider domain="zhafranarman.com" customDomain="https://analytics.zhafran.dev">
        <BrowserRouter>
          <App />
          <SpeedInsights />
          <Analytics />
          <Plausible />
        </BrowserRouter>
      </PlausibleProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
