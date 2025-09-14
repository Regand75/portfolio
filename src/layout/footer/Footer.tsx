import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/common/Container.tsx";
import {Logo} from "../../components/logo/Logo.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Logo/>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`;
    padding: 32px 0;
`;