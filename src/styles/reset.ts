import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyled = createGlobalStyle`
  ${reset}
  
  * {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-content-zooming: none;
    -ms-touch-action: pan-x pan-y;
  }

  html {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12px;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12px;
    background-color: #121925;
    color: #ffffff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
    &:focus {
      box-shadow: none;
      outline: none;
    }
  }
`;