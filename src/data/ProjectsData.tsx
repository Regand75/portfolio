import projectImage1 from "../assets/images/project1.png"
import projectImage2 from "../assets/images/project2.png"
import projectImage3 from "../assets/images/project3.png"

export type ProjectButton = {
    label: string;
    link?: string;
    onClick?: () => void;
    $colorBorder?: string;
    $colorText?: string;
    $colorBackground?: string;
    $hoverBackground?: string;
};

export type ProjectType = {
    srcImageProject?: string;
    listSkillsProject: string;
    titleProject: string;
    descriptionProject: string;
    buttons: ProjectButton[];
};

export const fullProjects: ProjectType[] = [
    {
        srcImageProject: projectImage1,
        listSkillsProject: "HTML SCSS Python Flask",
        titleProject: "ChertNodes",
        descriptionProject: "Minecraft servers hosting",
        buttons: [
            { label: "Live <~>", link: "https://github.com/Regand75" },
            {
                label: "Cached =>",
                $colorBorder: "secondary",
                $colorText: "secondary",
                $hoverBackground: "bgTrSecondary",
            }
        ]
    },
    {
        srcImageProject: projectImage2,
        listSkillsProject: "React Express Node.js HTML SCSS Python Flask",
        titleProject: "ProtectX",
        descriptionProject: "Discord anti-crash bot",
        buttons: [
            { label: "Live <~>", link: "https://github.com/Regand75" }
        ]
    },
    {
        srcImageProject: projectImage3,
        listSkillsProject: "CSS Express Node.js",
        titleProject: "Kahoot Answers Viewer",
        descriptionProject: "Get answers to your kahoot quiz",
        buttons: [
            { label: "Live <~>", link: "https://github.com/Regand75" }
        ]
    }
];


export const smallProjects: ProjectType[] = [
    {
        listSkillsProject: "JS",
        titleProject: "Todo App",
        descriptionProject: "Simple todo list",
        buttons: [
            { label: "Live", link: "https://github.com/Regand75" }
        ]
    },
    {
        listSkillsProject: "HTML CSS",
        titleProject: "Portfolio",
        descriptionProject: "My first portfolio site",
        buttons: [
            { label: "Live", link: "https://github.com/Regand75" }
        ]
    }
];
