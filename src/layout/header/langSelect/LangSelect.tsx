import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '../../../components/common/Icon.tsx';
import {S} from "./LangSelect.styles.ts"
import {FlexWrapper} from "../../../components/common/FlexWrapper.tsx";

export type LangSelectProps = {
    $fontSize?: string,
}

export const LangSelect: React.FC<LangSelectProps> = (props: LangSelectProps) => {
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

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <S.LangSelect ref={ref} $fontSize={props.$fontSize}>
            <FlexWrapper $align="center" $gap="4px" onClick={togglePopup}>
                <div>{selectedLang}</div>
                <Icon iconId="arrow" width="10px" height="7px" viewBox="0 0 10 7" />
            </FlexWrapper>

            <S.Popup $isOpen={isOpen} $fontSize={props.$fontSize as string}>
                <S.List onClick={() => handleSelect('EN')}>EN</S.List>
                <S.List onClick={() => handleSelect('RU')}>RU</S.List>
            </S.Popup>
        </S.LangSelect>
    );
};



