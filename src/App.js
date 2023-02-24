import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import headerData from './demands.json'
import pageData from './pages.json'
import DemandHeader from './components/demandHeader'
import DemandBody from './components/demandBody'
import PageBody from './components/pageBody'
import {ReactComponent as FistHome} from './svg/fist-home.svg';

function App() {
  const demandRefs = useRef(Array(headerData.length))
  
  const { hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    //console.log(demandRefs.current)
    if (!hash) return
    // when you enter a url with hash, it scrolls to that automatically
    const targetDemandRef = demandRefs.current.find(ref => `#${ref.id}` === hash)
    if (targetDemandRef) targetDemandRef.scrollIntoView()
  }, []) 

  const divRef = useRef(null)
  // console.log(divRef.current)

  return (
    <>
      <div id="menu-button" ref={divRef}>
        <div className="menu-button-square top-left"></div>
        <div className="menu-button-square top-right"></div>
        <div className="menu-button-square bottom-left"></div>
        <div className="menu-button-square bottom-right"></div>
      </div>

      <FistHome id="menu-fist"/>  

      <div id="lang">
        <div className="active">EN</div>
        <div>FR</div>
        <div>IT</div>
      </div>

      <h1>
        <div className='title-top'>ARCHITECTS AGAINST HOUSING ALIENATION!</div>
        <div className='title-bottom'>ARCHITECTES CONTRE L'ALIENATION AU LOGEMENT!</div>
      </h1>

      <section id='demands'>
        <div className='manifesto'>
          TO DECOMMODIFY HOUSING IN
          C<span className='red'>\</span>A<span className='red'>\</span>N<span className='red'>\</span>A<span
            className='red'>\</span>D<span className='red'>\</span>A<br />
          WE DEMAND...
          {headerData.map((header, i) =>
            <DemandHeader {...header}
              navigate={navigate}
              getBodyRef={() => demandRefs.current[i]}
              key={i} />
          )}
        </div>
      </section>
      {headerData.map((header, i) =>  
        <DemandBody {...header}
          loadBodyRef={section => demandRefs.current[i] = section}
          key={i} />
      )}

      {pageData.map((page, i) =>
        <PageBody {...page}
          key={i} />
      )}
    </>
  )
}

export default App
