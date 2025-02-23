import styled from '@emotion/styled';

const Content = styled.div`
  max-width: 1240px;
  margin: 0 auto;

  &.reduced {
    max-width: 816px;
  }

  & > h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: var(--h1-height);
    font-size: var(--h1-fsize);
    line-height: var(--line-height-sm);
  }
  & > h1 > em {
    margin-top: 0.4em;
    text-align: center;
    font-size: var(--h1-fsize-sm);
    line-height: var(--line-height-md);
    font-weight: 400;
    word-break: keep-all;
  }
`;

export default Content;
