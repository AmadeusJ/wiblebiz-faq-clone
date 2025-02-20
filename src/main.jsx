import React from 'react';
import ReactDOM from 'react-dom/client';
import router from '@/router';
import theme from '@/styles/theme';
import { ThemeProvider, Global } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import GlobalStyles from '@/styles/GlobalStyles';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
