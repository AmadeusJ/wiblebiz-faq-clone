import Footer from './Footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
  subcomponents: {
    Information: Footer.Information,
    CopyRight: Footer.CopyRight,
    Address: Footer.Address,
  },
};

export const Default = () => (
  <Footer>
    {/* 이용안내 */}
    <Footer.Information>
      {/* 주소 */}
      <Footer.Address />
    </Footer.Information>
    {/* 저작권 */}
    <Footer.CopyRight />
  </Footer>
);
