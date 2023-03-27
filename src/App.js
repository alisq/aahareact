import './App.css'
import { Route, Routes, Outlet } from 'react-router-dom'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useLocation, useNavigate } from 'react-router-dom'
import demandData from './demands.json'
import pageData from './pages.json'
import DemandHeader from './components/demandHeader'
import { AnimatePresence } from "framer-motion"
import DemandBody from './components/demandBody'
import PageBody from './components/pageBody'
import HomeFist from './components/homeFist'
import Menu from './components/menu'
import Footer from './components/footer'
import { getBrowserLang, setBrowserLang } from './services/languageServices'
import LangButton from './components/langButton'

function App() {
  const location = useLocation()
  const compRef = useRef(null)
  const navigate = useNavigate()

  const langs = ['en', 'fr']
  const browserLang = getBrowserLang()
  const browserLangIndex = langs.indexOf(browserLang)
  const [langIndex, setLangIndex] = useState(browserLangIndex !== -1 ? browserLangIndex : 0)

  const handleLangButton = i => {
    // if (langIndex === i) return
    // setBrowserLang(langs[i])
    // gsap.to(demandBodyRef.current, {
    //   opacity: 0,
    //   onComplete: () => setLangIndex(i),
    //   ...gsapConfig
    // })
  }

  // const handleHeaderClick = (demand_id) => {
  //   setCurrentDemand(demand_id)
  //   scrollToDemand()
  //   navigate(`#${demand_id}`)
  // }

  return (
    <>
      <Menu navigate={navigate} />
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
          {demandData.map((header, i) =>
            <DemandHeader {...header}
              navigate={navigate}
              handleClick={() => { navigate(`/demand/${header.demand_id}`) }}
              key={i}
              lang={header[langs[langIndex]]} />
          )}
        </div>
      </section>

      <Routes location={location} key={location.pathname}>
        <Route index element={null} />
        {demandData.map((demand, i) =>
          <Route
            path={`demand/${demand.demand_id}`}
            element={<DemandBody {...demand} lang={demand.en} />}
            key={i}
          />)}
        {pageData.map((page, i) =>
          <Route
            path={`page/${page.view_node}`}
            element={<PageBody {...page} />}
            key={i}
          />)}
        {/* <Route path='*' element={null} /> */}
      </Routes >
      <Footer />
    </>
  )
}

export default App
