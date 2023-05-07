import { ReactComponent as PavillionBigEn } from '../svg/pavillionBig_en.svg'
import { ReactComponent as PavillionBigFr } from '../svg/pavillionBig_fr.svg'
import { ReactComponent as PavillionSmall } from '../svg/pavillionSmall.svg'
import { useEffect, useState } from 'react'

function Pavillion({lang}) {


  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

  }, []);

    return (
     
      (width < breakpoint) ? <PavillionSmall /> : (
      
        (lang === 'en') ? <PavillionBigEn /> : <PavillionBigFr />
      
      
      
      )
    )
}

export default Pavillion


