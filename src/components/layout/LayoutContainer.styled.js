import theme from '@/styles/theme';
import styled from '@emotion/styled';

const LayoutContainer = styled.div`
  min-height: calc(
    100vh - ${theme.layout.headerHeight} - ${theme.layout.footerHeight}
  );
  overflow: hidden;
  padding: 0 ${theme.layout.sidePadding} ${theme.layout.bottomPadding};
`;

export default LayoutContainer;
