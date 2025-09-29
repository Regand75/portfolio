import React from 'react';
import {Container} from "../../../components/common/Container.ts";
import {SectionTitle} from "../../../components/common/sectionTitle/SectionTitle.tsx";
import {fullProjects, smallProjects} from "../../../data/ProjectsData.ts";
import {Project} from "./Project.tsx";
import {FixedBlockIcon} from "../../../components/common/fixedBlockIcon/FixedBlockIcon.tsx";
import {S} from "./Projects.styles.ts"

export const ProjectsAll = () => {
    return (
        <S.ProjectsAll>
            <S.BeforeContentFromDotsTop iconId={'dotsForBefore78-49'} width={'78px'} height={'49px'}
                                      viewBox={'0 0 78 49'}/>
            <S.BeforeContentFromBlock iconId={'blockForBefore78-155'} width={'78px'} height={'155px'}
                                    viewBox={'0 0 78 155'} fill={'none'}/>
            <S.BeforeContentFromDotsBottom iconId={'dotsForBefore52-103'} width={'52px'} height={'103px'}
                                         viewBox={'0 0 52 103'}/>
            <Container>
                <FixedBlockIcon/>
                <SectionTitle title={'projects'} $mb='14px' $symbol='/'/>
                <S.DescriptionAll>List of my projects</S.DescriptionAll>
                <SectionTitle title={'complete-apps'} $symbol='#'/>
                <S.ForAllWrapper>
                    {fullProjects.map((project) => (
                        <React.Fragment key={project.id}>
                            <Project {...project} />
                        </React.Fragment>
                    ))}
                </S.ForAllWrapper>
                <SectionTitle title={'small-projects'} $symbol='#'/>
                <S.ForSmallWrapper>
                    {smallProjects.map((project) => (
                        <React.Fragment key={project.id}>
                            <Project {...project} />
                        </React.Fragment>
                    ))}
                </S.ForSmallWrapper>
            </Container>
            <S.AfterContentFromBlockAll iconId={'blockForAfter68-155'} width={'68px'} height={'155px'} viewBox={'0 0 68 155'}
                                   fill={'none'}/>
            <S.AfterContentFromDots iconId={'dotsForAfter80-103'} width={'80px'} height={'103px'} viewBox={'0 0 80 103'}/>
        </S.ProjectsAll>
    );
};


