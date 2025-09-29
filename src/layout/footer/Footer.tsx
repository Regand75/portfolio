import React from 'react';
import {Container} from "../../components/Container.ts";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {S} from "./Footer.styles.ts"

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.FooterFlexWrapper $justify='space-between' $gap='20px'>
                    <FlexWrapper direction={'column'} $gap='16px'>
                        <FlexWrapper $align='center' $gap='24px'>
                            <Logo/>
                            <S.LinkEmail href="mailto:urazovs_k@email.ru">
                                <p>urazovs_k@mail.ru</p>
                            </S.LinkEmail>
                        </FlexWrapper>
                        <S.Skills>Web designer and front-end developer</S.Skills>
                    </FlexWrapper>
                    <FlexWrapper direction={'column'} $gap='12px'>
                        <S.Text>Media</S.Text>
                        <S.IconsListFlex/>
                    </FlexWrapper>
                </S.FooterFlexWrapper>
                <S.Copyright>© Copyright 2022. Made by Elias</S.Copyright>
            </Container>
        </S.Footer>
    );
};


