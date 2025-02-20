import { createBrowserRouter } from 'react-router-dom';
// layouts
import DefaultLayout from '@/layouts/DefaultLayout';
// pages
import Main from '@/pages/Main';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
    ],
  },
]);

export default router;
