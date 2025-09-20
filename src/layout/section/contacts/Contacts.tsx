import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <BeforeContentFromDots iconId={'dotsForBefore52-103'} width={'52px'} height={'103px'} viewBox={'0 0 52 103'}/>
            <Container>
                <SectionTitle title={'contacts'} width={'145px'} $left='171px' $mb='45px' $symbol='#'/>
                <FlexWrapper $justify='space-between'>
                    <MeDescription>
                        <p>
                            I’m interested in freelance opportunities. However, if you have other request or question, don’t
                            hesitate to contact me
                        </p>
                    </MeDescription>
                    <MessageWrapper>
                        <MessageMeHere>Message me here</MessageMeHere>
                        <FlexWrapper direction={'column'} $justify='space-between' $gap='8px'>
                            <FlexWrapper $align='center' $gap='8px'>
                                <Icon iconId={'discord'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                                <p>Urazov#3294</p>
                            </FlexWrapper>
                            <FlexWrapper $align='center' $gap='8px'>
                                <Icon iconId={'email'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                                <p>urazovs_k@mail.ru</p>
                            </FlexWrapper>
                        </FlexWrapper>

                    </MessageWrapper>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    position: relative;
    padding-top: 114px;
    padding-bottom: 74px;
    min-height: calc(100vh - 215px);
`;

const BeforeContentFromDots = styled(Icon)`
    position: absolute;
    top: 225px;
    left: 0;
    
    @media screen and (max-width: 1210px) {
        display: none;
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

const MessageMeHere = styled.h3`
    margin-bottom: 16px;
`;
