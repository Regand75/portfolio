import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/common/Container.tsx";
import {FlexWrapper} from "../../components/common/FlexWrapper.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";

type HeaderProps = {
    toggleTheme: () => void,
    isDark: boolean,
}

export const Header = ({toggleTheme, isDark}: HeaderProps) => {
    const items = [
        { title: 'home', link: '/' },
        { title: 'projects', link: '/projects' },
        { title: 'skills', link: '/skills' },
        { title: 'about', link: '/about-me' },
        { title: 'contacts', link: '/contacts' }
    ];
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper $align='center' $justify='space-between' $gap='32px'>
                    <Logo/>
                    <FlexWrapper $align='center' $gap='32px'>
                        <HeaderMenu menuItems={items}/>
                        <select name="language" id="language">
                            <option value="english">EN</option>
                            <option value="russain">RU</option>
                        </select>
                        <Button onClick={toggleTheme}>
                            {isDark ? (
                                <SoonIcon iconId={'moon'} width={'23px'} height={'23px'} viewBox={'0 0 23 23'}/>
                            ) : (
                                <SumIcon iconId={'sun'} width={'23px'} height={'23px'} viewBox={'0 0 23 23'}/>
                            )}
                        </Button>
                        <MenuIcon iconId={'menu'} width={'24px'} height={'24px'} viewBox={'0 0 24 24'}/>
                        <CloseIcon iconId={'close'} width={'24px'} height={'24px'} viewBox={'0 0 24 24'}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 32px 0 8px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    background-color: ${({theme}) => theme.colors.background};
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const SoonIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.secondary};
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const SumIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.secondary};
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const MenuIcon = styled(Icon)`
    display: none;

    @media screen and (max-width: 760px) {
        display: inline-block;
    }
`;

const CloseIcon = styled(Icon)`
    display: none;
`;



