import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import skillsGroupImage from "../../../assets/images/group.png";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {Skill} from "./Skill.tsx";
import {skillsItems} from "../../../data/SkillsData.ts";
import {S} from "./Skills.styles.ts";
import { motion } from "framer-motion";

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <SectionTitle title={'skills'} width={'250px'} $mb='12px' $symbol='#'/>
            <FlexWrapper $justify='space-between' $gap='15px'>
                <S.ImageWrapper>
                    <S.GroupImage src={skillsGroupImage as string} alt="group"/>
                </S.ImageWrapper>
                <S.Wrapper>
                    <S.SkillsFlexWrapper direction={'column'} wrap={'wrap-reverse'} $gap='16px'>
                        {skillsItems.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Skill title={skill.title} list={skill.list}/>
                            </motion.div>
                        ))}
                    </S.SkillsFlexWrapper>
                </S.Wrapper>
            </FlexWrapper>
        </S.Skills>
    );
};


