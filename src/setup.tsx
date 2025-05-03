import { IntlVariations, setupFbtee } from 'fbtee';
import getLocale, {
  getTranslationsObject,
  setClientLocale,
} from './i18n/getLocale.tsx';

let ja_JP: any;
try {
  ja_JP = require('./i18n/translations/ja_JP.json');
} catch (e) {
  console.log('Failed to load ja_JP translations', e);
}

setupFbtee({
  hooks: {
    getViewerContext: () => ({
      GENDER: IntlVariations.GENDER_UNKNOWN,
      locale: getLocale(),
    }),
  },
  translations: getTranslationsObject(),
});

setClientLocale('ja_JP', async (locale) => {
  if (locale === 'ja_JP' && ja_JP?.ja_JP) {
    return ja_JP?.ja_JP;
  }
  return {};
});
