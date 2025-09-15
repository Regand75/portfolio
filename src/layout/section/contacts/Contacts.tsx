import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle title={'contacts'} width={'145px'} left={'171px'} mb={'45px'}/>
                <FlexWrapper justify={'space-between'}>
                    <ContactsMeDescription>
                        <p>
                            I’m interested in freelance opportunities. However, if you have other request or question, don’t
                            hesitate to contact me
                        </p>
                    </ContactsMeDescription>
                    <ContactsMessageWrapper>
                        <h3>Message me here</h3>
                    </ContactsMessageWrapper>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    padding-bottom: 145px;
`;

const ContactsMeDescription = styled.div`
    max-width: 515px;
    width: 100%;
    font-family: 'Fira Code', sans-serif;
    line-height: 26px;
    color: ${({theme}) => theme.colors.secondary};
`;

const ContactsMessageWrapper = styled.div`
    border: 1px solid ${({theme}) => theme.colors.secondary};
    padding: 16px;
    height: fit-content;
`;
