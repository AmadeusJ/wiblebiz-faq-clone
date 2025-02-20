import { css } from '@emotion/react';
import theme from './theme';

const GlobalStyles = css`
  /* 폰트 설정 */
  @font-face {
    font-display: swap;
    font-family: 'Kia Signature Fix';
    font-weight: 300;
    src: url('/fonts/KiaSignatureFixLight.woff2') format('woff2');
  }
  @font-face {
    font-display: swap;
    font-family: 'Kia Signature Fix';
    font-weight: 400;
    src: url('/fonts/KiaSignatureFixRegular.woff2') format('woff2');
  }
  @font-face {
    font-display: swap;
    font-family: 'Kia Signature Fix';
    font-weight: 600;
    src: url('/fonts/KiaSignatureFixBold.woff2') format('woff2');
  }

  /* 기본 스타일 리셋 */
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(${theme.colors.mint900}, 0.08);
    margin: 0;
    padding: 0;
  }

  /* HTML & BODY 기본 설정 */
  html {
    height: 100%;
    font-size: ${theme.typography.fontSize.md};
    background-color: ${theme.colors.midnight900};
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    min-width: 360px;
    font-family: 'Kia Signature Fix', 'Arial', sans-serif, Helvetica;
    font-size: ${theme.typography.fontSize.md};
    line-height: ${theme.typography.lineHeight.md};
    background-color: ${theme.colors.gray50};
    color: ${theme.colors.midnight900};
  }

  /* body 상태 변경 시 */
  body.nav-opened,
  body.modal-opened {
    overflow: hidden;
  }

  /* 기본 텍스트 스타일 */
  body,
  button,
  input,
  select,
  textarea {
    font-family: 'Kia Signature Fix', Arial, sans-serif, Helvetica;
    color: ${theme.colors.midnight900};
  }

  /* 입력 요소 스타일 */
  input,
  select,
  textarea {
    font-size: ${theme.typography.fontSize.md};
    outline: none;
  }

  input::-webkit-input-placeholder,
  input::-moz-placeholder,
  textarea::-webkit-input-placeholder,
  textarea::-moz-placeholder {
    font-weight: 400;
    color: ${theme.colors.gray300};
    opacity: 1;
  }

  /* 기본 버튼 스타일 */
  button {
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
  }

  /* 링크 스타일 */
  a {
    color: ${theme.colors.midnight900};
    text-decoration: none;
    cursor: pointer;
  }

  /* 리스트 스타일 초기화 */
  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* 제목 및 텍스트 스타일 */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  em,
  i,
  address {
    font-style: normal;
  }

  /* iframe 스타일 */
  iframe {
    display: block;
    width: 100%;
    border: none;
  }

  /* 스크롤바 스타일 */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.mint700};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${theme.colors.gray100};
  }

  /* 텍스트 선택 스타일 */
  ::selection {
    background-color: ${theme.colors.mint900};
    color: #fff;
  }

  /* Sticky Checker */
  .sticky-checker {
    pointer-events: none;
  }

  .container .sticky-checker {
    display: block;
    height: ${theme.layout.headerHeight};
    margin-top: calc(-1 * ${theme.layout.headerHeight});
  }

  /* 반응형 설정 */
  ${theme.responsive.mobile} {
    html {
      font-size: ${theme.typography.fontSize.sm};
    }
  }

  ${theme.responsive.tablet} {
    html {
      font-size: ${theme.typography.fontSize.md};
    }
  }

  ${theme.responsive.laptop} {
    html {
      font-size: ${theme.typography.fontSize.lg};
    }
  }
`;

export default GlobalStyles;
