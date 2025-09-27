export type MenuItemType = {
    title: string;
    link: string;
};

export const items = [
    { title: 'home', link: '/' },
    { title: 'projects', link: '/projects' },
    { title: 'about', link: '/about-me' },
    { title: 'contacts', link: '/contacts' }
];

export type HeaderPropsType = {
    toggleTheme: () => void,
    toggleBurger: () => void,
    closeBurger: () => void,
    isDark: boolean,
    isBurgerOpen: boolean,
    menuItems: MenuItemType[];
}