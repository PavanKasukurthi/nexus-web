import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import { Home, Login, Profile, Register } from './pages'
import { LeftBar, NavBar, RightBar } from './components'

import { DarkModeContext, useDarkContext } from './context/darkModeContext'

import './style.scss'
import { useAuthContext, AuthContext } from './context/authContext'

function App() {
  // const currentUser = true

  const { currentUser } = useAuthContext({ AuthContext })

  const { darkMode } = useDarkContext({ DarkModeContext })

  // console.log(darkMode)

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'light' : 'dark'}`}>
        <NavBar />
        <section style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </section>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    // {
    //   path: '/profile/:id',
    //   element: <Profile />,
    // },
  ])

  return <RouterProvider router={router} />
}

export default App
