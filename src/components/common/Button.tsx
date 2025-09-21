import styled from "styled-components";

type ButtonPropsType = {
    $colorBorder?: string,
    $colorText?: string,
    $colorBackground?: string,
    $hoverBackground?: string,
    $hoverText?: string,
}

export const Button = styled.button<ButtonPropsType>`
    padding: 8px 16px;
    background-color: ${({ $colorBackground, theme }) =>
            $colorBackground ? theme.colors[$colorBackground] : "transparent"};
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
        background-color: ${({ $hoverBackground, theme }) =>
                $hoverBackground
                        ? theme.colors[$hoverBackground]
                        : theme.colors.bgTrTertiary};
        color: ${({ $hoverText, $colorText, theme }) =>
                $hoverText
                        ? theme.colors[$hoverText]
                        : $colorText
                                ? theme.colors[$colorText]
                                : theme.colors.primary};
    }
`;
