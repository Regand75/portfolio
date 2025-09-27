import React from 'react';
import {FlexWrapper} from "../../../components/common/FlexWrapper.ts";
import {Button} from "../../../components/common/Button.ts";
import aboutMeImage from "../../../assets/images/about-me-image.png";
import {Link} from "react-router-dom";
import {S} from "./About-me.styles.ts"

export type AboutMePropsType = {
    showButton?: boolean,
    $mt?: string,
}

export const AboutMe: React.FC<AboutMePropsType> = (props: AboutMePropsType) => {
    return (
        <article>
            <S.AboutMeFlexWrapper $justify='space-between' $gap='10px'>
                <S.Wrapper>
                    <FlexWrapper direction={'column'} $gap='23px'>
                        <S.Description>
                            <p>Hello, i'm Andrey</p>
                            <p>
                                I am a Junior Frontend Developer with basic experience in Angular and the modern
                                tech
                                stack
                                (JavaScript, TypeScript, HTML, CSS, etc.).
                                I learn quickly and adapt to new technologies: I completed an online frontend
                                development
                                course by Aitylogy, successfully finishing all assignments on time while paying
                                attention to
                                code clarity and structure.
                            </p>
                            <p>
                                I am eager to continue growing in this field and open to constructive feedback and
                                teamwork.
                            </p>
                        </S.Description>
                        {props.showButton && (
                            <Link to={'/about-me/about'}>
                                <Button type='button'>Read more {'->'}</Button>
                            </Link>
                        )}
                    </FlexWrapper>
                </S.Wrapper>
                <S.ImageWrapper $mt={props.$mt}>
                    <S.BeforeIcon iconId={'dots'} width={'85px'} height={'85px'} viewBox={'0 0 85 85'}/>
                    <S.Image src={aboutMeImage as string} alt=''/>
                    <S.AfterIcon iconId={'dotsForAboutImage'} width={'104px'} height={'58px'} viewBox={'0 0 104 58'}/>
                </S.ImageWrapper>
            </S.AboutMeFlexWrapper>
        </article>
    );
};



