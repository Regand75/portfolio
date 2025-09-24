import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import skillsGroupImage from "../../../assets/images/group.png"
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {Skill} from "./Skill.tsx";
import {skillsItems} from "../../../data/SkillsData.tsx";
import {FixedBlockIcon} from "../../../components/common/FixedBlockIcon.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <FixedBlockIcon/>
            <SectionTitle title={'skills'} width={'250px'} $mb='12px' $symbol='#'/>
            <FlexWrapper $justify='space-between' $gap='15px'>
                <ImageWrapper>
                    <GroupImage src={skillsGroupImage as string} alt="group"/>
                </ImageWrapper>
                <Wrapper>
                    <SkillsFlexWrapper direction={'column'} wrap={'wrap-reverse'} $gap='16px'>
                        {skillsItems.map((skill, index) => (
                            <React.Fragment key={index}>
                                <Skill title={skill.title} list={skill.list}/>
                            </React.Fragment>
                        ))}
                    </SkillsFlexWrapper>
                </Wrapper>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    padding-top: 106px;
`;

const ImageWrapper = styled.div`
    margin-left: 30px;
    max-width: 350px;
    max-height: 284px;
    width: 100%;

    @media screen and (max-width: 974px) {
        display: none;
    }
`;

const GroupImage = styled.img`
    width: 100%;
    height: auto;
`;

const Wrapper = styled(FlexWrapper)`
    margin-top: 31px;
    height: 280px;

    @media screen and (max-width: 974px) {
        height: auto;
    }
`;

const SkillsFlexWrapper = styled(FlexWrapper)`
    @media screen and (max-width: 974px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;
