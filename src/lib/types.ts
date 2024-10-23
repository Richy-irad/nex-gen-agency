export type LangParams = {
  lang: string;
};

export type DynamicParams = {
  slug: string;
  lang: string;
};

export type NavbarProps = {
  navItems: {
    name: string;
    href: string;
  }[];
  currentLang: string;
};

export type ProjectImageType = {
  key: string;
  url: string;
};

export type ProjectType = {
  id: string;
  name: string;
  slug: string;
  titles: {
    lang: string;
    value: string;
  }[];
  projectType: string;
  projectCategory: string;
  coverImage: string;
  projectDate: Date;
  descriptions: {
    lang: string;
    value: string;
  }[];
  projectImages: ProjectImageType[];
  projectVideo: string;
};

export type CategoryType = {
  id: string;
  category: string;
};

export type ProjectsFilterHandler = (filter: string) => void;
