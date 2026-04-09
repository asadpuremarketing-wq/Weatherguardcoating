import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initEmailJS } from './lib/emailService.js'

// Initialise EmailJS once — uses the public key from emailService.js
initEmailJS();


// Google Analytics 4 setup (replace G-XXXXXXXXXX with your Measurement ID)
// window.dataLayer = window.dataLayer || [];
// function gtag(){ dataLayer.push(arguments); }
// gtag('js', new Date());
// gtag('config', 'G-XXXXXXXXXX');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
