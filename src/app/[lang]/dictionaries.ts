import 'server-only';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ru: () => import('./dictionaries/ru.json').then((module) => module.default),
  he: () => import('./dictionaries/he.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'ru' | 'he') => {
  if (!(locale in dictionaries)) {
    throw new Error(`Locale ${locale} not supported.`);
  }

  try {
    return await dictionaries[locale]();
  } catch (error) {
    throw new Error(`Error loading locale dictionary for ${locale}`);
  }
};
