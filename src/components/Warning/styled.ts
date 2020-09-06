import styled from 'styled-components';

export const Container = styled.div`
  padding: 4.4rem;
  background: #000;
  color: #fff;

  > h5 {
    font: normal normal 600 2.5rem var(--default-font);

    @media (min-width: 961px) and (max-width: 1700px) {
      font-size: 3.5rem;
    }
  }
  > p {
    font: normal normal 600 1.77rem/2.5rem var(--default-font);
    margin-top: 2.3rem;
    @media (min-width: 961px) and (max-width: 1700px) {
      font-size: 1.6rem;
    }
  }
`;

export const DivColors = styled.div`
  height: 0.5rem;
  background-image: linear-gradient(
    to right,
    #c69 0%,
    #c69 8.33333%,
    #b37399 8.33333%,
    #b37399 16.66667%,
    #998099 16.66667%,
    #998099 25%,
    #699 25%,
    #699 33.33333%,
    #d2e1dd 33.33333%,
    #d2e1dd 41.66667%,
    #fff 41.66667%,
    #fff 50%,
    #f2ece4 50%,
    #f2ece4 58.33333%,
    #e1d7d2 58.33333%,
    #e1d7d2 66.66667%,
    #dadbdf 66.66667%,
    #dadbdf 75%,
    #808c99 75%,
    #808c99 83.33333%,
    #6b717f 83.33333%,
    #6b717f 91.66667%,
    #036 91.66667%,
    #036 100%
  );
  background-size: 100%;
`;
