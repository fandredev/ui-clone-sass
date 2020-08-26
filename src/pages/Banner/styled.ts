import styled from 'styled-components';
import { fullAlignCenterMobile } from '../../globals/utils';
export const Container = styled.div`
  > p {
    color: var(--sass-text);
    font-size: 1.8rem;
    margin-bottom: 2rem;
    line-height: 2.7rem;
  }
  @media (max-width: 640px) {
    padding: 0 2rem;
  }
  > figure {
    @media (min-width: 640px) {
      ${fullAlignCenterMobile}
    }
    > img {
      width: 100%;
    }
  }
`;
