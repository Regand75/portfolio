import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper.tsx";
import {IconsList} from "./IconsList.tsx";

export const FixedBlockIcon = () => {
    return (
        <StyledFixedBlockIcon>
            <FlexWrapper direction="column" $gap='8px'>
                <Line />
                <IconsList />
            </FlexWrapper>
        </StyledFixedBlockIcon>
    );
};

const StyledFixedBlockIcon = styled.div`
    position: fixed;
    top: 0;
    left: 17px;
    z-index: 11;
    
    @media screen and (max-width: 1160px) {
        display: none;
    }
`;

const Line = styled.div`
    width: 0;
    height: 193px;
    margin-inline: auto;
    outline: 1px solid ${({theme}) => theme.colors.secondary};
`;
