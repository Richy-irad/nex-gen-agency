/**
 * This configuration file returns navigation items based on the current language of the application
 */
import "server-only";

const translations: { [index: string]: any } = {
  en: () => import("./navs.en.json").then((module) => module.default),
  fr: () => import("./navs.fr.json").then((module) => module.default),
};

export const getTranslatedNavItems = async (locale: string) =>
  translations[locale];
