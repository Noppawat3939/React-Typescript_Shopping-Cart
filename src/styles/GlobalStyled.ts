import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap');
   
* {
    margin: 0;
    padding: 0;
    box-sizing : border-box;
    font-family: 'Roboto Mono', monospace;
    }

body {
        max-width: 100%;
        min-height: 100vh;
        background: #f0f1f4;
    }

button {
    cursor: pointer;
    border: 0;
}
`;
