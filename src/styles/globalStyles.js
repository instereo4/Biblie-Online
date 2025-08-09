import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Champagne";
  src: url("/fonts/Champagne-medium.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Champagne";
  src: url("/fonts/Champagne-bold.ttf") format("truetype");
  font-weight: 700;
  font-style: bold;
}

@font-face {
  font-family: "Century-Gothic";
  src: url("/fonts/century-gothic/gothic.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Century-Gothic";
  src: url("/fonts/century-gothic/gothicb.ttf") format("truetype");
  font-weight: 700;
  font-style: bold;
}
@font-face {
  font-family: "Century-Gothic";
  src: url("/fonts/century-gothic/gothicbi.ttf") format("truetype");
  font-weight: 700;
  font-style: oblique;
}
@font-face {
  font-family: "Century-Gothic";
  src: url("/fonts/century-gothic/gothici.ttf") format("truetype");
  font-weight: 400;
  font-style: italic;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body, html, #root{
  font-family: Arial, Helvetica, sans-serif;
  min-height: 100vh;
}
body{
  background-color: ${(props) => props.theme.colors.background};;
}
h1, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
  }
h2{
  font-family: 'Champagne', Arial;
  color: ${(props) => props.theme.colors.h2};
}
svg {
  color: ${(props) => props.theme.colors.h2};
}


span {
  color: ${(props) => props.theme.colors.white};
  font-size: 1.25em;
  font-family: 'Century-Gothic', Arial;
  font-style: normal;
  font-weight: 400;
}

.books{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
  width: 100%;
}

aside{
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  max-width: 300px;
  width: 300px;
  overflow: auto;
  background-color: ${(props) => props.theme.colors.aside};
  border-right: 1px solid ${(props) => props.theme.colors.border};
  box-sizing: border-box;
  /* scrollbar-color: red yellow; */
  /* f7f8f8 */
}
`;

export default GlobalStyle;
