const delimiter = '/'
export const getUrlParts = location => {
  const [, lang, cateogry, content] = location.pathname.split(delimiter)
  return { lang, cateogry, content }
}

export const partsToUrl = ({ lang, cateogry, content }) => `/${lang}/${cateogry}/${content}`

export const setUrlParts = (navigate, type, value) => {
  const urlParts = getUrlParts()
  if (type === 'lang') urlParts.lang = value
  if (type === 'content') urlParts.content = value
  const url = partsToUrl(urlParts)
  navigate(url)
  return url
}
