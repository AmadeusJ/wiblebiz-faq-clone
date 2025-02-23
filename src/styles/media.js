import theme from '@/styles/theme';

const media = {
  sm: `@media (max-width: ${theme.breakpoints.sm})`,
  md: `@media (min-width: ${parseInt(theme.breakpoints.sm) + 1}px) and (max-width: ${theme.breakpoints.md})`,
  lg: `@media (min-width: ${parseInt(theme.breakpoints.md) + 1}px) and (max-width: ${theme.breakpoints.lg})`,
  xl: `@media (min-width: ${parseInt(theme.breakpoints.lg) + 1}px)`,
};

export default media;
