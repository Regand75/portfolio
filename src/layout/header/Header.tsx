import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/logo/Menu.tsx";
import {Container} from "../../components/common/Container.tsx";
import {FlexWrapper} from "../../components/common/FlexWrapper.tsx";

const items = ['home', 'project', 'about-me', 'contacts'];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <Logo/>
                    <FlexWrapper align={'center'} gap={'32px'}>
                        <Menu menuItems={items}/>
                        <select name="language" id="language">
                            <option value="english">EN</option>
                            <option value="russain">RU</option>
                        </select>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 32px 0 70px;
`;

