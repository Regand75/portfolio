import React, {useEffect} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {HeaderPropsType} from "../../../data/ItemsData.tsx";
import {Icon} from "../../../components/common/Icon.tsx";
import {LangSelect} from "../LangSelect.tsx";
import {IconsList} from "../../../components/common/IconsList.tsx";
import {Logo} from "../../../components/common/Logo.tsx";

export const MobileMenu = (props: HeaderPropsType) => {
    useEffect(() => {
        if (props.isBurgerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [props.isBurgerOpen]);

    const handleLinkClick = () => {
        props.closeBurger();
    };

    return (
        <StyledMobileMenu>
            <BurgerButton onClick={props.toggleBurger} $isBurgerOpen={props.isBurgerOpen}>
                {props.isBurgerOpen ? (
                    <Icon iconId={'close'} width={'24px'} height={'24px'} viewBox={'0 0 24 24'}/>
                ) : (
                    <Icon iconId={'menu'} width={'24px'} height={'24px'} viewBox={'0 0 24 24'}/>
                )}
            </BurgerButton>

            <MobileMenuPopup $isBurgerOpen={props.isBurgerOpen}>
                <PopupFlexWrapper direction={'column'} $justify='space-between'>
                    <FlexWrapper direction={'column'} $gap='20px'>
                        <Logo onClick={handleLinkClick}/>
                        <ul>
                            <FlexWrapper direction={'column'} $align='center' $gap='32px'>
                                {props.menuItems.map((item, index) => (
                                    <ListItemMobile key={index}>
                                        <Link
                                            to={item.link}
                                            className={({isActive}) => isActive ? 'active' : ''}
                                            onClick={handleLinkClick}
                                        >
                                            <span>#</span>{item.title}
                                        </Link>
                                    </ListItemMobile>
                                ))}
                                <ControlsWrapper direction={'column'} $align='center' $gap='20px'>
                                    <ThemeButton onClick={props.toggleTheme}>
                                        {props.isDark ? (
                                            <MoonIcon iconId={'moon'} width={'23px'} height={'23px'}
                                                      viewBox={'0 0 23 23'}/>
                                        ) : (
                                            <SunIcon iconId={'sun'} width={'23px'} height={'23px'}
                                                     viewBox={'0 0 23 23'}/>
                                        )}
                                    </ThemeButton>
                                    <LangSelect $fontSize='30px'/>
                                </ControlsWrapper>
                            </FlexWrapper>
                        </ul>
                    </FlexWrapper>
                    <IconsListFlex/>
                </PopupFlexWrapper>
            </MobileMenuPopup>
            {props.isBurgerOpen && <Overlay onClick={props.closeBurger}/>}
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media screen and (max-width: 650px) {
        display: block;
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

const ThemeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const MoonIcon = styled(Icon)`
    color: ${({theme}) => theme.colors.secondary};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const SunIcon = styled(Icon)`
    color: ${({theme}) => theme.colors.secondary};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

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