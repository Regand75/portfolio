import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg';
import styled from "styled-components";

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

export const Icon = (props: IconPropsType) => {
    return (
        <StyledIcon>
            <svg width={props.width || "16"} height={props.height || "16"} viewBox={props.viewBox || "0 0 16 17"}
                 fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
            </svg>
            <span>Andrey</span>
        </StyledIcon>
    );
};

const StyledIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    span {
        font-family: 'Fira Code', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: ${({theme}) => theme.colors.primary};
    }
`
