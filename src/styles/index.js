import { createGlobalStyle, css } from 'styled-components';
import Color from './Colors';

export const resetStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  font-family: Open Sans, sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    ${resetStyles}
  }
  body {
    background-color: ${Color.background}
  }
`;
