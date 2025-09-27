import styled, {css} from "styled-components";
import {FlexWrapper} from "../../../components/common/FlexWrapper.ts";
import {LangSelectProps} from "./LangSelect.tsx";
import {hoverEffect} from "../../../styles/Mixins.ts";

const LangSelect = styled.div<LangSelectProps>`
  position: relative;
  font-family: 'Fira Code', sans-serif;
  font-weight: 600;
  font-size: ${props => props.$fontSize || '16px'};
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
    
    ${FlexWrapper} {
        ${hoverEffect(true)};
    }
`;

const Popup = styled.ul<{$fontSize: string, $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) scaleY(0);
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  font-family: 'Fira Code', sans-serif;
  font-weight: 400;
  font-size: ${props => props.$fontSize || '16px'}
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 2px;
  opacity: 0;
  visibility: hidden;
  transform-origin: top center;
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${props =>
    props.$isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scaleY(1);
    `}
`;

const List = styled.li`
    cursor: pointer;
    ${hoverEffect(true)};

    &:not(:last-child) {
        padding-bottom: 8px;
    }
`;

export const S = {
    LangSelect,
    Popup,
    List,
};