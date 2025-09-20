import styled from "styled-components";
import React from 'react';

type SectionTitlePropsType = {
    title: string,
    width?: string,
    $left?: string,
    $mb?: string,
    $symbol?: string,
}

export const SectionTitle = ({title, width, $left, $mb, $symbol}: SectionTitlePropsType) => {
    return (
        <StyledTitle title={title} width={width} $left={$left} $mb={$mb} $symbol={$symbol}>
            <span>{$symbol}</span>
            {title}
        </StyledTitle>
    );
};

const StyledTitle = styled.h2<SectionTitlePropsType>`
    font-family: 'Fira Code', sans-serif;
    font-weight: 500;
    font-size: 32px;
    color: ${({theme}) => theme.colors.primary};
    position: relative;
    margin-bottom: ${props => props.$mb || 0};

    span {
        color: ${({theme}) => theme.colors.tertiary};
    }

    ::after {
        content: "";
        height: 2px;
        width: ${props => props.width};
        background-color: ${({theme}) => theme.colors.tertiary};
        position: absolute;
        margin-left: 16px;
        top: 50%;
        left: ${props => props.$left};
    }
`;

