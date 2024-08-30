import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
import store from './reducer/store.js'
import { useDispatch } from 'react-redux'




createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <App />
    </Provider>
    
  </StrictMode>,
)
