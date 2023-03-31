import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppProvider from './context/AppProvider'
import RoutesPage from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <RoutesPage />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
)
