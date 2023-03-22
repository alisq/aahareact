const localStorageKey = 'language'
export const getBrowserLang = () => {
  let lang = localStorage.getItem(localStorageKey)
  lang = lang || (window.navigator.languages ? window.navigator.languages[0] : (
    window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage
  ))

  return lang.split('-')[0].split('_')[0]
}

export const setBrowserLang = newLang => {
  localStorage.setItem(localStorageKey, newLang)
}