import { useState } from 'react'
import pageData from '../pages.json'
import MenuLink from './menuLink'

function Menu({ navigate, pageRefs }) {
  const [visibility, setVisibility] = useState(false)

  const createHandleClick = (i, view_node) => () => {
    // gets the reference to the corresponding body
    pageRefs.current[i].current.scrollIntoView({ behavior: 'smooth' })
    navigate(`#${view_node}`)
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

          {pageData.map((page, i) =>
            <MenuLink {...page}
              navigate={navigate}
              getBodyRef={() => pageRefs.current[i]}
              handleClick={createHandleClick(i, page.view_node)}
              key={i} />
          )}

        </ul>
      </section>
    </>
  )
}

export default Menu
