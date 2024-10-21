import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo-client.js'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HelmetProvider>
        <Helmet>
          <script defer data-domain="zhafranarman.com" src="https://analytics.zhafran.dev/js/script.js"></script>
        </Helmet>
        <BrowserRouter>
          <App />
          <SpeedInsights />
          <Analytics />
        </BrowserRouter>
      </HelmetProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
