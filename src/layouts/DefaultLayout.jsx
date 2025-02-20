import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';

const DefaultLayout = () => {
  return (
    <>
      {/* Meta 설정 */}
      <Helmet>
        <title>Wiblebiz FAQ Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Header 컴포넌트 설정 */}
      <Header>
        <Header.Logo />
        <Header.Nav />
      </Header>

      {/* 라우터 컴포넌트 설정 */}
      <main
        css={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <Outlet />
      </main>

      {/* Footer 컴포넌트 설정 */}
      <footer>Footer</footer>
    </>
  );
};

export default DefaultLayout;
