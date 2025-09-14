import {createGlobalStyle} from "styled-components";
import FiraCodeRegular from '../assets/fonts/FiraCode-Regular.ttf';
import FiraCodeMedium from '../assets/fonts/FiraCode-Medium.ttf';
import FiraCodeSemiBold from '../assets/fonts/FiraCode-SemiBold.ttf';
import FiraCodeBold from '../assets/fonts/FiraCode-Bold.ttf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Fira Code";
        src: url(${FiraCodeRegular}) format("truetype");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "Fira Code";
        src: url(${FiraCodeMedium}) format("truetype");
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: "Fira Code";
        src: url(${FiraCodeSemiBold}) format("truetype");
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "Fira Code";
        src: url(${FiraCodeBold}) format("truetype");
        font-weight: 700;
        font-style: normal;
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        background-color: ${({theme}) => theme.colors.background};
        font-family: 'Fira Code', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: ${({theme}) => theme.colors.secondary};
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }
`