import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./app/layouts/MainLayout";
import Dashboard from "./app/routes/Dashboard";
import Landing from "./app/routes/Landing";
import AuthLayout from "./features/Authentication/layouts/AuthLayout";
import Login from "./features/Authentication/pages/Login";
import Register from "./features/Authentication/pages/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      }
    ]
  }
])

export default router