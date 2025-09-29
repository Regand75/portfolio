import styled from "styled-components";
import React from 'react';
import {FlexWrapper} from "../FlexWrapper.ts";

type SectionTitlePropsType =  {
    title?: string,
    width?: string,
    $mb?: string,
    $mbMobile?: string,
    $symbol?: string,
}

export const SectionTitle: React.FC<SectionTitlePropsType> = ({title, width, $mb, $symbol, $mbMobile}: SectionTitlePropsType) => {
    return (
        <StyledTitle title={title} $mb={$mb} $symbol={$symbol} $mbMobile={$mbMobile}>
            <FlexWrapper $gap='16px'>
                <TitleWrapper>
                    <span>{$symbol}</span>
                    {title}
                </TitleWrapper>
                <LineWrapper width={width} />
            </FlexWrapper>
        </StyledTitle>
    );
};

const StyledTitle = styled.div<SectionTitlePropsType>`
    margin-bottom: ${props => props.$mb || 0};
    width: 100%;

    @media screen and (max-width: 375px) {
        margin-bottom: ${props => props.$mbMobile || props.$mb || 0};
    }
`;

const TitleWrapper = styled.h2<SectionTitlePropsType>`
    font-family: 'Fira Code', sans-serif;
    font-weight: 500;
    font-size: 32px;
    color: ${({theme}) => theme.colors.primary};
    white-space: nowrap;
  
    span {
        color: ${({theme}) => theme.colors.tertiary};
    }
`;

const LineWrapper = styled.div<SectionTitlePropsType>`
    max-width: ${props => props.width || 0};
    width: 100%;
    position: relative;
    
    &::after {
        content: "";
        height: 2px;
        width: 100%;
        background-color: ${({theme}) => theme.colors.tertiary};
        position: absolute;
        left: 0;
        top: 50%;
    }
`;

