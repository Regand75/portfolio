import React from 'react';
import {Quotes} from "./Quotes.tsx";
import {S} from "./Slogan.styles.ts"

export const Slogan: React.FC = () => {
    return (
        <S.Slogan>
            <S.Text>
                <Quotes $top='-14px' $left='19px'/>
                With great power comes great electricity bill
                <Quotes $bottom='-16px' $right='19px'/>
            </S.Text>
            <S.Author>- Dr. Who</S.Author>
        </S.Slogan>
    );
};


