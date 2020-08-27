import styled from 'styled-components';
import { fullAlignCenterMobile } from '../../globals/utils';

export const Container = styled.div`
  > p {
    color: var(--sass-text);
    font-size: 1.8rem;
    margin-bottom: 2rem;
    line-height: 2.7rem;
    @media (min-width: 320px) and (max-width: 600px) {
      font-size: 1.2em;
      line-height: 3.3rem;
      margin-top: 2rem;
    }
    @media (min-width: 601px) and (max-width: 960px) {
      font-size: 1.7em;
      margin-bottom: 2rem;
      line-height: 3.6rem;
      padding: 0 2rem;
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
