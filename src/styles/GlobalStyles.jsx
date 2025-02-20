// Global 스타일 적용
import { css, Global, useTheme } from "@emotion/react";

const GlobalStyles = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <Global
      styles={css`
        /* Fonts */
        @font-face {
          font-display: swap;
          font-family: Kia Signature Fix;
          font-weight: 300;
          src: url("/fonts/KiaSignatureFixLight.woff2") format("woff2");
        }
        @font-face {
          font-display: swap;
          font-family: Kia Signature Fix;
          font-weight: 400;
          src: url("/KiaSignatureFixRegular.woff2") format("woff2");
        }
        @font-face {
          font-display: swap;
          font-family: Kia Signature Fix;
          font-weight: 600;
          src: url("/fonts/KiaSignatureFixBold.woff2") format("woff2");
        }
        /* Reset & Box Model */
        * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: rgba(${theme.colors.mint900}, 0.08);
          margin: 0;
          padding: 0;
        }

        /* Root HTML */
        html {
          height: 100%;
          font-size: 16px;
          background-color: ${theme.colors.midnight900};
          scroll-behavior: smooth;
        }

        /* Body */
        body {
          height: 100%;
          min-width: 360px;
          font-family: "Kia Signature Fix", sans-serif;
          font-size: ${theme.typography.fontSize.md};
          line-height: ${theme.typography.lineHeight.md};
          background-color: ${theme.colors.gray50};
          color: ${theme.colors.text};
        }

        /* Scrollbar */
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

        /* Selection */
        ::selection {
          background-color: ${theme.colors.mint900};
          color: #fff;
        }

        /* Responsive Font Size */
        ${theme.responsive.mobile} {
          html {
            font-size: 14px;
          }
        }
        ${theme.responsive.tablet} {
          html {
            font-size: 16px;
          }
        }
        ${theme.responsive.laptop} {
          html {
              font-size: 18px;
            }
        }
      `}
    />
  );
};

export default GlobalStyles;
