import Header from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
  subcomponents: {
    Logo: Header.Logo,
    Nav: Header.Nav,
  },
};

export const Default = () => (
  <Header>
    <Header.Logo />
    <Header.Nav />
  </Header>
);

