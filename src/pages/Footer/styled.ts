import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
  font-weight: 600;
  margin: 3rem 0;

  > p {
    font-size: 1.66rem;
    line-height: 2.33rem;
    color: var(--text-items);

    @media (min-width: 961px) and (max-width: 1700px) {
      padding: 0 1rem;
    }
    margin-bottom: 2rem;

    > strong {
      color: var(--text-list);
      text-decoration: none;
      border-bottom: 1px solid var(--opacity-border-bottom);
    }
  }
  > ol li {
    @media (min-width: 961px) and (max-width: 1700px) {
      margin: 10px;
    }
  }
  > ol {
    @media (min-width: 961px) and (max-width: 1700px) {
      display: inline-flex;
    }
  }
  > ol li a {
    color: var(--text-list);
    text-decoration: none;
    border-bottom: 1px solid var(--opacity-border-bottom);
    line-height: 2.6rem;
  }
`;
