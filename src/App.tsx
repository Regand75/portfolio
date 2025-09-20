import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";
import {Projects} from "./layout/section/projects/Projects.tsx";
import {Skills} from "./layout/section/skills/Skills.tsx";
import {AboutMeComponent} from "./layout/section/about-me/About-me-component.tsx";
import {Contacts} from "./layout/section/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {GlobalStyles} from "./styles/GlobalStyles.tsx";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./styles/ThemeStyles.tsx";
import {Slogan} from "./layout/section/slogan/Slogan.tsx";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import {ProjectsAll} from "./layout/section/projects/ProjectsAll.tsx";

function App() {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = () => setIsDark(!isDark);

    return (
        <div className="App">
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <GlobalStyles/>
                <Header toggleTheme={toggleTheme} isDark={isDark}/>

                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Main />
                                <Slogan />
                            </>
                        }
                    />
                    <Route path={'/projects'} element={<Projects/>}/>
                    <Route path={'/projects-all'} element={<ProjectsAll/>}/>
                    <Route path={'/skills'} element={<Skills/>}/>
                    <Route path={'/about'} element={<AboutMeComponent/>}/>
                    <Route path={'/contacts'} element={<Contacts/>}/>
                </Routes>

                <Footer/>
            </ThemeProvider>
        </div>
    );
}

export default App
