import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <List>
                <FlexWrapper align={'center'} gap={'32px'}>
                    {props.menuItems.map((item, index) => (
                        <ListItem key={index}>
                            <Link href="#"><span>#</span>{item}</Link>
                        </ListItem>
                    ))}
                </FlexWrapper>
            </List>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    
`;

const List = styled.ul`

`;

const ListItem = styled.li`
    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`;

const Link = styled.a`
    span {
        color: ${({theme}) => theme.colors.tertiary};
    }
`;


