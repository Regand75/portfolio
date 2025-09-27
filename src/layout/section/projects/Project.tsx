import React from 'react';
import {Button} from "../../../components/common/Button.ts";
import {FlexWrapper} from "../../../components/common/FlexWrapper.ts";
import {ProjectType} from "../../../data/ProjectsData.ts";
import {S} from "./Projects.styles.ts"

export const Project = (props: ProjectType) => {
    return (
        <S.Project>
            <S.ImageWrapper>
                {props.srcImageProject && props.buttons.length > 0 && (
                    <>
                        <S.Image src={props.srcImageProject} alt={props.titleProject}/>
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
            </S.ImageWrapper>
            <S.MeSkills>{props.listSkillsProject}</S.MeSkills>
            <S.Wrapper>
                <FlexWrapper direction={'column'} $gap='16px'>
                    <S.Title>{props.titleProject}</S.Title>
                    <S.Description>{props.descriptionProject}</S.Description>
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
            </S.Wrapper>
        </S.Project>
    );
};




