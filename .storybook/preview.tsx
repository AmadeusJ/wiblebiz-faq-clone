import type { Preview } from '@storybook/react';
import { ThemeProvider, Global } from '@emotion/react';
import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyles';

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
