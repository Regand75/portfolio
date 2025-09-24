import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {Button} from "../../../components/common/Button.tsx";
import aboutMeImage from "../../../assets/images/about-me-image.png";
import {Icon} from "../../../components/common/Icon.tsx";
import {Link} from "react-router-dom";

type AboutMePropsType = {
    showButton?: boolean,
}

export const AboutMe = (props: AboutMePropsType) => {
    return (
        <StyledAboutMe>
            <FlexWrapper $justify='space-between'>
                <Wrapper>
                    <FlexWrapper direction={'column'} $gap='23px'>
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
                        {props.showButton && (
                            <Link to={'/about-me/about'}>
                                <Button type='button'>Read more {'->'}</Button>
                            </Link>
                        )}
                    </FlexWrapper>
                </Wrapper>
                <ImageWrapper>
                    <BeforeIcon iconId={'dots'} width={'85px'} height={'85px'} viewBox={'0 0 85 85'}/>
                    <Image src={aboutMeImage as string} alt=''/>
                    <AfterIcon iconId={'dotsForAboutImage'} width={'104px'} height={'58px'} viewBox={'0 0 104 58'}/>
                </ImageWrapper>
            </FlexWrapper>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.article`

`;

const Wrapper = styled.div`
    max-width: 515px;
`;

const Description = styled.div`
    width: 100%;
    font-family: 'Fira Code', sans-serif;
    line-height: 25px;
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
    margin-top: -105px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 47px;
        width: 80%;
        height: 1px;
        background-color: ${({theme}) => theme.colors.tertiary};
    }
`;

const BeforeIcon = styled(Icon)`
    position: absolute;
    top: 60px;
    left: 5px;
    z-index: 2;
`;

const Image = styled.img`
    width: 100%;
`;

const AfterIcon = styled(Icon)`
    position: absolute;
    bottom: 175px;
    right: 7px;
    z-index: 2;
`;
