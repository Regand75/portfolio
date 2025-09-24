import React from 'react';
import styled from "styled-components";
import {SkillPropsType} from "../../../data/SkillsData.tsx";

type SkillStyleProps = {
    $height?: string;
};

type SkillProps = SkillPropsType & SkillStyleProps;

export const Skill = ({title, list, $height}: SkillProps) => {
    return (
        <StyledSkill $height={$height}>
            <Title>{title}</Title>
            <List>{list}</List>
        </StyledSkill>
    );
};

const StyledSkill = styled.div<SkillStyleProps>`
    width: ${props => props.$height || '178px'};
    height: fit-content;
    border: 1px solid ${({theme}) => theme.colors.secondary};
    text-align: start;

    @media screen and (max-width: 401px) {
        width: 100%;
    }
`;

const Title = styled.h3`
    font-family: 'Fira Code', sans-serif;
    font-weight: 600;
    color: ${({theme}) => theme.colors.primary};
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};;
    padding: 8px;
`;

const List = styled.p`
    padding: 8px;
    line-height: 1.5;
`;

