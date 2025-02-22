import { css } from '@emotion/react';
import FAB from './FAB';

export default {
  title: 'Global UI/FAB',
  component: FAB,
};

export const Default = () => {
  return (
    <div
      css={css`
        height: 500px;
        overflow-y: scroll;
      `}
    >
      <div
        css={css`
          height: 1000px;
          padding: 10px;
        `}
      ></div>
      <FAB isVisible={true} onClick={() => {}} />
    </div>
  );
};
