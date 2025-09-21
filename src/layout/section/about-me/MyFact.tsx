import React from 'react';
import styled from "styled-components";
import {FactsDataType} from "../../../data/FactsData.tsx";

export const MyFact = (props: FactsDataType) => {
    return (
        <StyledMyFact>
            {props.text}
        </StyledMyFact>
    );
};

const StyledMyFact = styled.div`
    padding: 8px;
    border: 1px solid ${({theme}) => theme.colors.secondary};
`;
