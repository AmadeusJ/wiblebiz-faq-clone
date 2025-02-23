import { css } from '@emotion/react';
import fontFaces from './fontFaces';
import fontStyles from './fontStyles';
import formStyles from './formStyles';
import mediaQueries from './mediaQuries';
import rootStyles from './rootStyles';
const globalStyles = css`
  // 폰트 팩스
  ${fontFaces}

  // :root 변수 생성
  ${rootStyles}

  // 미디어 쿼리
  ${mediaQueries}

  // 전역 스타일
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(112, 215, 191, 0.08);
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    min-width: 360px;
    margin: 0;
  }
  &.nav-opened,
  &.modal-opened {
    overflow: hidden;
  }

  // 폰트 스타일
  ${fontStyles}

  // 폼 스타일
  ${formStyles}
`;

export default globalStyles;
