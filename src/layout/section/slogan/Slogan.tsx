import React from 'react';
import styled from "styled-components";
import {Quotes} from "./quotes/Quotes.tsx";
import {Container} from "../../../components/common/Container.tsx";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <Text>
                    <Quotes top={'-14px'} left={'19px'}/>
                    With great power comes great electricity bill
                    <Quotes bottom={'-16px'} right={'19px'}/>
                </Text>
                <Author>- Dr. Who</Author>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    padding-top: 123px;
    padding-bottom: 20px;
    min-height: calc(100vh - 215px);
    max-width: 714px;
    margin-inline: auto;
    font-family: 'Fira Code', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: ${({theme}) => theme.colors.primary};
    text-align: center;
`;

const Text = styled.div`
    position: relative;
    padding: 32px;
    border: 1px solid ${({theme}) => theme.colors.secondary};
`;

// const BeforeWrapper = styled.div`
//     background-color: ${({theme}) => theme.colors.background};
//     width: 42px;
//     height: 29px;
//     position: absolute;
//     top: -14px;
//     left: 19px;
// `;
//
// const AfterWrapper = styled.div`
//     background-color: ${({theme}) => theme.colors.background};
//     width: 42px;
//     height: 29px;
//     position: absolute;
//     bottom: -16px;
//     right: 19px;
// `;

const Author = styled.div`
    width: 162px;
    padding: 15px;
    border: 1px solid ${({theme}) => theme.colors.secondary};
    margin-left: auto;
`;
