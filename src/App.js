import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Navigate, Outlet, Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import demandData from './demands.json'
import pageData from './pages.json'
import contributorData from './contributors.json'
import orgData from './orgs.json'
import DemandHeader from './components/demandHeader'
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
  const location = useLocation()

  return (
    <Routes location={location}>
      {langs.map((lang, i) =>
        <Route
          path={lang}
          element={<Main
            currentLang={lang} />}
          key={i}>
          <Route index element={null} />
          {demandData.map((demand, i) =>
            <Route
              path={`demand/${demand.demand_id}`}
              element={<BodySection {...demand}
                Component={DemandBody}
                lang={demand[lang]} />}
              key={i}
            />)}
          {pageData.map((page, i) =>
            <Route
              path={`page/${page.view_node}`}
              element={<BodySection {...page}
                lang={lang}
                Component={PageBody} />}
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

  const handleLangSwitch = lang => {
    if (currentLang === lang) return
    setUrlPart(location, navigate, 'lang', lang)
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
        {/* <div className='title-bottom'>ARCHITECTES CONTRE L'ALIENATION AU LOGEMENT!</div> */}
      </h1>

      <section id='demands'>
        <div className={'manifesto '+currentLang}>

 
            {
              currentLang == "en" ?  <>TO END HOUSING ALIENATION IN c<span className='red'>\</span>a<span className='red'>\</span>n<span className='red'>\</span>a<span className='red'>\</span>d<span className='red'>\</span>a<br /> WE DEMAND...</> : 
              <>POUR METTRE FIN À L’ALIÉNATION DU LOGEMENT AU c<span className='red'>\</span>a<span className='red'>\</span>n<span className='red'>\</span>a<span
                className='red'>\</span>d<span className='red'>\</span>a, NOUS DEMANDONS…
    </>

 

    

            }


        


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
      <Footer lang={currentLang} />
    </>
  )
}

export default App
