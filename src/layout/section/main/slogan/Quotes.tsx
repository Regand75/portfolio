import React from 'react';
import {Icon} from "../../../../components/common/icon/Icon.tsx";
import {S} from "./Slogan.styles.ts"

export type QuotesPropsType = {
    $left?: string,
    $top?: string,
    $right?: string,
    $bottom?: string,
}

export const Quotes: React.FC<QuotesPropsType> = ({$left, $top, $right, $bottom}: QuotesPropsType) => {
    return (
        <S.Quotes $left={$left} $top={$top} $right={$right} $bottom={$bottom}>
            <Icon iconId={'quotes'} width={'26px'} height={'21px'} viewBox={'0 0 26 21'}/>
        </S.Quotes>
    );
};


