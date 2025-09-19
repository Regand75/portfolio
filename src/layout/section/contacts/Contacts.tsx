import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import figures from "../../../assets/images/sideFigures/contacts-left.png";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle title={'contacts'} width={'145px'} $left='171px' $mb='45px'/>
                <FlexWrapper $justify='space-between'>
                    <MeDescription>
                        <p>
                            I’m interested in freelance opportunities. However, if you have other request or question, don’t
                            hesitate to contact me
                        </p>
                    </MeDescription>
                    <MessageWrapper>
                        <h3>Message me here</h3>
                    </MessageWrapper>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    padding-top: 130px;
    padding-bottom: 20px;
    min-height: calc(100vh - 215px);

    &::before {
        content: "";
        background-image: url(${figures});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 225px;
        left: 0;
        width: 52px;
        height: 103px;
    }
`;

const MeDescription = styled.div`
    max-width: 515px;
    width: 100%;
    font-family: 'Fira Code', sans-serif;
    line-height: 26px;
    color: ${({theme}) => theme.colors.secondary};
`;

const MessageWrapper = styled.div`
    border: 1px solid ${({theme}) => theme.colors.secondary};
    padding: 16px;
    height: fit-content;
`;
