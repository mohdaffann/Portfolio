import { ToastContainer } from 'react-toastify'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <ToastContainer />
    <App />
  </>

)
