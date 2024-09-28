export type LangParams = {
  lang: string;
};

export type NavbarProps = {
  navItems: {
    name: string;
    href: string;
  }[];
  currentLang: string;
};
