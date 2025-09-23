import React, {useEffect, useRef, useState} from 'react';
import styled, {css} from "styled-components";
import {FlexWrapper} from "../../components/common/FlexWrapper.tsx";
import {Icon} from "../../components/icon/Icon.tsx";

type LangSelectPropsType = {
    $fontSize?: string,
} & {$isOpen: boolean}

export const LangSelect = (props: LangSelectPropsType) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedLang, setSelectedLang] = useState<string>('EN');
    const ref = useRef<HTMLDivElement | null>(null);
    const togglePopup = () => setIsOpen(prev => !prev);
    const handleSelect = (lang: string) => {
        setSelectedLang(lang);
        setIsOpen(false);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
            <StyledLangSelect ref={ref} $fontSize={props.$fontSize} $isOpen={isOpen}>
                <LangFlexWrapper $align='center' $gap='4px' onClick={togglePopup}>
                    <div>{selectedLang}</div>
                    <Icon iconId={'arrow'} width='10px' height='7px' viewBox='0 0 10 7'/>
                </LangFlexWrapper>
                    <LangPopup $fontSize={props.$fontSize} $isOpen={isOpen}>
                        <List onClick={() => handleSelect('EN')}>EN</List>
                        <List onClick={() => handleSelect('RU')}>RU</List>
                    </LangPopup>
            </StyledLangSelect>
    );
};

const StyledLangSelect = styled.div<LangSelectPropsType & { $isOpen: boolean }>`
    position: relative;
    font-family: 'Fira Code', sans-serif;
    font-weight: 600;
    font-size: ${props => props.$fontSize || '16px'};
    color: ${({theme}) => theme.colors.secondary};
    cursor: pointer;
`;

const LangFlexWrapper = styled(FlexWrapper)`
    transition: filter 0.3s ease, fill 0.3s ease;

    &:hover {
        filter: drop-shadow(0 0 6px ${(props) => props.theme.colors.secondary});
    }
`;

const LangPopup = styled.ul<LangSelectPropsType>`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px;
    border: 1px solid ${({theme}) => theme.colors.secondary};
    font-family: 'Fira Code', sans-serif;
    font-weight: 400;
    font-size: ${props => props.$fontSize || '16px'};
    color: ${({theme}) => theme.colors.secondary};
    border-radius: 2px;
    opacity: 0;
    visibility: hidden;
    transform-origin: top center;
    transition: opacity 0.3s ease, transform 0.3s ease;

    ${props => props.$isOpen && css`
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) scaleY(1);
    `}
`;

const List = styled.li`
    cursor: pointer;
    transition: filter 0.3s ease, fill 0.3s ease;

    &:hover {
        filter: drop-shadow(0 0 6px ${(props) => props.theme.colors.secondary});
    }
    
    &:not(:last-child) {
        padding-bottom: 8px;
    }
`;