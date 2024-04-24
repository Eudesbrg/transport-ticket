import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./main.scss"

import Login from './pages/auth/login/login'
import Home from './pages/home'

import Container from './components/container'

// router configuration
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: (
      <Container>
        <Home />
      </Container>
    ),
  },
  {
    path: "/operations",
    element: (
      <Container>
        <h1>Page operations</h1>
      </Container>
    )
  },
  {
    path: "/transfert",
    element: (
      <Container>
        <h1>Page Transfert</h1>
      </Container>
    )
  },
  {
    path: "/rapport",
    element: (
     <Container>
      <h1>Page de Rapport</h1>
     </Container>
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
