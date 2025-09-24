import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";
import {Projects} from "./layout/section/projects/Projects.tsx";
import {AboutMeComponent} from "./layout/section/about-me/About-me-component.tsx";
import {Contacts} from "./layout/section/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {GlobalStyles} from "./styles/GlobalStyles.tsx";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./styles/ThemeStyles.tsx";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import {ProjectsAll} from "./layout/section/projects/ProjectsAll.tsx";
import {AboutMeFull} from "./layout/section/about-me/About-me-full.tsx";
import {ContactsAll} from "./layout/section/contacts/ContactsAll.tsx";
import {items} from "./data/ItemsData.tsx";

function App() {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = () => setIsDark(!isDark);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const toggleBurger = () => setIsBurgerOpen(!isBurgerOpen);
    const closeBurger = () => setIsBurgerOpen(false);

    return (
        <div className="App">
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <GlobalStyles/>
                <Header toggleTheme={toggleTheme}
                        isDark={isDark}
                        toggleBurger={toggleBurger}
                        isBurgerOpen={isBurgerOpen}
                        closeBurger={closeBurger}
                        menuItems={items}/>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/projects'} element={<Projects/>}/>
                    <Route path={'/projects/projects-all'} element={<ProjectsAll/>}/>
                    <Route path={'/about-me'} element={<AboutMeComponent/>}/>
                    <Route path={'/about-me/about'} element={<AboutMeFull/>}/>
                    <Route path={'/contacts'} element={<Contacts/>}/>
                    <Route path={'/contacts/contacts-all'} element={<ContactsAll/>}/>
                </Routes>

                <Footer/>
            </ThemeProvider>
        </div>
    );
}

export default App
