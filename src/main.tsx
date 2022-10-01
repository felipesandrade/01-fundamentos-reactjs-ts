import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// Ponto de exclamação é usado para informar que o typescript pode confiar q o
// elemento n será null
// N deve ser usado sempre!!!
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
