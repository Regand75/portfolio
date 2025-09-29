import React from 'react';
import {Icon} from "../../../components/icon/Icon.tsx";
import {S} from "./BurgerButton.styles.ts"

type BurgerButtonPropsType = {
    toggleBurger: () => void,
    isBurgerOpen: boolean,
};

export const BurgerButton: React.FC<BurgerButtonPropsType> = ({toggleBurger, isBurgerOpen}) => {
    return (
        <S.BurgerButton onClick={toggleBurger} $isBurgerOpen={isBurgerOpen}>
            {isBurgerOpen ? (
                <Icon iconId={'close'} width={'24px'} height={'24px'} viewBox={'0 0 24 24'}/>
            ) : (
                <Icon iconId={'menu'} width={'24px'} height={'24px'} viewBox={'0 0 24 24'}/>
            )}
        </S.BurgerButton>
    );
};
