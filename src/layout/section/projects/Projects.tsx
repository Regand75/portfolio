import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {Project} from "./Project.tsx";
import projectImage1 from "../../../assets/images/project1.png"
import projectImage2 from "../../../assets/images/project2.png"
import projectImage3 from "../../../assets/images/project3.png"

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle title={'projects'} width={'511px'} left={'170px'} mb={'48px'}/>
                <FlexWrapper gap={'16px'}>
                    <Project srcImageProject={projectImage1}
                             listSkillsProject={'HTML SCSS Python Flask'}
                             titleProject={'ChertNodes'}
                             descriptionProject={'Minecraft servers hosting'}/>
                    <Project srcImageProject={projectImage2}
                             listSkillsProject={'React Express Node.js HTML SCSS Python Flask'}
                             titleProject={'ProtectX'}
                             descriptionProject={'Discord anti-crash bot'}/>
                    <Project srcImageProject={projectImage3}
                             listSkillsProject={'CSS Express Node.js'}
                             titleProject={'Kahoot Answers Viewer'}
                             descriptionProject={'Get answers to your kahoot quiz'}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    padding-top: 130px;
    padding-bottom: 20px;
    min-height: calc(100vh - 215px);
`;
