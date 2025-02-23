import { css } from '@emotion/react';
import theme from './theme';
const mediaQueries = css`
  @media (max-width: ${theme.breakpoints.sm}) {
    :root {
      --header-height: ${theme.layout.headerHeight.sm};
      --footer-height: ${theme.layout.footerHeight.sm};
      --side-padding: ${theme.layout.sidePadding.sm};
      --bottom-padding: ${theme.layout.bottomPadding.sm};

      --btn-md: ${theme.components.btnMd.sm};
      --btn-xlg: ${theme.components.btnXLg.sm};
      --btn-xlg2: ${theme.components.btnXLg2.sm};
      --btn-xxlg: ${theme.components.btnXXLg.sm};
      --btn-xxlg-size: ${theme.components.btnXXLgSize.sm};

      --ic-sm: ${theme.components.iconSm.sm};
      --ic-md: ${theme.components.iconMd.sm};
      --ic-lg: ${theme.components.iconLg.sm};
      --ic-xlg: ${theme.components.iconXLg.sm};
      --ic-xlg2: ${theme.components.iconXLg2.sm};
      --ic-xxlg: ${theme.components.iconXXLg.sm};

      --heading-2: ${theme.typographySize.heading2.sm};
      --heading-2-margin: ${theme.typographySize.heading2Margin.sm};
      --heading-4: ${theme.typographySize.heading4.sm};
      --heading-4-margin: ${theme.typographySize.heading4Margin.sm};

      --space-sm: ${theme.spacing.pxMd.sm};
      --space-md: ${theme.spacing.pxLg.sm};
      --space-lg: ${theme.spacing.pxXLg.sm};
    }
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    :root {
      --header-height: ${theme.layout.headerHeight.md};
      --footer-height: ${theme.layout.footerHeight.md};
      --side-padding: ${theme.layout.sidePadding.md};
      --bottom-padding: ${theme.layout.bottomPadding.md};

      --btn-md: ${theme.components.btnMd.md};
      --btn-xlg: ${theme.components.btnXLg.md};
      --btn-xlg2: ${theme.components.btnXLg2.md};
      --btn-xxlg: ${theme.components.btnXXLg.md};
      --btn-xxlg-size: ${theme.components.btnXXLgSize.md};

      --ic-sm: ${theme.components.iconSm.md};
      --ic-md: ${theme.components.iconMd.md};
      --ic-lg: ${theme.components.iconLg.md};
      --ic-xlg: ${theme.components.iconXLg.md};
      --ic-xlg2: ${theme.components.iconXLg2.md};
      --ic-xxlg: ${theme.components.iconXXLg.md};

      --heading-2: ${theme.typographySize.heading2.md};
      --heading-2-margin: ${theme.typographySize.heading2Margin.md};
      --heading-4: ${theme.typographySize.heading4.md};
      --heading-4-margin: ${theme.typographySize.heading4Margin.md};

      --space-sm: ${theme.spacing.pxMd.md};
      --space-md: ${theme.spacing.pxLg.md};
      --space-lg: ${theme.spacing.pxXLg.md};
    }
  }

  @media (min-width: ${theme.breakpoints.md}) and (max-width: ${theme
      .breakpoints.lg}) {
    :root {
      --header-height: ${theme.layout.headerHeight.lg};
      --footer-height: ${theme.layout.footerHeight.lg};
      --side-padding: ${theme.layout.sidePadding.lg};
      --bottom-padding: ${theme.layout.bottomPadding.lg};

      --btn-md: ${theme.components.btnMd.lg};
      --btn-xlg: ${theme.components.btnXLg.lg};
      --btn-xlg2: ${theme.components.btnXLg2.lg};
      --btn-xxlg: ${theme.components.btnXXLg.lg};
      --btn-xxlg-size: ${theme.components.btnXXLgSize.lg};

      --ic-sm: ${theme.components.iconSm.lg};
      --ic-md: ${theme.components.iconMd.lg};
      --ic-lg: ${theme.components.iconLg.lg};
      --ic-xlg: ${theme.components.iconXLg.lg};
      --ic-xlg2: ${theme.components.iconXLg2.lg};
      --ic-xxlg: ${theme.components.iconXXLg.lg};

      --heading-2: ${theme.typographySize.heading2.lg};
      --heading-2-margin: ${theme.typographySize.heading2Margin.lg};
      --heading-4: ${theme.typographySize.heading4.lg};
      --heading-4-margin: ${theme.typographySize.heading4Margin.lg};

      --space-sm: ${theme.spacing.pxMd.lg};
      --space-md: ${theme.spacing.pxLg.lg};
      --space-lg: ${theme.spacing.pxXLg.lg};
    }
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    :root {
      --header-height: ${theme.layout.headerHeight.xl};
      --footer-height: ${theme.layout.footerHeight.xl};
      --side-padding: ${theme.layout.sidePadding.xl};
      --bottom-padding: ${theme.layout.bottomPadding.xl};

      --btn-md: ${theme.components.btnMd.xl};
      --btn-xlg: ${theme.components.btnXLg.xl};
      --btn-xlg2: ${theme.components.btnXLg2.xl};
      --btn-xxlg: ${theme.components.btnXXLg.xl};
      --btn-xxlg-size: ${theme.components.btnXXLgSize.xl};

      --ic-sm: ${theme.components.iconSm.xl};
      --ic-md: ${theme.components.iconMd.xl};
      --ic-lg: ${theme.components.iconLg.xl};
      --ic-xlg: ${theme.components.iconXLg.xl};
      --ic-xlg2: ${theme.components.iconXLg2.xl};
      --ic-xxlg: ${theme.components.iconXXLg.xl};
    }
  }
`;

export default mediaQueries;
