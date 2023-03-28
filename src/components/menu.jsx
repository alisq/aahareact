import { useState } from 'react'
import pageData from '../pages.json'
import MenuLink from './menuLink'

function Menu({ navigate, pageRefs, lang }) {
  const [visibility, setVisibility] = useState(false)



  const createHandleClick = (i, page_id) => () => {
    // gets the reference to the corresponding body
    // pageRefs.current[i].current.scrollIntoView({ behavior: 'smooth' })
    //navigate(`#${page_id}`)
    navigate(`page/${page_id}`)
    setVisibility(false)
  }

  return (
    <>
      <div id='menu-button'
        onClick={() => setVisibility(!visibility)}
        className={visibility ? 'active' : ''}>
        <div className='menu-button-square top-left'></div>
        <div className='menu-button-square top-right'></div>
        <div className='menu-button-square bottom-left'></div>
        <div className='menu-button-square bottom-right'></div>
      </div>

      <section id='menu' className={visibility ? 'active' : ''}>
        <ul>
          <li><a href="/">DEMANDS</a></li>
          {pageData.map((page, i) =>
            <MenuLink lang={lang} page={page}
              handleClick={createHandleClick(i, page.page_id)}
              key={i} />
          )}
          <li><a href="/">CONTACT</a></li>
        </ul>
      </section>
    </>
  )
}

export default Menu
