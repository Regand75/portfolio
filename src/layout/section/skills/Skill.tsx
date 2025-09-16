import React from 'react';
import styled from "styled-components";

type SkillPropsType = {
    title: string,
    list: string,
}

export const Skill = ({title, list}: SkillPropsType) => {
    return (
        <StyledSkill>
            <Title>{title}</Title>
            <List>{list}</List>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 178px;
    height: fit-content;
    border: 1px solid ${({theme}) => theme.colors.secondary};
    text-align: start;
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
`;

