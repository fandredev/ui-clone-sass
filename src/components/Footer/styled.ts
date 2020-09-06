import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
  font-weight: 600;
  margin: 3rem 0;

  > p {
    font: normal normal 600 1.66rem/2.33rem var(--default-font);
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
    &:focus {
      background: var(--links-hover);
    }
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
