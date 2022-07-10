import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #0F0020;
    color: #E8E6E2;
    font-family: 'Roboto', sans-serif;
    overflow-x: none;
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  input,
  button {
    border: none;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
