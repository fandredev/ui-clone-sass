import styled from 'styled-components';
import { fullAlignCenterMobile } from '../../globals/utils';
export const Container = styled.div`
  > p {
    color: var(--sass-text);
    font-size: 1.8rem;
    margin-bottom: 2rem;
    line-height: 2.7rem;

    @media (max-width: 960px) {
      font-size: 1.6em;
      font-weight: bold;
      margin-bottom: 2rem;
      line-height: 4.7rem;
      padding: 0 4rem;
    }
    @media (min-width: 961px) and (max-width: 1700px) {
      ${fullAlignCenterMobile}
      padding: 2.9rem;
      font-size: 2.9rem;
      line-height: 4.3rem;
    }
  }
  @media (min-width: 961px) and (max-width: 1700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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

      @media (min-width: 961px) and (max-width: 1700px) {
        width: 90%;
      }
    }
  }
`;
