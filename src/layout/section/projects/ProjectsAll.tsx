import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {fullProjects, smallProjects} from "../../../data/ProjectsData.tsx";
import {Project} from "./Project.tsx";

export const ProjectsAll = () => {
    return (
        <StyledProjectsAll>
            <Container>
                <Title>
                    <span>/</span>project
                </Title>
                <Description>List of my projects</Description>
                <SectionTitle title={'complete-apps'} />
                <WrapperFullProjects wrap='wrap' $gap='16px'>
                    {fullProjects.map((project) => (
                        <Project key={project.id} {...project} />
                    ))}
                </WrapperFullProjects>
                <SectionTitle title={'small-projects'} />
                <WrapperSmallProjects wrap='wrap' $gap='16px'>
                    {smallProjects.map((project) => (
                        <Project key={project.id} {...project} />
                    ))}
                </WrapperSmallProjects>
            </Container>
        </StyledProjectsAll>
    );
};

const StyledProjectsAll = styled.section`
    padding-top: 114px;
    padding-bottom: 20px;
    min-height: calc(100vh - 215px);
`;

const Title = styled.h2`
    font-family: 'Fira Code', sans-serif;
    font-weight: 500;
    font-size: 32px;
    color: ${({theme}) => theme.colors.primary};
    margin-bottom: 14px;

    span {
        color: ${({theme}) => theme.colors.tertiary};
    }
`;

const Description = styled.p`
    margin-bottom: 68px;
`;

const WrapperFullProjects = styled(FlexWrapper)`
    margin-top: 48px;
    margin-bottom: 81px;
`;

const WrapperSmallProjects = styled(FlexWrapper)`
    margin-top: 48px;
    margin-bottom: 167px;
`;
