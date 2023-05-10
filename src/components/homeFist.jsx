import { useState, useEffect } from 'react'
import { ReactComponent as FistHome } from '../svg/fist-home.svg'

function HomeFist() {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => setScrollY(window.scrollY)
  const handleClick = () => window.scrollTo(({ top: 0, behavior: 'smooth' }))

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // css transition for opacity?
  return (
    <FistHome
      id='menu-fist'
      style={{ opacity: scrollY > 100 ? '1' : '0' }}
      onClick={handleClick} />
  )
}

export default HomeFist