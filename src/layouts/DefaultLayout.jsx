import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <>
      {/* Meta 설정 */}
      <Helmet>
        <title>Wiblebiz FAQ Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Header 컴포넌트 설정 */}
      <header>Header</header>

      {/* 라우터 컴포넌트 설정 */}
      <main>
        <Outlet />
      </main>

      {/* Footer 컴포넌트 설정 */}
      <footer>Footer</footer>
    </>
  );
};

export default DefaultLayout;
