import styled from "styled-components";

const BurgerButton = styled.button<{ $isBurgerOpen: boolean }>`
    position: fixed;
    top: 16px;
    right: 16px;
    color: ${({theme}) => theme.colors.primary};
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 30;
    display: ${props => props.$isBurgerOpen ? 'fixed' : 'block'};

    @media screen and (min-width: 761px) {
        display: none;
    }
`;

export const S = {
    BurgerButton,
}