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
            <Image src={props.srcImageProject} alt={props.titleProject}/>
            <MeSkills>{props.listSkillsProject}</MeSkills>
            <Wrapper>
                <FlexWrapper direction={'column'} gap={'16px'}>
                    <Title>{props.titleProject}</Title>
                    <Description>{props.descriptionProject}</Description>
                    <Button type="button">Live {'<~>'}</Button>
                </FlexWrapper>
            </Wrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    border: 1px solid ${({theme}) => theme.colors.secondary};
    min-width: 330px;
    width: 100%;
    height: fit-content;
`;

const Image = styled.img`
    width: 100%;
    max-height: 200px;
    height: 100%;
`;

const MeSkills = styled.div`
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
    padding: 8px;
    font-family: 'Fira Code',sans-serif;
    line-height: 21px;
    color: ${({theme}) => theme.colors.secondary};
`;

const Wrapper = styled.div`
    padding: 16px`;

const Title = styled.div`
    font-family: 'Fira Code',sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
`;

const Description = styled.div`
    font-family: 'Fira Code',sans-serif;
    line-height: 21px;
    color: ${({theme}) => theme.colors.secondary};
`;


