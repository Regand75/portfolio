import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/common/Button.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";

type ProjectPropsType = {
    srcImageProject: string,
    listSkillsProject: string,
    titleProject: string,
    descriptionProject: string,
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ProjectImage src={props.srcImageProject} alt={props.titleProject}/>
            <ProjectSkills>{props.listSkillsProject}</ProjectSkills>
            <ProjectWrapper>
                <FlexWrapper direction={'column'} gap={'16px'}>
                    <ProjectTitle>{props.titleProject}</ProjectTitle>
                    <ProjectDescription>{props.descriptionProject}</ProjectDescription>
                    <Button type="button">Live</Button>
                </FlexWrapper>
            </ProjectWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    border: 1px solid ${({theme}) => theme.colors.secondary};
    min-width: 330px;
    width: 100%;
    height: fit-content;
`;

const ProjectImage = styled.img`
    width: 100%;
`;

const ProjectSkills = styled.div`
    border-top: 1px solid ${({theme}) => theme.colors.secondary};
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
    padding: 8px;
    font-family: 'Fira Code',sans-serif;
    line-height: 21px;
    color: ${({theme}) => theme.colors.secondary};
`;

const ProjectWrapper = styled.div`
    padding: 16px`;

const ProjectTitle = styled.div`
    font-family: 'Fira Code',sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
`;

const ProjectDescription = styled.div`
    font-family: 'Fira Code',sans-serif;
    line-height: 21px;
    color: ${({theme}) => theme.colors.secondary};
`;


