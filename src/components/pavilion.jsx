import { ReactComponent as PavilionBigEn } from '../svg/pavilionBigRaster_en.svg'
import { ReactComponent as PavilionBigFr } from '../svg/pavilionBigRaster_fr.svg'
import { useEffect, useState } from 'react'

function Pavilion({lang}) {


  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

  }, []);

    return (
     
      (width < breakpoint) ? (
        <img src='/img/pavilion.png'/>
      ) : (
      
        (lang === 'en') ? <PavilionBigEn className="multiply" /> : <PavilionBigFr className="multiply" />
      
      
      
      )
    )
}

export default Pavilion


