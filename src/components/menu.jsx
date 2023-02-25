import { useState } from 'react'

function Menu() {
  const [visibility, setVisibility] = useState(false)

  const handleClick = () => {
    console.log('CLicked')
    setVisibility(!visibility)
  }
  return (
    <>
      <div id='menu-button' onClick={handleClick}>
        <div className='menu-button-square top-left'></div>
        <div className='menu-button-square top-right'></div>
        <div className='menu-button-square bottom-left'></div>
        <div className='menu-button-square bottom-right'></div>
      </div>



      <section id='menu' style={{
        display: visibility ? 'block' : 'none',
        opacity: visibility ? '1' : '0',
        visibility: visibility ? 'visible' : 'hidden',
      }}>
        <ul>
          <li data-item='demands'><a>DEMANDS</a></li>
          <li data-item='manifesto'><a>MANIFESTO</a></li>
          <li data-item='take-action'><a>TAKE ACTION</a></li>
          <li data-item='events'><a>EVENTS</a></li>
          <li data-item='collective'><a>COLLECTIVE</a></li>
          <li data-item='contact'><a>CONTACT</a></li>
        </ul>
      </section>
    </>
  )
}

export default Menu
