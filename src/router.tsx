import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
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
])
