import React from 'react';
import {Container} from "../../../components/common/Container.ts";
import {SectionTitle} from "../../../components/common/sectionTitle/SectionTitle.tsx";
import {ContactsBlock} from "./ContactsBlock.tsx";
import {FixedBlockIcon} from "../../../components/common/fixedBlockIcon/FixedBlockIcon.tsx";
import {S} from "./Contacts.styles.ts"

export const Contacts: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <FixedBlockIcon/>
                <S.TitleFlexWrapper $align='start' $justify='space-between' $gap='20px'>
                    <SectionTitle title={'contacts'} width={'145px'} $mb='45px' $mbMobile='0' $symbol='#'/>
                    <S.LinkWrapper to={'/contacts/contacts-all'}>
                        <button>View all {'~~>'}</button>
                    </S.LinkWrapper>
                </S.TitleFlexWrapper>
                <ContactsBlock showBlock={false}/>
            </Container>
            <S.AfterContentFromDots iconId={'dotsForAfter53-103'} width={'53px'} height={'103px'}
                                    viewBox={'0 0 53 103'}/>
        </S.Contacts>
    );
};



