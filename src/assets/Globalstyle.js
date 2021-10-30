import{ createGlobalStyle } from "styled-components";
import texture from "../images/bg-noise-texture.png";
 const GlobalStyle = createGlobalStyle`
  body 
  {
    margin: 0;
    padding: 0;
    background-image: url(${texture});
    background-repeat: repeat;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  h1 {
  font-family: 'Bangers', cursive;
  font-size: 70px;
  color: ${({theme})=>theme.white};
  font-weight: normal;
  text-align: center;
  letter-spacing: 6px;
  cursor: pointer;
  margin: 0 auto;
}

h1 a {
  color: inherit;
  text-decoration: none;
  font-family: 'Bangers', cursive;
}

h1 a:hover {
  color: inherit;
}

h2,
h3 {
  font-weight: normal;
  text-align: left;
  font-family: 'Roboto Condensed', sans-serif;
}
`
export default GlobalStyle