import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: border-box;
}

.App {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: "Roboto";
  src: local("Roboto"), local("Roboto"),
    url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"),
    url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  font-weight: 400;
  font-style: normal;
}

`;

export default GlobalStyle;
