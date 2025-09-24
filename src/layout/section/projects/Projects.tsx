import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {Link} from "react-router-dom";
import {fullProjects} from "../../../data/ProjectsData.tsx";
import {Project} from "./Project.tsx";
import {Icon} from "../../../components/common/Icon.tsx";
import {FixedBlockIcon} from "../../../components/common/FixedBlockIcon.tsx";
import {Skills} from "../skills/Skills.tsx";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <FixedBlockIcon/>
                <FlexWrapper $align='start' $justify='space-between'>
                    <SectionTitle title={'projects'} width={'511px'} $left='170px' $mb='48px' $symbol='#'/>
                    <LinkWrapper to={'/projects/projects-all'}>View all {'~~>'}</LinkWrapper>
                </FlexWrapper>
                <FlexWrapper $gap='16px'>
                    {fullProjects.slice(0, 3).map((project) => (
                        <React.Fragment key={project.id}>
                            <Project {...project} />
                        </React.Fragment>
                    ))}
                </FlexWrapper>
                <Skills />
            </Container>
            <AfterContentFromBlock iconId={'blockForAfter68-155'} width={'68px'} height={'155px'} viewBox={'0 0 68 155'}
                                   fill={'none'}/>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    position: relative;
    padding-top: 114px;
    padding-bottom: 84px;
    min-height: calc(100vh - 215px);
`;

const AfterContentFromBlock = styled(Icon)`
    position: absolute;
    top: 400px;
    right: 0;

    @media screen and (max-width: 1210px) {
        display: none;
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
