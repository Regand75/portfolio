import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../common/FlexWrapper.tsx";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                <FlexWrapper align={'center'} gap={'32px'}>
                    {props.menuItems.map((item, index) => (
                        <li key={index}><a href="#"><span>#</span>{item}</a></li>
                    ))}
                </FlexWrapper>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    li:hover {
        color: ${({theme}) => theme.colors.primary};
    }

    span {
        color: ${({theme}) => theme.colors.tertiary};
    }
`;
