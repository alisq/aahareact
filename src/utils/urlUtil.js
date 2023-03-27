const urlPartIndex = [null, 'lang', 'category', 'content']
const delimiter = '/'
export const getUrlParts = location => {
  const [, lang, category, content] = location.pathname.split('/')
} 