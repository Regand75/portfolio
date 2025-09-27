import React from 'react';
import {FlexWrapper} from "../../../components/common/FlexWrapper.ts";
import {Icon} from "../../../components/common/Icon.tsx";
import {S} from "./Contacts.styles.ts"

export type ContactsBlockShowPropsType = {
    showBlock?: boolean,
}

export const ContactsBlock: React.FC<ContactsBlockShowPropsType> = (props: ContactsBlockShowPropsType) => {
    return (
        <S.ContactsBlock>
            <FlexWrapper $justify='space-between' $gap='30px'>
                <S.MeDescription>
                    <p>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t
                        hesitate to contact me
                    </p>
                </S.MeDescription>
                <S.BlockFlexWrapper $gap='8px'>
                    {props.showBlock && (
                        <S.SupportBlock>
                            <S.SupportTitle>Support me here</S.SupportTitle>
                            <span>4149500120690030</span>
                        </S.SupportBlock>
                    )}
                    <S.MessageBlock>
                        <S.MessageTitle>Message me here</S.MessageTitle>
                        <FlexWrapper direction={'column'} $justify='space-between' $gap='8px'>
                            <S.MessageWrapper $align='center' $gap='8px'>
                                <Icon iconId={'discord'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                                <span>Urazov#3294</span>
                            </S.MessageWrapper>
                            <S.MessageWrapper $align='center' $gap='8px'>
                                <Icon iconId={'email'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                                <span>urazovs_k@mail.ru</span>
                            </S.MessageWrapper>
                        </FlexWrapper>
                    </S.MessageBlock>
                </S.BlockFlexWrapper>
            </FlexWrapper>
        </S.ContactsBlock>
    );
};

