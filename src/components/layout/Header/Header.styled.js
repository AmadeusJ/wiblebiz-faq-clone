import media from '@/styles/media';
import theme from '@/styles/theme';
import styled from '@emotion/styled';
const Header = styled.header`
  z-index: 100;
  position: sticky;
  top: 0;
  padding: 0 ${theme.spacing.pxMd.base};
  background-color: #fff;
  .is-pinned + header {
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08);
  }

  ${media.md} {
    padding: 0 ${theme.spacing.pxLg.base};
  }
`;

export default Header;
