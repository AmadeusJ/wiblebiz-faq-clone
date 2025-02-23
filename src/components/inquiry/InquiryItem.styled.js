import media from '@/styles/media';
import theme from '@/styles/theme';
import styled from '@emotion/styled';
const InquiryItem = styled.a`
  flex: 1;
  margin: 0 calc(${theme.spacing.pxMd.base} / 2);

  ${media.sm} {
    justify-content: flex-start;
  }

  ${media.md} {
    &:last-child {
      min-width: calc(100% - ${theme.spacing.pxMd.base});
      margin-top: ${theme.spacing.pxMd.base};
    }
  }
`;

export default InquiryItem;
