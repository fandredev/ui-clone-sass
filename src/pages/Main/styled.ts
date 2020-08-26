import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 640px) {
    padding: 5rem 0;
  }
`;
export const WrapperItem = styled.section`
  font-weight: 600;
  @media (max-width: 640px) {
    padding: 2rem;
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

    > strong {
      color: var(--text-list);
      text-decoration: none;
      border-bottom: 1px solid var(--opacity-border-bottom);
    }
  }
`;
