import styled from "styled-components";
import { FiTrash2 } from 'react-icons/fi'

export const Container = styled.header`
  max-width: 736px;
  margin: 0 auto;
`;

export const Input = styled.div`
  background: none;
  
  display: flex;
  margin-top: -1.625rem;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  
  input {
    align-items: left;
    justify-content: center;
    width: 100%;
    border-radius: 0.5rem;
    padding: 1rem 1rem;

    background: var(--gray-600);
    color: var(--gray-300);
    border: 0;
    font-size: 1rem;

  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 3.25rem;
    width: 5.625rem;
    border-radius: 0.5rem;

    background: var(--blue-dark);
    border: 0;
    color: var(--gray-100);
    font-weight: bold;
    font-size: 0.875rem;
    transition: 0.7s;

    &:hover {
     background: var(--purple-dark);
    }
  }
`;

export const Title = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 0.875rem;
    color: var(--blue);

    span {
      margin-left: 0.5rem;
      color: var(--gray-200);
      background: var(--gray-600);
      padding: 0.2rem 0.8rem;
      border-radius: 999px;
    }
  }

  h2 {
    font-size: 0.875rem;
    color: var(--purple);

    span {
      margin-left: 0.5rem;
      color: var(--gray-200);
      background: var(--gray-600);
      padding: 0.2rem 0.8rem;
      border-radius: 999px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: left;
  gap: 0.75rem;
  align-items: center;
  
 
  input[type=checkbox] {
         position: relative;
	       cursor: pointer;
    }
    input[type=checkbox]:before {
         content: "";
         display: block;
         position: absolute;
         width: 1rem;
         height: 1rem;
         top: -3px;
         left: -2px;
         border: 2px solid var(--blue);
         border-radius: 3rem;
         background-color: var(--gray-400);
}
    input[type=checkbox]:checked:after {
         content: "";
         display: block;
         width: 0.25rem;
         height: 0.5rem;
         border: solid var(--gray-100);
        
         border-width: 0 2px 2px 0;
         -webkit-transform: rotate(45deg);
         -ms-transform: rotate(45deg);
         transform: rotate(45deg);
         position: absolute;
         top: 0px;
         left: 5px;
}
  
   
  p {
    font-size: 0.875rem;
    color: var(--gray-100);
  }

  &.completed {
    p {
     text-decoration:line-through;
     opacity: 0.6;
     }
   }
`;

export const Main = styled.div`
  ul {
    list-style: none;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1rem;
      background: var(--gray-400);
      border-radius: 0.5rem;
      margin-bottom: 0.75rem;

      button {
        background: none;
        border: 0;
        transition: 0.6s;
        
      & .Content:hover {
        filter: brightness(0.6);
        }   
      }
    }
  }
`;

export const SectionOn = styled.div`
  display: grid;
  text-align: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: solid 2px var(--gray-400);
  border-radius: 1rem;
  color: var(--gray-300);

 `;

export const Lixo = styled(FiTrash2)`
  font-size: 1.5rem;
  color: var(--gray-300);

  &:hover {
    color: var(--danger);
  }
`;





