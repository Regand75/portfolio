import React from 'react';
import {SkillPropsType} from "../../../data/SkillsData.tsx";
import {S} from "./Skills.styles.ts"

export type SkillStyleProps = {
    $height?: string;
};

type SkillProps = SkillPropsType & SkillStyleProps;

export const Skill = ({title, list, $height}: SkillProps) => {
    return (
        <S.Skill $height={$height}>
            <S.Title>{title}</S.Title>
            <S.List>{list}</S.List>
        </S.Skill>
    );
};



