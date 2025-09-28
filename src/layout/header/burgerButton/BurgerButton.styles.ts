import styled from "styled-components";
import {hoverEffect} from "../../../styles/Mixins.ts";

const BurgerButton = styled.button<{ $isBurgerOpen: boolean }>`
    position: fixed;
    top: 16px;
    right: 16px;
    color: ${({theme}) => theme.colors.secondary};
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 30;
    display: ${props => props.$isBurgerOpen ? 'fixed' : 'block'};
    ${hoverEffect};

    @media screen and (min-width: 761px) {
        display: none;
    }
`;

export const S = {
    BurgerButton,
}