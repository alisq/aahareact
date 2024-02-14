import { useState } from 'react'
import pageData from '../pages.json'
import MenuLink from './menuLink'

function Menu({ navigate, lang, contactRef }) {
  const [visibility, setVisibility] = useState(false)

  const handleContactClick = () => {
    if (contactRef.current) {
      setVisibility(false)
      setTimeout(() => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }

  // filled in data here because not in pages.json
  const contactData = {
    'en': { title: 'CONTACT' },
    'fr': { title: 'CONTACTER' }
  }

  return (
    <>
      <div id='menu-button'
        onClick={() => setVisibility(!visibility)}
        className={visibility ? 'active' : ''}>
        <div className='menu-button-square top-left'></div>
        <div className='menu-button-square top-right'></div>
        <div className='menu-button-square center'></div>
        <div className='menu-button-square bottom-left'></div>
        <div className='menu-button-square bottom-right'></div>
      </div>

      <section id='menu' className={visibility ? 'active' : ''}>
        <ul>
          <li><a href="/">
            

            {lang === "en" ? "DEMANDS" : "DEMANDES"}
            
            
            </a></li>
          {pageData.map((page, i) =>
            <MenuLink
              lang={lang}
              page={page}
              handleClick={() => {
                navigate(`page/${page.page_id}`)
                setVisibility(false)
              }}
              key={i} />
          )}
          <MenuLink
            lang={lang}
            page={contactData}
            handleClick={handleContactClick} />
        </ul>
      </section>
    </>
  )
}

export default Menu
