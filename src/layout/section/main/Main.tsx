import React from 'react';
import mainImage from "../../../assets/images/main-image.png";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {Container} from "../../../components/common/Container.tsx";
import {Button} from "../../../components/common/Button.tsx";
import {Link} from "react-router-dom";
import {FixedBlockIcon} from "../../../components/common/FixedBlockIcon.tsx";
import {Slogan} from "../slogan/Slogan.tsx";
import {S} from "./Main.styles.ts"

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FixedBlockIcon />
                <S.MainFlexWrapper $align='start' $justify='space-between' $gap='20px'>
                    <S.Info>
                        <S.Title>Andrey is a <span>front-end developer</span></S.Title>
                        <S.Description>He crafts responsive websites where technologies meet creativity</S.Description>
                        <Link to={'contacts/contacts-all'}>
                            <Button>Contact me!!</Button>
                        </Link>
                    </S.Info>
                    <S.ImageWrapper>
                        <S.BeforeIcon iconId={'outlineBig'} width={'156px'} height={'156px'} viewBox={'0 0 156 156'}/>
                        <S.Image src={mainImage as string} alt="Fhoto"/>
                        <S.AfterIcon iconId={'dots'} width={'85px'} height={'85px'} viewBox={'0 0 85 85'}/>
                        <S.InfoWork>
                            <FlexWrapper $align='center'>
                                <S.InfoWorkBlock/>
                                <p>Currently working on <span>Portfolio</span></p>
                            </FlexWrapper>
                        </S.InfoWork>
                    </S.ImageWrapper>
                </S.MainFlexWrapper>
                <Slogan />
            </Container>
            <S.AfterContentFromBlock iconId={'blockForAfter82-91'} width={'82px'} height={'91px'} viewBox={'0 0 82 91'}
                                   fill={'none'}/>
        </S.Main>
    );
};


