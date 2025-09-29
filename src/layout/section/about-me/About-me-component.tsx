import React from 'react';
import {Container} from "../../../components/Container.ts";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {AboutMe} from "./About-me.tsx";
import {S} from "./About-me.styles.ts"

export const AboutMeComponent: React.FC = () => {
    return (
        <S.AboutMe>
            <S.BeforeContentFromBlock iconId={'blockForBefore78-155'} width={'78px'} height={'155px'} viewBox={'0 0 78 155'} fill={'none'}/>
            <Container>
                <SectionTitle title={'about-me'} width={'340px'} $mb='23px' $symbol='#'/>
                <AboutMe showButton={true}/>
            </Container>
            <S.AfterContentFromDots iconId={'dotsForAfter80-103'} width={'80px'} height={'103px'} viewBox={'0 0 80 103'}/>
        </S.AboutMe>
    );
};


