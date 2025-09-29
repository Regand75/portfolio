import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {GlobalStyles} from "./styles/GlobalStyles.ts";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./styles/ThemeStyles.ts";
import {useState} from "react";
import {items} from "./data/ItemsData.ts";
import {ContactsPopup} from "./layout/section/main/contactsPopup/ContactsPopup.tsx";
import {Particle} from "./components/particle/Particle.tsx";
import AnimatedRoutes from "./components/animatedRoutes/AnimatedRoutes.tsx";
import {ScrollToTop} from "./components/goTop/ScrollToTop.tsx";
import {FixedBlockIcon} from "./components/fixedBlockIcon/FixedBlockIcon.tsx";

function App() {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = () => setIsDark(!isDark);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const toggleBurger = () => setIsBurgerOpen(!isBurgerOpen);
    const closeBurger = () => setIsBurgerOpen(false);
    const [isContactsPopupOpen, setIsContactsPopupOpen] = useState(false);
    const toggleContactsPopup = () => setIsContactsPopupOpen(prev => !prev);
    const closeContactsPopup = () => setIsContactsPopupOpen(false);

    return (
        <div className="App">
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <GlobalStyles/>
                <Particle />
                <FixedBlockIcon />
                <Header toggleTheme={toggleTheme}
                        isDark={isDark}
                        toggleBurger={toggleBurger}
                        isBurgerOpen={isBurgerOpen}
                        closeBurger={closeBurger}
                        menuItems={items}/>
                <ScrollToTop />
                <AnimatedRoutes toggleContactsPopup={toggleContactsPopup} />
                <ContactsPopup
                    toggleContactsPopup={toggleContactsPopup}
                    closeContactsPopup={closeContactsPopup}
                    isContactsPopupOpen={isContactsPopupOpen}
                />
                <Footer/>
            </ThemeProvider>
        </div>
    );
}

export default App
