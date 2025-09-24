import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/common/Icon.tsx";

type QuotesPropsType = {
    $left?: string,
    $top?: string,
    $right?: string,
    $bottom?: string,
}

export const Quotes = ({$left, $top, $right, $bottom}: QuotesPropsType) => {
    return (
        <StyledQuotes $left={$left} $top={$top} $right={$right} $bottom={$bottom}>
            <Icon iconId={'quotes'} width={'26px'} height={'21px'} viewBox={'0 0 26 21'}/>
        </StyledQuotes>
    );
};

const StyledQuotes = styled.div<QuotesPropsType>`
    background-color: ${({theme}) => theme.colors.background};
    width: 42px;
    height: 29px;
    position: absolute;
    left: ${props => props.$left || 'auto'};
    top: ${props => props.$top || 'auto'};
    right: ${props => props.$right || 'auto'};
    bottom: ${props => props.$bottom || 'auto'};
`;
