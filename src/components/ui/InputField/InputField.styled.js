import media from '@/styles/media';
import theme from '@/styles/theme';
import styled from '@emotion/styled';

const InputField = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${theme.spacing.pxMd};
  padding: ${theme.spacing.pxMd};
  background-color: ${theme.colors.gray10};

  ${media.sm} {
    padding: 0;
  }

  & > .input-wrap {
    width: ${theme.typographySize.searchBarWidth.base};
  }

  & > .input-wrap > input {
    height: ${theme.typographySize.btnXlg2};
    padding-left: 16px;
    padding-right: calc(
      ${theme.typographySize.icSm} + ${theme.typographySize.clearSpace} +
        ${theme.typographySize.btnXlg2} - 2px
    );
    font-size: 1rem;
    border-color: ${theme.colors.midnight900};
  }

  & > .input-wrap > input + .clear {
    right: calc(1px + ${theme.typographySize.btnXlg2} - 2px);
  }

  & > .input-wrap > input + .submit {
    position: absolute;
    right: 1px;
    top: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--btn-xlg2) - 2px);
    height: calc(100% - 2px);
    font-size: 0;
  }

  & > .input-wrap > input + .submit:before {
    content: '';
    width: ${theme.typographySize.icMd};
    height: ${theme.typographySize.icMd};
    background: url(/icons/ic_search.svg) no-repeat;
    background-size: auto 100%;
  }
`;

export default InputField;
