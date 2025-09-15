import React from 'react';
import styled from "styled-components";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SloganText>With great power comes great electricity bill</SloganText>
            <SloganAuthor>- Dr. Who</SloganAuthor>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    padding-bottom: 74px;
    max-width: 714px;
    margin-inline: auto;
    font-family: 'Fira Code', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: ${({theme}) => theme.colors.primary};
    text-align: center;
`;

const SloganText = styled.div`
    padding: 32px;
    border: 1px solid ${({theme}) => theme.colors.secondary};
`;

const SloganAuthor = styled.div`
    width: 162px;
    padding: 15px;
    border: 1px solid ${({theme}) => theme.colors.secondary};
    margin-left: auto;
`;
