import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {AboutMe} from "./About-me.tsx";
import {skillsItems} from "../../../data/SkillsData.tsx";
import {Skill} from "../skills/Skill.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import skillsGroupImage from "../../../assets/images/group2.png";
import {Icon} from "../../../components/common/Icon.tsx";
import {MyFact} from "./MyFact.tsx";
import {myFunFacts} from "../../../data/FactsData.tsx";
import {FixedBlockIcon} from "../../../components/common/FixedBlockIcon.tsx";

export const AboutMeFull = () => {
    return (
        <StyledAboutMeFull>
            <BeforeContentFromDotsTop iconId={'dotsForBefore78-49'} width={'78px'} height={'49px'}
                                      viewBox={'0 0 78 49'}/>
            <BeforeContentFromBlock iconId={'blockForBefore78-155'} width={'78px'} height={'155px'}
                                    viewBox={'0 0 78 155'} fill={'none'}/>
            <Container>
                <FixedBlockIcon />
                <AboutMeWrapper>
                    <SectionTitle title={'about-me'} $mb='14px' $symbol='/'/>
                    <Description>List of my projects</Description>
                    <AboutMe showButton={false}/>
                </AboutMeWrapper>
                <SkillsWrapper>
                    <SectionTitle title={'skills'} $mb='48px' $symbol='#'/>
                    <FlexWrapper wrap={'wrap'} $gap='16px'>
                        {skillsItems.map((skill, index) => (
                            <React.Fragment key={index}>
                                <Skill $height='192px' title={skill.title} list={skill.list}/>
                            </React.Fragment>
                        ))}
                    </FlexWrapper>
                </SkillsWrapper>
                <FactsWrapper>
                    <SectionTitle title={'my-fun-facts'} $mb='20px' $symbol='#'/>
                    <FlexWrapper $justify='space-between' $gap='20px'>
                        <Wrapper>
                            <FlexWrapper wrap={'wrap'} $gap='16px'>
                                {myFunFacts.map((fact, index) => (
                                    <React.Fragment key={index}>
                                        <MyFact text={fact.text}/>
                                    </React.Fragment>
                                ))}
                            </FlexWrapper>
                        </Wrapper>
                        <GroupImage src={skillsGroupImage as string} alt="group2"/>
                    </FlexWrapper>
                </FactsWrapper>
            </Container>
            <AfterContentFromBlock iconId={'blockForAfter68-155'} width={'68px'} height={'155px'} viewBox={'0 0 68 155'}
                                   fill={'none'}/>
            <AfterContentFromDots1 iconId={'dotsForAfter53-103'} width={'53px'} height={'103px'}
                                   viewBox={'0 0 53 103'}/>
            <AfterContentFromDots2 iconId={'dotsForAfter80-103'} width={'80px'} height={'103px'}
                                   viewBox={'0 0 80 103'}/>
        </StyledAboutMeFull>
    );
};

const StyledAboutMeFull = styled.section`
    position: relative;
    padding-top: 114px;
    min-height: calc(100vh - 215px);
`;

const BeforeContentFromDotsTop = styled(Icon)`
    position: absolute;
    top: 410px;
    left: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const BeforeContentFromBlock = styled(Icon)`
    position: absolute;
    top: 1200px;
    left: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const AboutMeWrapper = styled.div`
    padding-bottom: 112px;
`;

const Description = styled.p`
    padding-bottom: 112px;
`;

const SkillsWrapper = styled.div`
    padding-bottom: 83px;
`;

const FactsWrapper = styled.div`
    padding-bottom: 114px;
`;

const Wrapper = styled(FlexWrapper)`
    max-width: 610px;
`;

const GroupImage = styled.img`
    width: 178px;
    height: 169px;
    margin-right: 85px;
    object-fit: contain;
`;

const AfterContentFromBlock = styled(Icon)`
    position: absolute;
    top: 270px;
    right: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const AfterContentFromDots1 = styled(Icon)`
    position: absolute;
    top: 767px;
    right: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const AfterContentFromDots2 = styled(Icon)`
    position: absolute;
    top: 1370px;
    right: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

