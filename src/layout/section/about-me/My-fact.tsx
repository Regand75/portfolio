import React from 'react';
import {FactsDataType} from "../../../data/FactsData.tsx";
import {S} from "./About-me.styles.ts"

export const MyFact: React.FC<FactsDataType> = (props: FactsDataType) => {
    return (
        <S.MyFact>
            {props.text}
        </S.MyFact>
    );
};


