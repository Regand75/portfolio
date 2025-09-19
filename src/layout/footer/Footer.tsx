import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/common/Container.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/common/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper $justify='space-between'>
                    <FlexWrapper direction={'column'} $gap='16px'>
                        <FlexWrapper $align='center' $gap='24px'>
                            <Logo/>
                            <Link>urazovs_k@mail.ru</Link>
                        </FlexWrapper>
                        <Skills>Web designer and front-end developer</Skills>
                    </FlexWrapper>
                    <FlexWrapper direction={'column'} $gap='12px'>
                        <Text>Media</Text>
                        <SocialIconsList>
                            <FlexWrapper>
                                <IconItem>
                                    <IconLink href='#'>
                                        <FooterIcon iconId={'github'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                                    </IconLink>
                                </IconItem>
                                <IconItem>
                                    <IconLink href='#'>
                                        <FooterIcon iconId={'figma'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                                    </IconLink>
                                </IconItem>
                                <IconItem>
                                    <IconLink href='#'>
                                        <FooterIcon iconId={'bitcoin'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                                    </IconLink>
                                </IconItem>
                            </FlexWrapper>
                        </SocialIconsList>
                    </FlexWrapper>
                </FlexWrapper>
                <Copyright>© Copyright 2022. Made by Elias</Copyright>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`;
    padding: 32px 0;
    border-top: 1px solid ${({theme}) => theme.colors.secondary};
`;

const Link = styled.div`
    font-family: 'Fira Code', sans-serif;
    color: ${({theme}) => theme.colors.secondary};
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

const SocialIconsList = styled.ul`

`;

const IconItem = styled.li`
    cursor: pointer;
`;

const IconLink = styled.a`

`;

const Copyright = styled.div`
    margin-top: 48px;
    text-align: center;
    font-family: 'Fira Code', sans-serif;
    color: ${({theme}) => theme.colors.secondary};
`;

const FooterIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;