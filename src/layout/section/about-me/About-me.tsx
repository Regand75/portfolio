import React, {FC} from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import aboutMeImage from "../../../assets/images/about-me-image.png"
import {Button} from "../../../components/common/Button.tsx";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <Wrapper>
                        <FlexWrapper direction={'column'} gap={'23px'}>
                            <SectionTitle title={'about-me'} width={'340px'} left={'172px'}/>
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
                    <div>
                        <Image src={aboutMeImage} alt=''/>
                    </div>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    padding-top: 130px;
    padding-bottom: 20px;
    min-height: calc(100vh - 215px);
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

const Image = styled.img`
    width: 100%;
`;