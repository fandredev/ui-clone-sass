import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  > img {
    width: 20%;
    @media (min-width: 640px) {
      max-width: 25%;
    }
  }
  > ol {
    margin: 2rem auto;
    > li {
      font-size: 1.7rem;
      font-weight: 900;
      line-height: 5rem;
      > form {
        > input {
          padding: 0.8rem;
          width: 90%;
          border: 1px solid var(--text-items);
          opacity: 0.8;
          border-radius: 3px;
          font-size: 1.55rem;

          &:focus {
            border: 1px solid var(--focus-input);
          }
          @media (min-width: 640px) {
            max-width: 90%;
          }
        }
      }
      > a {
        color: var(--text-list);
        text-decoration: none;
      }
    }
  }
  > h1 {
    font-size: 1.4em;
    color: var(--text-items);
    text-align: center;
  }
`;
