import './App.css'
import { useEffect, useRef } from 'react'
import { Navigate, Outlet, Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import demandData from './demands.json'
import pageData from './pages.json'
import DemandHeader from './components/demandHeader'
import DemandBody from './components/demandBody'
import PageBody from './components/pageBody'
import HomeFist from './components/homeFist'
import Menu from './components/menu'
import Footer from './components/footer'
import { getBrowserLang } from './utils/languageUtil'
import LangButton from './components/langButton'
import { getUrlParts, setUrlPart } from './utils/urlUtil'

const langs = ['en', 'fr']
let currentLang = "";
function App() {
  const location = useLocation()
  const sectionRef = useRef(null)
  const urlPartsRef = useRef(getUrlParts(location))

  const browserLang = getBrowserLang()
  const fallbackLang = langs.includes(browserLang) ? browserLang : langs[0]

  useEffect(() => {
    const urlParts = getUrlParts(location)
    if (sectionRef.current) {
      if (urlPartsRef.current && urlParts.lang === urlPartsRef.current.lang)
        setTimeout(() => {
          sectionRef.current.scrollIntoView({ behavior: 'smooth' })
        }, 50)
    }
    urlPartsRef.current = { ...urlParts }
  }, [location, sectionRef])

  return (
    <Routes location={location}>
      {langs.map((lang, i) =>
        <Route
          path={lang}
          element={<Main currentLang={lang} />}
          key={i}>
          <Route index element={null} />
          {demandData.map((demand, i) =>
            <Route
              path={`demand/${demand.demand_id}`}
              element={<DemandBody {...demand}
                ref={sectionRef}
                content={demand[lang]} />}
              key={i} />)}
          {pageData.map((page, i) =>
            <Route
              path={`page/${page.page_id}`}
              element={<PageBody {...page}
                ref={sectionRef}
                title={page[lang].title}
                body={page[lang].body}
                lang={lang} />}
              key={i} />)}
        </Route>
      )}
      <Route path='*' element={<Navigate replace to={fallbackLang} />} />
    </Routes>
  )
}

function Main({ currentLang }) {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const scrolledToTop = () => {
      
      if (window.scrollY === 0) navigate(`/${currentLang}`)
    }
    window.addEventListener('scroll', scrolledToTop)
    return () => window.removeEventListener('scroll', scrolledToTop)
  }, [])

  const handleLangSwitch = lang => {
    if (currentLang === lang) return
    setUrlPart(location, navigate, 'lang', lang)
  }

  const handleHeaderClick = header => {
    navigate(`demand/${header.demand_id}`, { replace: header.demand_id === getUrlParts(location).content })
  }

  return (
    <>
      <Menu navigate={navigate} lang={currentLang} />
      <HomeFist />

      <div id='lang'>
        {langs.map((lang, i) =>
          <LangButton
            lang={lang}
            isActive={lang === currentLang}
            handleClick={() => handleLangSwitch(lang)}
            key={i} />)}
      </div>

      <h1>
        <div className='title-top'>ARCHITECTS AGAINST HOUSING ALIENATION!</div>
        <div className='title-bottom'><a href="https://docs.google.com/forms/d/1A4sRDWE8gjoyg1w0XlH9CImhx4BbAv9yCo67JPOkVkc/viewform?edit_requested=true#responses" target="blank">
          
          {currentLang === 'en' ? (
            "CLICK HERE TO JOIN THE CAMPAIGN"
          ) : (
            "CLIQUEZ ICI POUR REJOINDRE LA CAMPAGNE"
          )}
          
          
          </a></div>
      </h1>

      <section id='demands'>
        <div className={'manifesto ' + currentLang}>

            <span className="intro">

          {
            currentLang === 'en' ? <>TO END HOUSING ALIENATION IN c<span className='red'>\</span>a<span className='red'>\</span>n<span className='red'>\</span>a<span className='red'>\</span>d<span className='red'>\</span>a<br /> WE DEMAND...</> :
              <>POUR METTRE FIN À L’ALIÉNATION DU LOGEMENT AU c<span className='red'>\</span>a<span className='red'>\</span>n<span className='red'>\</span>a<span
                className='red'>\</span>d<span className='red'>\</span>a, NOUS DEMANDONS…
              </>
          }
</span>
          {demandData.map((header, i) =>
            <DemandHeader {...header}
              handleClick={() => { handleHeaderClick(header) }}
              key={i}
              lang={header[currentLang]} />
          )}
        </div>
      </section>

      <Outlet />
      <Footer lang={currentLang} />
    </>
  )
}

export default App
