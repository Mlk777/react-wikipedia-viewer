import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    background: #f1edea;  
    background: -webkit-linear-gradient(to right, #FFFFFF, #f1edea);  
    background: linear-gradient(to right, #FFFFFF, #f1edea); 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
