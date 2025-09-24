import React from 'react';
import styled from "styled-components";
import mainImage from "../../../assets/images/main-image.png";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {Container} from "../../../components/common/Container.tsx";
import {Button} from "../../../components/common/Button.tsx";
import {Icon} from "../../../components/common/Icon.tsx";
import {Link} from "react-router-dom";
import {FixedBlockIcon} from "../../../components/common/FixedBlockIcon.tsx";
import {Skills} from "../skills/Skills.tsx";
import {Slogan} from "../slogan/Slogan.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FixedBlockIcon />
                <MainFlexWrapper $align='start' $justify='space-between' $gap='20px'>
                    <Info>
                        <Title>Andrey is a <span>front-end developer</span></Title>
                        <Description>He crafts responsive websites where technologies meet creativity</Description>
                        <Link to={'contacts/contacts-all'}>
                            <Button>Contact me!!</Button>
                        </Link>
                    </Info>
                    <ImageWrapper>
                        <BeforeIcon iconId={'outlineBig'} width={'156px'} height={'156px'} viewBox={'0 0 156 156'}/>
                        <Image src={mainImage as string} alt="Fhoto"/>
                        <AfterIcon iconId={'dots'} width={'85px'} height={'85px'} viewBox={'0 0 85 85'}/>
                        <InfoWork>
                            <FlexWrapper $align='center'>
                                <InfoWorkBlock/>
                                <p>Currently working on <span>Portfolio</span></p>
                            </FlexWrapper>
                        </InfoWork>
                    </ImageWrapper>
                </MainFlexWrapper>
                <Slogan />
            </Container>
            <AfterContentFromBlock iconId={'blockForAfter82-91'} width={'82px'} height={'91px'} viewBox={'0 0 82 91'}
                                   fill={'none'}/>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    position: relative;
    padding-top: 123px;
    padding-bottom: 84px;
    min-height: calc(100vh - 215px);

    @media screen and (max-width: 710px) {
        padding-top: 80px;
    }

    @media screen and (max-width: 620px) {
        padding-bottom: 80px;
    }
`;

const MainFlexWrapper = styled(FlexWrapper)`
    padding-bottom: 151px;
    @media screen and (max-width: 425px) {
        flex-direction: column;
    }
`;

const AfterContentFromBlock = styled(Icon)`
    position: absolute;
    top: 669px;
    right: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const Info = styled.div`
    margin-top: 75px;
    max-width: 537px;

    @media screen and (max-width: 710px) {
        margin-top: 50px;
    }
    
    @media screen and (max-width: 620px) {
        margin-top: 20px;
    }
`;

const Title = styled.h1`
    margin-bottom: 32px;
    font-family: 'Fira Code', sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    color: ${({theme}) => theme.colors.primary};

    span {
        color: ${({theme}) => theme.colors.tertiary};
    }
`;

const Description = styled.p`
    margin-bottom: 24px;
    font-family: 'Fira Code', sans-serif;
    line-height: 25px;
    color: ${({theme}) => theme.colors.secondary};
`;

const ImageWrapper = styled.div`
    max-width: 457px;
    max-height: 386px;
    position: relative;
`;

const BeforeIcon = styled(Icon)`
    position: absolute;
    top: 84px;
    left: -8px;
    z-index: -1;

    @media screen and (max-width: 1024px) {
        max-width: 126px;
        max-height: 126px;
    }

    @media screen and (max-width: 768px) {
        max-width: 100px;
        max-height: 100px;
    }

    @media screen and (max-width: 620px) {
        max-width: 60px;
        max-height: 60px;
    }

    @media screen and (max-width: 425px) {
        max-width: 120px;
        max-height: 120px;
        left: 0;
    }
    
    @media screen and (max-width: 320px) {
        max-width: 100px;
        max-height: 100px;
    }
`;

const AfterIcon = styled(Icon)`
    position: absolute;
    bottom: 110px;
    right: 15px;
    z-index: 2;

    @media screen and (max-width: 1024px) {
        max-width: 60px;
        max-height: 60px;
    }

    @media screen and (max-width: 768px) {
        max-width: 50px;
        max-height: 50px;
    }

    @media screen and (max-width: 620px) {
        max-width: 30px;
        max-height: 30px;
    }

    @media screen and (max-width: 425px) {
        max-width: 80px;
        max-height: 80px;
    }

    @media screen and (max-width: 320px) {
        max-width: 60px;
        max-height: 60px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;

`;

const InfoWork = styled.div`
    border: 1px solid ${({theme}) => theme.colors.secondary};
    padding: 8px;
    max-width: 402px;
    margin-inline: auto;

    span {
        font-family: 'Fira Code', sans-serif;
        font-weight: 600;
        color: ${({theme}) => theme.colors.primary};
    }
`;

const InfoWorkBlock = styled.div`
    display: flex;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    background-color: ${({theme}) => theme.colors.tertiary};
`;
