import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
   color: #FFF;
   background: #ebf2f5;
 }

 body, input, button, textarea {
   font: 600 18px Nunito, san-serif;
 }
`;