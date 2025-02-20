const breakpoints = {
  mobile: '743px',
  tablet: '1023px',
  laptop: '1439px',
  desktop: '1440px',
};

const theme = {
  breakpoints,
  maxWidth: '1660px',

  // Colors
  colors: {
    mint900: '#70d7bf',
    mint700: '#8ddfcc',
    midnight900: '#05141f',
    midnight100: '#cdd0d2',
    red: '#ff0900',
    blue: '#4296e4',
    gray700: '#37434c',
    gray500: '#697278',
    gray400: '#82898f',
    gray300: '#b4b9bc',
    gray200: '#cdd0d2',
    gray100: '#e6e8e9',
    gray50: '#f6f6f9',
    gray10: '#f8f8f8',
  },

  // Font Sizes & Line Heights
  typography: {
    lineHeight: {
      sm: 1.4,
      md: 1.6,
      lg: 1.8,
    },
    heading: {
      h1: { base: '56px', sm: '18px', md: '40px', lg: '48px' },
      h2: { base: '24px', sm: '20px' },
      h4: { base: '20px', sm: '16px' },
      info: '24px',
    },
    fontSize: {
      sm: '14px',
      md: '16px',
      lg: '18px',
    },
  },

  // Spacing
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xlg: '32px',
    box: '48px',
    box2: '120px',
  },

  // Button Sizes
  buttons: {
    md: '48px',
    xlg: '56px',
    xxlg: '80px',
  },

  // Icons
  icons: {
    sm: '20px',
    md: '24px',
    lg: '32px',
    xlg: '40px',
    xxlg: '64px',
  },

  // Layout Sizes
  layout: {
    headerHeight: '80px',
    footerHeight: '176px',
    sidePadding: '48px',
    bottomPadding: '96px',
    searchBarWidth: '480px',
  },

  // Transitions
  transitions: {
    primary: 'cubic-bezier(1, 0, 0.2, 1)',
  },

  // Responsive styles
  responsive: {
    mobile: `@media (max-width: ${breakpoints.mobile})`,
    tablet: `@media (min-width: 744px) and (max-width: ${breakpoints.tablet})`,
    laptop: `@media (min-width: 1024px) and (max-width: ${breakpoints.laptop})`,
    desktop: `@media (min-width: ${breakpoints.desktop})`,
  },
};

export default theme;
