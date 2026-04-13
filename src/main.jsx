import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { ToastContainer } from 'react-toastify'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import FontPage from './Components/fontPage/FontPage'
import RootLayout from './Components/router/Router'

const router = createBrowserRouter([
  {
    path: '/',
    Component:RootLayout,
    children: [
      {
        index: true,
        element: <FontPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </StrictMode>
)