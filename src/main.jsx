import router from '@/router';
// import GlobalStyles from '@/styles/GlobalStyles';
import { worker } from '@/mocks/browser';
import { queryClient } from '@/services/apiClient';
import WibleBizStyles from '@/styles/WibleBizStyles';
import theme from '@/styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

// Mock Service Worker 시작
worker.start().then(() => {
  // 렌더링
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <ThemeProvider theme={theme}>
            <Global styles={WibleBizStyles} />
            <RouterProvider router={router} />
          </ThemeProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
});
