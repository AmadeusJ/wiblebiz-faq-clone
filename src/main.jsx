import router from '@/router';
// import GlobalStyles from '@/styles/GlobalStyles';
import WibleBizStyles from '@/styles/WibleBizStyles';
import theme from '@/styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Global styles={WibleBizStyles} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
