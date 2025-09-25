import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {Icon} from "../../../components/common/Icon.tsx";
import {ContactsBlock} from "./ContactsBlock.tsx";
import {FixedBlockIcon} from "../../../components/common/FixedBlockIcon.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FixedBlockIcon />
                <SectionTitle title={'contacts'} width={'145px'} $mb='45px' $symbol='#'/>
                <ContactsBlock showBlock={false}/>
            </Container>
            <AfterContentFromDots iconId={'dotsForAfter53-103'} width={'53px'} height={'103px'} viewBox={'0 0 53 103'}/>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    position: relative;
    padding-top: 114px;
    padding-bottom: 84px;
    min-height: calc(100vh - 215px);
`;

const AfterContentFromDots = styled(Icon)`
    position: absolute;
    top: 225px;
    right: 0;
    
    @media screen and (max-width: 1210px) {
        display: none;
}
`;

