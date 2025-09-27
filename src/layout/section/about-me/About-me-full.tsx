import React from 'react';
import {Container} from "../../../components/common/Container.ts";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {AboutMe} from "./About-me.tsx";
import {skillsItems} from "../../../data/SkillsData.ts";
import {Skill} from "../skills/Skill.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.ts";
import skillsGroupImage from "../../../assets/images/group2.png";
import {MyFact} from "./My-fact.tsx";
import {myFunFacts} from "../../../data/FactsData.tsx";
import {FixedBlockIcon} from "../../../components/common/FixedBlockIcon.tsx";
import {S} from "./About-me.styles.ts"

export const AboutMeFull: React.FC = () => {
    return (
        <S.AboutMeFull>
            <S.BeforeContentFromDotsTop iconId={'dotsForBefore78-49'} width={'78px'} height={'49px'}
                                      viewBox={'0 0 78 49'}/>
            <S.BeforeContentFromBlockFull iconId={'blockForBefore78-155'} width={'78px'} height={'155px'}
                                    viewBox={'0 0 78 155'} fill={'none'}/>
            <Container>
                <FixedBlockIcon/>
                <S.AboutMeWrapper>
                    <SectionTitle title={'about-me'} $mb='14px' $symbol='/'/>
                    <S.DescriptionFull>List of my projects</S.DescriptionFull>
                    <AboutMe showButton={false} $mt='-105px'/>
                </S.AboutMeWrapper>
                <S.SkillsWrapper>
                    <SectionTitle title={'skills'} $mb='48px' $symbol='#'/>
                    <S.SkillsFlexWrapper wrap={'wrap'} $gap='16px'>
                        {skillsItems.map((skill, index) => (
                            <React.Fragment key={index}>
                                <Skill $height='192px' title={skill.title} list={skill.list}/>
                            </React.Fragment>
                        ))}
                    </S.SkillsFlexWrapper>
                </S.SkillsWrapper>
                <S.FactsWrapper>
                    <SectionTitle title={'my-fun-facts'} $mb='20px' $symbol='#'/>
                    <FlexWrapper $justify='space-between' $gap='20px'>
                        <S.Wrapper>
                            <FlexWrapper wrap={'wrap'} $gap='16px'>
                                {myFunFacts.map((fact, index) => (
                                    <React.Fragment key={index}>
                                        <MyFact text={fact.text}/>
                                    </React.Fragment>
                                ))}
                            </FlexWrapper>
                        </S.Wrapper>
                        <S.GroupImage src={skillsGroupImage as string} alt="group2"/>
                    </FlexWrapper>
                </S.FactsWrapper>
            </Container>
            <S.AfterContentFromBlock iconId={'blockForAfter68-155'} width={'68px'} height={'155px'} viewBox={'0 0 68 155'}
                                   fill={'none'}/>
            <S.AfterContentFromDots1 iconId={'dotsForAfter53-103'} width={'53px'} height={'103px'}
                                   viewBox={'0 0 53 103'}/>
            <S.AfterContentFromDots2 iconId={'dotsForAfter80-103'} width={'80px'} height={'103px'}
                                   viewBox={'0 0 80 103'}/>
        </S.AboutMeFull>
    );
};



