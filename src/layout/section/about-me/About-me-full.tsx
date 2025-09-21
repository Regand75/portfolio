import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {AboutMe} from "./About-me.tsx";
import {skillsItems} from "../../../data/SkillsData.tsx";
import {Skill} from "../skills/Skill.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";

export const AboutMeFull = () => {
    return (
        <StyledAboutMeFull>
            <Container>
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
                </FactsWrapper>
            </Container>
        </StyledAboutMeFull>
    );
};

const StyledAboutMeFull = styled.section`
    position: relative;
    padding-top: 114px;
    min-height: calc(100vh - 215px);
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

