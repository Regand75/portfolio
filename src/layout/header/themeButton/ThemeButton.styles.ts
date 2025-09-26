import styled from "styled-components";
import {Icon} from "../../../components/common/Icon.tsx";

const ThemeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const SoonIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.secondary};
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const SunIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.secondary};
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const S = {
    ThemeButton,
    SoonIcon,
    SunIcon
}