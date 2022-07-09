import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow-x: hidden;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 9rem;
      margin-bottom: 1.5rem;
    }
    h1 {
      font-weight: 400;
      font-size: 2rem;
      white-space: nowrap;
      overflow: hidden;
      animation: typewriter 1s steps(13) infinite alternate,
        blink 1000ms steps(10000) infinite normal;
      border-right: 5px solid black;
    }
    > div {
      display: flex;
      align-items: center;
      span {
        &::after {
          content: "|";
          margin-left: 2px;
          opacity: 1;
          animation: blinckEffectBar .8s infinite;
          font-size: 2rem;
        }
      }
    }
  }
  
  > img {
    position: absolute;
    display: block;
    left: 80%;
    bottom: -45px;
    width: 400px;
  }

  ul {
    position: absolute;
    top: 50px;
    left: 20px;
    li {
      margin-bottom: 15px;
      img {
        width: 30px;
      }
    }
  }

  > span {
    position: absolute;
    animation: ArrowsEffect 2s infinite;
  }

  @keyframes typewriter {
    from {
      width: 80%;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink {
    from {
      border-color: black;
    }
    to {
      border-color: transparent;
    }
  }

  @keyframes blinckEffectBar {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  @keyframes ArrowsEffect {
    0%,
    100% {
      bottom: 20px;
    }
    50%{
      bottom: 35px;
    }
  }
`;
