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
            <BeforeContentFromDots iconId={'dotsForBefore52-103'} width={'52px'} height={'103px'} viewBox={'0 0 52 103'}/>
            <Container>
                <FixedBlockIcon />
                <SectionTitle title={'contacts'} width={'145px'} $left='171px' $mb='45px' $symbol='#'/>
                <ContactsBlock showBlock={false}/>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    position: relative;
    padding-top: 114px;
    padding-bottom: 84px;
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

