import { css } from '@emotion/react';
import theme from './theme';
const formStyles = css`
  input,
  select,
  textarea {
    font-size: ${theme.components.inputMdFontSize.base};
    outline: none;
  }
  .sticky-checker {
    pointer-events: none;
  }
  .container .sticky-checker {
    display: block;
    height: var(--header-height);
    margin-top: calc(-1 * var(--header-height));
`;

export default formStyles;
