import { lazy } from 'react';
const Login = lazy(() => import('../../views/auth/Login'));
const Register = lazy(() => import('../../views/auth/Register'));
const AdminLogin = lazy(() => import('../../views/auth/AdminLogin'));

const PublicRoutes = [
  {
    path: '/Ecommerce/login',
    element: <Login />,
  },
  {
    path: '/Ecommerce/register',
    element: <Register />,
  },
  {
    path: '/Ecommerce/admin/login',
    element: <AdminLogin />,
  },
];

export default PublicRoutes;
