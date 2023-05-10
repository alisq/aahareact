export const getBrowserLang = () => {
  const lang = (window.navigator.languages ? window.navigator.languages[0] : (
    window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage
  ))

  return lang.split('-')[0].split('_')[0]
}

export const enFr = (lang, en, fr) => lang === 'en' ? en : fr 