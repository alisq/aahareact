import { useRef } from 'react'
import './App.css'
import headerData from './demands.json'
import DemandHeader from './components/demandHeader'
import DemandBody from './components/demandBody'

function App() {
  const demandRefs = useRef(Array(headerData.length))

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
          {headerData.map((header, i) => <DemandHeader {...header} demandRef={demandRefs[i]} key={i} />)}
        </div>
      </section>
      {headerData.map((header, i) => <DemandBody {...header} scrollToRef={demandRefs} key={i} />)}
    </>
  )
}

export default App
