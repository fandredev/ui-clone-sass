import { createGlobalStyle } from 'styled-components';
import SourceProLight from '../assets/fonts/SourceSansPro-Light.ttf';

export default createGlobalStyle`
/* Exemplo de import de fontes */
  @font-face {
    font-family: 'Source Sans Pro Light';
    src: local('Source Sans Pro Light'),url(${SourceProLight}) format('truetype');
  }


  *{
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box
  }
  html {
    font-size: 62.5%;
    font-family: 'Source Sans Pro Light', sans-serif;
  }
  html,body {
      font-family: 'Source Sans Pro Light';
      text-rendering: optimizelegibility;
      -webkit-font-smoothing: antialiased;
  }
  body {
    font-size: 1.6rem;

  }
  ul, li, a {
    list-style: none;
  }
  button {
        margin: 0;
    border: 0;
    cursor: pointer;
  }
  :root {
    --text-list:#036;
    --releases:#bf4080;
    --text-items:#6b717f;
    --focus-input:#fd6a02;
    --sass-text: #699;
    --opacity-border-bottom: rgba(218,219,223,0.5);
    --releases-hover:rgba(0,0,0,0.0625)
    --links-hover:rgba(218,219,223,0.25)
  }
`;
