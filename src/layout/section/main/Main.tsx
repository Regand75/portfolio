import React from 'react';
import styled from "styled-components";
import mainImage from "../../../assets/images/main-image.png"
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {Container} from "../../../components/common/Container.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <div>
                        <MainTitle>Andrey is a <span>front-end developer</span></MainTitle>
                    </div>
                    <div>
                        <MainPhoto src={mainImage} alt=""/>
                    </div>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    padding-bottom: 74px;
`;

const MainPhoto = styled.img`
    width: 457px;
    height: 386px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    font-family: 'Fira Code', sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    color: ${({theme}) => theme.colors.primary};
    
    span {
        color: ${({theme}) => theme.colors.tertiary};
    }
`
