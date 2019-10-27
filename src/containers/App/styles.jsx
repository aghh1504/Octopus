import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
    width: 100%;
    line-height: 30px;
}
body {
    box-sizing: border-box;
    margin: 0;
    background-color: #040d27;
    color: white;
    font-family: 'Gotham SSm A','Gotham SSm B',helvetica,arial,sans-serif;
    line-height: 30px;
}
h1,h2,h3,h4,h5,h6,p {
    margin: 0;
}
`;
