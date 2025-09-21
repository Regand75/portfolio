import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import skillsGroupImage from "../../../assets/images/group.png"
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {Skill} from "./Skill.tsx";
import {skillsItems} from "../../../data/SkillsData.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle title={'skills'} width={'250px'} $left='133px' $mb='12px' $symbol='#'/>
                <FlexWrapper $justify='space-between' $gap='20px'>
                    <GroupImage src={skillsGroupImage as string} alt="group"/>
                    <Wrapper>
                        <FlexWrapper direction={'column'} wrap={'wrap-reverse'} $gap='16px'>
                            {skillsItems.map((skill, index) => (
                                <React.Fragment key={index}>
                                    <Skill title={skill.title} list={skill.list}/>
                                </React.Fragment>
                            ))}
                        </FlexWrapper>
                    </Wrapper>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    padding-top: 114px;
    padding-bottom: 74px;
    min-height: calc(100vh - 215px);
`;

const GroupImage = styled.img`
    width: 350px;
    height: 284px;
    object-fit: contain;
`;

const Wrapper = styled(FlexWrapper)`
    margin-top: 31px;
    height: 280px;
`;
