import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    html, body{
        margin: 0;
        min-height: 100vh; 
        font-family: "Poppins", sans-serif;
    }

    .main-container{
        min-height: 100vh;
        background-color: black;
    }
`