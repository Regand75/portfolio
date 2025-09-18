import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/common/Container.tsx";
import {SectionTitle} from "../../../components/common/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {Project} from "./Project.tsx";
import projectImage1 from "../../../assets/images/project1.png"
import projectImage2 from "../../../assets/images/project2.png"
import projectImage3 from "../../../assets/images/project3.png"
import {Link} from "react-router-dom";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <FlexWrapper align={'start'} justify={'space-between'}>
                    <SectionTitle title={'projects'} width={'511px'} left={'170px'} mb={'48px'}/>
                    <LinkWrapper to={'/slogan'}>View all {'~~>'}</LinkWrapper>
                </FlexWrapper>
                <FlexWrapper gap={'16px'}>

                    <Project
                        srcImageProject={projectImage1}
                        listSkillsProject="HTML SCSS Python Flask"
                        titleProject="ChertNodes"
                        descriptionProject="Minecraft servers hosting"
                        buttons={[
                            { label: "Live <~>", link: "https://github.com/Regand75"},
                            { label: "Cached >=", $colorBorder: "secondary", $colorText: "secondary", $hoverBackground: "bgTrSecondary" },
                        ]}
                    />

                    <Project
                        srcImageProject={projectImage2}
                        listSkillsProject="React Express Node.js HTML SCSS Python Flask"
                        titleProject="ProtectX"
                        descriptionProject="Discord anti-crash bot"
                        buttons={[
                            { label: "Live <~>"},
                        ]}
                    />

                    <Project
                        srcImageProject={projectImage3}
                        listSkillsProject="CSS Express Node.js'}*"
                        titleProject="Kahoot Answers Viewer"
                        descriptionProject="Get answers to your kahoot quiz"
                        buttons={[
                            { label: "Live <~>"},
                        ]}
                    />
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
