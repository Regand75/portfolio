import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.ts";
import {IconsList} from "../iconList/IconsList.tsx";

export const FixedBlockIcon: React.FC = () => {
    return (
        <StyledFixedBlockIcon>
            <FlexWrapper direction="column" $gap='8px'>
                <Line />
                <Wrapper>
                    <IconsList />
                </Wrapper>
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

const Wrapper = styled.div`
    animation: opacity-icon .4s .5s ease both;
    
    @keyframes opacity-icon {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Line = styled.div`
    width: 0;
    margin-inline: auto;
    outline: 1px solid ${({theme}) => theme.colors.secondary};
    animation: height-out .4s .5s ease-out both;
    
    @keyframes height-out {
        from {
            height: 0;
            opacity: 0;
        }
        to {
            height: 191px;
            opacity: 1;
        }
    }
`;
