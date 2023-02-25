function MenuLink({ title, handleClick }) {
  return <li onClick={handleClick}><a>{title}</a></li>
}

export default MenuLink