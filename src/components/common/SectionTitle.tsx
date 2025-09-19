import styled from "styled-components";
import React from 'react';

type SectionTitlePropsType = {
    title: string,
    width?: string,
    $left?: string,
    $mb?: string,
}

export const SectionTitle = ({title, width, $left, $mb}: SectionTitlePropsType) => {
    return (
        <StyledTitle title={title} width={width} $left={$left} $mb={$mb}>
            <span>#</span>
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

