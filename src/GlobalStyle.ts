import { createGlobalStyle } from "styled-components";
import opbg from "../src/assets/Img/opbg.jpg";

export const GlobalStyle = createGlobalStyle`
  body {
  padding: 0;
  margin: 0;

  width: 100vw;
  max-width: 100%;
  height: 100vh;


  

  background: url(${opbg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  }
  
  @media screen and (max-width: 750px) {
  padding: 5px;
  margin: 5px;

`;
