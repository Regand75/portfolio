import React, {useEffect} from 'react';
import {S} from "./Contacts-popup.styles.ts";
import {Button} from "../../../../components/Button.ts";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";

export type ContactsPopupPropsType = {
    toggleContactsPopup: () => void;
    closeContactsPopup: () => void;
    isContactsPopupOpen: boolean;
}

export const ContactsPopup: React.FC<ContactsPopupPropsType> = (props: ContactsPopupPropsType) => {
    useEffect(() => {
        if (props.isContactsPopupOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [props.isContactsPopupOpen]);

    if (!props.isContactsPopupOpen) return null;
    return (
        <S.Overlay onClick={props.closeContactsPopup}>
            <S.ContactsPopup onClick={(e) => e.stopPropagation()}>
                <S.Form>
                    <FlexWrapper direction={'column'} $gap='16px'>
                        <FlexWrapper $gap='16px'>
                            <S.Field placeholder="Name" />
                            <S.Field placeholder="Email" />
                        </FlexWrapper>
                        <S.Field placeholder="Title" />
                        <S.Field as="textarea" placeholder="Message" />
                        <Button type='submit' onClick={props.toggleContactsPopup}>Send</Button>
                    </FlexWrapper>
                </S.Form>
            </S.ContactsPopup>
        </S.Overlay>
    );
};


