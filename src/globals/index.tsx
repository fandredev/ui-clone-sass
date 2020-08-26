import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box
  }
  html {
    font-size: 62.5%;
    font-family: 'Source Sans Pro', sans-serif;
  }
  html,body {
      font-family: "Source Sans Pro";
      text-rendering: optimizelegibility;
      -webkit-font-smoothing: antialiased;
  }
  body {
    font-size: 1.6rem;
  }
  ul, li, a {
    list-style: none;
  }
  :root {
    --text-list:#036;
    --releases:#bf4080;
    --text-items:#6b717f;
    --focus-input:#fd6a02;
    --sass-text: #699;
    --opacity-border-bottom: rgba(218,219,223,0.5);
  }
`;
