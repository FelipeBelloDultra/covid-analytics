import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  :root {
    --background: #bfdbff;
    --background-info: #6a82a0;

    --black: #000;
    --gray: #8a8c90;
    --white: #fff;

    --error-info: #d55;
    --error: #f52a2a;
  }
`;
