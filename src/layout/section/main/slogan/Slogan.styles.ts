import styled from "styled-components";
import {QuotesPropsType} from "./Quotes.tsx";

//Slogan
const Slogan = styled.section`
    max-width: 732px;
    margin-inline: auto;
    font-family: 'Fira Code', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: ${({theme}) => theme.colors.primary};
    text-align: center;
`;

const Text = styled.div`
    position: relative;
    padding: 32px 15px;
    border: 1px solid ${({theme}) => theme.colors.secondary};

    @media screen and (max-width: 620px) {
        padding: 15px;
    }
`;

const Author = styled.div`
    width: 162px;
    padding: 15px;
    border: 0 solid ${({theme}) => theme.colors.secondary};
    border-width: 0 1px 1px;
    margin-left: auto;
`;

//Quotes
const Quotes = styled.div<QuotesPropsType>`
    background-color: ${({theme}) => theme.colors.background};
    width: 42px;
    height: 29px;
    position: absolute;
    left: ${props => props.$left || 'auto'};
    top: ${props => props.$top || 'auto'};
    right: ${props => props.$right || 'auto'};
    bottom: ${props => props.$bottom || 'auto'};
`;

export const S = {
    Slogan,
    Text,
    Author,
    Quotes,
}