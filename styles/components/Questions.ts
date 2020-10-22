import styled from "styled-components";

export const Container = styled.article``;

export const Card = styled.div`
  width: 93%;
  height: auto;
  background: var(--color-light);
  border-radius: 20px;
  padding: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  transition: ease-in-out 0.3s;

  &:hover {
    box-shadow: 0 0 14px var(--box-shadow);
  }

  h4 {
    margin: 1rem 0;
    pointer-events: none;
    color: var(--color-primary);
  }

  .container-text-questions {
    text-align: left;

    ul {
      li {
        margin: 0.5rem 0;

        a {
          font: 400 1rem "Open Sans", sans-serif;
          text-decoration: none;
          color: var(--text-black);
          transition: ease-in-out 0.3s;

          &:hover {
            opacity: 0.5;
          }
        }
      }
    }

    a {
      font: 500 1.125rem "Ubuntu", sans-serif;
      text-decoration: none;
      color: var(--text-black);
      transition: ease-in-out 0.3s;
      margin-top: 0.5rem;

      img {
        margin-left: 0.3rem;
      }

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
