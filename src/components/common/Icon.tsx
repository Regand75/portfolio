import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg';
import styled from "styled-components";
import {hoverEffect} from "../../styles/Mixins.ts";

export type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    fill?: string,
    className?: string,
}

export const Icon = (props: IconPropsType) => {
    return (
            <IconSvg
                className={props.className}
                $width={props.width || "16px"}
                $height={props.height || "16px"}
                viewBox={props.viewBox || "0 0 16 16"}
                $fill={props.fill || "currentColor"}
                xmlns="http://www.w3.org/2000/svg"
            >
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
            </IconSvg>
    );
};

const IconSvg = styled.svg<{ $fill?: string, $width?: string, $height?: string }>`
    fill: ${(props) => props.$fill || props.theme.colors.primary};
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    ${hoverEffect()};
`;
