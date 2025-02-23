import media from '@/styles/media';
import theme from '@/styles/theme';
import styled from '@emotion/styled';
const Inquiry = styled.div`
  display: flex;
  margin: 0 calc(-1 * ${theme.spacing.pxMd.base} / 2);

  ${media.sm} {
    flex-direction: column;
  }

  ${media.md} {
    flex-wrap: wrap;
  }
`;

export default Inquiry;
