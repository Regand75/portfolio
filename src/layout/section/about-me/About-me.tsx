import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {Button} from "../../../components/common/Button.tsx";
import aboutMeImage from "../../../assets/images/about-me-image.png"

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <AboutMeWrapper>
                        <FlexWrapper direction={'column'} gap={'23px'}>
                            <SectionTitle title={'about-me'} width={'340px'} left={'172px'}/>
                            <AboutMeDescription>
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
                            </AboutMeDescription>
                            <Button title={'Read more'}/>
                        </FlexWrapper>
                    </AboutMeWrapper>
                    <div>
                        <AboutMeImage src={aboutMeImage} alt=''/>
                    </div>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    padding-bottom: 112px;
`;

const AboutMeWrapper = styled.div`
    max-width: 515px;
`;

const AboutMeDescription = styled.div`
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

const AboutMeImage = styled.img`
    width: 100%;
`;