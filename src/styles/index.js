import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap');

    * {
        margin: 0;
        padding: 0;
    }

    .App {
        text-align: center;
    }

    body {
        background-color: ${props => props.theme.mode === 'dark' ? '#1d1d1d' : '#FFF'};
        background-size: inherit;
        color: ${props => props.theme.mode === 'dark' ? '#FFF' : '#1d1d1d'};
        font-weight: bold;
        font-family: 'Fira Code', monospace !important;

    }


    a:hover {
        color: ${props => props.theme.mode === 'dark' ? '#FFF' : '#1d1d1d'};
    }


    @media screen and (min-width:700px){
        body{
            background-position: 81% 22%;
            position: relative;
        }
    }
`