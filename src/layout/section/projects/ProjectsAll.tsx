import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {fullProjects, smallProjects} from "../../../data/ProjectsData.tsx";
import {Project} from "./Project.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {FixedBlockIcon} from "../../../components/common/FixedBlockIcon.tsx";

export const ProjectsAll = () => {
    return (
        <StyledProjectsAll>
            <BeforeContentFromDotsTop iconId={'dotsForBefore78-49'} width={'78px'} height={'49px'}
                                      viewBox={'0 0 78 49'}/>
            <BeforeContentFromBlock iconId={'blockForBefore78-155'} width={'78px'} height={'155px'}
                                    viewBox={'0 0 78 155'} fill={'none'}/>
            <BeforeContentFromDotsBottom iconId={'dotsForBefore52-103'} width={'52px'} height={'103px'}
                                         viewBox={'0 0 52 103'}/>
            <Container>
                <FixedBlockIcon/>
                <SectionTitle title={'projects'} $mb='14px' $symbol='/'/>
                <Description>List of my projects</Description>
                <SectionTitle title={'complete-apps'}/>
                <WrapperFullProjects wrap='wrap' $gap='16px'>
                    {fullProjects.map((project) => (
                        <Project key={project.id} {...project} />
                    ))}
                </WrapperFullProjects>
                <SectionTitle title={'small-projects'}/>
                <WrapperSmallProjects wrap='wrap' $gap='16px'>
                    {smallProjects.map((project) => (
                        <Project key={project.id} {...project} />
                    ))}
                </WrapperSmallProjects>
            </Container>
            <AfterContentFromBlock iconId={'blockForAfter68-155'} width={'68px'} height={'155px'} viewBox={'0 0 68 155'}
                                   fill={'none'}/>
            <AfterContentFromDots iconId={'dotsForAfter80-103'} width={'80px'} height={'103px'} viewBox={'0 0 80 103'}/>
        </StyledProjectsAll>
    );
};

const StyledProjectsAll = styled.section`
    position: relative;
    padding-top: 114px;
    padding-bottom: 20px;
    min-height: calc(100vh - 215px);
`;

const BeforeContentFromDotsTop = styled(Icon)`
    position: absolute;
    top: 410px;
    left: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const BeforeContentFromBlock = styled(Icon)`
    position: absolute;
    top: 1240px;
    left: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const BeforeContentFromDotsBottom = styled(Icon)`
    position: absolute;
    top: 1640px;
    left: 0;

    @media screen and (max-width: 1210px) {
        display: none;
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

const AfterContentFromBlock = styled(Icon)`
    position: absolute;
    top: 270px;
    right: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;

const AfterContentFromDots = styled(Icon)`
    position: absolute;
    top: 1407px;
    right: 0;

    @media screen and (max-width: 1210px) {
        display: none;
    }
`;
