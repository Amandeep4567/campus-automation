import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login/Login'
import { PassHistory } from './pages/Outpass/PassHistory'
import { RequestPass } from './pages/Outpass/RequestPass'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/outpass',
    element: <RequestPass />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/pass-history',
    element: <PassHistory />,
  },
])
