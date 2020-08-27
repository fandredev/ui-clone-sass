import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem 4rem 0;
  > img {
    width: 20%;
    &:hover {
      background: var(--opacity-border-bottom);
      cursor: pointer; /* só pra ficar com a maozinha inves de colocar a tag link */
    }
    @media (min-width: 640px) {
      max-width: 25%;
    }
    @media (max-width: 960px) {
      max-width: 15%;
    }

    @media (min-width: 961px) and (max-width: 1700px) {
      max-width: initial;
      width: 32%;
    }
  }
  @media (min-width: 961px) and (max-width: 1700px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  > ol {
    margin: 2rem auto;
    @media (min-width: 961px) and (max-width: 1700px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
    }
    > li {
      font-size: 1.7rem;
      font-weight: 900;
      line-height: 5rem;
      &:hover {
        background: var(--opacity-border-bottom);
      }
      > form {
        > input {
          padding: 0.8rem;
          width: 40%;
          min-width: 40%;
          border: 1px solid var(--text-items);
          opacity: 0.8;
          border-radius: 3px;
          font-size: 1.55rem;
          @media (min-width: 961px) and (max-width: 1700px) {
            width: 100%;
            padding: 0.7rem;
          }
          &:focus {
            border: 1px solid var(--focus-input);
          }
        }
      }

      > a {
        color: var(--text-list);
        text-decoration: none;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.4em;
  color: var(--text-items);
  text-align: center;
  font-weight: 400;
  margin: 2rem;
  @media (min-width: 640px) {
    font-size: 1.6em;
    margin: 0;
  }
  @media (max-width: 960px) {
    font-size: 2em;
  }

  @media (min-width: 961px) and (max-width: 1700px) {
    font-size: 4.5em;
  }
`;
