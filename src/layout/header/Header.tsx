import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/common/Container.tsx";
import {FlexWrapper} from "../../components/common/FlexWrapper.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";

type HeaderProps = {
    toggleTheme: () => void,
    isDark: boolean,
}

export const Header = ({toggleTheme, isDark}: HeaderProps) => {
    const items = ['home', 'project', 'about-me', 'contacts'];
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <Logo/>
                    <FlexWrapper align={'center'} gap={'32px'}>
                        <HeaderMenu menuItems={items}/>
                        <select name="language" id="language">
                            <option value="english">EN</option>
                            <option value="russain">RU</option>
                        </select>
                        <HeaderButton onClick={toggleTheme}>
                            {isDark ? (
                                <Icon iconId={'moon'} width={'23px'} height={'23px'} viewBox={'0 0 23 23'}/>
                            ) : (
                                <Icon iconId={'sun'} width={'23px'} height={'23px'} viewBox={'0 0 23 23'}/>
                            )}
                        </HeaderButton>
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
    right: 0;
    left: 0;
    z-index: 9999;
    background-color: ${({theme}) => theme.colors.background};;
`;

const HeaderButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

