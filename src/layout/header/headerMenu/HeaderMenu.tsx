import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                <FlexWrapper align={'center'} gap={'32px'}>
                    {props.menuItems.map((item, index) => (
                        <HeaderListItem key={index}>
                            <HeaderLink href="#"><span>#</span>{item}</HeaderLink>
                        </HeaderListItem>
                    ))}
                </FlexWrapper>
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }

    span {
        color: ${({theme}) => theme.colors.tertiary};
    }
`;

const HeaderListItem = styled.li`

`;

const HeaderLink = styled.a`

`;
