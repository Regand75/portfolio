import React from 'react';
import mainImage from "../../../assets/images/main-image.png";
import {FlexWrapper} from "../../../components/common/FlexWrapper.ts";
import {Container} from "../../../components/common/Container.ts";
import {Button} from "../../../components/common/Button.ts";
import {FixedBlockIcon} from "../../../components/common/FixedBlockIcon.tsx";
import {S} from "./Main.styles.ts";
import Typewriter from 'typewriter-effect';
import {Slogan} from "./slogan/Slogan.tsx";

type MainPropsType = {
    toggleContactsPopup: () => void;
};

export const Main: React.FC<MainPropsType> = ({toggleContactsPopup}) => {
    return (
        <S.Main>
            <Container>
                <FixedBlockIcon/>
                <S.MainFlexWrapper $align='start' $justify='space-between' $gap='20px'>
                    <S.Info>
                        <S.Title>
                            <p>Andrey is a front-end developer</p>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('<span class="primary">Andrey is a </span>')
                                        .typeString('<span class="tertiary">front-end developer</span>')
                                        .typeString('<span class="primary">!</span>')
                                        .callFunction(() => {
                                            const cursor = document.querySelector('.Typewriter__cursor');
                                            cursor?.remove();
                                        })
                                        .start();
                                }}
                                options={{
                                    autoStart: true,
                                    loop: false,
                                    delay: 100,
                                    html: true,
                                }}
                            />
                        </S.Title>
                        <S.Description>He crafts responsive websites where technologies meet creativity</S.Description>
                        <Button onClick={toggleContactsPopup}>Contact me!!</Button>
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
                <Slogan/>
            </Container>
            <S.AfterContentFromBlock iconId={'blockForAfter82-91'} width={'82px'} height={'91px'} viewBox={'0 0 82 91'}
                                     fill={'none'}/>
        </S.Main>
    );
};


