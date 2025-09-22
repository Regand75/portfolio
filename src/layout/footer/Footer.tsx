import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/common/Container.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/common/FlexWrapper.tsx";
import {IconsList} from "../../components/common/IconsList.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterFlexWrapper $justify='space-between' $gap='20px'>
                    <FlexWrapper direction={'column'} $gap='16px'>
                        <FlexWrapper $align='center' $gap='24px'>
                            <Logo/>
                            <LinkEmail href="mailto:urazovs_k@email.ru">
                                <p>urazovs_k@mail.ru</p>
                            </LinkEmail>
                        </FlexWrapper>
                        <Skills>Web designer and front-end developer</Skills>
                    </FlexWrapper>
                    <FlexWrapper direction={'column'} $gap='12px'>
                        <Text>Media</Text>
                        <IconsListFlex/>
                    </FlexWrapper>
                </FooterFlexWrapper>
                <Copyright>© Copyright 2022. Made by Elias</Copyright>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`;
    padding: 32px 0;
    border-top: 1px solid ${({theme}) => theme.colors.secondary};
`;

const FooterFlexWrapper = styled(FlexWrapper)`
    @media screen and (max-width: 425px) {
        flex-direction: column;
    }
`;

const LinkEmail = styled.a`
    font-family: 'Fira Code', sans-serif;
    color: ${({theme}) => theme.colors.secondary};
    transition: filter 0.3s ease, fill 0.3s ease;
    cursor: pointer;

    &:hover {
        filter: drop-shadow(0 0 6px ${(props) => props.theme.colors.secondary});
    }
`;

const Skills = styled.div`
    color: ${({theme}) => theme.colors.primary};
`;

const Text = styled.div`
    font-family: 'Fira Code', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: ${({theme}) => theme.colors.primary};
`;

const IconsListFlex = styled(IconsList)`
    display: flex;
    gap: 8px;
`;

const Copyright = styled.div`
    margin-top: 48px;
    text-align: center;
    font-family: 'Fira Code', sans-serif;
    color: ${({theme}) => theme.colors.secondary};
`;
