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
                <FlexWrapper justify={'space-between'}>
                    <FlexWrapper direction={'column'} gap={'16px'}>
                        <FlexWrapper align={'center'} gap={'24px'}>
                            <Logo/>
                            <FooterLink>urazovs_k@mail.ru</FooterLink>
                        </FlexWrapper>
                        <FooterSkills>Web designer and front-end developer</FooterSkills>
                    </FlexWrapper>
                    <FlexWrapper direction={'column'} gap={'12px'}>
                        <FooterText>Media</FooterText>
                        <FooterSocialIconsList>
                            <FlexWrapper>
                                <FooterIconItem>
                                    <FooterIconLink href='#'>
                                        <Icon iconId={'github'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                                    </FooterIconLink>
                                </FooterIconItem>
                                <FooterIconItem>
                                    <FooterIconLink href='#'>
                                        <Icon iconId={'figma'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                                    </FooterIconLink>
                                </FooterIconItem>
                                <FooterIconItem>
                                    <FooterIconLink href='#'>
                                        <Icon iconId={'bitcoin'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                                    </FooterIconLink>
                                </FooterIconItem>
                            </FlexWrapper>
                        </FooterSocialIconsList>
                    </FlexWrapper>
                </FlexWrapper>
                <Copyright>© Copyright 2022. Made by Elias</Copyright>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`;
    padding: 32px 0;
    border-top: 1px solid ${({theme}) => theme.colors.secondary};
`;

const FooterLink = styled.div`
    font-family: 'Fira Code', sans-serif;
    color: ${({theme}) => theme.colors.secondary};
`;

const FooterSkills = styled.div`
    color: ${({theme}) => theme.colors.primary};
`;

const FooterText = styled.div`
    font-family: 'Fira Code', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: ${({theme}) => theme.colors.primary};
`;

const FooterSocialIconsList = styled.ul`

`;

const FooterIconItem = styled.li`
    cursor: pointer;
`;

const FooterIconLink = styled.a`

`;

const Copyright = styled.div`
    margin-top: 48px;
    text-align: center;
    font-family: 'Fira Code', sans-serif;
    color: ${({theme}) => theme.colors.secondary};
`;