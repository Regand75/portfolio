import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/logo/Menu.tsx";
import {Container} from "../../components/common/Container.tsx";
import {FlexWrapper} from "../../components/common/FlexWrapper.tsx";
import {Icon} from "../../components/icon/Icon.tsx";

type HeaderProps = {
    toggleTheme: () => void,
    isDark: boolean,
}

export const Header = ({toggleTheme, isDark}: HeaderProps) => {
    const items = ['home', 'project', 'about-me', 'contacts'];
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
                        <button onClick={toggleTheme}
                                style={{background: "transparent", border: "none", cursor: "pointer"}}>
                            {isDark ? (
                                <Icon iconId={'moon'} width={'23px'} height={'23px'} viewBox={'0 0 23 23'}/>
                            ) : (
                                <Icon iconId={'sun'} width={'23px'} height={'23px'} viewBox={'0 0 23 23'}/>
                            )}
                        </button>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 32px 0 70px;
`;

