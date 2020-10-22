import styled from "styled-components";

export const Container = styled.footer`
  background: var(--color-primary);
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  align-items: flex-start;
  justify-items: center;

  .column-footer {
    padding: 2rem 0;

    h5 {
      color: var(--text-light);
    }

    nav {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;

      a {
        margin: 0.3rem 0;
        text-decoration: none;
        font: 400 1.125rem "Ubuntu", sans-serif;
        color: #ffffffcc;
        transition: ease-in-out 0.3s;

        &:hover {
          color: #ffffff90;
        }
      }
    }
  }
`;

export const Copyright = styled.div`
  padding: 0.5rem 0;
  text-align: center;
  background-color: var(--color-green-black);
  color: var(--text-light);
  pointer-events: none;
`;
