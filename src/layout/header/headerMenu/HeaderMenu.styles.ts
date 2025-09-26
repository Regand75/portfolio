import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {IconsList} from "../../../components/common/IconsList.tsx";

const ListItem = styled.li`
    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`;

const MobileMenuPopup = styled.div<{ $isBurgerOpen: boolean }>`
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

const PopupFlexWrapper = styled(FlexWrapper)`
    padding: 16px;
    height: 100%;
`;

const ListItemMobile = styled.li`
    list-style: none;
    font-family: 'Fira Code', sans-serif;
    font-weight: 400;
    font-size: 32px;
    color: ${({theme}) => theme.colors.secondary};

    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`;

const Link = styled(NavLink)`
    transition: filter 0.3s ease, fill 0.3s ease;

    &:hover {
        filter: drop-shadow(0 0 6px ${(props) => props.theme.colors.secondary});
    }
    
    span {
        color: ${({theme}) => theme.colors.tertiary};
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

export const S = {
    ListItem,
    Link,
    MobileMenuPopup,
    PopupFlexWrapper,
    ListItemMobile,
    ControlsWrapper,
    Overlay,
    IconsListFlex,
}