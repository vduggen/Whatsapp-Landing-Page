import styled from "styled-components";

export const Container = styled.section`
  text-align: center;
  color: var(--text-black);
`;

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

  h5 {
    margin: 1rem 0;
    pointer-events: none;
  }

  p {
    color: var(--text-muted);
    pointer-events: none;
  }

  &:nth-child(1) {
    .effect-background-image {
      background: #8eed9540;
    }
  }

  &:nth-child(2) {
    .effect-background-image {
      background: #fce06f60;
    }
  }

  &:nth-child(3) {
    .effect-background-image {
      background: #8cddff40;
    }
  }

  .effect-background-image {
    width: 95px;
    height: 95px;
    border-radius: 50px;
    pointer-events: none;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      padding: 1.3rem;
    }
  }
`;
