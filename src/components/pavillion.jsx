import { ReactComponent as PavillionBig } from '../svg/pavillionBig.svg'
import { ReactComponent as PavillionSmall } from '../svg/pavillionSmall.svg'
import { useEffect, useState } from 'react'

function Pavillion() {


  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

  }, []);

    return (
     
      width < breakpoint ? <PavillionSmall /> : <PavillionBig />
    )
}

export default Pavillion


