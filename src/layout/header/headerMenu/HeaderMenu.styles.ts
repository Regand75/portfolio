import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FlexWrapper} from "../../../components/common/FlexWrapper.ts";
import {IconsList} from "../../../components/common/IconsList.tsx";
import {hoverEffect} from "../../../styles/Mixins.ts";

const Link = styled(NavLink)`
    ${hoverEffect()};
    
    span {
        color: ${({theme}) => theme.colors.tertiary};
    }
`;

// MobileMenu

const Popup = styled.div<{ $isBurgerOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.bgPopup || props.theme.colors.background};
    z-index: 20;
    transform: translateX(${props => props.$isBurgerOpen ? '0' : '-100%'});
    transition: transform 0.3s ease-in-out;
    box-shadow: ${props => props.$isBurgerOpen ? '2px 0 10px rgba(0,0,0,0.1)' : 'none'};
`;

const Wrapper = styled(FlexWrapper)`
    padding: 16px;
    height: 100%;
`;

const ItemMobile = styled.li`
    list-style: none;
    font-family: 'Fira Code', sans-serif;
    font-weight: 400;
    font-size: 32px;
    color: ${({theme}) => theme.colors.secondary};

    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`;

const ControlsWrapper = styled(FlexWrapper)`
    margin-top: 10px;
    padding-top: 40px;
    border-top: 1px solid ${props => props.theme.colors.secondary};
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 15;

    @media screen and (min-width: 761px) {
        display: none;
    }
`;

const IconsListFlex = styled(IconsList)`
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: center;

    svg {
        width: 64px;
        height: 64px;
    }
`;

// DesktopMenu

const Item = styled.li`
    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`;

export const S = {
    Item,
    Link,
    Popup,
    Wrapper,
    ItemMobile,
    ControlsWrapper,
    Overlay,
    IconsListFlex,
}