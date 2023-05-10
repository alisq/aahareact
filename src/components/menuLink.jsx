function MenuLink({ page, handleClick, lang }) {
  return <li onClick={handleClick}><a>{page[lang].title}</a></li>
}

export default MenuLink