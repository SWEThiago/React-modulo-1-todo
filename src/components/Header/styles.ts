import styled from "styled-components";

export const Container = styled.header`
  background: var(--gray-700);
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  padding: 5.125rem 1rem 5.125rem;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;

  font-weight: 900;
  
  p {
    color: var(--blue);
    font-size: 2.5rem;

    span {
      color: var(--purple-dark);
    }
  }
`;