import React from 'react';
import {Container} from "../../../components/common/Container.ts";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {fullProjects} from "../../../data/ProjectsData.ts";
import {Project} from "./Project.tsx";
import {FixedBlockIcon} from "../../../components/common/FixedBlockIcon.tsx";
import {Skills} from "../skills/Skills.tsx";
import {S} from "./Projects.styles.ts"

export const Projects = () => {
    return (
        <S.Projects>
            <Container>
                <FixedBlockIcon/>
                <S.TitleFlexWrapper $align='start' $justify='space-between' $gap='20px'>
                    <SectionTitle title={'projects'} width={'511px'} $mb='48px' $mbMobile='0' $symbol='#'/>
                    <S.LinkWrapper to={'/projects/projects-all'}>
                        <button>View all {'~~>'}</button>
                    </S.LinkWrapper>
                </S.TitleFlexWrapper>
                    <S.ProjectsWrapper>
                        {fullProjects.slice(0, 3).map((project) => (
                            <React.Fragment key={project.id}>
                                <Project {...project} />
                            </React.Fragment>
                        ))}
                    </S.ProjectsWrapper>
                <Skills/>
            </Container>
            <S.AfterContentFromBlock iconId={'blockForAfter68-155'} width={'68px'} height={'155px'} viewBox={'0 0 68 155'}
                                   fill={'none'}/>
        </S.Projects>
    );
};


