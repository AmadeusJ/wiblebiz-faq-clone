import { Global, ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
// import GlobalStyles from '../src/styles/GlobalStyles';
import WibleBizStyles from '../src/styles/WibleBizStyles';
import theme from '../src/styles/theme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Global styles={WibleBizStyles} />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
