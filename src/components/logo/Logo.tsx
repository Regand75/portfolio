import React from 'react';
import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../common/FlexWrapper.tsx";
import {Link} from "react-router-dom";

export const Logo = () => {
    return (
        <LogoLink to={'/'}>
            <FlexWrapper $align='center' $gap='9px'>
                <LogoIcon iconId={'logo'} width={'16px'} height={'16px'} viewBox={'0 0 16 16'} />
                <LogoSpan>Andrey</LogoSpan>
            </FlexWrapper>
        </LogoLink>
    );
};

const LogoLink = styled(Link)`
    transition: filter 0.3s ease, fill 0.3s ease;
    &:hover {
        filter: drop-shadow(0 0 6px ${(props) => props.theme.colors.secondary});
    }
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



