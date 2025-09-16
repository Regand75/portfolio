import React from 'react';
import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../common/FlexWrapper.tsx";

export const Logo = () => {
    return (
        <a href=''>
            <FlexWrapper align={'center'} gap={'9px'}>
                <Icon iconId={'logo'}/>
                <Spane>Andrey</Spane>
            </FlexWrapper>
        </a>
    );
};

const Spane = styled.span`
    display: inline-block;
    font-family: 'Fira Code', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: ${({theme}) => theme.colors.primary};
`;

