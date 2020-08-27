import { css } from 'styled-components';

export const fullAlignCenterMobile = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const themes = {
  Light: {
    body: '#fff',
    text: '#000 !important',
  },
  Dark: {
    body: '#000',
    text: '#fff',
  },
};

export { themes };
