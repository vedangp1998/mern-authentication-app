import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Verify from '../pages/Verify';
import VerifyEmail from '../pages/VerifyEmail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'verify',
        element: <VerifyEmail />,
      },
      {
        path: 'verify/:token',
        element: <Verify />,
      },
    ],
  },
]);
