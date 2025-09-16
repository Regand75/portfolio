import React from 'react';
import styled from "styled-components";
import mainImage from "../../../assets/images/main-image.png"
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {Container} from "../../../components/common/Container.tsx";
import {Button} from "../../../components/common/Button.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'start'} justify={'space-between'}>
                    <Info>
                        <Title>Andrey is a <span>front-end developer</span></Title>
                        <Description>He crafts responsive websites where technologies meet creativity</Description>
                        <Button>Contact me!!</Button>
                    </Info>
                    <MainImageWrapper>
                        <Image src={mainImage} alt=""/>
                        <InfoWork>
                            <FlexWrapper align={'center'}>
                                <InfoWorkBlock />
                                <p>Currently working on <span>Portfolio</span></p>
                            </FlexWrapper>
                        </InfoWork>
                    </MainImageWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    padding-top: 123px;
    padding-bottom: 112px;
    display: flex;
`;

const Info = styled.div`
    margin-top: 75px;
    max-width: 537px;
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

const MainImageWrapper = styled.div`
`;

const Image = styled.img`
    width: 457px;
    height: 386px;
    object-fit: cover;
`;

const InfoWork = styled.div`
    border: 1px solid ${({theme}) => theme.colors.secondary};
    padding: 8px;
    width: 402px;
    margin-inline: auto;
    
    span {
        font-family: 'Fira Code',sans-serif;
        font-weight: 600;
        color: ${({theme}) => theme.colors.primary};
    }
`;

const InfoWorkBlock = styled.div`
    width: 16px;
    height: 16px;
    margin-right: 10px;
    background-color: ${({theme}) => theme.colors.tertiary};
`;
