import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./main.scss"

import Login from './pages/auth/login/login'
import Home from './pages/home'

// router configuration
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/operations",
    element: (
      <div>Operation page</div>
    )
  },
  {
    path: "/transfert",
    element: (
      <div>Transfert Page</div>
    )
  },
  {
    path: "/rapport",
    element: (
      <div>Rapport page</div>
    )
  }, 
  {
    path: "/statistiques",
    element: (
      <div>Statistique page</div>
    )
  },
  {
    path: "/about",
    element: (
      <div>About page</div>
    )
  },
  {
    path: "/settings",
    element: (
      <div>Setting page</div>
    )
  },
  {
    path: "/profile",
    element: (
      <div>Profile page</div>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />

)
