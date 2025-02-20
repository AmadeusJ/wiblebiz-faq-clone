import { createBrowserRouter } from 'react-router-dom';
// layouts
import DefaultLayout from '@/layouts/DefaultLayout';
// pages
import FAQ from '@/pages/FAQ';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <FAQ />,
      },
    ],
  },
]);

export default router;
