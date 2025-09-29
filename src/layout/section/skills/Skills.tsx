import React from 'react';
import {FlexWrapper} from "../../../components/common/FlexWrapper.ts";
import skillsGroupImage from "../../../assets/images/group.png"
import {SectionTitle} from "../../../components/common/sectionTitle/SectionTitle.tsx";
import {Skill} from "./Skill.tsx";
import {skillsItems} from "../../../data/SkillsData.ts";
import {FixedBlockIcon} from "../../../components/common/fixedBlockIcon/FixedBlockIcon.tsx";
import {S} from "./Skills.styles.ts"

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <FixedBlockIcon/>
            <SectionTitle title={'skills'} width={'250px'} $mb='12px' $symbol='#'/>
            <FlexWrapper $justify='space-between' $gap='15px'>
                <S.ImageWrapper>
                    <S.GroupImage src={skillsGroupImage as string} alt="group"/>
                </S.ImageWrapper>
                <S.Wrapper>
                    <S.SkillsFlexWrapper direction={'column'} wrap={'wrap-reverse'} $gap='16px'>
                        {skillsItems.map((skill, index) => (
                            <React.Fragment key={index}>
                                <Skill title={skill.title} list={skill.list}/>
                            </React.Fragment>
                        ))}
                    </S.SkillsFlexWrapper>
                </S.Wrapper>
            </FlexWrapper>
        </S.Skills>
    );
};


