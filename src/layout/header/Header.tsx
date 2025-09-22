import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/common/Container.tsx";
import {FlexWrapper} from "../../components/common/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {HeaderProps} from "../../data/ItemsData.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";

export const Header = (props: HeaderProps) => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper $align='center' $justify='space-between' $gap='32px'>
                    <Logo/>
                    <FlexWrapper $align='center' $gap='32px'>
                        <HeaderMenu {...props}/>
                    </FlexWrapper>
                </FlexWrapper>
                <MobileMenu {...props}/>
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




