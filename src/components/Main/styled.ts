import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  @media (max-width: 640px) {
    padding: 5rem 0;
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
    padding: 3rem;
    grid-gap: 6rem;
  }
  @media (min-width: 961px) and (max-width: 1700px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 4rem;
    grid-gap: 4rem;
  }
`;
export const WrapperItem = styled.section`
  font-weight: 600;
  @media (min-width: 320px) and (max-width: 640px) {
    padding: 0;
  }

  > span {
    font-size: 2.8rem;
    color: var(--text-items);
  }
  > p {
    font-size: 1.88rem;
    line-height: 2.7rem;
    color: var(--text-items);
    margin-top: 2rem;
    opacity: 0.9;
    @media (min-width: 961px) and (max-width: 1700px) {
      font-size: 1.7rem;
    }

    > strong {
      &:focus {
        background: var(--links-hover);
      }
      color: var(--text-list);
      text-decoration: none;
      border-bottom: 1px solid var(--opacity-border-bottom);
    }
  }
`;
