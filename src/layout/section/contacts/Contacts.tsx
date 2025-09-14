import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle title={'contacts'} width={'145px'} left={'171px'}/>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    padding-bottom: 145px;
`