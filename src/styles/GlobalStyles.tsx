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
        font-display: swap;
    }

    @font-face {
        font-family: "Fira Code";
        src: url(${FiraCodeMedium}) format("truetype");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Fira Code";
        src: url(${FiraCodeSemiBold}) format("truetype");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Fira Code";
        src: url(${FiraCodeBold}) format("truetype");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
        min-height: 100vh;
    }
    
    body {
        font-family: 'Fira Code',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({theme}) => theme.colors.background};
        font-weight: 400;
        font-size: 16px;
        color: ${({theme}) => theme.colors.secondary};
        height: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    a.active {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: bold;
    }

    ul {
        list-style: none;
    }
    
    :focus-visible {
        outline-color: ${({theme}) => theme.colors.tertiary};;
    }
    
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before, *::after {
            animation: none !important;
            transition: none !important;
        }
    }
`;