import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
    --background: #62a86f;
    --background-info: #3b7345;

    --black: #000;
    --gray: #8a8c90;
    --white: #fff;
    --white-smoke: #F0F0F5;

    --error-info: #d55;
    --error: #f52a2a;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    background-color: var(--white-smoke);
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }
`;
