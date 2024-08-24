import "server-only";

const translations: { [index: string]: any } = {
  en: () => import("./content.en.json").then((module) => module.default),
  fr: () => import("./content.fr.json").then((module) => module.default),
};

export const getTranslatedContent = async (locale: string) =>
  translations[locale]();
