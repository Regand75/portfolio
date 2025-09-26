import React from 'react';
import {S} from "./ThemeButton.styles.ts";

type ThemeButtonPropsType = {
    toggleTheme: () => void;
    isDark: boolean;
};

export const ThemeButton: React.FC<ThemeButtonPropsType> = ({ toggleTheme, isDark }) => {
    return (
        <S.ThemeButton onClick={toggleTheme}>
            {isDark ? (
                <S.SoonIcon iconId={'moon'} width={'23px'} height={'23px'} viewBox={'0 0 23 23'}/>
            ) : (
                <S.SunIcon iconId={'sun'} width={'23px'} height={'23px'} viewBox={'0 0 23 23'}/>
            )}
        </S.ThemeButton>
    );
};

