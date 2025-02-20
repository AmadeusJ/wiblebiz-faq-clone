import { Global, ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import GlobalStyles from '../src/styles/GlobalStyles';
import theme from '../src/styles/theme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
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
