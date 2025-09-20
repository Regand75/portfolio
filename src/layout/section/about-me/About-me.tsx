import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import aboutMeImage from "../../../assets/images/about-me-image.png"
import {Button} from "../../../components/common/Button.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <BeforeContentFromBlock iconId={'blockForBefore78-155'} width={'78px'} height={'155px'} viewBox={'0 0 78 155'} fill={'none'}/>
            <Container>
                <FlexWrapper $justify='space-between'>
                    <Wrapper>
                        <FlexWrapper direction={'column'} $gap='23px'>
                            <SectionTitle title={'about-me'} width={'340px'} $left='172px'/>
                            <Description>
                                <p>Hello, i'm Andrey</p>
                                <p>
                                    I am a Junior Frontend Developer with basic experience in Angular and the modern
                                    tech
                                    stack
                                    (JavaScript, TypeScript, HTML, CSS, etc.).
                                    I learn quickly and adapt to new technologies: I completed an online frontend
                                    development
                                    course by Aitylogy, successfully finishing all assignments on time while paying
                                    attention to
                                    code clarity and structure.
                                </p>
                                <p>
                                    I am eager to continue growing in this field and open to constructive feedback and
                                    teamwork.
                                </p>
                            </Description>
                            <Button type='button'>Read more</Button>
                        </FlexWrapper>
                    </Wrapper>
                    <ImageWrapper>
                        <BeforeIcon iconId={'dots'} width={'85px'} height={'85px'} viewBox={'0 0 85 85'}/>
                        <Image src={aboutMeImage as string} alt=''/>
                        <AfterIcon iconId={'dotsForAboutImage'} width={'104px'} height={'58px'} viewBox={'0 0 104 58'}/>
                    </ImageWrapper>
                </FlexWrapper>
            </Container>
            <AfterContentFromDots iconId={'dotsForAfter80-103'} width={'80px'} height={'103px'} viewBox={'0 0 80 103'}/>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    position: relative;
    padding-top: 130px;
    padding-bottom: 20px;
    min-height: calc(100vh - 215px);
`;

const BeforeContentFromBlock = styled(Icon)`
    position: absolute;
    top: 270px;
    left: 0;
    
    @media screen and (max-width: 1210px) {
        display: none;
}
`;

const AfterContentFromDots = styled(Icon)`
    position: absolute;
    top: 453px;
    right: 0;
    
    @media screen and (max-width: 1210px) {
        display: none;
}
`;

const Wrapper = styled.div`
    max-width: 515px;
`;

const Description = styled.div`
    width: 100%;
    font-family: 'Fira Code', sans-serif;
    line-height: 26px;
    color: ${({theme}) => theme.colors.secondary};

    p {
        margin-bottom: 27px;
    }

    p:last-child {
        margin-bottom: 4px;
    }
`;

const ImageWrapper = styled.div`
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 45px;
        width: 80%;
        height: 1px;
        background-color: ${({theme}) => theme.colors.tertiary};
    }
`;

const BeforeIcon = styled(Icon)`
    position: absolute;
    top: 60px;
    left: -5px;
    z-index: 2;
`;

const Image = styled.img`
    width: 100%;
`;

const AfterIcon = styled(Icon)`
    position: absolute;
    bottom: 176px;
    right: 16px;
    z-index: 2;
`;