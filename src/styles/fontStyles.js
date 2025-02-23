import { css } from '@emotion/react';
import theme from './theme';

const fontStyles = css`
  body,
  button,
  input,
  select,
  textarea {
    font-family: ${theme.typography.fontFamily};
    color: ${theme.colors.midnight900};
  }
`;

export default fontStyles;
