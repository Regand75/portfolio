import React from 'react';
import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.ts";
import {Link} from "react-router-dom";
import {hoverEffect} from "../../../styles/Mixins.ts";

type LogoPropsType = {
    onClick?: () => void;
}

export const Logo: React.FC<LogoPropsType> = ({onClick}: LogoPropsType) => {
    return (
        <LogoLink to={'/'} onClick={onClick}>
            <FlexWrapper $align='center' $gap='9px'>
                <LogoIcon iconId={'logo'} width={'16px'} height={'16px'} viewBox={'0 0 16 16'} />
                <LogoSpan>Andrey</LogoSpan>
            </FlexWrapper>
        </LogoLink>
    );
};

const LogoLink = styled(Link)`
    ${hoverEffect()};
`;

const LogoSpan = styled.span`
    display: inline-block;
    font-family: 'Fira Code', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: ${({theme}) => theme.colors.primary};
`;

const LogoIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.primary};
    
`;



