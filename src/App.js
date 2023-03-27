import './App.css'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import demandData from './demands.json'
import pageData from './pages.json'
import DemandHeader from './components/demandHeader'
// import { AnimatePresence } from "framer-motion"
import DemandBody from './components/demandBody'
import PageBody from './components/pageBody'
import HomeFist from './components/homeFist'
import Menu from './components/menu'
import Footer from './components/footer'
import { getBrowserLang } from './utils/languageUtil'
import LangButton from './components/langButton'
import { setUrlPart } from './utils/urlUtil'
import BodySection from './components/bodySection'

const langs = ['en', 'fr']

function App() {
  const browserLang = getBrowserLang()
  const fallbackLang = langs.includes(browserLang) ? browserLang : langs[0]

  return (
    <Routes>
      {langs.map((lang, i) =>
        <Route
          path={lang}
          element={<Main currentLang={lang} />}
          key={i}>
          <Route index element={null} />
          {demandData.map((demand, i) =>
            <Route
              path={`demand/${demand.demand_id}`}
              element={<BodySection {...demand} Component={DemandBody} lang={demand.en} />}
              key={i}
            />)}
          {pageData.map((page, i) =>
            <Route
              path={`page/${page.view_node}`}
              element={<BodySection {...page} Component={PageBody} />}
              key={i}
            />)}
        </Route>
      )}
      <Route path='*' element={<Navigate to={fallbackLang} />} />
    </Routes>
  )
}

function Main({ currentLang }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLangButton = lang => {
    console.log(location.pathname.split('/'))
    setUrlPart(location, navigate, 'lang', lang)
  }

  return (
    <>
      <Menu navigate={navigate} />
      <HomeFist />

      <div id='lang'>
        {langs.map((lang, i) =>
          <LangButton
            lang={lang}
            isActive={lang === currentLang}
            handleClick={() => handleLangButton(lang)}
            key={i} />)}
      </div>

      <h1>


        <div className='title-top'>{(currentLang === 'fr') ? "ARCHITECTES CONTRE L'ALIENATION AU LOGEMENT!" : "ARCHITECTS AGAINST HOUSING ALIENATION!"}</div>
        {/* <div className='title-bottom'>ARCHITECTES CONTRE L'ALIENATION AU LOGEMENT!</div> */}
      </h1>

      <section id='demands'>
        <div className='manifesto'>
          TO END HOUSING ALIENATION IN
          c<span className='red'>\</span>a<span className='red'>\</span>n<span className='red'>\</span>a<span
            className='red'>\</span>d<span className='red'>\</span>a<br />
          WE DEMAND...
          {demandData.map((header, i) =>
            <DemandHeader {...header}
              navigate={navigate}
              handleClick={() => { navigate(`demand/${header.demand_id}`) }}
              key={i}
              lang={header[currentLang]} />
          )}
        </div>
      </section>

      <Outlet />
      <Footer />
    </>
  )
}

export default App
