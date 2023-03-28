const delimiter = '/'
export const getUrlParts = location => {
  const [, lang, category, content] = location.pathname.split(delimiter)
  return { lang, category, content }
}

export const partsToUrl = ({ lang, category, content }) => `/${lang}${category && content ?
  `/${category}/${content}` : ''
  }`

export const setUrlPart = (location, navigate, type, value) => {
  const urlParts = getUrlParts(location)
  if (type === 'lang') urlParts.lang = value
  if (type === 'content') urlParts.content = value
  const url = partsToUrl(urlParts)
  navigate(url)
  return url
}
