import React, {ElementRef, useEffect, useRef} from 'react';
import {S} from "./Contacts-popup.styles.ts";
import {Button} from "../../../../components/Button.ts";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import emailjs from '@emailjs/browser';

export type ContactsPopupPropsType = {
    toggleContactsPopup: () => void;
    closeContactsPopup: () => void;
    isContactsPopupOpen: boolean;
}

export const ContactsPopup: React.FC<ContactsPopupPropsType> = (props: ContactsPopupPropsType) => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_tuu0tc5', 'template_l0bdhm8', form.current, {
                publicKey: '8H2OaXdE7PkBRk200',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    props.toggleContactsPopup();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };
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
                <S.Form ref={form} onSubmit={sendEmail}>
                    <FlexWrapper direction={'column'} $gap='16px'>
                        <FlexWrapper $gap='16px'>
                            <S.Field required placeholder="Name" name={'name'}/>
                            <S.Field required placeholder="Email" name={'email'}/>
                        </FlexWrapper>
                        <S.Field required placeholder="Title" name={'title'}/>
                        <S.Field required as="textarea" placeholder="Message" name='message'/>
                        <Button type={'submit'}>Send</Button>
                    </FlexWrapper>
                </S.Form>
            </S.ContactsPopup>
        </S.Overlay>
    );
};


