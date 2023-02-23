import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import headerData from './demands.json'
import DemandHeader from './components/demandHeader'
import DemandBody from './components/demandBody'

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
    </>
  )
}

export default App
