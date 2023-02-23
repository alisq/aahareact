import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import headerData from './demands.json'
import pageData from './pages.json'
import DemandHeader from './components/demandHeader'
import DemandBody from './components/demandBody'
import PageBody from './components/pageBody'

function App() {
  const demandRefs = useRef(Array(headerData.length))

  const { hash } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (!hash) return
    const targetDemandRef = demandRefs.current.find(ref => `#${ref.id}` === hash)
    if (targetDemandRef) targetDemandRef.scrollIntoView()
  }, [])

  return (
    <>


        <div id="menu-button">
            <div className="menu-button-square top-left"></div>
            <div className="menu-button-square top-right"></div>
            <div className="menu-button-square bottom-left"></div>
            <div className="menu-button-square bottom-right"></div>            
        </div>

{/*      GOTTA GET THE SVG WORKING   
        <div id="menu-fist">
            <?xml version="1.0" encoding="UTF-8"?><svg id="top_fist" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197 211"><path d="m97.68,211H3.42c-2.69,0-3.4-.71-3.4-3.43C.02,169.77.03,137.97,0,100.17c0-3.9,1.36-7.04,4.15-9.76,6.95-6.76,13.8-13.62,20.69-20.45,7.99-7.92,15.97-15.84,23.95-23.75,5.04-4.99,10.09-9.97,15.13-14.97,1.38-1.36,1.92-1.37,3.28,0,15.1,15.11,30.19,30.23,45.29,45.34,1.67,1.67,1.67,2.91.04,4.55-4.83,4.83-9.65,9.67-14.48,14.5-1.48,1.48-2.82,1.49-4.3.01-5.2-5.2-10.4-10.41-15.6-15.62-3.2-3.2-7.52-3.28-10.76-.08-4.6,4.53-9.13,9.12-13.69,13.69-1.02,1.02-1.23,2.13-.67,3.17.53.97,1.6,1.51,2.68,1.17.58-.18,1.14-.58,1.58-1.02,4.34-4.31,8.65-8.64,12.97-12.97,1.95-1.95,3.02-1.96,4.94-.04,5.02,5.02,10.03,10.04,15.04,15.06,3.53,3.53,7.72,3.54,11.22.04,4.89-4.88,9.79-9.74,14.67-14.62,2.83-2.83,3.32-6.48,1.29-9.56-.35-.53-.8-1-1.25-1.45-15.12-15.14-30.24-30.28-45.36-45.42-1.57-1.57-1.57-1.99.04-3.58,7.48-7.41,14.95-14.83,22.43-22.23,2.98-2.95,6.97-2.93,9.95.05,5.39,5.39,10.78,10.78,16.16,16.18,1.24,1.24,1.25,1.89.01,3.12-6.75,6.76-13.5,13.51-20.23,20.28-.44.44-.89.98-1.06,1.56-.29,1.01.03,1.95.94,2.58.9.61,1.85.61,2.76.02.41-.26.74-.64,1.08-.99,6.67-6.67,13.34-13.35,20.01-20.02,1.22-1.22,1.8-1.22,3.01,0,6.62,6.62,13.23,13.24,19.84,19.87,1.22,1.22,1.22,1.79,0,3.01-6.77,6.78-13.54,13.57-20.33,20.34-.75.75-1.35,1.56-1.05,2.69.45,1.74,2.4,2.42,3.85,1.36.33-.24.62-.55.91-.84,6.68-6.68,13.35-13.36,20.03-20.05,1.28-1.28,1.82-1.29,3.09-.01,6.59,6.59,13.18,13.19,19.76,19.79,1.28,1.28,1.28,1.81,0,3.09-9.97,9.99-19.95,19.97-29.92,29.96-.37.37-.75.75-1.06,1.17-.74,1.01-.59,2.37.29,3.19.86.8,2.28.85,3.21.09.29-.24.55-.52.81-.78,10-10.01,20-20.03,30.01-30.04,1.4-1.4,1.93-1.4,3.35.02,5.25,5.26,10.51,10.52,15.76,15.78,3.35,3.36,3.34,7.51-.02,10.88-8.83,8.84-17.65,17.68-26.49,26.51-.86.86-1.42,1.76-.9,3.02.64,1.53,2.43,2.01,3.75.99.3-.23.55-.51.82-.78,6.32-6.33,12.65-12.65,18.96-18.99.92-.92,1.89-1.5,3.22-.96.96.4,1.48,1.12,1.55,2.16.02.3,0,.6,0,.91v90.41c0,2.5-.74,3.24-3.22,3.24h-94.49Z"/></svg>            
        </div>
         */}

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
          getBodyRef={section => demandRefs.current[i] = section}
          key={i} />
      )}

      {pageData.map((page, j) =>
        <PageBody {...page}
        key={j} />
      )}
    </>
  )
}

export default App
