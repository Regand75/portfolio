import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {Link} from "react-router-dom";
import {fullProjects} from "../../../data/ProjectsData.tsx";
import {Project} from "./Project.tsx";
import figures from "../../../assets/images/sideFigures/projects-right.png";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <FlexWrapper $align='start' $justify='space-between'>
                    <SectionTitle title={'projects'} width={'511px'} $left='170px' $mb='48px'/>
                    <LinkWrapper to={'/projects-all'}>View all {'~~>'}</LinkWrapper>
                </FlexWrapper>
                <FlexWrapper $gap='16px'>
                    {fullProjects.slice(0, 3).map((project) => (
                        <Project key={project.id} {...project} />
                    ))}
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    padding-top: 130px;
    padding-bottom: 20px;
    min-height: calc(100vh - 215px);
    
    &::after {
        content: "";
        background-image: url(${figures});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 400px;
        right: 0;
        width: 68px;
        height: 155px;
    }
`;

const LinkWrapper = styled(Link)`
    display: inline-block;
    font-family: 'Fira Code', sans-serif;
    font-weight: 500;
    color: ${({theme}) => theme.colors.primary};
    line-height: 42px;

    &:hover {
        color: ${({theme}) => theme.colors.tertiary};
    }
`;
