import React from 'react';
import {S} from "./Header.styles.ts"
import {HeaderPropsType} from "../../data/ItemsData.ts";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Logo} from "../../components/logo/Logo.tsx";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";

export const Header: React.FC<HeaderPropsType> = (props: HeaderPropsType) => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 650;
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (
        <S.Header>
            <Container>
                <FlexWrapper $align='center' $justify='space-between' $gap='32px'>
                    <Logo/>
                    {width > breakpoint && (
                        <FlexWrapper $align='center' $gap='32px'>
                            <DesktopMenu {...props}/>
                        </FlexWrapper>
                    )}
                </FlexWrapper>
                {width <= breakpoint && (
                    <MobileMenu {...props}/>
                )}
            </Container>
        </S.Header>
    );
};






