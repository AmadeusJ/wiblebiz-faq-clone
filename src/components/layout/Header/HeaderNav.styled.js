import media from '@/styles/media';
import theme from '@/styles/theme';
import styled from '@emotion/styled';
const HeaderNav = styled.nav`
  display: flex;
  ${media.md} {
    position: fixed;
    top: var(--header-height);
    bottom: 0;
    left: -100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    padding: 0 ${theme.spacing.pxMd.base};
    background-color: #fff;
    transition: margin-left 0.8s ${theme.transition.primary};
  }

  & > ul {
    margin-top: 80px;
  }
  & > ul > li > a {
    display: block;
    margin-bottom: 8px;
    text-align: center;
    font-size: 24px;
    line-height: 56px;
    font-weight: 600;
    color: #000;
  }
  & > ul > li.active > a {
    color: var(--mint-900);
  }
`;

export default HeaderNav;
