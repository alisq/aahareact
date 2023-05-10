import { ReactComponent as PavilionBigEn } from '../svg/pavilionBigRaster_en.svg'
import { ReactComponent as PavilionBigFr } from '../svg/pavilionBigRaster_fr.svg'
import { useEffect, useState } from 'react'
import { enFr } from '../utils/languageUtil'

function Pavilion({ lang }) {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 800

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width < breakpoint ? <img src='/img/pavilion.png' />
    : enFr(lang, <PavilionBigEn className='multiply' />, <PavilionBigFr className='multiply' />)
}

export default Pavilion


