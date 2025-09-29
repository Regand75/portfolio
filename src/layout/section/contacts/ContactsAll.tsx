import React from 'react';
import {Container} from "../../../components/Container.ts";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {ContactsBlock} from "./ContactsBlock.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {S} from "./Contacts.styles.ts"

export const ContactsAll: React.FC = () => {
    return (
        <S.ContactsAll>
            <S.BeforeContentFromDotsTop iconId={'dotsForBefore78-49'} width={'78px'} height={'49px'}
                                      viewBox={'0 0 78 49'}/>
            <Container>
                <S.ContactsWrapper>
                    <SectionTitle title={'contacts'} $mb='14px' $symbol='/'/>
                    <S.Description>Who am i?</S.Description>
                    <ContactsBlock showBlock={true}/>
                </S.ContactsWrapper>
                <S.AllMediaWrapper>
                    <SectionTitle title={'all-media'} $mb='21px' $symbol='#'/>
                    <FlexWrapper $align='center' $gap='22px'>
                        <S.MediaWrapper $align='center' $gap='5px'>
                            <Icon iconId={'twitter'} width='32px' height='32px' viewBox='0 0 32 32'/>
                            <span>@Urazov</span>
                        </S.MediaWrapper>
                        <S.MediaWrapper $align='center' $gap='5px'>
                            <Icon iconId={'twitter'} width='32px' height='32px' viewBox='0 0 32 32'/>
                            <span>@Urazov</span>
                        </S.MediaWrapper>
                    </FlexWrapper>

                </S.AllMediaWrapper>
            </Container>
            <S.AfterContentFromBlock iconId={'blockForAfter68-155'} width={'68px'} height={'155px'} viewBox={'0 0 68 155'}
                                   fill={'none'}/>
        </S.ContactsAll>
    );
};



