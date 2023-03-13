import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 1 - configurando router
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Home from './routes/Home'
import Contact from './routes/Contact'
import ErrorPage from './routes/ErrorPage'
import ContactDetails from './routes/ContactDetails'


// Refatorando para o código abaixo
/* const router = createBrowserRouter([
  {
   path: "/" ,
   element: <Home />
  },
  {
   path: "contact" ,
   element: <Contact />
  },
]) */

const router = createBrowserRouter([
  {
    path: "/" ,
    element: <App />,
    // 3 - pagina de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home" ,
        element: <Home />
       },
       {
        path: "contact" ,
        element: <Contact />
       },
       // 5 - nested routes - identificador - dynamic routes
       {
        path: "/contact/:id",
        element: <ContactDetails />
       },
       // 7 - navigate para páginas não existentes
       {
          path: "oldcontact",
          element: <Navigate to="/contact" />
       }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
