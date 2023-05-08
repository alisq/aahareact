import { ReactComponent as PavillionBigEn } from '../svg/pavillionBigRaster_en.svg'
import { ReactComponent as PavillionBigFr } from '../svg/pavillionBigRaster_fr.svg'
import { useEffect, useState } from 'react'

function Pavillion({lang}) {


  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

  }, []);

    return (
     
      (width < breakpoint) ? (
        <img src='/img/pavillion.jpg'/>
      ) : (
      
        (lang === 'en') ? <PavillionBigEn className="multiply" /> : <PavillionBigFr className="multiply" />
      
      
      
      )
    )
}

export default Pavillion


