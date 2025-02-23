import { css } from '@emotion/react';
import theme from './theme';

const generateRootVariables = (theme) => {
  return `
    ${Object.entries(theme.colors)
      .map(([key, value]) => `--${key}: ${value};`)
      .join('\n')}

    --font-size-base: ${theme.typography.fontSizeBase};
    --line-height-sm: ${theme.typography.lineHeightSm};
    --line-height-md: ${theme.typography.lineHeightMd};
    --line-height-lg: ${theme.typography.lineHeightLg};

    --max-width: ${theme.layout.maxWidth};
    --header-height: ${theme.layout.headerHeight.base};
    --footer-height: ${theme.layout.footerHeight.base};
    --side-padding: ${theme.layout.sidePadding.base};
    --bottom-padding: ${theme.layout.bottomPadding.base};

    --btn-md: ${theme.components.btnMd.base};
    --btn-xlg: ${theme.components.btnXLg.base};
    --btn-xlg2: ${theme.components.btnXLg2.base};
    --btn-xxlg: ${theme.components.btnXXLg.base};
    --btn-xxlg-size: ${theme.components.btnXXLgSize.base};

    --ic-sm: ${theme.components.iconSm.base};
    --ic-md: ${theme.components.iconMd.base};
    --ic-lg: ${theme.components.iconLg.base};
    --ic-xlg: ${theme.components.iconXLg.base};
    --ic-xlg2: ${theme.components.iconXLg2.base};
    --ic-xxlg: ${theme.components.iconXXLg.base};

    --heading-2: ${theme.typographySize.heading2.base};
    --heading-2-margin: ${theme.typographySize.heading2Margin.base};
    --heading-4: ${theme.typographySize.heading4.base};
    --heading-4-margin: ${theme.typographySize.heading4Margin.base};

    --space-sm: ${theme.spacing.pxMd.base};
    --space-md: ${theme.spacing.pxLg.base};
    --space-lg: ${theme.spacing.pxXLg.base};

    --transition-primary: ${theme.transition.primary};
  `;
};

const rootStyles = css`
  :root {
    ${generateRootVariables(theme)}
  }
`;

export default rootStyles;
