import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1110px;
  margin: 50px auto 0;

  h2 {
    font-weight: 300;
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 5.2rem 0;

    .oi{
      display: none;
    }

    > img {
      width: 500px;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    li {
      display: flex;
      align-items: center;
      width: 40%;
      gap: 15px;
      user-select: none;

      img {
        width: 2.8rem;
      }
      transition: transform ease-out 0.1s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
