import styled from 'styled-components';
import { fullAlignCenterMobile } from '../../globals/utils';

export const Container = styled.div`
  ${fullAlignCenterMobile};
  background: var(--releases);
  padding: 2rem 0;
  text-align: center;
  @media (max-width: 640px) {
    margin-top: 2rem;
  }
  @media (max-width: 960px) {
    margin-top: 1rem;
  }
  > ol {
    @media (min-width: 961px) and (max-width: 1700px) {
      ${fullAlignCenterMobile};
    }
    > li {
      &:hover {
        background: var(--releases-hover);
      }
      @media (min-width: 961px) and (max-width: 1700px) {
        margin: 0 1rem;
      }

      > a {
        color: #fff;
        font: normal normal 600 1.77rem/2.66rem var(--default-font);
      }
    }
  }
`;
