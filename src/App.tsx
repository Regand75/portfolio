import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";
import {Projects} from "./layout/section/projects/Projects.tsx";
import {Skills} from "./layout/section/skills/Skills.tsx";
import {AboutMe} from "./layout/section/about-me/About-me.tsx";
import {Contacts} from "./layout/section/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {GlobalStyles} from "./styles/GlobalStyles.tsx";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./styles/ThemeStyles.tsx";
import {Slogan} from "./layout/section/slogan/slogan.tsx";
import {useState} from "react";

function App() {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = () => setIsDark(!isDark);

    return (
        <div className="App">
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <GlobalStyles/>
                <Header toggleTheme={toggleTheme} isDark={isDark} />
                <Main/>
                <Slogan />
                <Projects/>
                <Skills/>
                <AboutMe/>
                <Contacts/>
                <Footer/>
            </ThemeProvider>
        </div>
    )
}

export default App
