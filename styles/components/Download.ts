import styled from "styled-components";

export const Container = styled.section`
  min-height: 80vh;

  h2 {
    color: var(--text-black);
    text-align: center;
  }

  article {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2rem;

    .column-download {
      text-align: center;
      color: var(--text-black);

      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;

      img {
        margin-top: 2rem;
      }

      .container-text-download {
        width: 450px;
        margin-top: 2rem;

        .first-text-mobile {
          color: var(--text-muted);
        }

        h5 {
          margin-top: 1rem;

          span {
            color: var(--text-blue);
            cursor: pointer;
            transition: ease-in-out 0.3s;

            &:hover {
              opacity: 0.7;
            }
          }

          &:first-child {
            margin-bottom: 1rem;
          }
        }

        .container-versions-supported {
          margin-top: 1rem;

          ul {
            li {
              margin: 0.5rem 0;
              color: var(--text-blue);
              cursor: pointer;
              transition: ease-in-out 0.3s;

              &:hover {
                opacity: 0.7;
              }
            }
          }
        }
      }
    }
  }
`;
