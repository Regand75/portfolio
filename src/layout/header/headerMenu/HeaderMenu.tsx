import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {NavLink} from "react-router-dom";
import {HeaderProps} from "../../../data/ItemsData.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {LangSelect} from "../LangSelect.tsx";

export const HeaderMenu = (props: HeaderProps) => {
    return (
        <StyledHeaderMenu>
            <List>
                <FlexWrapper $align='center' $gap='32px'>
                    {props.menuItems.map((item, index) => (
                        <ListItem key={index}>
                            <Link
                                to={item.link}
                                className={({isActive}) => isActive ? 'active' : ''}
                            >
                                <span>#</span>{item.title}
                            </Link>
                        </ListItem>
                    ))}
                    <LangSelect />
                    <Button onClick={props.toggleTheme}>
                        {props.isDark ? (
                            <SoonIcon iconId={'moon'} width={'23px'} height={'23px'} viewBox={'0 0 23 23'}/>
                        ) : (
                            <SumIcon iconId={'sun'} width={'23px'} height={'23px'} viewBox={'0 0 23 23'}/>
                        )}
                    </Button>
                </FlexWrapper>
            </List>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    @media screen and (max-width: 760px) {
        display: none;
    }
`;

const List = styled.ul`

`;

const ListItem = styled.li`
    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`;

const Link = styled(NavLink)`
    transition: filter 0.3s ease, fill 0.3s ease;

    &:hover {
        filter: drop-shadow(0 0 6px ${(props) => props.theme.colors.secondary});
    }
    
    span {
        color: ${({theme}) => theme.colors.tertiary};
    }
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const SoonIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.secondary};
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const SumIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.secondary};
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;


