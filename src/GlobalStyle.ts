import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }

  body {
    background: #F0F2F5 ;
    -webkit-font-smoothing: antialiased
  }
  header {
      height: 76px;
      background: #FA558F;
      padding: 0 25px;
      display: flex;
      align-items: center;
      box-shadow: 0px 1px 1px #941A45;
  }
  header div{
    display: flex;
    align-items: center;
  }
  header .logo-menu {
    color: #fff;
    margin-left: 15px;
    font-size: 20px
  }

  a{
    text-decoration: none;
    color: #000000
  }
`;

export default GlobalStyle;
