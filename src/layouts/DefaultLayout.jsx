import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import LayoutContainer from '@/components/layout/LayoutContainer';
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
      <Header>
        <Header.Logo />
        <Header.Nav />
      </Header>

      {/* 라우터 컴포넌트 설정 */}
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>

      {/* Footer 컴포넌트 설정 */}
      <Footer>
        <Footer.Information>
          <Footer.Address />
        </Footer.Information>
        <Footer.CopyRight />
      </Footer>
    </>
  );
};

export default DefaultLayout;
