import React from 'react';
import {HeaderPropsType} from "../../../../data/ItemsData.tsx";
import {FlexWrapper} from "../../../../components/common/FlexWrapper.tsx";
import {LangSelect} from "../../langSelect/LangSelect.tsx";
import {ThemeButton} from "../../themeButton/ThemeButton.tsx";
import {S} from "../HeaderMenu.styles.ts"

export const DesktopMenu: React.FC<HeaderPropsType> = (props: HeaderPropsType) => {
    return (
        <nav>
            <ul>
                <FlexWrapper $align='center' $gap='32px'>
                    {props.menuItems.map((item, index) => (
                        <S.ListItem key={index}>
                            <S.Link
                                to={item.link}
                                className={({isActive}) => isActive ? 'active' : ''}
                            >
                                <span>#</span>{item.title}
                            </S.Link>
                        </S.ListItem>
                    ))}
                    <LangSelect />
                    <ThemeButton toggleTheme={props.toggleTheme} isDark={props.isDark} />
                </FlexWrapper>
            </ul>
        </nav>
    );
};
