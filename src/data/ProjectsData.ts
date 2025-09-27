import projectImage1 from "../assets/images/projects-images/project1.png"
import projectImage2 from "../assets/images/projects-images/project2.png"
import projectImage3 from "../assets/images/projects-images/project3.png"
import projectImage4 from "../assets/images/projects-images/project4.png"

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
    id: string,
    srcImageProject?: string;
    listSkillsProject: string;
    titleProject: string;
    descriptionProject: string;
    buttons: ProjectButton[];
};

export const fullProjects: ProjectType[] = [
    {
        id: "ChertNodes",
        srcImageProject: projectImage1 as string,
        listSkillsProject: "HTML SCSS Python Flask",
        titleProject: "ChertNodes",
        descriptionProject: "Minecraft servers hosting",
        buttons: [
            {
                label: "Live <~>",
                $colorBorder: 'tertiary',
                link: "https://github.com/Regand75",
            },
            {
                label: "Cached =>",
                $colorBorder: "secondary",
                $colorText: "secondary",
                $hoverBackground: "bgTrSecondary",
                link: "https://github.com/Regand75",
            }
        ]
    },
    {
        id: "ProtectX",
        srcImageProject: projectImage2 as string,
        listSkillsProject: "React Express Node.js HTML SCSS Python Flask",
        titleProject: "ProtectX",
        descriptionProject: "Discord anti-crash bot",
        buttons: [
            {
                label: "Live <~>",
                $colorBorder: 'tertiary',
                link: "https://github.com/Regand75"
            }
        ]
    },
    {
        id: "Kahoot",
        srcImageProject: projectImage3 as string,
        listSkillsProject: "CSS Express Node.js",
        titleProject: "Kahoot Answers Viewer",
        descriptionProject: "Get answers to your kahoot quiz",
        buttons: [
            {
                label: "Live <~>",
                $colorBorder: 'tertiary',
                link: "https://github.com/Regand75",
            }
        ]
    },
    {
        id: "Portfolio",
        srcImageProject: projectImage4 as string,
        listSkillsProject: "CSS Express Node.js",
        titleProject: "Portfolio",
        descriptionProject: "You’re using it rn",
        buttons: [
            {
                label: "Cached =>",
                $colorBorder: "secondary",
                $colorText: "secondary",
                $hoverBackground: "bgTrSecondary",
                link: "https://github.com/Regand75",
            }
        ]
    }
];

export const smallProjects: ProjectType[] = [
    {
        id: "Todo App",
        listSkillsProject: "JS",
        titleProject: "Todo App",
        descriptionProject: "Simple todo list",
        buttons: [
            {
                label: "Live <~>",
                $colorBorder: 'tertiary',
                link: "https://github.com/Regand75"
            }
        ]
    },
    {
        id: "Portfolio2",
        listSkillsProject: "HTML CSS",
        titleProject: "Portfolio2",
        descriptionProject: "My first portfolio site",
        buttons: [
            {
                label: "Live <~>",
                $colorBorder: 'tertiary',
                link: "https://github.com/Regand75"
            }
        ]
    }
];

