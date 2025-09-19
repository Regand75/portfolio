import React from 'react';
import styled from "styled-components";
import {Quotes} from "./quotes/Quotes.tsx";
import {Container} from "../../../components/common/Container.tsx";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <Text>
                    <Quotes $top='-14px' $left='19px'/>
                    With great power comes great electricity bill
                    <Quotes $bottom='-16px' $right='19px'/>
                </Text>
                <Author>- Dr. Who</Author>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    padding-bottom: 74px;
    max-width: 732px;
    margin-inline: auto;
    font-family: 'Fira Code', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: ${({theme}) => theme.colors.primary};
    text-align: center;
    position: relative;
    overflow: hidden;
`;

const Text = styled.div`
    position: relative;
    padding: 32px 15px;
    border: 1px solid ${({theme}) => theme.colors.secondary};
`;

const Author = styled.div`
    width: 162px;
    padding: 15px;
    border: 1px solid ${({theme}) => theme.colors.secondary};
    margin-left: auto;
`;
