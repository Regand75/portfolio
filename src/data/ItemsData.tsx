export type MenuItemType = {
    title: string;
    link: string;
};

export const items = [
    { title: 'home', link: '/' },
    { title: 'projects', link: '/projects' },
    { title: 'skills', link: '/skills' },
    { title: 'about', link: '/about-me' },
    { title: 'contacts', link: '/contacts' }
];

export type HeaderProps = {
    toggleTheme: () => void,
    toggleBurger: () => void,
    closeBurger: () => void,
    isDark: boolean,
    isBurgerOpen: boolean,
    menuItems: MenuItemType[];
}