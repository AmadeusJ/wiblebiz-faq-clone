import logo from '@/assets/logos/logo_wible_lg.svg';
import logoSm from '@/assets/logos/logo_wible_sm.svg';
import { css } from '@emotion/react';
import theme from './theme';

const HeaderStyles = css`
  /* 기본 헤더 스타일 (데스크톱 기본) */
  position: sticky;
  top: 0;
  padding: 0 ${theme.layout.sidePadding};
  background-color: ${theme.colors.white};
  z-index: 100;

  & > .inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: ${theme.layout.headerMaxWidth};
    height: ${theme.layout.headerHeight};
    margin: 0 auto;
  }

  /* 헤더가 고정될 때 */
  .is-pinned + & {
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08);
  }

  /* 로고 기본 스타일 */
  & .logo {
    font-size: 0;
    background-repeat: no-repeat;
    background-position: 0 50%;
    background-size: 100% auto;
  }

  /* 모바일 (max-width: 743px) */
  ${theme.responsive.mobile} {
    & .logo {
      width: 100px;
      height: 35px;
      background-image: url(${logoSm});
    }
    /* 모바일에서는 네비게이션과 util 영역 필요에 따라 간략하게 조정 */
    & nav {
      position: fixed;
      top: ${theme.layout.headerHeight};
      bottom: 0;
      left: -100%;
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0 ${theme.layout.sidePadding};
      background-color: ${theme.colors.white};
      transition: margin-left 0.8s ${theme.transitions.primary};
    }
    .nav-opened & nav {
      margin-left: 100%;
    }
    & nav > ul {
      margin-top: 60px;
    }
    & nav > ul > li > a {
      display: block;
      margin-bottom: 8px;
      text-align: center;
      font-size: 20px;
      line-height: 48px;
      font-weight: 600;
      color: ${theme.colors.black};
    }
    & .util {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      margin-right: -8px;
    }
    & .util button {
      width: 36px;
      height: 36px;
      font-size: 0;
    }
  }

  /* 태블릿 (min-width: 744px and max-width: 1023px) */
  ${theme.responsive.tablet} {
    & .logo {
      width: 120px;
      height: 40px;
      background-image: url(${logoSm});
    }
    & nav {
      position: fixed;
      top: ${theme.layout.headerHeight};
      bottom: 0;
      left: -100%;
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0 ${theme.layout.sidePadding};
      background-color: ${theme.colors.white};
      transition: margin-left 0.8s ${theme.transitions.primary};
    }
    .nav-opened & nav {
      margin-left: 100%;
    }
    & nav > ul {
      margin-top: 80px;
    }
    & nav > ul > li > a {
      display: block;
      margin-bottom: 8px;
      text-align: center;
      font-size: 24px;
      line-height: 56px;
      font-weight: 600;
      color: ${theme.colors.black};
    }
    & nav > ul > li.active > a {
      color: ${theme.colors.mint900};
    }
    & .util {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      margin-right: -8px;
    }
    & .util button {
      width: 40px;
      height: 40px;
      font-size: 0;
    }
  }

  /* 노트북 (min-width: 1024px and max-width: 1439px) */
  ${theme.responsive.tablet} {
    & .logo {
      width: 160px;
      height: 100%;
      background-image: url(${logo});
    }
    & nav {
      flex: 1;
      margin-right: -20px;
    }
    & nav > ul {
      display: flex;
      justify-content: flex-end;
    }
    & nav > ul > li {
      margin: 0 16px;
    }
    & nav > ul > li > a {
      position: relative;
      display: block;
      padding: 0 4px;
      font-size: 18px;
      line-height: ${theme.layout.headerHeight};
      font-weight: 600;
      color: ${theme.colors.black};
    }
    & nav > ul > li > a:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 4px;
      background-color: ${theme.colors.mint900};
      opacity: 0.4;
      transition: width 0.4s ${theme.transitions.primary};
    }
    & nav > ul > li.active > a:after {
      width: 100%;
      opacity: 1;
    }
    @media (hover: hover) and (pointer: fine) {
      & nav > ul > li > a:hover:after {
        width: 100%;
      }
    }
    & .util {
      display: none;
    }
  }

  /* 데스크톱 (min-width: 1024px) */
  ${theme.responsive.laptop} {
    & .logo {
      width: 180px; /* 데스크톱에서는 조금 더 크게 */
      height: 100%;
      background-image: url(${logo});
    }
    & nav {
      flex: 1 1;
      margin-right: -20px;
    }
    & nav > ul {
      display: flex;
      justify-content: flex-end;
    }
    & nav > ul > li {
      margin: 0 20px;
    }
    & nav > ul > li > a {
      position: relative;
      display: block;
      padding: 0 6px;
      font-size: 20px;
      line-height: ${theme.layout.headerHeight};
      font-weight: 600;
      color: ${theme.colors.black};
    }
    & nav > ul > li > a:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 4px;
      background-color: ${theme.colors.mint900};
      opacity: 0.4;
      transition: width 0.4s ${theme.transitions.primary};
    }
    & nav > ul > li.active > a:after {
      width: 100%;
      opacity: 1;
    }
    @media (hover: hover) and (pointer: fine) {
      & nav > ul > li > a:hover:after {
        width: 100%;
      }
    }
    & .util {
      display: none;
    }
  }
`;

export default HeaderStyles;
