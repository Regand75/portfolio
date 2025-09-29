import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {Main} from "../../../layout/section/main/Main.tsx";
import {Projects} from "../../../layout/section/projects/Projects.tsx";
import {ProjectsAll} from "../../../layout/section/projects/ProjectsAll.tsx";
import {AboutMeComponent} from "../../../layout/section/about-me/About-me-component.tsx";
import {AboutMeFull} from "../../../layout/section/about-me/About-me-full.tsx";
import {Contacts} from "../../../layout/section/contacts/Contacts.tsx";
import {ContactsAll} from "../../../layout/section/contacts/ContactsAll.tsx";

type AnimatedRoutesProps = {
    toggleContactsPopup: () => void;
};

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

// Обёртка для каждой страницы
function PageWrapper({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            style={{ height: "100%" }}
        >
            {children}
        </motion.div>
    );
}

export default function AnimatedRoutes({ toggleContactsPopup }: AnimatedRoutesProps) {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Main toggleContactsPopup={toggleContactsPopup} /></PageWrapper>} />
                <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
                <Route path="/projects/projects-all" element={<PageWrapper><ProjectsAll /></PageWrapper>} />
                <Route path="/about-me" element={<PageWrapper><AboutMeComponent /></PageWrapper>} />
                <Route path="/about-me/about" element={<PageWrapper><AboutMeFull /></PageWrapper>} />
                <Route path="/contacts" element={<PageWrapper><Contacts /></PageWrapper>} />
                <Route path="/contacts/contacts-all" element={<PageWrapper><ContactsAll /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
}

