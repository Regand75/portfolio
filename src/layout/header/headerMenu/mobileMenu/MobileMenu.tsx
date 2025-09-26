import React, {useEffect} from 'react';
import {HeaderPropsType} from "../../../../data/ItemsData.tsx";
import {FlexWrapper} from "../../../../components/common/FlexWrapper.tsx";
import {BurgerButton} from "../../burgerButton/BurgerButton.tsx";
import {ThemeButton} from "../../themeButton/ThemeButton.tsx";
import {LangSelect} from "../../langSelect/LangSelect.tsx";
import {Logo} from "../../../../components/common/Logo.tsx";
import {S} from "../HeaderMenu.styles.ts"

export const MobileMenu: React.FC<HeaderPropsType> = (props: HeaderPropsType) => {
    useEffect(() => {
        if (props.isBurgerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [props.isBurgerOpen]);

    const handleLinkClick = () => {
        props.closeBurger();
    };

    return (
        <nav>
            <BurgerButton toggleBurger={props.toggleBurger} isBurgerOpen={props.isBurgerOpen}/>
            <S.MobileMenuPopup $isBurgerOpen={props.isBurgerOpen}>
                <S.PopupFlexWrapper direction={'column'} $justify='space-between'>
                    <FlexWrapper direction={'column'} $gap='20px'>
                        <Logo onClick={handleLinkClick}/>
                        <ul>
                            <FlexWrapper direction={'column'} $align='center' $gap='32px'>
                                {props.menuItems.map((item, index) => (
                                    <S.ListItemMobile key={index}>
                                        <S.Link
                                            to={item.link}
                                            className={({isActive}) => isActive ? 'active' : ''}
                                            onClick={handleLinkClick}
                                        >
                                            <span>#</span>{item.title}
                                        </S.Link>
                                    </S.ListItemMobile>
                                ))}
                                <S.ControlsWrapper direction={'column'} $align='center' $gap='20px'>
                                    <ThemeButton toggleTheme={props.toggleTheme} isDark={props.isDark}/>
                                    <LangSelect $fontSize='30px'/>
                                </S.ControlsWrapper>
                            </FlexWrapper>
                        </ul>
                    </FlexWrapper>
                    <S.IconsListFlex/>
                </S.PopupFlexWrapper>
            </S.MobileMenuPopup>
            {props.isBurgerOpen && <S.Overlay onClick={props.closeBurger}/>}
        </nav>
    );
};