import "server-only";

const translations: { [index: string]: any } = {
  en: () => import("./benefits.en.json").then((module) => module.default),
  fr: () => import("./benefits.fr.json").then((module) => module.default),
};

export const getTranslatedBenefits = async (locale: string) =>
  translations[locale]();
