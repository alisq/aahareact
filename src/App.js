import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import headerData from './demands.json'
import pageData from './pages.json'
import DemandHeader from './components/demandHeader'
import DemandBody from './components/demandBody'
import PageBody from './components/pageBody'
import HomeFist from './components/homeFist'
import Menu from './components/menu'
import Footer from './components/footer'
import getBrowserLang from './util/getBrowserLang'
import LanguageButton from './components/languageButton'

function App() {
  const demandRefs = useRef(Array(headerData.length))
  const pageRefs = useRef(Array(pageData.length))

  const { hash } = useLocation()
  const navigate = useNavigate()

  const [currentDemand, setCurrentDemand] = useState(null)

  const langs = ['en', 'fr']
  const browserLang = getBrowserLang()
  const browserLangIndex = langs.indexOf(browserLang)
  const [langIndex, setLangIndex] = useState(browserLangIndex !== -1 ? browserLangIndex : 0)


  useEffect(() => {
    if (!hash) return
    // when you enter a url with hash, it scrolls to that automatically
    const targetDemandBodyRef = demandRefs.current.find(demandBodyRef => demandBodyRef.current.id === hash.slice(1))
    if (targetDemandBodyRef) targetDemandBodyRef.current.scrollIntoView()
  }, [])

  const showDemand = () => {

    const matchedDemand = headerData.find(demand => demand.demand_id === currentDemand)
    //console.log(matchedDemand.demand_id)


    if (matchedDemand) return (

      <DemandBody {...matchedDemand} lang={matchedDemand[langs[langIndex]]} />
    )


    return null
  }

  return (

    <>

      <Menu navigate={navigate} pageRefs={pageRefs} />
      <HomeFist />

      <div id='lang'>
        {
          langs && langs.map((lang, i) =>
            <LanguageButton
              lang={lang}
              isActive={langIndex === i}
              handleClick={() => {
                setLangIndex(i)

              }}
              key={i} />)
        }
      </div>

      <h1>
        <div className='title-top'>ARCHITECTS AGAINST HOUSING ALIENATION!</div>
        <div className='title-bottom'>ARCHITECTES CONTRE L'ALIENATION AU LOGEMENT!</div>
      </h1>

      <section id='demands'>
        <div className='manifesto'>
          TO DECOMMODIFY HOUSING IN
          c<span className='red'>\</span>a<span className='red'>\</span>n<span className='red'>\</span>a<span
            className='red'>\</span>d<span className='red'>\</span>a<br />
          WE DEMAND...
          {headerData.map((header, i) =>
            <DemandHeader {...header}
              navigate={navigate}
              handleClick={setCurrentDemand}
              getBodyRef={() => demandRefs.current[i]}
              key={i}
              lang={header[langs[langIndex]]} />
          )}
        </div>
      </section>

      {showDemand()}

      <Footer />

      {/* {headerData.map((header, i) =>
        <DemandBody {...header}
          onDemandRefLoad={ref => demandRefs.current[i] = ref}
          key={i} />
      )} */}

      {/* {pageData.map((page, i) =>
        <PageBody {...page}
          onPageRefLoad={ref => pageRefs.current[i] = ref}
          key={i} />
      )} */}

    </>
  )
}

export default App
