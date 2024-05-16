import { lazy } from 'react';
const Login = lazy(() => import('../../views/auth/Login'));
const Register = lazy(() => import('../../views/auth/Register'));

const PublicRoutes = [
  {
    path: '/Ecommerce/login',
    element: <Login />,
  },
  {
    path: '/Ecommerce/register',
    element: <Register />,
  },
];

export default PublicRoutes;
