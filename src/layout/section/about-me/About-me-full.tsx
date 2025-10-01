import React from 'react';
import {Container} from "../../../components/Container.ts";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {AboutMe} from "./About-me.tsx";
import {skillsItems} from "../../../data/SkillsData.ts";
import {Skill} from "../skills/Skill.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import skillsGroupImage from "../../../assets/images/group2.png";
import {MyFact} from "./My-fact.tsx";
import {myFunFacts} from "../../../data/FactsData.tsx";
import {S} from "./About-me.styles.ts";
import {motion} from "framer-motion";

export const AboutMeFull: React.FC = () => {
    return (
        <S.AboutMeFull>
            <S.BeforeContentFromDotsTop iconId={'dotsForBefore78-49'} width={'78px'} height={'49px'}
                                        viewBox={'0 0 78 49'}/>
            <S.BeforeContentFromBlockFull iconId={'blockForBefore78-155'} width={'78px'} height={'155px'}
                                          viewBox={'0 0 78 155'} fill={'none'}/>
            <Container>
                <S.AboutMeWrapper>
                    <SectionTitle title={'about-me'} $mb='14px' $symbol='/'/>
                    <S.DescriptionFull>List of my projects</S.DescriptionFull>
                    <AboutMe showButton={false} $mt='-105px'/>
                </S.AboutMeWrapper>
                <S.SkillsWrapper>
                    <SectionTitle title={'skills'} $mb='48px' $symbol='#'/>
                    <S.SkillsFlexWrapper wrap={'wrap'} $gap='16px'>
                        {skillsItems.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Skill $height='192px' title={skill.title} list={skill.list}/>
                            </motion.div>
                        ))}
                    </S.SkillsFlexWrapper>
                </S.SkillsWrapper>
                <S.FactsWrapper>
                    <SectionTitle title={'my-fun-facts'} $mb='20px' $symbol='#'/>
                    <FlexWrapper $justify='space-between' $gap='20px'>
                        <S.Wrapper>
                            <FlexWrapper wrap={'wrap'} $gap='16px'>

                                {myFunFacts.map((fact, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, x: -20}}
                                        whileInView={{opacity: 1, x: 0}}
                                        viewport={{once: false, amount: 0.2}}
                                        transition={{duration: 0.5, delay: index * 0.1}}
                                    >
                                        <MyFact text={fact.text}/>
                                    </motion.div>
                                ))}
                            </FlexWrapper>
                        </S.Wrapper>
                        <S.GroupImage src={skillsGroupImage as string} alt="group2"/>
                    </FlexWrapper>
                </S.FactsWrapper>
            </Container>
            <S.AfterContentFromBlock iconId={'blockForAfter68-155'} width={'68px'} height={'155px'}
                                     viewBox={'0 0 68 155'}
                                     fill={'none'}/>
            <S.AfterContentFromDots1 iconId={'dotsForAfter53-103'} width={'53px'} height={'103px'}
                                     viewBox={'0 0 53 103'}/>
            <S.AfterContentFromDots2 iconId={'dotsForAfter80-103'} width={'80px'} height={'103px'}
                                     viewBox={'0 0 80 103'}/>
        </S.AboutMeFull>
    );
};



