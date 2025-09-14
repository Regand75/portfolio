import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/ThemeStyles.tsx";

type ButtonPropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string,
    $colorBorder?: keyof typeof theme.colors,
    $colorText?: keyof typeof theme.colors,
    $colorBackground?: keyof typeof theme.colors,
}

export const Button = ({title, ...rest}: ButtonPropsType) => {
    return (
        <StyledButton {...rest}>
            {title}
        </StyledButton>
    );
};

const StyledButton = styled.button<{
    $colorBorder?: keyof typeof theme.colors,
    $$colorText?: keyof typeof theme.colors,
    $colorBackground?: keyof typeof theme.colors
}>`
    padding: 8px 16px;
    background-color: transparent;
    text-align: center;
    width: fit-content;
    font-family: 'Fira Code', sans-serif;
    font-weight: 500;
    cursor: pointer;
    color: ${({$colorText, theme}) =>
            $colorText ? theme.colors[$colorText] : theme.colors.primary};
    border: 1px solid ${({$colorBorder, theme}) =>
            $colorBorder ? theme.colors[$colorBorder] : theme.colors.tertiary};

    &:hover {
        background-color: ${({$colorBackground, theme}) =>
                $colorBackground ? theme.colors[$colorBackground] : theme.colors.bgTrTertiary};
    }
`;
