import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {NavLink} from "react-router-dom";

type MenuItemType = {
    title: string;
    link: string;
};

export const HeaderMenu = (props: { menuItems: Array<MenuItemType> }) => {
    return (
        <StyledHeaderMenu>
            <List>
                <FlexWrapper $align='center' $gap='32px'>
                    {props.menuItems.map((item, index) => (
                        <ListItem key={index}>
                            <Link
                                to={item.link}
                                className={({ isActive }) => isActive ? 'active' :''}
                            >
                                <span>#</span>{item.title}
                            </Link>
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

const Link = styled(NavLink)`
    span {
        color: ${({theme}) => theme.colors.tertiary};
    }
`;


