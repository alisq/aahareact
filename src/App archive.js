import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useLocation, useNavigate } from 'react-router-dom'
import headerData from './demands.json'
import pageData from './pages.json'
import DemandHeader from './components/demandHeader'

import DemandBody from './components/demandBody'
import PageBody from './components/pageBody'
import HomeFist from './components/homeFist'
import Menu from './components/menu'
import Footer from './components/footer'
import { getBrowserLang, setBrowserLang } from './services/languageServices'
import LangButton from './components/langButton'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>

      </Route>
    )
  )

  const [currentDemand, setCurrentDemand] = useState(null)

  const compRef = useRef(null)
  const demandBodyRef = useRef(null)
  const pageRefs = useRef(Array(pageData.length))

  const { hash } = useLocation()
  const navigate = useNavigate()

  const langs = ['en', 'fr']
  const browserLang = getBrowserLang()
  const browserLangIndex = langs.indexOf(browserLang)
  const [langIndex, setLangIndex] = useState(browserLangIndex !== -1 ? browserLangIndex : 0)

  const findDemandFromId = demandId => headerData.find(demand => demand.demand_id === demandId)
  const scrollToDemand = () => {
    if (demandBodyRef && demandBodyRef.current)
      demandBodyRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const showDemand = () => {
    if (!currentDemand) return null
    const matchedDemand = findDemandFromId(currentDemand)
    return <DemandBody {...matchedDemand}
      lang={matchedDemand[langs[langIndex]]}
      sectionRef={demandBodyRef} />
  }

  const gsapConfig = {
    duration: 0.2,
    ease: 'power2'
  }

  useEffect(() => {
    if (!hash) return
    const demandId = hash.slice(1)
    if (findDemandFromId(demandId)) setCurrentDemand(demandId)
  }, [hash])

  useEffect(scrollToDemand, [currentDemand, demandBodyRef])
  useLayoutEffect(() => {
    let ctx = gsap.context(
      gsap.to(
        demandBodyRef.current, { opacity: 1, ...gsapConfig }
      ), compRef)
    return () => ctx.revert()
  }, [langIndex])

  const handleLangButton = i => {
    if (langIndex === i) return
    setBrowserLang(langs[i])
    gsap.to(demandBodyRef.current, {
      opacity: 0,
      onComplete: () => setLangIndex(i),
      ...gsapConfig
    })
  }

  const handleHeaderClick = (demand_id) => {
    setCurrentDemand(demand_id)
    scrollToDemand()
    navigate(`#${demand_id}`)
  }

  return (
    <>
      <Menu navigate={navigate} pageRefs={pageRefs} />
      <HomeFist />

      <div id='lang'>
        {langs && langs.map((lang, i) =>
          <LangButton
            lang={lang}
            isActive={langIndex === i}
            handleClick={() => handleLangButton(i)}
            key={i} />)}
      </div>

      <h1>


        <div className='title-top'>{(langs[langIndex] === 'fr') ? "ARCHITECTES CONTRE L'ALIENATION AU LOGEMENT!" : "ARCHITECTS AGAINST HOUSING ALIENATION!"}</div>
        {/* <div className='title-bottom'>ARCHITECTES CONTRE L'ALIENATION AU LOGEMENT!</div> */}
      </h1>

      <section id='demands' ref={compRef}>
        <div className='manifesto'>
          TO END HOUSING ALIENATION IN
          c<span className='red'>\</span>a<span className='red'>\</span>n<span className='red'>\</span>a<span
            className='red'>\</span>d<span className='red'>\</span>a<br />
          WE DEMAND...
          {headerData.map((header, i) =>
            <DemandHeader {...header}
              navigate={navigate}
              handleClick={handleHeaderClick}
              key={i}
              lang={header[langs[langIndex]]} />
          )}
        </div>
      </section>

      {showDemand()}

      <Footer />


      {/* {pageData.map((page, i) =>
        <PageBody {...page}
          onPageRefLoad={ref => pageRefs.current[i] = ref}
          key={i} />
      )} */}

    </>
  )
}

export default App
