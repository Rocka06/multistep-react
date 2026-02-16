import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { OrderProvider } from './context/OrderContext.tsx'
import { ItemProvider } from './context/ItemContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OrderProvider>
      <ItemProvider>
        <App />
      </ItemProvider>
    </OrderProvider>
  </StrictMode>,
)
