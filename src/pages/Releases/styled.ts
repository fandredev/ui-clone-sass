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

  > ol li a {
    color: #fff;
    font-size: 1.77rem;
    font-weight: 600;
    line-height: 2.66rem;
  }
`;
