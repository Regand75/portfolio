import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/common/Button.tsx";
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";
import {ProjectType} from "../../../data/ProjectsData.tsx";

export const Project = (props: ProjectType) => {
    return (
        <StyledProject>
            <ImageWrapper>
                {props.srcImageProject && props.buttons.length > 0 && (
                    <>
                        <Image src={props.srcImageProject} alt={props.titleProject}/>
                        <a
                            href={props.buttons[0].link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <Button $colorBackground='background'
                                $colorBorder={props.buttons[0].$colorBorder}
                                $hoverBackground={props.buttons[0].$colorBorder}
                                $hoverText='background'>
                            VIEW PROJECT</Button>
                        </a>
                    </>
                )}
            </ImageWrapper>
            <MeSkills>{props.listSkillsProject}</MeSkills>
            <Wrapper>
                <FlexWrapper direction={'column'} $gap='16px'>
                    <Title>{props.titleProject}</Title>
                    <Description>{props.descriptionProject}</Description>
                    <FlexWrapper $gap='16px'>
                        {props.buttons?.map((btn, index) => (
                            btn.link ? (
                                <a key={index} href={btn.link} target="_blank" rel="noopener noreferrer">
                                    <Button
                                        $colorBorder={btn.$colorBorder}
                                        $colorText={btn.$colorText}
                                        $colorBackground={btn.$colorBackground}
                                        $hoverBackground={btn.$hoverBackground}
                                    >
                                        {btn.label}
                                    </Button>
                                </a>
                            ) : (
                                <Button
                                    key={index}
                                    onClick={btn.onClick}
                                    $colorBorder={btn.$colorBorder}
                                    $colorText={btn.$colorText}
                                    $colorBackground={btn.$colorBackground}
                                    $hoverBackground={btn.$hoverBackground}
                                >
                                    {btn.label}
                                </Button>
                            )
                        ))}
                    </FlexWrapper>
                </FlexWrapper>
            </Wrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    border: 1px solid ${({theme}) => theme.colors.secondary};
    max-width: 330px;
    width: 100%;
    height: fit-content;

    @media screen and (max-width: 426px) {
        max-width: none;
        width: 100%;
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    height: auto;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        opacity: 0;
    }

    &:hover {
        ${Button} {
            opacity: 1;
        }

        &::before {
           opacity: 1;
        }
    }

    ${Button} {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }

    @media screen and (max-width: 426px) {
        ${Button} {
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const MeSkills = styled.div`
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
    padding: 8px;
    font-family: 'Fira Code', sans-serif;
    line-height: 21px;
    color: ${({theme}) => theme.colors.secondary};
`;

const Wrapper = styled.div`
    padding: 16px`;

const Title = styled.div`
    font-family: 'Fira Code', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
`;

const Description = styled.div`
    font-family: 'Fira Code', sans-serif;
    line-height: 21px;
    color: ${({theme}) => theme.colors.secondary};
`;


